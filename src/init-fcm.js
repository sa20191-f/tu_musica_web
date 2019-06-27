import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
	// Project Settings => Add Firebase to your web app
  messagingSenderId: "532879941476"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  "BPqOi1Itnko6XsNkjYJqNTAa43R_oTPk4-4CydeCFFHx-IAtaevGEgrOAFAdeowJ_22eMx6BzenSA1FtScXhX7w"
);
export { messaging };