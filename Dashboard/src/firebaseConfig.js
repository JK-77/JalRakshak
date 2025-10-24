import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported as isAnalyticsSupported } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Safe getter for Analytics only in supported/browser environments
const initAnalytics = async () => {
  if (typeof window === 'undefined') return null;
  try {
    const supported = await isAnalyticsSupported();
    return supported ? getAnalytics(app) : null;
  } catch (_) {
    return null;
  }
};

// Initialize Realtime Database and Storage
const database = getDatabase(app);
const storage = getStorage(app);

export { firebaseConfig, app, initAnalytics, database, storage };
export default firebaseConfig;
