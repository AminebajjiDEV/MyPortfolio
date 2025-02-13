import Image from "next/image";
import ContactBG from "@/assets/images/ContactBG.webp";

export const ContactBackground = () => {
    return (
    <Image 
    src={ContactBG}
    alt="bg"
    quality={100}
    fill
    placeholder="blur" 
    sizes="100vw"
    style={{
        objectFit:'cover'
    }}
   />)
}