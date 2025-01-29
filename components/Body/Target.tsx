import Image from "next/image"

const Target: React.FC = () => {
  return (
    <div className="mr-4 text-xl" title="Search in Your Area">
      <Image
          src="/target.png"
          alt="Target"
          width={25}
          height={25}
          className="mr-4 text-xl"
          title="Search in Your Area"        
          />
    </div>
  )
}

export default Target;
