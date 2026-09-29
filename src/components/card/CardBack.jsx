import cardBack from '../../../public/images/bg-card-back.png';

function CardBack(){
    return(
         <div className='absolute w-60 h-33 z-1 left-[calc(50%-95px)] top-8'>
                <img className='w-full' src={cardBack} alt="card back background" />
                <p className='absolute top-15 right-7 text-[9px] text-White tracking-widest'>000</p>   
            </div>
    )
}

export default CardBack