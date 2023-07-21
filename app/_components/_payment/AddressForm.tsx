import React from "react";

const AddressForm = ({
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
      <form className="grid " onSubmit={submitHandler}>
        <div className={formGroupClass}>
          <label htmlFor="country">Country</label>
          <input required type="text" id="country" className={inputClass} />
        </div>
        <div className={formGroupClass}>
          <label htmlFor="street">Street Address</label>
          <input required type="text" id="street" className={inputClass} />
        </div>
        <div className={formGroupClass}>
          <label htmlFor="city">City</label>
          <input required type="text" id="city" className={inputClass} />
        </div>
        <div className={formGroupClass}>
          <label htmlFor="state">State/Province</label>
          <input required type="text" id="state" className={inputClass} />
        </div>
        <div className={formGroupClass}>
          <label htmlFor="zip">Zip Code</label>
          <input required type="text" id="zip" className={inputClass} />
        </div>
        {children}
      </form>
    </div>
  );
};

export default AddressForm;
