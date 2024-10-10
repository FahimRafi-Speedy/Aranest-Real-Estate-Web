import Image from "next/image";

const AranestLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pr-4 mb-5">
      <Image 
        src="/aranest.png" 
        alt="Aranest Logo" 
        height={200} 
        width={200} 
        className="h-20 w-20 sm:h-40 sm:w-40" // Set responsive sizes
      />
    </div>
  );
}

export default AranestLogo;
