import React, { ChangeEvent, useState } from "react";

export const useFlourCalculator = () => {
  const [selfRaisingFlour, setFlour] = useState<string | undefined>();
  const plainFlour = (parseFloat(selfRaisingFlour ?? "0") * 0.95).toFixed(2);
  const bakingSoda = (parseFloat(selfRaisingFlour ?? "0") * 0.05).toFixed(2);

  const handleFlourChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFlour(e.target.value);

  return {
    handleFlourChange,
    selfRaisingFlour,
    plainFlour,
    bakingSoda,
  };
};
