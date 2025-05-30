declare global {
  interface JSON {
    parseSafe<T = any>(value: string): T | null;
  }
}

JSON.parseSafe = function (value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};
