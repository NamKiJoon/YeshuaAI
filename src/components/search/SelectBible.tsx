"use client"; // 클라이언트 컴포넌트임을 명시

import { useState } from "react";
import bibleData from "@/data/bible.json"; // 성경 본문 JSON 데이터
import { bibleMeta, BibleBookMeta } from "@/data/bibleMeta"; // 성경책 이름, 약어, 장별 절수
import { getSearch } from "@/utils/search/getSearch"; // 자음 기반 자동완성 함수

export const SelectBible = () => {
  // 사용자 입력 상태들
  const [input, setInput] = useState(""); // 성경책 검색 입력값
  const [book, setBook] = useState(""); // 선택된 성경책 이름
  const [chapter, setChapter] = useState(""); // 선택된 장
  const [verse, setVerse] = useState(""); // 선택된 절
  const [verses, setVerses] = useState<number[]>([]); // 현재 장의 전체 절 리스트
  const [result, setResult] = useState<string>(""); // 검색된 말씀 결과

  // 자음 필터링으로 성경책 목록 필터링
  const matchedBooks: BibleBookMeta[] = bibleMeta.filter(({ name }) =>
    getSearch(name).includes(getSearch(input))
  );

  // 현재 선택된 성경책 객체
  const selectedBook: BibleBookMeta | undefined = bibleMeta.find(
    (b) => b.name === book
  );

  // 성경책 선택 시 처리 로직
  const handleBookSelect = (name: string) => {
    setBook(name); // 책 이름 선택
    setInput(name); // 인풋에도 반영
    setChapter(""); // 장 초기화
    setVerse(""); // 절 초기화
    setVerses([]); // 절 리스트 초기화
  };

  // 장 선택 시 해당 장의 절 수 만큼 절 리스트 생성
  const handleChapterChange = (ch: string) => {
    setChapter(ch);
    const index = parseInt(ch, 10) - 1; // 0부터 시작하는 배열 인덱스
    if (selectedBook && selectedBook.chapters[index]) {
      const totalVerses = selectedBook.chapters[index];
      setVerses(Array.from({ length: totalVerses }, (_, i) => i + 1)); // 절 목록 생성
    }
  };

  // 조회 버튼 클릭 시 key로 성경 말씀 찾기
  const handleSearch = () => {
    if (!book || !chapter || !verse || !selectedBook) return;
    const key = `${selectedBook.abbr}${chapter}:${verse}`; // 예: "창1:1"
    const value = (bibleData as Record<string, string>)[key];
    setResult(value || "말씀을 찾을 수 없습니다.");
  };

  return (
    <div className="p-4 space-y-4">
      {/* 상단 입력/선택 바 영역 */}
      <div className="flex flex-col sm:flex-row gap-2 overflow-x-auto whitespace-nowrap">
        {/* 성경책 검색 입력창 + 자동완성 */}
        <div className="relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="성경책"
            className="border p-2 rounded min-w-[140px]"
          />
          {/* 자동완성 드롭다운 */}
          {input && (
            <ul className="absolute bg-white border rounded w-full max-h-40 overflow-y-auto z-10">
              {matchedBooks.map((b) => (
                <li
                  key={b.name}
                  className="p-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => handleBookSelect(b.name)}
                >
                  {b.name}
                </li>
              ))}
              {/* 매칭된 결과가 없을 경우 */}
              {matchedBooks.length === 0 && (
                <li className="p-2 text-gray-400">일치하는 책 없음</li>
              )}
            </ul>
          )}
        </div>

        {/* 장 선택 드롭다운 */}
        {selectedBook && (
          <select
            value={chapter}
            onChange={(e) => handleChapterChange(e.target.value)}
            className="border p-2 rounded min-w-[80px]"
          >
            <option value="">장 선택</option>
            {selectedBook.chapters.map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}장
              </option>
            ))}
          </select>
        )}

        {/* 절 선택 드롭다운 */}
        {verses.length > 0 && (
          <select
            value={verse}
            onChange={(e) => setVerse(e.target.value)}
            className="border p-2 rounded min-w-[80px]"
          >
            <option value="">절 선택</option>
            {verses.map((v) => (
              <option key={v} value={v}>
                {v}절
              </option>
            ))}
          </select>
        )}

        {/* 조회 버튼 */}
        <button
          onClick={handleSearch}
          disabled={!book || !chapter || !verse} // 세 값이 모두 있어야 활성화
          className={`p-2 px-4 rounded font-semibold ${
            book && chapter && verse
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          조회
        </button>
      </div>

      {/* 조회된 결과 출력 */}
      {result && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <strong>
            {book} {chapter}:{verse}
          </strong>{" "}
          – {result}
        </div>
      )}
    </div>
  );
};
