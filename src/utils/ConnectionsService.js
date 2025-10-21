// connectionsService.js
let cache = null;

export async function getConnections() {
  if (cache) return cache;
  const res = await fetch("/data/connections.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load connections.json");
  const json = await res.json();
  cache = json.connections;
  return cache;
}

export async function getConnectionById(id) {
  const all = await getConnections();
  return all.find(c => c.id === id) || null;
}
