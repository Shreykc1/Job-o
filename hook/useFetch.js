import { useState, useEffect } from "react";
import axios from 'axios';


const useFetch = (endpoint,query) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //TODO: PUT API KEY IN DOTENV
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          ...query
        },
        headers: {
          'x-rapidapi-key': '602b9df22bmsh6b00b6fcdca10e8p18cfc7jsn29e07c194fe8',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async () => {
        setIsLoading(true);

        try {
          const response = await axios.request(options);
          setData(response.data.data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          console.log(error)
        } finally {
          setIsLoading(false);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      };

      return { data, isLoading, error, refetch };
    };

    export default useFetch;
