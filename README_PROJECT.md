How filtering is working:
Based on three available filtering features - Cuisine, Cost, Time

var cuisineFilteredList = [];
var costCuisineFilteredList = [];
var timeCostCuisineFilteredList = [];

I decided to start checking cuisine and if cuisine text is (===0),meaning the user didn't select this feature, then the cuisineFilteredList is allRecipes. The other scenario is cuisine text is (!==0), meaning the user select a value, then the cuisineFilteredList will be the resulted filtered list. And for the next nested filtering, lets say the user select a cost, then the resulted filtered list is costCuisineFilteredList. And for the third next nested lets say the time, the filtering will be inside costCuisineFilteredList and the resulted list will be timeCostCuisineFilteredList. This list will be the one to perform the next filtering on and so on


Link of react-router gem
https://www.npmjs.com/package/react-router 
