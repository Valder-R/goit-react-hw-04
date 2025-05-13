import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const fetchData = async (searchVal, curentPage)=> {
    const response = await axios.get("", {
        params: {
          client_id: "PcDGVBlQbnoOjss3cPKeJ1dEjQGABwpKslQjuEefe_E",
          query: searchVal,
          per_page: 12,
          page: curentPage
        }
    });
    
    return response.data;
}