import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, currentBigShoe }) => {
  const handleClick = () => {
    if (currentBigShoe !== imgURL) {
      changeBigShoeImage(imgURL)
    }
  }

  return (
    <div className={`${currentBigShoe === imgURL ? "border-coral-red" : "border-transparent"} border-2 rounded-xl cursor-pointer max-sm:flex-1`}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL}
          alt="bigShoe"
          width={127}
          height={103}
          className="object-contain"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default ShoeCard