// firebase/firebase-client.js
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

if (!getApps().length) {
  initializeApp({
    credential: cert({
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      projectId: process.env.NEXT_ID,
    }),
  });
}

const firestore = getFirestore();

const firebaseAdapter = FirestoreAdapter(firestore);

export default firebaseAdapter;
