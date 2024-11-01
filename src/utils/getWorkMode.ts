import { WorkModeType } from "@/types/agencies.type";

export const getWorkMode = (workMode: WorkModeType): string => {
  const workModesType = {
    "ON-SITE": "Presencial",
    HYBRID: "Híbrido",
    REMOTE: "Remoto",
  };
  return workModesType[workMode];
};
