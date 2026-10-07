import FormBasicInput from "./FormBasicInput";
import FormButton from "./FormButton";
import FormExpCVSInput from "./FormExpCVSInput";
import { useState } from "react";
import { motion } from "motion/react";

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

    if (!/^(0[1-9]|1[0-2])$/.test(MM)) {
  setMmError(MM ? "Invalid month" : "Can't be empty");
  isValid = false;
} else {
  setMmError("");
}

if (!/^\d{2}$/.test(YY)) {
  setYyError(YY ? "Year must have 2 digits" : "Can't be empty");
  isValid = false;
} else {
  setYyError("");
}

if (!/^\d{3}$/.test(cvc)) {
  setCvcError(cvc ? "CVC must have 3 digits" : "Can't be empty");
  isValid = false;
} else {
  setCvcError("");
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
    <motion.form
      className="w-full pt-20 h-full flex flex-col gap-4 justify-center items-center p-5 md:pt-0 max-w-80"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
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
    </motion.form>
  );
}

export default Form;
