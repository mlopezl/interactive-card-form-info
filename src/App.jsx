import { use } from "react";
import CardContainer from "./components/card/CardContainer"
import FormContainer from "./components/Form/FormContainer"
import { useState } from "react"

function App() {
  const [name, setName] = useState("");
  const changeName = (name) =>{
    setName(name)
  }

  const [cardNumber, setCardNumber] =  useState("");
  const changeCardNumber = (cardNumber)=> {
    setCardNumber(cardNumber);
  }

  const [MM, setMM] = useState(null);
  const changeMM = (MM) =>{
    setMM(MM);
  }

  const [YY, setYY] = useState(null);
  const changeYY = (YY) =>{
    setYY(YY);
  }

  const [cvc, setCvc] = useState(null);
  const changeCvc = (cvc) =>{
    setCvc(cvc);
  }

  return (
    <div className="w-full min-h-screen bg-White font-Space-Grotesk md:flex">
      <CardContainer name={name} cardNumber={cardNumber} MM={MM} YY={YY} cvc={cvc}/>
      <FormContainer name={name} cardNumber={cardNumber} MM={MM} YY={YY} cvc={cvc} changeName={changeName} changeCardNumber={changeCardNumber} changeMM={changeMM} changeYY={changeYY} changeCvc={changeCvc}/>
    </div>
  )
}

export default App
