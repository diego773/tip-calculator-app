import { useState } from "react";

import BillAmountInput from "../BillAmountInput";
import SelectTipPercentage from "../SelectTipPercentage";
import NumberOfPeople from "../NumberOfPeople";

function Form() {
  return (
    <form className="form">
      <BillAmountInput />
      <SelectTipPercentage />
      <NumberOfPeople />
    </form>
  );
}

export default Form;
