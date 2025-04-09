export function getSearch(str: string): string {
  const CHO = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  return Array.from(str)
    .map((ch) => {
      const code = ch.charCodeAt(0) - 44032;
      return code >= 0 && code < 11172 ? CHO[Math.floor(code / 588)] : ch;
    })
    .join("");
}
