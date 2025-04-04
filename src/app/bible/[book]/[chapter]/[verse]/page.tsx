import bibleData from "@/data/bible.json";
import { notFound } from "next/navigation";
import { ClientBible } from "@/components/bible/ClientBible";

interface Params {
  params: {
    book: string;
    chapter: string;
    verse: string;
  };
}

const Page = async ({ params }: Params) => {
  const { book, chapter, verse } = await params;

  const decodeBook = decodeURIComponent(book);
  const getValue = `${decodeBook}${chapter}:${verse}`;

  const typeBible = bibleData as Record<string, string>;

  const a = Object.keys(bibleData).map((x, i) => {
    if (getValue == x) {
      return typeBible[getValue];
    }
  });
  // console.log(Object.keys(bibleData));
  console.log(book, chapter, verse);
  // url의 json 키값과 매핑하여 컴포넌트에 전달
  // console.log('Keys =',decodeURIComponent(key))

  // return <ClientBible text={decodeURIComponent(verseText)}/>
  return <div>{a}</div>;
};

export default Page;
