"use client";
import { useEffect, useState } from "react";
import "./toast.css";

export const Toast = ({ isToastOpen, text, toastType }: { isToastOpen: boolean; text: string; toastType: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isToastOpen) {
      setIsVisible(true);
      setTimeout(() => setMounted(true), 10);
    } else if (!isToastOpen && isVisible) {
      setMounted(false);
      const timeoutId = setTimeout(() => setIsVisible(false), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [isToastOpen, isVisible]);

  return (
    isVisible && (
      <div
        className={`${toastType === "error" ? "bg-red-50" : "bg-green-50"} text-gray-900 toast ${
          mounted ? "show" : "hide"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-check"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
        <p className="text-gray-900 font-semibold">{text}</p>
      </div>
    )
  );
};
