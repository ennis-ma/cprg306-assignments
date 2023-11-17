// shopping-list-service.js
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

// Function to get items for a specific user
export async function getItems(userId) {
  const items = [];
  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

// Function to add an item for a specific user
export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}
