import FormBasicInput from "./FormBasicInput";
import FormButton from "./FormButton";
import FormExpCVSInput from "./FormExpCVSInput";
import { useState } from "react";

function Form({
  name,
  changeName,
  cardNumber,
  changeCardNumber,
  MM,
  changeMM,
  YY,
  changeYY,
  cvc,
  changeCvc,
  submitForm
}) {
  const [nameError, setNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [mmError, setMmError] = useState("");
const [yyError, setYyError] = useState("");
const [cvcError, setCvcError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Can't be empty");
      isValid = false;
    } else if (/\d/.test(name)) {
      setNameError("Numbers are not allowed");
      isValid = false;
    } else {
      setNameError("");
    }

    if (cardNumber.trim() === "") {
      setCardNumberError("Can't be empty");
      isValid = false;
    } else {
      setCardNumberError("");
    }

    if (isValid) {
      submitForm();
      changeName("");
      changeCardNumber("")
      changeCvc("")
      changeMM("")
      changeYY("")
    }
  };

  return (
    <form
      className="w-full pt-20 h-full flex flex-col gap-4 justify-center items-center p-5 md:pt-0 max-w-80"
      onSubmit={handleSubmit}
    >
      <FormBasicInput
        name={name}
        changeName={changeName}
        label="cardholder name"
        id="name"
        type="text"
        placeholder="Jane Appleseed"
        error={nameError}
        setError={setNameError}
      />

      <FormBasicInput
        cardNumber={cardNumber}
        changeCardNumber={changeCardNumber}
        label="card number"
        id="cardnumber"
        type="text"
        placeholder="1234 5678 9123 0000"
        error={cardNumberError}
        setError={setCardNumberError}
      />

      <FormExpCVSInput
        MM={MM}
  changeMM={changeMM}
  YY={YY}
  changeYY={changeYY}
  cvc={cvc}
  changeCvc={changeCvc}

  mmError={mmError}
  setMmError={setMmError}

  yyError={yyError}
  setYyError={setYyError}

  cvcError={cvcError}
  setCvcError={setCvcError}
      />

      <FormButton />
    </form>
  );
}

export default Form;