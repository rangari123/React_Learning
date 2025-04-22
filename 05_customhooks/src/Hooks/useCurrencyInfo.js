// custom hook

/*
what do we want to do with this useCurrencyInfo funciton
This custom hook fetches and returns currency conversion rates
for a given base currency (e.g., "usd", "inr", etc.).
It returns an object containing conversion rates for all other currencies.
*/

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => {
        console.error("Failed to fetch currency data:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
