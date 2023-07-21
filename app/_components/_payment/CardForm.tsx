import React from "react";

const CardForm = ({
  children,
  submitHandler,
}: {
  children: React.ReactNode;
  submitHandler: React.FormEventHandler;
}) => {
  const formGroupClass = "grid md:items-center mb-6";
  const inputClass =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  return (
    <div>
      <div className={formGroupClass}>
        <label htmlFor="countries" className="block mb-2">
          Select a Payment Option
        </label>
        <select id="paymentMethod" className={inputClass}>
          <option value="card" selected>
            Card
          </option>
        </select>
      </div>
      <form className="grid " onSubmit={submitHandler}>
        <div className={formGroupClass}>
          <label htmlFor="cardNumber">Card Number</label>
          <input required type="text" id="cardNumber" className={inputClass} />
        </div>
        <div className={formGroupClass}>
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            required
            type="text"
            id="expirationDate"
            className={inputClass}
          />
        </div>
        <div className={formGroupClass}>
          <label htmlFor="securityCode">Security Code</label>
          <input
            required
            type="password"
            id="securityCode"
            className={inputClass}
          />
        </div>
        <div className={formGroupClass}>
          <label htmlFor="cardName">Name On Card</label>
          <input required type="text" id="cardName" className={inputClass} />
        </div>
        {children}
      </form>
    </div>
  );
};

export default CardForm;
