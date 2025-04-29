import { useState } from "react";
import { InputBox } from "./componenets";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
import "./App.css";

function App() {
  //  getting the value which are gonna change/state
  const [amount, setAmout] = useState(0); // given amount
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0); // chane in amount

  // hook
  const CurrencyInfo = useCurrencyInfo(from); //  it gonna give use {key:val} object data

  // Add default empty object when calling Object.keys
  const options = Object.keys(CurrencyInfo || {});
  //  getting only {keys} ,,[ val is what we displaying ]

  // swap method - swap -->  from ➡️ to ➡️ from
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount); // optional
    setAmout(convertedAmount); // optional
  };

  // btn event listener
  const convert = () => {
    if (!CurrencyInfo || !CurrencyInfo[to]) {
      alert("Currency data not loaded yet. Please try again.");
      return;
    }

    setConvertedAmount(amount * CurrencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/11167639/pexels-photo-11167639.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="w-full">
        {/*  main container */}
        <div className="  w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* from container  / dropdown  */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(value) => setAmout(value)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>

            {/* swap btn */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>

            {/* to container */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
              {/* conver usd to inr  */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
