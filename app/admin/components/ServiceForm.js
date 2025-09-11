"use client";
import { useState, useRef, useEffect } from "react";
import { addService, uploadImage, updateService } from "../../services/serviceapi";

export default function ServiceForm({ existing, onAdded, onUpdated, onCancel }) {
  // Start with 1 blank offer
  const initialOffers = [
    { id: "1", durationValue: "", durationUnit: "Minutes", oldPrice: "", newPrice: "" },
  ];

  // Updated category options with all seater types
  const categoryOptions = [
    "Polaris dune buggy (2024 M)",
    "Polaris turbo dune buggy (2024 M)",
    "One Seater Buggy Tour",
    "Two Seater Buggy Tour",
    "Four Seater Buggy Tour",
    "Two Seater Can-Am Buggy Tour",
    "Four Seater Can-Am Buggy Tour",
    "Quad Bike Tours"
  ];

  // Seater options
  const seaterOptions = [
    "1 Seater",
    "2 Seater",
    "4 Seater"
  ];

  // State setup
  const [title, setTitle] = useState(existing?.title || "");
  const [description, setDescription] = useState(existing?.description || "");
  const [discount, setDiscount] = useState(() => {
    if (existing?.discount) {
      return existing.discount.replace("% Off", "").trim();
    }
    return "";
  });
  const [driverAge, setDriverAge] = useState(existing?.driverAge || "");
  const [category, setCategory] = useState(existing?.category || "");
  const [seater, setSeater] = useState(existing?.seater || "");
  const [offers, setOffers] = useState(() => {
    if (existing?.offers) {
      return existing.offers.map((offer) => {
        // Try to split duration into value + unit
        let durationValue = "";
        let durationUnit = "Minutes";
        if (offer.duration) {
          const parts = offer.duration.split(" ");
          if (parts.length === 2) {
            durationValue = parts[0];
            durationUnit = parts[1];
          }
        }
        return {
          ...offer,
          durationValue,
          durationUnit,
          oldPrice: offer.oldPrice ? offer.oldPrice.replace(/[^\d.]/g, "") : "",
          newPrice: offer.newPrice ? offer.newPrice.replace(/[^\d.]/g, "") : "",
        };
      });
    }
    return initialOffers;
  });
  const [currency, setCurrency] = useState("AED");

  const idRef = useRef((existing?.offers?.length || initialOffers.length) + 1);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(existing?.imageUrl || null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Auto-update newPrice when discount changes
  useEffect(() => {
    if (discount && !isNaN(parseFloat(discount))) {
      const discountPercent = parseFloat(discount) / 100;
      setOffers((prevOffers) =>
        prevOffers.map((offer) => ({
          ...offer,
          newPrice:
            offer.oldPrice && !isNaN(parseFloat(offer.oldPrice))
              ? Math.round(parseFloat(offer.oldPrice) * (1 - discountPercent)).toString()
              : offer.newPrice,
        }))
      );
    }
  }, [discount]);

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!category.trim()) newErrors.category = "Category is required";
    if (discount && isNaN(parseFloat(discount))) newErrors.discount = "Discount must be a number";

    offers.forEach((offer, index) => {
      if (!offer.durationValue.trim()) {
        newErrors[`offer-${index}-duration`] = "Duration is required";
      }
      if (!offer.oldPrice.trim() || isNaN(parseFloat(offer.oldPrice))) {
        newErrors[`offer-${index}-oldPrice`] = "Valid price is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type.startsWith("image/")) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setErrors({ ...errors, file: null });
    } else {
      setErrors({ ...errors, file: "Please select a valid image file" });
    }
  };

  const handleAddOffer = () => {
    idRef.current += 1;
    setOffers((prev) => [
      ...prev,
      { id: String(idRef.current), durationValue: "", durationUnit: "Minutes", oldPrice: "", newPrice: "" },
    ]);
  };

  const updateOffer = (id, field, value) => {
    setOffers((prev) =>
      prev.map((o) => {
        if (o.id === id) {
          const updated = { ...o, [field]: value };
          if (field === "oldPrice" && value && !isNaN(parseFloat(value)) && discount) {
            const discountPercent = parseFloat(discount) / 100;
            updated.newPrice = Math.round(parseFloat(value) * (1 - discountPercent)).toString();
          }
          return updated;
        }
        return o;
      })
    );
  };

  const handleRemoveOffer = (id) => {
    if (offers.length > 1) {
      setOffers((prev) => prev.filter((o) => o.id !== id));
    } else {
      alert("At least one offer is required");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      let imageUrl = existing?.imageUrl || "";
      if (file) {
        imageUrl = await uploadImage(file);
      }

      const formattedOffers = offers.map((offer) => ({
        ...offer,
        duration: `${offer.durationValue} ${offer.durationUnit}`,
        oldPrice: `${offer.oldPrice} ${currency}`,
        newPrice: `${offer.newPrice} ${currency}`,
      }));

      const serviceData = {
        title,
        description,
        category,
        seater,
        discount: discount ? `${discount}% Off` : "",
        driverAge,
        offers: formattedOffers,
        imageUrl,
      };

      if (existing) {
        await updateService(existing.id, serviceData);
        alert("Service updated successfully!");
        if (onUpdated) onUpdated();
      } else {
        await addService(serviceData);
        alert("Service added successfully!");
        if (onAdded) onAdded();
        // Reset form after adding
        setTitle("");
        setDescription("");
        setDiscount("");
        setDriverAge("");
        setCategory("");
        setSeater("");
        setOffers(initialOffers);
        idRef.current = initialOffers.length + 1;
        setFile(null);
        setPreview(null);
      }

      setErrors({});
    } catch (err) {
      console.error(err);
      alert(`Error ${existing ? "updating" : "adding"} service!`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <h2 className="text-xl sm:text-2xl font-bold">
              {existing ? "Edit Service" : "Add New Service"}
            </h2>
            <p className="text-blue-100 mt-1 text-sm sm:text-base">
              Create a premium service offering for your customers
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
            {/* Service Title */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Service Title
              </label>
              <input
                type="text"
                placeholder="e.g., Four Seater Buggy Tour"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                placeholder="Describe your service in detail..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category, Seater & Age */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select category</option>
                  {categoryOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Seater
                </label>
                <select
                  value={seater}
                  onChange={(e) => setSeater(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select seater</option>
                  {seaterOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Driver Age
                </label>
                <input
                  type="text"
                  placeholder="e.g., 16+"
                  value={driverAge}
                  onChange={(e) => setDriverAge(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Discount & Currency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Discount (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g., 40"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="AED">AED</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="SAR">SAR</option>
                </select>
              </div>
            </div>

            {/* Offers */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Pricing Offers
                </h3>
                <button
                  type="button"
                  onClick={handleAddOffer}
                  disabled={loading}
                  className="px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg disabled:opacity-50"
                >
                  + Add Offer
                </button>
              </div>
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="mb-4 p-4 border rounded-lg bg-gray-50"
                >
                  {/* Duration input */}
                  <div className="flex gap-2 mb-2">
                    <input
                      type="number"
                      placeholder="Duration"
                      value={offer.durationValue}
                      onChange={(e) =>
                        updateOffer(offer.id, "durationValue", e.target.value)
                      }
                      className="w-2/3 p-2 border rounded-lg"
                    />
                    <select
                      value={offer.durationUnit}
                      onChange={(e) =>
                        updateOffer(offer.id, "durationUnit", e.target.value)
                      }
                      className="w-1/3 p-2 border rounded-lg"
                    >
                      <option value="Minutes">Minutes</option>
                      <option value="Hours">Hours</option>
                    </select>
                  </div>

                  <input
                    type="number"
                    placeholder="Old Price"
                    value={offer.oldPrice}
                    onChange={(e) =>
                      updateOffer(offer.id, "oldPrice", e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded-lg"
                  />
                  <input
                    type="number"
                    placeholder="New Price"
                    value={offer.newPrice}
                    onChange={(e) =>
                      updateOffer(offer.id, "newPrice", e.target.value)
                    }
                    className="w-full p-2 border rounded-lg"
                  />
                  {offers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveOffer(offer.id)}
                      disabled={loading}
                      className="text-sm text-red-600 mt-2 disabled:opacity-50"
                    >
                      Remove Offer
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Service Image */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Service Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                disabled={loading}
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-2 max-h-40 rounded-lg"
                />
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              {existing && onCancel && (
                <button
                  type="button"
                  onClick={onCancel}
                  disabled={loading}
                  className={`px-6 py-3 border rounded-lg ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
                {loading
                  ? existing
                    ? "Updating..."
                    : "Saving..."
                  : existing
                  ? "Update Service"
                  : "Save Service"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}