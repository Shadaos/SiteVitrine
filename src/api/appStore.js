// appIcon.js
/*
export async function getAppIcon(appId) {
  const res = await fetch(
    `https://itunes.apple.com/lookup?id=${appId}`
  );
  const data = await res.json();
  return data.results[0].artworkUrl512;
}
*/

export async function getAppStoreIcon(appId) {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${appId}`
  );
  const data = await response.json();
console.log(data);
  if (!data.results || data.results.length === 0) {
    throw new Error("App not found");
  }

  return data.results[0].artworkUrl512;
}
