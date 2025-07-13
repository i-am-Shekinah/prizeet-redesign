import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const Accordion = ({ title, content, isOpen, onClick }: AccordionProps) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="py-4 border-b border-white">
        <div
          onClick={onClick}
          className="flex items-center justify-between font-bold cursor-pointer"
        >
          <p>{title}</p>
          <ChevronDown
            className={`transition-transform duration-300 ease-in-out size-5
              ${
                isOpen
                  ? "rotate-180 transition-transform duration-700 ease-in-out"
                  : ""
              }`}
          />
        </div>

        <p
          className={`transition-all duration-700 ease-linear overflow-hidden font-light text-gray-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
    </>
  );
};

export default Accordion;
