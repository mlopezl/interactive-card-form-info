import cardFront from '../../../public/images/bg-card-front.png';
import cardLogo from '../../../public/images/card-logo.svg';

function CardFront() {
  return (
    <div className="absolute w-60 h-33 z-2 right-[calc(50%-100px)] -bottom-10 md:w-70 md:h-36 md:top-30 md:-right-10 lg:top-25 lg:w-80 lg:h-40 lg:-right-20 ">
      <img className="w-full" src={cardFront} alt="Card front background" />
      <img className="w-12 absolute top-3 left-3 lg:w-15 lg:top-5 lg:left-5" src={cardLogo} alt="Card Logo" />
      <p className="absolute bottom-4 left-4 text-White text-[8px] uppercase tracking-widest lg:bottom-2 lg:left-5 lg:text-[12px]">
        Jane Appleseed
      </p>
      <p className="absolute bottom-4 right-4 text-White text-[8px] uppercase tracking-widest lg:bottom-2 lg:text-[10px]">
        00/00
      </p>
      <p className="absolute bottom-9 left-4 text-White text-md tracking-widest lg:left-5 lg:text-lg">
        0000&nbsp;0000&nbsp;0000&nbsp;0000
      </p>
    </div>
  );
}

export default CardFront;
