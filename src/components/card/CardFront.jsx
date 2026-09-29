import cardFront from '../../../public/images/bg-card-front.png';
import cardLogo from '../../../public/images/card-logo.svg';

function CardFront() {
  return (
    <div className="absolute w-60 h-33 z-2 left-[calc(50%-140px)] -bottom-10">
      <img className="w-full" src={cardFront} alt="Card front background" />
      <img className="w-12 absolute top-3 left-3" src={cardLogo} alt="Card Logo" />
      <p className="absolute bottom-4 left-4 text-White text-[8px] uppercase tracking-widest">
        Jane Appleseed
      </p>
      <p className="absolute bottom-4 right-4 text-White text-[8px] uppercase tracking-widest">
        00/00
      </p>
      <p className="absolute bottom-9 left-4 text-White text-md tracking-widest">
        0000&nbsp;0000&nbsp;0000&nbsp;0000
      </p>
    </div>
  );
}

export default CardFront;
