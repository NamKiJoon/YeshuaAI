import { SelectBible } from "@/components/search/SelectBible";
import { Button } from "@/components/ui/button";
import { BookCombobox } from "@/components/ui/combobox/comboBox";

const SearchPage = () => {
  return (
    <main className="">
      <h1 className="text-2xl font-bold mb-4 border-2">검색</h1>
      <BookCombobox></BookCombobox>
    </main>
  );
};

export default SearchPage;
