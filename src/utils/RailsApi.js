
import axios from 'axios';

export const fetchRailsData = () => {
    var url = 'http://production.hfu4buysj5.us-west-2.elasticbeanstalk.com/recipes';

    return axios.get(url)
      .then(function (response) {
        console.log(response);
        return response.data;
      });
  }

// const without (export const) did't work
// export fetchRailsData;
