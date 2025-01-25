import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <h1>Next.js Image Component</h1>
      <Image
        src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1633328886/nextjs-image-component/nextjs-image-component.png"
        alt="Next.js Image Component"
        width={500}
        height={500}
      />  
      </div>
    </>
  );
    
}
