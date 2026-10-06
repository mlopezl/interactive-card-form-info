import { use } from "react";
import CardContainer from "./components/card/CardContainer"
import FormContainer from "./components/Form/FormContainer"
import { useState } from "react"

function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] =  useState("");
  const [MM, setMM] = useState("");
  const [YY, setYY] = useState("");
  const [cvc, setCvc] = useState("");

  const [submit, setSubmit] = useState(false);
  const submitForm = () =>{
    setSubmit(true);
  }

  const resetForm = () =>{
    setSubmit(false);
  }

  return (
    <div className="w-full min-h-screen bg-White font-Space-Grotesk md:flex">
      <CardContainer name={name} cardNumber={cardNumber} MM={MM} YY={YY} cvc={cvc}/>
      <FormContainer name={name} cardNumber={cardNumber} MM={MM} YY={YY} cvc={cvc} changeName={setName} changeCardNumber={setCardNumber} changeMM={setMM} changeYY={setYY} changeCvc={setCvc}  submit={submit} submitForm={submitForm} resetForm={resetForm} />
    </div>
  )
}

export default App
