import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgURL}
        alt={customerName}
        className="size-[120px] rounded-full object-cover"
      />
      <p className="max-w-sm mt-6 text-center info-text">{feedback}</p>
      <div className="flex items-center justify-center m-0 mt-3">
        <img src={star} alt="star" className="object-contain m-0 size-6" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 text-3xl font-bold text-center font-palanquin">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
