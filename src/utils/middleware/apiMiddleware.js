import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  addDoc,
  doc
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const apiMiddleware = (store) => (next) => (action) => {
  if (action.type === "apiCall") {
    // GET
    store.dispatch({ type: "product/changeLoadingTrue" });
    if (action.payload.method === "GET") {
      const refCollection = collection(db, action.payload.collection);
      getDocs(refCollection).then((res) => {
        let newArr = res.docs.map((itm) => {
          return { ...itm.data(), id: itm.id };
        });

        store.dispatch(action.payload.onSuccess(newArr));
        store.dispatch({ type: "product/changeLoadingFalse" });
      });

      //   POST
    } else if (action.payload.method === "POST") {
      const refCollection = collection(db, action.payload.collection);

      // if (action.payload.id === "") {
      addDoc(refCollection, action.payload.data).then((res) => {
        store.dispatch(action.payload.onSuccess());
        action.payload.navigate("/");
      });
      // } else {
      //   const oneDoc = doc(refCollection, action.payload.id);
      //   updateDoc(oneDoc, action.payload.data).then((res) => {
      //     store.dispatch(action.payload.onSuccess());
      //     store.dispatch({ type: "users/clearCurrent" });
      //   });
      // }

      //   DELETE
    } else if (action.payload.method === "DELETE") {
      const refCollection = collection(db, action.payload.collection);

      const oneDoc = doc(refCollection, action.payload.id);

      deleteDoc(oneDoc).then((res) => {
        store.dispatch(action.payload.onSuccess());
        store.dispatch({ type: "users/clearCurrent" });
      });
    }
  } else {
    next(action);
  }
};

export default apiMiddleware;
