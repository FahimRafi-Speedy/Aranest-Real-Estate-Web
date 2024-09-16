import Image from "next/image";

const AranestLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pr-4 mb-5">
      <Image src="/aranest.png" alt="Aranest Logo" height={200} width={200} />
    </div>
  )
}

export default AranestLogo;
