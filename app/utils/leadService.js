// app/utils/leadService.js
import { db } from "../lib/firebase";  // ✅ use your firebase.js
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";

export async function addLeadIfAllowed(pageName) {
  const ip = await getUserIP();
  if (!ip) return;

  const tenMinutesAgo = Date.now() - 10 * 60 * 1000;

  // 🔹 Query leads for this page + IP
  const q = query(
    collection(db, "leads"),
    where("page", "==", pageName),
    where("ip", "==", ip)
  );

  const snapshot = await getDocs(q);

  const recentLead = snapshot.docs.find((doc) => {
    const data = doc.data();
    return data.createdAt?.toMillis() > tenMinutesAgo;
  });

  if (recentLead) {
    console.log("⏳ Lead not added: already submitted in last 10 minutes.");
    return;
  }

  // 🔹 Add new lead
  await addDoc(collection(db, "leads"), {
    page: pageName,
    ip,
    createdAt: serverTimestamp(),
  });

  console.log("✅ Lead added successfully.");
}

export async function getUserIP() {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    return data.ip;
  } catch (err) {
    console.error("Failed to fetch IP", err);
    return null;
  }
}
