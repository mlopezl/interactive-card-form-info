function FormExpCVSInput({MM, changeMM, YY, changeYY, cvc, changeCvc}){
    return(
        <div className="w-full flex flex-col gap-2">
        <label
          className="text-xs text-Purple-950 font-semibold uppercase tracking-widest"
          htmlFor="exp"
        >
          Exp. date (mm/yy)&nbsp; &nbsp; cvc{" "}
        </label>
        <div className="flex gap-2">
          <input
            value={MM}
            onChange={(e) => changeMM(e.target.value)}
            className="w-15 text-center border-1 border-Gray-200 h-10 rounded-lg p-2
                placeholder:text-Gray-400"
            type="number"
            min="1"
            max="12"
            id="exp"
            placeholder="MM"
          />
          <input
          value={YY}
          onChange={(e) => changeYY(e.target.value)}
            className="w-15 text-center border-1 border-Gray-200 h-10 rounded-lg p-2
                placeholder:text-Gray-400"
            type="number"
            min="0"
            max="99"
            id="exp"
            placeholder="YY"
          />
          <input
            value={cvc}
            onChange={(e) => changeCvc(e.target.value)}
            className="w-35 pl-3 border-1 border-Gray-200 h-10 rounded-lg p-2
                placeholder:text-Gray-400"
            type="number"
            id="exp"
            placeholder="eg. 123"
          />
        </div>
      </div>
    )
}

export default FormExpCVSInput;