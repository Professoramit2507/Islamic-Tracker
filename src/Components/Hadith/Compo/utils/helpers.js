export const toBanglaNumber = (value) => {
  if (value === undefined || value === null) return "";
  const map = { 0: "০", 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯" };
  return String(value).replace(/\d/g, (digit) => map[digit]);
};

export const getJSON = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};