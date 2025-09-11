"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import {
  getServices,
  deleteService,
} from "../../services/serviceapi";
import ServiceForm from "../components/ServiceForm";
import LeadManager from "../components/LeadManager";


export default function Dashboard() {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [activeTab, setActiveTab] = useState("services");
   const router = useRouter();

  const fetchServices = async () => {
    try {
      setLoading(true);
      const data = await getServices();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteService(id);
      fetchServices();
      setDeleteConfirm(null);
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setActiveTab("form");
  };

  const handleCancelEdit = () => {
    setEditingService(null);
  };
   // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("user"); // clear user data
    router.push("/"); // redirect to home
  };

  return (
    <div className="min-h-screen bg-gray-50">
     
    
      {/* Header */}
      <header className="bg-white shadow-sm pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab("services")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "services"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                View Services
              </button>
              <button
                onClick={() => {
                  setEditingService(null);
                  setActiveTab("form");
                }}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "form"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {editingService ? "Edit Service" : "Add New Service"}
              </button>
              <button
                onClick={() => setActiveTab("leads")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "leads"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Leads
              </button>
              <button
                onClick={handleLogout}
                className={`px-4 py-2 rounded-lg font-medium text-white bg-red-600
                  `}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Service Form */}
        {activeTab === "form" && (
          <div className="mb-10 bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {editingService ? "Edit Service" : "Add New Service"}
              </h2>
              {editingService && (
                <button
                  onClick={handleCancelEdit}
                  className="text-gray-500 hover:text-gray-700 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Cancel Edit
                </button>
              )}
            </div>
            <ServiceForm
              existing={editingService}
              onAdded={fetchServices}
              onUpdated={() => {
                fetchServices();
                setEditingService(null);
              }}
              onCancel={() => setEditingService(null)}
            />
          </div>
        )}

        {/* Services List */}
        {activeTab === "services" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Services ({services.length})
              </h2>
            
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : services.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <svg
                  className="w-16 h-16 text-gray-300 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  No services yet
                </h3>
                <p className="text-gray-500 mb-4">
                  Get started by adding your first service
                </p>
                <button
                  onClick={() => {
                    setEditingService(null);
                    setActiveTab("form");
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Add New Service
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-200 hover:shadow-lg"
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={service.imageUrl || "/placeholder-image.jpg"}
                        alt={service.title}
                        className="w-full h-48 object-cover"
                      />
                      {service.discount && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {service.discount}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-lg mb-2 text-gray-800 truncate">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {service.description}
                      </p>

                      {service.driverAge && (
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2a5.002 5.002 0 00-9.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          Driver Age: {service.driverAge}
                        </div>
                      )}

                      {service.offers && service.offers.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-700 text-sm mb-2">
                            Offers:
                          </h4>
                          <ul className="space-y-2">
                            {service.offers.slice(0, 2).map((offer, index) => (
                              <li
                                key={index}
                                className="text-xs bg-gray-50 p-2 rounded flex justify-between items-center"
                              >
                                <span>{offer.duration}</span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-gray-400 line-through">
                                    {offer.oldPrice}
                                  </span>
                                  <span className="font-semibold text-green-600">
                                    {offer.newPrice}
                                  </span>
                                </div>
                              </li>
                            ))}
                            {service.offers.length > 2 && (
                              <li className="text-xs text-gray-500 text-center">
                                +{service.offers.length - 2} more offers
                              </li>
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between">
                        <button
                          onClick={() => handleEdit(service)}
                          className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                          Edit
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(service.id)}
                          className="flex items-center text-red-600 hover:text-red-800 text-sm"
                        >
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Leads Manager */}
        {activeTab === "leads" && <LeadManager />}

        {/* Delete Confirmation Modal */}
        {deleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Confirm Deletion
              </h3>
              <p className="text-gray-500 mb-6">
                Are you sure you want to delete this service? This action
                cannot be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
