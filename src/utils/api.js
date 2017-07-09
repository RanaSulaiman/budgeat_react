var axios = require('axios');

module.exports = {
  fetchRecipeDetails: function(recipes) {
    var railsUri = "http://localhost/4000/recipes"

    return axios.get(railsUri)
    .then(function (response) {
      return response;
    });
  }

}

// fetchRecipeDetails
//   .then(function(){
//
//   })
