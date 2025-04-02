import bibleData from "@/data/bible.json";
import { notFound } from 'next/navigation';
import { ClientBible } from "@/components/bible/ClientBible";

interface Params {
  params: {
    book: string;
    chapter: string;
    verse: string;
  };
}

const Page = async({ params }: Params) => {
  const { book, chapter, verse } = params;
  const key = `${book}${chapter}:${verse}`;
  const verseText = key

  // url의 json 키값과 매핑하여 컴포넌트에 전달
  console.log('Keys =',decodeURIComponent(key))

  return <ClientBible text={decodeURIComponent(verseText)}/>
};

export default Page;
