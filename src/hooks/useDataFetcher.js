import { useEffect, useState } from "react";

const useDataFetcher = (url, method) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const requestOptions = {
          method,
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
          throw new Error("Something went wrong when fetching");
        }

        const responseData = await response.json();
        console.log(responseData)
        // Convert object format to an array of values
        const formattedData = Object.values(responseData);
        console.log(formattedData)

        setData(formattedData);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useDataFetcher;

