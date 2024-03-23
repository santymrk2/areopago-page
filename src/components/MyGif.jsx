import { useState } from "react";
import Image from "astro/components/Image.astro";
import videoGif from "../assets/Memazo.gif"


export default function MyGif() {
  const [gif, setGif] = useState(false)

  const handleClick = () => {
    setGif(true)
    console.log("gif enviado")
  }

  return(
    <div onClick={handleClick}>
      <p  class="text-white text-whitefont-base text-xl text-center sm:text-xl sm:text-left">estamos trabajando en cositas...</p>
      { gif && <Image class="self-center h-36 w-36 m-4" src={videoGif} alt="gif"/>}
    </div>
  )
} 