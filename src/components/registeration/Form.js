import React, { useState } from "react";
import Payment from "./Payment";
import { Confirm } from "./Confirm";
import { Success } from "./Success";
import Shipping from "./Shipping";

export const Registeration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addresss: "",
    city: "",
    country: "",
  });
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  switch (step) {
    case 1:
      return (
        <Shipping
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Payment
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Confirm formData={formData} nextStep={nextStep} prevStep={prevStep} />
      );
    default:
      return <Success />;
  }
};
