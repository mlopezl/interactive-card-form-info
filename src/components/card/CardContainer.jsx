import backgroundMobile  from '../../../public/images/bg-main-mobile.png';
import backgroundDesktop  from '../../../public/images/bg-main-desktop.png';

import CardFront from './CardFront';
import CardBack from  './CardBack'

function CardContainer(){
    return(
        <header className='w-full h-50 relative'>
            <img className='w-full h-50 absolute z-0' src={backgroundMobile} alt="" />
            <CardFront/>
            <CardBack/>
        </header>
    )
}

export default CardContainer;