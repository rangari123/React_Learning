fetch(
`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
)

# --------------------labels --------------------------

// {
// label, // The label for the input field (e.g., "From" or "To" for currency input).
// amount, // The value of the amount input (e.g., the amount of currency the user enters).

// onAmountChange, // A callback function that is triggered when the amount input value changes.
// It is used to update the `amount` state in the parent component.

// onCurrencyChange, // A callback function that is triggered when the currency dropdown value changes.
// It updates the `selectCurrency` state in the parent component.

// currencyOptions = [], // An array of currency options (e.g., ["usd", "inr", "eur"]).
// These will be displayed in the currency dropdown.

// selectCurrency = "usd", // The currently selected currency for the input (defaults to "usd" if not provided).
// This represents the currency the user wants to convert from or to.

// amountDisable = false, // A boolean value that determines whether the amount input field is disabled or not.
// If set to `true`, the user cannot interact with the amount input field.

// currencyDisable = false, // A boolean value that determines whether the currency dropdown is disabled or not.
// If set to `true`, the user cannot change the selected currency.

// className = "", // A string that allows the parent component to pass custom CSS classes for styling.
// This lets the parent component customize the appearance of the `InputBox` component.
// }

# ----------------------------input-------------

function InputBox({
label,

    className = "",

}) {

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    label
                </label>
                <input

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"

                >

                        <option value="usd">
                            usd
                        </option>

                </select>
            </div>
        </div>
    );

}export default InputBox;

# -------------------------------- app ------------------

function App() {

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

# ---------------------- custom hook -------------------------

Example Output of useCurrencyInfo("usd") for

If you call:
const currencyData = useCurrencyInfo("usd");

Then currencyData will look like:
{
date: "2025-04-22",
usd: {
inr: 83.1,
eur: 0.93,
jpy: 154.6,
// ...and more currencies
}
}
