var axios = require('axios');

module.exports = {
  fetchRecipeDetails: function() {
    var railsUri = "https://localhost/4000/recipes"

    return axios.get(railsUri)
    .then(function (response) {
      return response;
    });
  }

}

fetchRecipeDetails
  .then(function(){
    
  })
