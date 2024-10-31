import { mainderQuery } from "./mainder";

export async function getJobDetails(agencySlug: string | null, jobPositionId: string | null) {
  try {
    const res = await mainderQuery(`career-site/${agencySlug}/job/${jobPositionId}`);
    if (res.status === "success") {
      return res.data;
    } else {
      return res.status;
    }
  } catch (err) {
    console.error("Error al obtener agencias:", err);
    throw new Error("No se pudieron obtener las agencias. Inténtelo de nuevo más tarde.");
  }
}
