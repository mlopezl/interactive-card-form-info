import cardBack from '../../../public/images/bg-card-back.png';

function CardBack({cvc}){
    return(
         <div className='absolute w-60 h-33 z-1 right-[calc(50%-130px)] top-8 md:w-70 md:h-36 md:top-70 md:-right-20 lg:top-75 lg:w-80 lg:h-40 lg:-right-35'>
                <img className='w-full' src={cardBack} alt="card back background" />
                <p className='absolute top-15 right-7 text-[9px] text-White tracking-widest md:top-17 md:text[11px] md:right-8 lg:top-20'>{cvc ? cvc : "000"}</p>   
            </div>
    )
}

export default CardBack