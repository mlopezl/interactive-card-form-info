import checkIcon from '../../../public/images/icon-complete.svg';

function FormCompletedMessage({resetForm}){
    return(
        <div className='w-full pt-20 h-full flex flex-col gap-4 justify-center items-center p-5 md:pt-0 max-w-80'>
            <img src={checkIcon} alt="Check successfull message" />
            <p className='text-2xl text-Purple-950 font-bold tracking-widest uppercase'>Thank you!</p>
            <p className='text-md text-Gray-400 font-semibold'>We've added your card details</p>
            <button
            onClick={resetForm}
            className="w-full p-3 text-White rounded-lg bg-Purple-950">Continue</button>
        </div>
    )
}

export default FormCompletedMessage;