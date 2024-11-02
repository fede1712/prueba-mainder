"use client";

import { useToast } from "@/hooks/use-toast";
import { Toaster } from "./ui/toaster";
import { useEffect } from "react";

export const CustomToast = ({ text }: { text: string }) => {
  const { toast } = useToast();

  useEffect(() => {
    toast({ description: text, variant: "destructive" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Toaster />;
};
