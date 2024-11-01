"use client";
import { useState } from "react";
import { Modal } from "./modal";
import { Toast } from "./toast";

export const ApplyButton = ({ jobDetailsTitle }: { jobDetailsTitle: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const showToast = () => {
    setIsToastOpen(true);
    setTimeout(() => {
      setIsToastOpen(false);
    }, 3000);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="mt-10 rounded-full bg-gray-200 px-10 py-4 transition-all duration-300 hover:bg-blue-950 hover:text-gray-50 hover:border-gray-50"
      >
        ¡Aplica!
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} jobDetailsTitle={jobDetailsTitle} showToast={showToast} />
      <Toast isToastOpen={isToastOpen} />
    </>
  );
};
