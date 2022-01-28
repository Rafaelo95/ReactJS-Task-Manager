import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    isPending(true);

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);

      if (!res) {
        throw new Error("Could not complete registration.");
      }

      await res.user.updateProfile({ displayName: displayName });
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setError(null);
        isPending(false);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
