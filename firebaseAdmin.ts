import { initializeApp, getApps, App, getApp, cert } from "firebase-admin/app";
// import `initializeApp` function to create a new Firebase app instance
// import `getApps` function to get the list of all existing Firebase app instances
// import `App` type to type the Firebase app instance
// import `getApp` function to get an existing Firebase app instance by name
// import `cert` function to create a new credential instance from a service account key

import { getFirestore } from "firebase-admin/firestore";
// import `getFirestore` function to get a Firestore instance

// eslint-disable-next-line @typescript-eslint/no-require-imports
const servicekey = require("@/service_key.json");
// import the service account key from the file at the path `@/service_key.json`
// this file should contain the service account key in the JSON format

let app: App;
// declare a variable `app` of type `App` to store the Firebase app instance

if (getApps().length === 0) {
  // if there are no existing Firebase app instances
  app = initializeApp({
    // create a new Firebase app instance with the service account key
    credential: cert(servicekey),
  });
} else {
  // if there are existing Firebase app instances
  app = getApp();
  // get the first existing Firebase app instance
}

const adminDb = getFirestore(app);
// get a Firestore instance from the Firebase app instance

export { app as adminApp, adminDb };
// export the Firebase app instance as `adminApp`
// export the Firestore instance as `adminDb`

