"use client";
import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { Box } from "lucide-react";
import "./ModalStyle.css";
import { ADMINURL } from "@/app/page";

const OneEightyModal = ({ images, prefix }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [index, setIndex] = useState(1);
  const frames = images?.length;

  // Cache to store preloaded images
  const imageCache = useRef({});

  useEffect(() => {
    // Preload all images into the cache
    for (let i = 1; i <= frames; i++) {
      const img = new Image();
      img.src = `${ADMINURL}uploads/one_eighty/${prefix}${i}.jpg`;
      imageCache.current[i] = img;
    }
  }, [frames, prefix]);

  const handleSliderChange = (event) => {
    // console.log(event.target.value);
    const newIndex = parseInt(event.target.value, 10);
    setIndex(newIndex);

    // Set img src from cache
    const cachedImage = imageCache.current[newIndex];
    if (cachedImage) {
      const imgElement = document.getElementById("modalImage");
      imgElement.src = cachedImage.src;
    }
  };

  if (frames === 0 && !prefix) {
    return (
      <div className="bg-white border flex flex-col items-center justify-center border-black shadow-md py-1 px-3 transition-all ease-in-out active:scale-90 rounded-md cursor-pointer z-50 fixed bottom-5 left-5">
        <Box /> N/A
      </div>
    );
  }

  return (
    <>
      <div
        onClick={handleOpen}
        className="bg-white border border-black shadow-md py-1 px-3 transition-all ease-in-out active:scale-90 rounded-md cursor-pointer z-50 fixed bottom-5 left-5"
      >
        <Box /> 3D
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <div className="flex flex-col gap-5 items-center justify-center p-5 w-full">
            <div className="h-[60vh]">
              <img
                id="modalImage"
                alt=""
                src={
                  images && images.length > 0
                    ? `${ADMINURL}uploads/one_eighty/${prefix}${index}.jpg`
                    : "/placeholder.webp"
                }
                className="h-full w-full object-contain"
              />
            </div>
            <input
              type="range"
              min="1"
              max={frames}
              value={index}
              onChange={handleSliderChange}
            />
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};
export default OneEightyModal;
