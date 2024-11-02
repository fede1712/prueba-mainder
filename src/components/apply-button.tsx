"use client";
import { useState } from "react";
import { Modal } from "./modal";
import { Location, WorkModeType } from "@/types/agencies.type";
import { Button } from "./button";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "./ui/toaster";

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
  const { toast } = useToast();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const showToast = () => toast({ description: "Has aplicado correctamente" });

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
      <Toaster />
    </>
  );
};
