import { getStorage, ref, getDownloadURL } from "firebase/storage";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const storage = getStorage();
      const imageRefs = [
        "gs://quiz-managemet-sytem.appspot.com/uploads/1.jpg",
        "gs://quiz-managemet-sytem.appspot.com/uploads/2.png",
        "gs://quiz-managemet-sytem.appspot.com/uploads/3.png",
        "gs://quiz-managemet-sytem.appspot.com/uploads/4.png",
      ];

      try {
        const imagePromises = imageRefs.map(async (path) => {
          const imageRef = ref(storage, path);
          const url = await getDownloadURL(imageRef);
          return url;
        });

        const urls = await Promise.all(imagePromises);
        setImages(urls);
      } catch (err) {
        setError("Failed to load images");
      }
    };

    fetchImages();
  }, []);

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-[1500px] h-[500px] m-auto py-10 relative group">
      {images.length > 0 ? (
        <>
          <div
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>

          {/* Left Arrow */}
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={prevSlide}
          >
            <BsChevronCompactLeft size={30} />
          </div>
          {/* Right Arrow */}
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={nextSlide}
          >
            <BsChevronCompactRight size={30} />
          </div>

          {/* Navigation Dots */}
          <div className="flex top-4 justify-center py-2">
            {images.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer mx-1"
              >
                <RxDotFilled
                  color={slideIndex === currentIndex ? "black" : "gray"}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>{error ? error : "Loading images..."}</p>
      )}
    </div>
  );
};

export default ImageSlider;
