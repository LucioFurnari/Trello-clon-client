import { getRandomImages } from "@/lib/unsplash"
import { useEffect, useState } from "react"
import { ImageData } from "@/types/types"
import Image from "next/image"

export default function BoardImagePicker() {
  const [images, setImages] = useState<ImageData[] | null>(null)
  const [selectedImage, setSelected] = useState('');

  useEffect(() => {
    getRandomImages().then(data => setImages(data))
  }, [])

  function handleSelectImage(event: any) {
    setSelected(event.currentTarget.id)
  }

  return (
    <div className="mt-4">
      {
        !images ?
        <span>Loading</span>
        :
        <>
        <ul className="grid grid-cols-4 overflow-auto">
        {
        images.map((image: ImageData) => {
          return (
            <li onClick={handleSelectImage} id={image.urls.small} key={image.id} style={{backgroundImage: `url(${image.urls.thumb})`}} className=" min-h-20 bg-cover "></li>
          )
        })
        }
        </ul>
        <div style={{backgroundImage: `url(${selectedImage})`}} className="w-full h-40 bg-cover bg-no-repeat bg-center"></div>
        </>
      }
    </div>
  )
}