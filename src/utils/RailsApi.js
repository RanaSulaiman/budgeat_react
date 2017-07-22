
import axios from 'axios';

export const fetchRailsData = () => {
    var url = 'https://api.budgeat.net/recipes';

    return axios.get(url)
      .then(function (response) {
        console.log(response);
        return response.data;
      });
  }
