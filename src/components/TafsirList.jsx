import React from "react";

const TafsirList = ({ item, onClickSurah }) => {
  return (
    <div
      className="text-center
            text-[#7e7d7d]
            py-[10px]
            px-[10px]
            sm:px-[20px]
            sm:py-[20px]
            sm-max:w-full
            w-[150px]
            sm:min-h-[100px]
            rounded-[10px]
            border-[##7e7d7d]
            border-2
            flex
            items-center
            justify-center
            cursor-pointer"
      onClick={() => onClickSurah(item.url)}
    >
      {item.name}
    </div>
  );
};

export default TafsirList;
