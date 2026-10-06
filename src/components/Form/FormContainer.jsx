import Form from "./Form";
import FormCompletedMessage from "./FormCompletedMessage";

function FormContainer({name, changeName, cardNumber, changeCardNumber, MM, changeMM, YY, changeYY, cvc, changeCvc, submit, submitForm, resetForm}){
    return(
        <main className="w-full flex flex-col justify-center items-center h-100 md:h-150 md:w-2/3 lg:h-160">
            { submit ? <FormCompletedMessage resetForm={resetForm}/> : <Form  name={name} cardNumber={cardNumber} MM={MM} YY={YY} cvc={cvc} changeName={changeName} changeCardNumber={changeCardNumber} changeMM={changeMM} changeYY={changeYY} changeCvc={changeCvc} submit={submit} submitForm={submitForm}/>}
        </main>
    )
}

export default FormContainer;