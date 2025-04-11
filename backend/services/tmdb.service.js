import axios from "axios"
import { ENV_VARS } from "../config/envVarse.js";

export const fetchfromTMDB = async (url) => {
    const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer' + ENV_VARS.TMDB_API_KEY
        }
      };

      const response = await axios.get(url, options)

        if (response.status !== 200) {
            throw new Error('Error fetching data from TMDB' + response.statusText);
        }
     
      return response.data
}