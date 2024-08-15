import "./App.css";
import { useState } from "react";

const App = () => {
  const [bill, setBill] = useState(null);
  const [tipPercentage1, setTipPercentage1] = useState(0);
  const [tipPercentage2, setTipPercentage2] = useState(0);

  const averageTip = (tipPercentage1 + tipPercentage2) / 2;

  const resetTipsCalculator = () => {
    setBill(null);
    setTipPercentage1(0);
    setTipPercentage2(0);
  };
  return (
    <div className="App">
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage
        tip={tipPercentage1}
        onChangeTip={(e) => setTipPercentage1(Number(e.target.value))}
      >
        <span>How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage
        tip={tipPercentage2}
        onChangeTip={(e) => setTipPercentage2(Number(e.target.value))}
      >
        <span>How did your friend like the service?</span>
      </SelectPercentage>
      {bill && <OutPutMessage bill={bill} onReset={""} tip={averageTip} />}

      <ResetButton onReset={resetTipsCalculator} />
    </div>
  );
};

export default App;

const BillInput = ({ bill, setBill }) => {
  return (
    <>
      <span>How much waas the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => {
          setBill(Number(e.target.value));
        }}
      ></input>
    </>
  );
};

const SelectPercentage = ({ tip, onChangeTip, children }) => {
  return (
    <div>
      {children}
      <select value={tip} onChange={onChangeTip}>
        <option value={0}>Dissastified(0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
};

const OutPutMessage = ({ bill, tip }) => {
  const totalBill = bill + tip;
  return (
    <h3>
      You pay $ {totalBill} ( ${bill}+ ${tip})
    </h3>
  );
};

const ResetButton = ({ onReset }) => {
  return <button onClick={onReset}>Reset</button>;
};
