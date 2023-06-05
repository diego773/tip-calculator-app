import { useState } from "react";

function BillAmountInput() {
  const [billAmount, setBillAmount] = useState({
    number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });

  function handleInputChange(event) {
    event.preventDefault();
    if (!billAmount.number) {
      alert("Please enter a number");
    } else {
      return setBillAmount(billAmount);
    }
  }

  return (
    <label>
      <input
        className="input-box"
        onChange={handleInputChange}
        type="number"
        name="amount"
        placeholder="$"
      />
    </label>
  );
}

export default BillAmountInput;
