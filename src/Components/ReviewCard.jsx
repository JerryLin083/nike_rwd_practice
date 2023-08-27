import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="w-[120px] h-[120px] rounded-full object-cover"
      />
      <p className="mt-5 mx-w-sm text-center info-text">
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2">
        <img src={star} alt="star" width={24} height={24} className="object-contain m-0"/>
        <p className="text-xl font-montserrat text-slate-gary">
          ({rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  )
}

export default ReviewCard