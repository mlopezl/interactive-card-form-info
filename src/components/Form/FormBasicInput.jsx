function FormBasicInput({
  label,
  id,
  type,
  placeholder,
  changeName,
  name,
  cardNumber,
  changeCardNumber,
  error,
  setError
}) {
  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (id === "name") {
      changeName(inputValue);

      if (inputValue.trim() === "") {
        setError("Can't be empty");
      } else if (/\d/.test(inputValue)) {
        setError("Numbers are not allowed");
      } else {
        setError("");
      }

      return;
    }

    const formattedValue = inputValue
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/\d{4}(?=\d)/g, "$& ");

    changeCardNumber(formattedValue);

    if (formattedValue.trim() === "") {
      setError("Can't be empty");
    } else {
      setError("");
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <label
        className="text-xs text-Purple-950 font-semibold uppercase tracking-widest"
        htmlFor={id}
      >
        {label}
      </label>

      <input
        value={id === "name" ? name : cardNumber}
        onChange={handleChange}
        className="border border-Gray-200 h-10 rounded-lg p-2 placeholder:text-Gray-400"
        type={type}
        id={id}
        placeholder={`e.g ${placeholder}`}
      />

      {error && (
        <p className="text-red-500 text-xs">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormBasicInput;