function FormBasicInput({label, id, type, placeholder, changeName, name, cardNumber, changeCardNumber}){
    return(
         <div 
         className="w-full flex flex-col gap-2">
                <label className="text-xs text-Purple-950 font-semibold uppercase tracking-widest" htmlFor={id}>{label}</label>
                <input 
                value={id === "name" ? name : cardNumber}
                onChange={(e) => {
                    if(id === "name"){
                        changeName(e.target.value)
                    } else {
                        const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 16)
                        .replace(/\d{4}(?=\d)/g, "$& "); 
                        changeCardNumber(value)
                    }
                }}
                className="border-1 border-Gray-200 h-10 rounded-lg p-2
                placeholder:text-Gray-400" type={type} id={id} placeholder={`e.g ${placeholder}`} />
        </div>
    )
}

export default FormBasicInput;