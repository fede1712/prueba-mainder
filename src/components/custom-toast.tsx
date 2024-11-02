"use client";

import { useToast } from "@/hooks/use-toast";
import { Toaster } from "./ui/toaster";
import { use, useEffect } from "react";

export const CustomToast = ({ text }: { text: string }) => {
  const { toast } = useToast();

  useEffect(() => {
    toast({ description: text, variant: "destructive" });
  }, []);

  return <Toaster />;
};
