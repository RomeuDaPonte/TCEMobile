import { useEffect, useState } from "react";

const UseTotalSpent = (listOfExpenses) => {
  const [totalSpent, setTotalSpent] = useState();

  useEffect(() => {
    if (listOfExpenses) {
      let sum = 0;
      listOfExpenses.forEach((expense) => (sum += expense.amount));
      setTotalSpent(sum);
    }
  }, [listOfExpenses]);

  return { totalSpent };
};

export default UseTotalSpent;
