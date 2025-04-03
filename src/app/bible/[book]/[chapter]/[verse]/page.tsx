import bibleData from "@/data/bible.json";
import { notFound } from 'next/navigation';
import { ClientBible } from "@/components/bible/ClientBible";

// interface Params {
//   params: {
//     book: string;
//     chapter: string;
//     verse: string;
//   };
// }

export async function generateStaticParams() {
  return Object.keys(bibleData).map((key) => {
    const match = key.match(/^([가-힣]+)(\d+):(\d+)$/);
    if (!match) return null;

    const [, book, chapter, verse] = match;
    return { book, chapter, verse };
  }).filter(Boolean);
}

const Page = () => {
  // const { book, chapter, verse } = await params;
  // const key = `${book}${chapter}:${verse}`;
  // const verseText = key

  // const a = Object.keys(bibleData).map((x,i)=>{
  //   if (key == x){
  //     console.log(x)
  //   }
  // })
  // console.log(Object.keys(bibleData))

  // url의 json 키값과 매핑하여 컴포넌트에 전달
  // console.log('Keys =',decodeURIComponent(key))

  // return <ClientBible text={decodeURIComponent(verseText)}/>
  return null
};

export default Page;
