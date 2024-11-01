"use client";
import { useState } from "react";
import { Modal } from "./modal";
import { Toast } from "./toast";
import { Location, WorkModeType } from "@/types/agencies.type";

export const ApplyButton = ({
  jobDetailsTitle,
  jobDetailsLocations,
  jobDetailsWorMode,
}: {
  jobDetailsTitle: string;
  jobDetailsLocations: Location[];
  jobDetailsWorMode: WorkModeType;
}) => {
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
        className="mt-10 rounded-full bg-gray-200 px-10 py-4 transition-all duration-200 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 hover:text-gray-50"
      >
        ¡Aplica!
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        jobDetailsTitle={jobDetailsTitle}
        showToast={showToast}
        jobDetailsLocations={jobDetailsLocations}
        jobDetailsWorMode={jobDetailsWorMode}
      />
      <Toast isToastOpen={isToastOpen} text="Has aplicado con éxito" toastType="success" />
    </>
  );
};
