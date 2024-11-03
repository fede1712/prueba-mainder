"use client";
import { useState } from "react";
import { Modal } from "./modal";
import { Location, WorkModeType } from "@/types/agencies.type";
import { CustomButton } from "./custom-button";

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

  return (
    <>
      <CustomButton onClick={openModal} text="¡Aplica!" />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        jobDetailsTitle={jobDetailsTitle}
        jobDetailsLocations={jobDetailsLocations}
        jobDetailsWorMode={jobDetailsWorMode}
      />
    </>
  );
};
