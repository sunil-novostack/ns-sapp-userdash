import { useState, useEffect } from "react";
import axios from "axios";

export const useProductList = (params) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    axios
      .get("/api/product")
      .then(({ data: response }) => {
        setdata(response);
        setloading(false);
      })
      .catch((err) => {
        seterror(err);
        setloading(false);
      });
  }, []);

  return [data, loading, error];
};
