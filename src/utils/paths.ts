export function getBasedUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}