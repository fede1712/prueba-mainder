export async function mainderQuery(url: string) {
  return fetch(`https://api.mainder.ai/api/v1/${url}`, {
    headers: { Authorization: `Bearer x`, "Cache-Control": "no-store" },
  }).then((res) => res.json());
}
