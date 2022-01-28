import { useEffect, useState, useRef } from "react";
import { firestore } from "../firebase/config";

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState("");
  const [error, setError] = useState("");

  const query = useRef(_query).current;
  console.log(query);
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = firestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }
    if (orderBy) {
      ref = ref.where(...orderBy);
    }

    const unsubscribe = ref.onSnapshot((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });

      setDocuments(results);
      setError(null);
    }, error => {
      console.log(error);
      setError(error);
    });

    return () => unsubscribe();
  }, [collection, query, orderBy]);

  return {documents, error};
}
