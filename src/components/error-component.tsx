"use client";

import { useState, useEffect } from "react";
import { Toast } from "./toast";

export const ErrorComponent = () => {
  const [isErrorToastOpen, setIsErrorToastOpen] = useState(false);

  useEffect(() => {
    setIsErrorToastOpen(true);
    setTimeout(() => {
      setIsErrorToastOpen(false);
    }, 3000);
    const timeoutId = setTimeout(() => setIsErrorToastOpen(false), 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Toast isToastOpen={isErrorToastOpen} text="No hemos podido traer todos los trabajos de la API" toastType="error" />
  );
};
