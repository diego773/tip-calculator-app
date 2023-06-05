import { useState } from "react";

function SelectTipPercentage() {
  const [selectedTipPercentage, setSelectedTipPercentage] = useState();
  // const [person, setPerson] = useState(0);

  // Calculate percentage value based on percentage value between total amount
  const handleSelectedTipPercentage = (e) => {
    console.log(e.target.value);
    const percent = e.target.value;
    const percentValue = percent / 100;
    setSelectedTipPercentage(percentValue);
    console.log(percentValue);
  };

  return (
    <>
      <label htmlFor="percentage">
        <input
          type="radio"
          name="tip"
          value={selectedTipPercentage}
          onChange={handleSelectedTipPercentage}
        ></input>
        5%
      </label>
      <label htmlFor="percentage">
        <input type="radio" name="tip" value="10"></input>
        10%
      </label>
      <label htmlFor="percentage">
        <input type="radio" name="tip" value="15"></input>
        15%
      </label>
      <label htmlFor="percentage">
        <input type="radio" name="tip" value="25"></input>
        25%
      </label>
      <label htmlFor="percentage">
        <input type="radio" name="tip" value="50"></input>
        50%
      </label>
      <label htmlFor="percentage">
        <input type="radio" name="tip" value=""></input>
        Custom
      </label>
    </>
  );
}

export default SelectTipPercentage;
