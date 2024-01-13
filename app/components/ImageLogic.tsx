import React from 'react'

interface ImageGalleryProps {
    mainImage: string;
    images: string[];
    onImageClick: (selectedImage: string) => void;
  }

const ImageLogic: React.FC<ImageGalleryProps> = ({ mainImage, images, onImageClick }) => {

      
  return (
    <div className="md:flex flex-row mr-2 justify-center">
    <div className="basis-1/2">
       <img src={mainImage} alt="Main Image" style={{ maxWidth: '100%', }} />
    </div>
    <div className="flex flex-wrap basis-1/4 mt-4 mr-8 lg:ml-20 justify-center ">
    {images.map((image, index) => (
      <div key={index} className=" w-1/2 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-200 ">
      <img
        src={image}
        alt={`Image ${index}`}
        style={{ maxWidth: '100%', cursor: 'pointer', marginLeft: '20px' }}
        onClick={() => onImageClick(image)}
      />
    </div>
      ))}
    </div>
  </div>
  )
}

export default ImageLogic;