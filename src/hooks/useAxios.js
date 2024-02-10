import axios from "axios";
import { v4 as uuid } from "uuid";
import React, { useState, useEffect } from "react";

const useAxios = (url) => {
  const [state, setState] = useState([]);
  const addCard = async (name) => {
    url = typeof name === "string" ? `${url}${name}/` : url;

    const res = await axios.get(url);
    setState((card) => [...state, { ...res.data, id: uuid() }]);
  };

  return [state, addCard];
};

export default useAxios;
