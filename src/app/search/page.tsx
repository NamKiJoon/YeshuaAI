import { SelectBible } from "@/components/search/SelectBible";

const SearchPage = () => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">말씀 검색</h1>
      <SelectBible />
    </main>
  );
};

export default SearchPage;
