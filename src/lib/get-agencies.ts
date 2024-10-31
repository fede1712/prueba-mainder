import { mainderQuery } from "./mainder";

export async function getAgencies() {
  try {
    const res = await mainderQuery("agencies");

    if (res.status === "success" && Array.isArray(res.data)) {
      return res.data;
    } else {
      res.status;
    }
  } catch (err) {
    console.error("Error al obtener agencias:", err);
    throw new Error("No se pudieron obtener las agencias. Inténtelo de nuevo más tarde.");
  }
}
