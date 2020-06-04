import http from "./httpService";
import { apiUrl } from "../../config";

const apiEndPont = apiUrl + "/expense";

function newExpense(expense) {
  return new Promise((resolve, reject) => {
    http
      .post(apiEndPont, { ...expense })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export default {
  newExpense,
};
