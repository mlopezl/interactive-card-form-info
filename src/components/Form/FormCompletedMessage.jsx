import checkIcon from '../../../public/images/icon-complete.svg';
import { motion } from "motion/react";

function FormCompletedMessage({resetForm}){
    return(
        <motion.div
            className='w-full pt-20 h-full flex flex-col gap-4 justify-center items-center p-5 md:pt-0 max-w-80'
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <img src={checkIcon} alt="Check successfull message" />
            <p className='text-2xl text-Purple-950 font-bold tracking-widest uppercase'>Thank you!</p>
            <p className='text-md text-Gray-400 font-semibold'>We've added your card details</p>
            <button
            onClick={resetForm}
            className="w-full p-3 text-White rounded-lg bg-Purple-950 hover:brightness-140">Continue</button>
        </motion.div>
    )
}

export default FormCompletedMessage;
