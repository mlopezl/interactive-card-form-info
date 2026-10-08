function FormExpCVSInput({
  MM,
  changeMM,
  YY,
  changeYY,
  cvc,
  changeCvc,
  mmError,
  setMmError,
  yyError,
  setYyError,
  cvcError,
  setCvcError
}) {

  const handleMMChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 2);

    changeMM(value);

    if (value.trim() === "") {
      setMmError("Can't be empty");
    } else if (Number(value) < 1 || Number(value) > 12) {
      setMmError("Invalid month");
    } else {
      setMmError("");
    }
  };

  const handleYYChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 2);

    changeYY(value);

    if (value.trim() === "") {
      setYyError("Can't be empty");
    } else {
      setYyError("");
    }
  };

  const handleCvcChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 3);

    changeCvc(value);

    if (value.trim() === "") {
      setCvcError("Can't be empty");
    } else if (value.length < 3) {
      setCvcError("CVC must have 3 digits");
    } else {
      setCvcError("");
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">

      <label
        className="text-xs text-Purple-950 font-semibold uppercase tracking-widest"
        htmlFor="month"
      >
        Exp. date (mm/yy)&nbsp;&nbsp; cvc
      </label>

      <div className="flex gap-2">

        <input
  value={MM}
  onChange={handleMMChange}
  aria-invalid={Boolean(mmError)}
  className={`input-gradient border w-15 text-center h-10 rounded-lg p-2 placeholder:text-Gray-400 focus:outline-none focus:ring-1 hover:cursor-pointer ${
    mmError
      ? "border-Red-400 focus:border-Red-400 focus:ring-Red-400"
      : "border-Gray-200"
  }`}
  type="text"
  inputMode="numeric"
  id="month"
  placeholder="MM"
/>

<input
  value={YY}
  onChange={handleYYChange}
  aria-invalid={Boolean(yyError)}
  className={`input-gradient border w-15 text-center h-10 rounded-lg p-2 placeholder:text-Gray-400 focus:outline-none focus:ring-1 hover:cursor-pointer ${
    yyError
      ? "border-Red-400 focus:border-Red-400 focus:ring-Red-400"
      : "border-Gray-200"
  }`}
  type="text"
  inputMode="numeric"
  id="year"
  placeholder="YY"
/>

<input
  value={cvc}
  onChange={handleCvcChange}
  aria-invalid={Boolean(cvcError)}
  className={`input-gradient border w-35 pl-3 h-10 rounded-lg p-2 placeholder:text-Gray-400 focus:outline-none hover:cursor-pointer ${
    cvcError
      ? "border-Red-400 focus:border-Red-400 focus:ring-Red-400"
      : "border-Gray-200"
  }`}
  type="text"
  inputMode="numeric"
  id="cvc"
  placeholder="e.g. 123"
/>

      </div>

      <div className="flex gap-2">

        <div className="w-32">
          {(mmError || yyError) && (
            <p className="text-red-500 text-xs">
              {mmError || yyError}
            </p>
          )}
        </div>

        <div className="w-35">
          {cvcError && (
            <p className="text-red-500 text-xs">
              {cvcError}
            </p>
          )}
        </div>

      </div>

    </div>
  );
}

export default FormExpCVSInput;