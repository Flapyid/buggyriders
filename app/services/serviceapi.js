// servicesApi.js
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const collectionRef = collection(db, "buggyServices");

// Add new service
export const addService = async (service) => {
  await addDoc(collectionRef, service);
};

// Get all services
export const getServices = async () => {
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Update service
export const updateService = async (id, updatedData) => {
  const docRef = doc(db, "buggyServices", id);
  await updateDoc(docRef, updatedData);
};

// Delete service
export const deleteService = async (id) => {
  const docRef = doc(db, "buggyServices", id);
  await deleteDoc(docRef);
};

// 🔥 Upload Image to Cloudinary
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
  );

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  

  if (!res.ok) throw new Error("Cloudinary upload failed");

  const data = await res.json();
  return data.secure_url; // ✅ Hosted Cloudinary image URL
};
