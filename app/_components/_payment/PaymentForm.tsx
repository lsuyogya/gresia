"use client";

import { ChangeEvent, useState } from "react";
import CompanyInfoForm from "./CompanyInfoForm";
import AddressForm from "./AddressForm";
import CardForm from "./CardForm";

const PaymentForm = () => {
  const [formPage, setFormPage] = useState(1);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    cardName: "",
  });
  const handleNextClick = (e: React.FormEvent) => {
    e.preventDefault();
    setFormPage((prev) => prev + 1);
  };
  const handleBuyNow = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  switch (formPage) {
    case 1:
      return (
        <CompanyInfoForm
          submitHandler={handleNextClick}
          updateHandler={handleUpdate}>
          <NextButton />
        </CompanyInfoForm>
      );
    case 2:
      return (
        <AddressForm submitHandler={handleNextClick}>
          <NextButton />
        </AddressForm>
      );
    case 3:
      return (
        <CardForm submitHandler={handleBuyNow}>
          <BuyButton />
        </CardForm>
      );

    default:
      return null;
  }

  function NextButton() {
    return (
      <button
        className="bg-blue-500 p-2 px-6 rounded text-white w-max place-self-center"
        type="submit">
        Next page
      </button>
    );
  }
  function BuyButton() {
    return (
      <button
        className="bg-green-500 p-2 px-6 rounded text-white w-max place-self-center"
        type="submit">
        Subscribe Now
      </button>
    );
  }
};

export default PaymentForm;
