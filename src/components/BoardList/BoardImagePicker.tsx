import { getRandomImages } from "@/lib/unsplash"
import { useEffect, useState } from "react"
import { ImageData } from "@/types/types"

export default function BoardImagePicker({ setImage }: {setImage: (image: string) => void}) {
  const [images, setImages] = useState<ImageData[] | null>(null)
  const [selectedImage, setSelected] = useState('');

  useEffect(() => {
    getRandomImages().then(data => {
      if (data) {
        setImages(data)
        setSelected(data[0].urls.small)
      }
    }).catch((error) => console.log(error))
  }, [])

  function handleSelectImage(event: any) {
    setSelected(event.currentTarget.id);
    const imageUrl = event.target.getAttribute('data-image-url');
    console.log(imageUrl)
    setImage(imageUrl);
  }

  return (
    <div className="my-4">
      {
        !images ?
        <span>Loading</span>
        :
        <>
        <ul className="grid grid-cols-4 overflow-auto">
        {
        images.map((image: ImageData) => {
          return (
            <li onClick={handleSelectImage} data-image-url={image.urls.regular} id={image.urls.small} key={image.id} style={{backgroundImage: `url(${image.urls.thumb})`}} className=" min-h-20 bg-cover "></li>
          )
        })
        }
        </ul>
        <div style={{backgroundImage: `url(${selectedImage})`}} className="w-full h-40 bg-cover bg-no-repeat bg-center rounded mt-4"></div>
        </>
      }
    </div>
  )
}