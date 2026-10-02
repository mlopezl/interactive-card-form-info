import FormBasicInput from "./FormBasicInput";
import FormButton from "./FormButton";
import FormExpCVSInput from "./FormExpCVSInput";

function Form() {
  return (
    <form
      className="w-full pt-20 h-full flex flex-col gap-4 justify-center items-center p-5 md:pt-0 max-w-80"
      action="post"
    >
      <FormBasicInput label={"cardholder name"} id={"name"} 
      type={"text"} placeholder={"Jane Apleseed"}/>
      <FormBasicInput label={"card number"} id={"cardnumber"}
        type={"number"} placeholder={"1234 5678 9123 0000"}
      />
      <FormExpCVSInput/>
      <FormButton />
    </form>
  );
}

export default Form;
