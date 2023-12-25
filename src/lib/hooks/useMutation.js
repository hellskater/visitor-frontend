import { useState } from "react";
import axiosClient from "../axiosInstance";

const useMutation = ({ route, method = "POST" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");

  const mutate = async (payload) => {
    setIsLoading(true);
    try {
      const res = await axiosClient({
        method,
        url: route,
        data: payload,
      });
      setData(res.data);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    data,
    status,
    mutate,
  };
};

export default useMutation;
