"use client";
import { useState } from "react";
import { Modal } from "./modal";
import { Location, WorkModeType } from "@/types/agencies.type";
import { Button } from "./button";
import toast, { Toaster } from "react-hot-toast";

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
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const showToast = () => toast.success("Has aplicado a la oferta correctamente");

  return (
    <>
      <Button onClick={openModal} text="¡Aplica!" />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        jobDetailsTitle={jobDetailsTitle}
        showToast={showToast}
        jobDetailsLocations={jobDetailsLocations}
        jobDetailsWorMode={jobDetailsWorMode}
      />
      <Toaster position="bottom-right" />
    </>
  );
};
