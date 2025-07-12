import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Search,
  XIcon,
} from 'lucide-react';

interface SearchBarProps {
  query?: string;
  setQuery?: (val: string) => void;
  action?: string;
  placeholder?: string;
  method?: "GET" | "POST";
}

const SearchBar: React.FC<SearchBarProps> = ({
  query = "",
  setQuery,
  action = "",
  placeholder = "",
  method = "GET",
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputValue, setInputValue] = useState<string>(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    setQuery?.(val);
  };

  const clearForm = () => {
    setInputValue("");
    setQuery?.("");
    formRef.current?.reset();
  };
  return (
    <form
      data-aos="fade-up"
      data-aos-delay="350"
      ref={formRef}
      action={action}
      method={method}
      className="flex items-center gap-2 bg-white p-4 rounded-md w-full"
    >
      <input
        type="text"
        autoFocus
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className="w-full h-full bg-transparent outline-none text-black placeholder:text-gray-500"
      />

      {inputValue && (
        <XIcon
          onClick={clearForm}
          className="cursor-pointer"
          aria-label="Clear form button"
        />
      )}
      <Search className="cursor-pointer" aria-label="Search button" />
    </form>
  );
};

export default SearchBar;
