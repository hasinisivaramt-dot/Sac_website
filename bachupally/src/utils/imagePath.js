// Builds the URL for a shared fallback image that lives in
// public/assets/global/ — used by section components when a campus
// hasn't supplied its own content image yet.
export function globalAsset(filename) {
  return `/assets/global/${filename}`;
}
