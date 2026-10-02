import backgroundMobile  from '../../../public/images/bg-main-mobile.png';
import backgroundDesktop  from '../../../public/images/bg-main-desktop.png';

import CardFront from './CardFront';
import CardBack from  './CardBack'

function CardContainer(){
    return(
        <header className='w-full h-50 relative md:w-1/3 md:min-h-screen'>
            <img className='w-full h-50 absolute z-0 md:hidden' src={backgroundMobile} alt="" />
            <img className='hidden w-full h-full absolute z-0 md:block' src={backgroundDesktop} alt="" />
            <CardFront/>
            <CardBack/>
        </header>
    )
}

export default CardContainer;