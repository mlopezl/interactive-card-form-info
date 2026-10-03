import FormBasicInput from "./FormBasicInput";
import FormButton from "./FormButton";
import FormExpCVSInput from "./FormExpCVSInput";

function Form({name, changeName, cardNumber, changeCardNumber, MM, changeMM, YY, changeYY, cvc, changeCvc}) {
  return (
    <form
      className="w-full pt-20 h-full flex flex-col gap-4 justify-center items-center p-5 md:pt-0 max-w-80"
      action="post"
    >
      <FormBasicInput name={name} changeName={changeName}  label={"cardholder name"} id={"name"} 
      type={"text"} placeholder={"Jane Apleseed"}/>
      <FormBasicInput cardNumber={cardNumber} changeCardNumber={changeCardNumber} label={"card number"} id={"cardnumber"}
        type={"text"} placeholder={"1234 5678 9123 0000"}
      />
      <FormExpCVSInput MM={MM} YY={YY} cvc={cvc} changeMM={changeMM} changeYY={changeYY} changeCvc={changeCvc}/>
      <FormButton />
    </form>
  );
}

export default Form;
