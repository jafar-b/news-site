import React, { useState } from "react";

import { useSpeechSynthesis } from "react-speech-kit";

const NewsCard = ({ title, description, url, urlToImage, author }) => {
  const [readMore, setReadMore] = useState(false);
  const { speak } = useSpeechSynthesis();
  const talk = () => {
    description !== "Description is not available"
      ? speak({ text: description })
      : speak({ text: title });
  };

  const extraContent = (
    <div>
      <p className="text-black">
        <p className="extra-content">
          {description != null
            ? description
            : (description = "Description is not available")}
        </p>
      </p>
    </div>
  );

  const linkName = readMore
    ? "Click on title to know more.. "
    : "Read More... ";
  return (
    <>
      <div class=" h-fit rounded shadow  hover:bg-gray-200 bg-white m-2 w-fit overflow-hidden ">
        <a href="#">
          <img
            alt="Image not available"
            class="block h-auto text-black w-full"
            src={
              urlToImage !== null
                ? urlToImage
                : "https://cdn11.bigcommerce.com/s-zhz3r/images/stencil/2000x2000/products/3114/5628/IMAGE_NOT_AVAILABLE__07950.1639586342__50750.1639672738.jpg?c=2"
            }
          />
        </a>

        <header class="flex-col items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg">
            <a class="no-underline hover:underline text-black" href={url}>
              {title}
            </a>
          </h1>
          <div>
            <a
              className="text-blue-600 text-sm hover:cursor-pointer no-underline "
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <div>
                <p className="text-black text-sm">{readMore && extraContent}</p>
                <h2 className="my-1">{linkName}</h2>
              </div>
            </a>
          </div>
        </header>

        <footer class="flex items-center justify-between leading-none p-2 ">
          <a
            class=" flex items-center justify-center w-fit no-underline hover:underline text-black    "
            href={url}
          >
            <img
              alt="Placeholder"
              class="block rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yJmOL8nb6x7NO2xuLB-Cc1qP2MRFdq24qg&usqp=CAU"
              height={25}
              width={25}
            />
            <p class="ml-2 text-sm">
              {author !== null ? author : (author = " Author Unknown")}
            </p>
          </a>

          <img
            src="/texttospeech.png"
            className="h-12 w-12 mr-6 shadow bg-[#f1ecec]  rounded-[25%] hover:bg-[#e3b18d] p-1 hover:shadow"
            onClick={talk}
          />
        </footer>
      </div>
    </>
  );
};

export default NewsCard;
