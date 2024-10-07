/**
 * @function ShortenText
 * @description 길이가 긴 text를 줄여 표현하는 유틸 함수
 * @param {string} text 줄이고자 하는 원본 텍스트
 * @param {number} maxLength 최대 텍스트 길이 제한
 * @returns {string} maxLength만큼 줄여진 텍스트 길이
 */
export const ShortenText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};
