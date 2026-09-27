import backgroundMobile  from '../../../public/images/bg-main-mobile.png';
import backgroundDesktop  from '../../../public/images/bg-main-desktop.png';

import cardFront from '../../../public/images/bg-card-front.png';
import cardBack from '../../../public/images/bg-card-back.png';
import cardLogo from '../../../public/images/card-logo.svg';

function CardContainer(){
    return(
        <header className='w-full h-50 relative'>
            <img className='w-full h-50 absolute z-0' src={backgroundMobile} alt="" />
            <div className='absolute w-60 h-33 z-2 left-[calc(50%-140px)] -bottom-10'>
                <img className='w-full' src={cardFront} alt="" />
                l<img className='w-12 absolute top-3 left-3' src={cardLogo} alt="" />
                <p className='absolute bottom-4 left-4 text-White text-[8px] uppercase tracking-widest'>Jane Appleseed</p>
                <p className='absolute bottom-4 right-4 text-White text-[8px] uppercase tracking-widest'>00/00</p>
                <p className='absolute bottom-9 left-4 text-White text-md tracking-widest'>0000&nbsp;0000&nbsp;0000&nbsp;0000</p>
            </div>
            <div className='absolute w-60 h-33 z-1 left-[calc(50%-95px)] top-8'>
                <img className='w-full' src={cardBack} alt="" />
                <p className='absolute top-15 right-7 text-[9px] text-White tracking-widest'>000</p>   
            </div>
        </header>
    )
}

export default CardContainer;