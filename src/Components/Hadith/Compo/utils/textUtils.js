export const cleanTextForSpeech = (rawText) => {
  if (!rawText) return "";

  return rawText
    .replace(/<[^>]*>/g, " ")
    .replace(/\.+/g, " ")
    .replace(/…/g, " ")
    .replace(/•/g, " ")
    .replace(/·/g, " ")
    .replace(/\[\d+\]/g, " ")
    .replace(/\(\d+\)/g, " ")
    .replace(/ﷺ/g, " সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম ")
    .replace(/\(সা[.]?\)|\(সাঃ\)/g, " সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম ")
    .replace(/\(রা[.]?\)|\(রাঃ\)/g, " রাদিয়াল্লাহু আনহু ")
    .replace(/\(রহ[.]?\)|\(রহঃ\)/g, " রহমাতুল্লাহি আলাইহি ")
    .replace(/[।!?,;:—–\-_~*#"'/\\()[\]{}|<>+=`]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

export const chunkBanglaText = (rawText, maxLength = 120) => {
  if (!rawText) return [];
  const words = rawText.split(/\s+/);
  const chunks = [];
  let currentChunk = "";

  for (const word of words) {
    if (!word) continue;
    if ((currentChunk + " " + word).trim().length <= maxLength) {
      currentChunk = (currentChunk + " " + word).trim();
    } else {
      if (currentChunk) chunks.push(currentChunk);
      currentChunk = word;
    }
  }
  if (currentChunk) chunks.push(currentChunk);
  return chunks.length > 0 ? chunks : [rawText];
};