import bibleData from "@/data/bible.json";

interface SearchParams {
  searchParams: {
    book: string;
    sc: string;
    sv: string;
    ec: string;
    ev: string;
  };
}

const ResultPage = ({ searchParams }: SearchParams) => {
  const { book, sc, sv, ec, ev } = searchParams;
  const startC = parseInt(sc);
  const startV = parseInt(sv);
  const endC = parseInt(ec);
  const endV = parseInt(ev);

  const bible = bibleData as Record<string, string>;
  const result: { key: string; text: string }[] = [];

  for (let c = startC; c <= endC; c++) {
    const verseStart = c === startC ? startV : 1;
    const verseEnd = c === endC ? endV : 150;
    for (let v = verseStart; v <= verseEnd; v++) {
      const key = `${decodeURIComponent(book)}${c}:${v}`;
      if (bible[key]) result.push({ key, text: bible[key] });
    }
  }

  return (
    <div className="p-6 space-y-2">
      {result.length === 0 ? (
        <p>해당 범위의 구절을 찾을 수 없습니다.</p>
      ) : (
        result.map((item) => (
          <div key={item.key}>
            <strong>{item.key}</strong>: {item.text}
          </div>
        ))
      )}
    </div>
  );
};

export default ResultPage;
