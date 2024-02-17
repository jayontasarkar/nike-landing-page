import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';

const SpecialOffer = () => {
  return (
    <section className="flex items-center gap-10 justify-wrap max-xl:flex-col-reverse max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div>
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          <span className="text-coral-red">Special</span>
          {` `}Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop now" iconURL={arrowRight} type="primary" />
          <Button label="Learn more" type="secondary" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
