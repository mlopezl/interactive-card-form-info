import Form from "./Form";
import FormCompletedMessage from "./FormCompletedMessage";

function FormContainer({name, changeName, cardNumber, changeCardNumber, MM, changeMM, YY, changeYY, cvc, changeCvc}){
    return(
        <main className="w-full flex flex-col justify-center items-center md:w-2/3">
            <Form  name={name} cardNumber={cardNumber} MM={MM} YY={YY} cvc={cvc} changeName={changeName} changeCardNumber={changeCardNumber} changeMM={changeMM} changeYY={changeYY} changeCvc={changeCvc}/>
            {/* <FormCompletedMessage/> */}
        </main>
    )
}

export default FormContainer;