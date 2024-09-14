import Image from "next/image"

const Target: React.FC = () => {
  return (
    <div className="">
      <Image
          src="/target.png"
          alt="Target"
          width={25}
          height={25}
          className="mr-4 text-xl"
        />
    </div>
  )
}

export default Target;
