import { mainderQuery } from "./mainder";

export async function getJobsAgencies(agencySlug: string) {
  try {
    const res = await mainderQuery(`career-site/${agencySlug}`);
    if (res.status === "success") {
      return res.data;
    } else {
      return res.status;
    }
  } catch (err) {
    console.error("Error al obtener los trabajos de las agencias:", err);
    throw new Error("No se pudieron obtener los trabajos de las agencias. Inténtelo de nuevo más tarde.");
  }
}
