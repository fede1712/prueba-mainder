"use client";

import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export const CustomToast = ({ text }: { text: string }) => {
  const showErrorToast = () => toast.error(text);

  useEffect(() => {
    showErrorToast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Toaster position="bottom-right" />;
};
