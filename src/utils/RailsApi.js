
import axios from 'axios';

export const fetchRailsData = () => {
    var url = 'http://localhost:4000/recipes';

    return axios.get(url)
      .then(function (response) {
        console.log(response);
        return response.data;
      });
  }
// export fetchRailsData;
