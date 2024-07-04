import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../types/product";

interface fetchType {
  isLoading: boolean;
  error: string;
  data: Product[];
}

const useFetch = (url: string): fetchType => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = (await axios.get(url)).data;
      setData(res.products);
      setIsLoading(false);
    } catch (error:any) {
      setIsLoading(false);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {isLoading,error,data} 
};

export default useFetch;
