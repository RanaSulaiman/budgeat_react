import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Foundation from 'react-foundation'
import PropTypes from 'prop-types'
// import ReactRouter from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
	Switch,
  Redirect
} from 'react-router-dom'

import FilterableRecipeTable from './FilterableRecipeTable'

import api from '../utils/api'

// var api = require('../utils/api');
// var axios = require('axios');
//
// componentDidMount() {
//     axios.get(`https://localhost/4000/recipes.json`)
//       .then(res => {
//         const posts = res.data.data.children.map(obj => obj.data);
//
//       });
//   }

// componentDidMount() {
//     api.fetchRecipeDetails()
// 			.then(function(recipe) {
// 				consloe.log(recipe);
// 		})
// }

// on mount, fetch all products and stored them as this component's state
// componentDidMount () {
//     this.serverRequest = $.get("https://localhost/4000/recipes")
//
// }

var allRecipes = [
	{
		id: 1,
		recipe_id: "723984",
		title: "Cabbage Salad with Peanuts",
		image: "https://spoonacular.com/recipeImages/Garlicky-Pasta-with-Swiss-Chard-and-Beans-482788.jpg",
		source_uri: "http://naturallyella.com/cabbage-salad-with-peanuts/",
		source_name: "Naturally Ella",
		prep_time: 15,
		cook_time: 0,
		ready_time: 15,
		gluten: "t",
		dairy: "t",
		vegetarian: "t",
		vegan: "t",
		servings: 2,
		price_serving: 115.09,
		cuisines: "[]",
		// dish_type: ["side dish", "lunch", "main course", "salad", "main dish", "dinner"],
		// diets: ["gluten free", "vegan"],
		calories: null
		},
		{
		id: 2,
		recipe_id: "482788",
		title: "Garlicky Pasta with Swiss Chard and Beans",
		image: "Garlicky-Pasta-with-Swiss-Chard-and-Beans-482788.jpg",
		source_uri: "http://thelemonbowl.com/2012/08/garlicky-pasta-with-swiss-chard-and-beans-sundaysupper.html",
		source_name: "The Lemon Bowl",
		prep_time: 20,
		cook_time: 15,
		ready_time: 35,
		gluten: "f",
		dairy: "f",
		vegetarian: "f",
		vegan: "f",
		servings: 4,
		price_serving: 183.15,
		cuisines: "[]",
		// dish_type: "["side dish", "lunch", "main course", "main dish", "dinner"]",
		// diets: "[]",
		calories: null
		},
		{
		id: 3,
		recipe_id: "695325",
		title: "Veggistrone",
		image: "veggistrone-695325.jpg",
		source_uri: "http://www.eatingwell.com/recipes/veggistrone.html",
		source_name: "Eating Well",
		prep_time: 60,
		cook_time: 45,
		ready_time: 105,
		gluten: "t",
		dairy: "f",
		vegetarian: "f",
		vegan: "f",
		servings: 10,
		price_serving: 173.54,
		cuisines: "[]",
		// dish_type: "["lunch", "main course", "main dish", "dinner"]",
		// diets: "["gluten free"]",
		calories: null
		},
		{
		id: 4,
		recipe_id: "695646",
		title: "Steak & Potato Kebabs with Creamy Cilantro Sauce for Two",
		image: "steak-potato-kebabs-with-creamy-cilantro-sauce-for-two-695646.jpg",
		source_uri: "http://www.eatingwell.com/recipes/steak_potato_kebabs_with_creamy_cilantro_sauce_for_two.html",
		source_name: "Eating Well",
		prep_time: 40,
		cook_time: 0,
		ready_time: 40,
		gluten: "t",
		dairy: "f",
		vegetarian: "f",
		vegan: "f",
		servings: 2,
		price_serving: 467.06,
		cuisines: "[]",
		// dish_type: "["lunch", "main course", "main dish", "dinner"]",
		// diets: "["gluten free"]",
		calories: null
		},
		{
		id: 5,
		recipe_id: "482574",
		title: "Slow Cooker Vegetarian Chili with Butternut Squash",
		image: "Slow-Cooker-Vegetarian-Chili-with-Butternut-Squash-482574.jpg",
		source_uri: "http://thelemonbowl.com/2013/04/slow-cooker-vegetarian-chili-with-butternut-squash.html",
		source_name: "The Lemon Bowl",
		prep_time: 10,
		cook_time: 240,
		ready_time: 250,
		gluten: "t",
		dairy: "t",
		vegetarian: "t",
		vegan: "f",
		servings: 4,
		price_serving: 228.57,
		cuisines: "[american]",
		// dish_type: "["lunch", "soup", "main course", "main dish", "dinner"]",
		// diets: "["gluten free", "dairy free", "vegetarian"],
		calories: null
		},
		{
		id: 6,
		recipe_id: "551452",
		title: "Beef Liver with Fig, Bacon and Caramelized Onion Compote [or the ultimate beef liver ]",
		image: "Beef-Liver-with-Fig--Bacon-and-Caramelized-Onion-Compote-[or-the-ultimate-beef-liver-]-551452.png",
		source_uri: "http://thehealthyfoodie.com/2013/07/11/beef-liver-with-fig-bacon-and-caramelized-onion-compote/",
		source_name: "The Healthy Foodie",
		prep_time: null,
		cook_time: null,
		ready_time: 45,
		gluten: "t",
		dairy: "t",
		vegetarian: "f",
		vegan: "f",
		servings: 2,
		price_serving: 269.28,
		cuisines: "[]",
		// dish_type: "["lunch", "main course", "main dish", "dinner"]",
		// diets: "["caveman", "gluten free", "dairy free", "primal", "whole 30"]",
		calories: null
		},
		{
		id: 7,
		recipe_id: "222482",
		title: "Roasted vegetable & feta tostada",
		image: "Roasted-vegetable---feta-tostada-222482.jpg",
		source_uri: "http://www.bbcgoodfood.com/recipes/1658642/roasted-vegetable-and-feta-tostada",
		source_name: "BBC Good Food",
		prep_time: 15,
		cook_time: 15,
		ready_time: 30,
		gluten: "f",
		dairy: "f",
		vegetarian: "f",
		vegan: "f",
		servings: 2,
		price_serving: 266.53,
		cuisines: "[mexican]",
		// dish_type: "["antipasti", "lunch", "main course", "starter", "snack", "appetizer", "main dish", "antipasto" ]",
		diets: "[]",
		calories: null
		},
		{
		id: 8,
		recipe_id: "551484",
		title: "blackened salmon tacos with cilantro yogurt sauce",
		image: "blackened-salmon-tacos-with-cilantro-yogurt-sauce-551484.jpg",
		source_uri: "http://www.greensnchocolate.com/2013/07/blackened-salmon-tacos-with-cilantro-yogurt-sauce.html",
		source_name: "Greens And Chocolate",
		prep_time: null,
		cook_time: null,
		ready_time: 45,
		gluten: "t",
		dairy: "f",
		vegetarian: "f",
		vegan: "f",
		servings: 2,
		price_serving: 920.91,
		cuisines: "mexican",
		// dish_type: "["lunch", "main course", "main dish", "dinner"]",
		// diets: "["gluten free", "pescatarian"]",
		calories: null
		},
		{
		id: 9,
		recipe_id: "609091",
		title: "Three Bean Greek Kale Salad",
		image: "Three-Bean-Greek-Kale-Salad-609091.jpg",
		source_uri: "http://veggieandthebeastfeast.com/2014/08/06/three-bean-greek-kale-salad/",
		source_name: "Veggie and the Beast Feast",
		prep_time: 10,
		cook_time: 0,
		ready_time: 10,
		gluten: "t",
		dairy: "f",
		vegetarian: "t",
		vegan: "f",
		servings: 4,
		price_serving: 153.54,
		cuisines: "greek, mediterranean, european",
		// dish_type: "["side dish", "lunch", "main course", "salad", "main dish", "dinner"]",
		// diets: "["gluten free", "vegetarian"]",
		calories: null
		},
		{
		id: 10,
		recipe_id: "610524",
		title: "Cedar-Planked Salmon with Fresh Sorrel Sauce",
		image: "Cedar-Planked-Salmon-with-Fresh-Sorrel-Sauce-610524.jpg",
		source_uri: "http://www.crumbblog.com/2014/06/planked-salmon-with-fresh-sorrel-sauce.html",
		source_name: "Crumb",
		prep_time: 20,
		cook_time: 15,
		ready_time: 35,
		gluten: "t",
		dairy: "f",
		vegetarian: "f",
		vegan: "f",
		servings: 6,
		price_serving: 480.55,
		cuisines: "[]",
		// dish_type: "["lunch", "main course", "main dish", "dinner"]",
		// diets: "["gluten free", "primal", "pescatarian"]",
		calories: null
		},
		{
		id: 11,
		recipe_id: "146557",
		title: "Liver and Onions W/ Gravy",
		image: "liver-and-onions-w_-gravy-2-146557.jpg",
		source_uri: "http://www.food.com/recipe/liver-and-onions-w-gravy-446821",
		source_name: "Food.com",
		prep_time: 10,
		cook_time: 20,
		ready_time: 30,
		gluten: "f",
		dairy: "t",
		vegetarian: "f",
		vegan: "f",
		servings: 4,
		price_serving: 99.26,
		cuisines: "[]",
		// dish_type: "["lunch", "main course", "main dish", "dinner"]",
		// diets: "["dairy free"]",
		calories: null
		},
		{
		id: 12,
		recipe_id: "222985",
		title: "Leeky salmon in a parcel",
		image: "Leeky-salmon-in-a-parcel-222985.jpg",
		source_uri: "http://www.bbcgoodfood.com/recipes/1575/leeky-salmon-in-a-parcel",
		source_name: "BBC Good Food",
		prep_time: null,
		cook_time: null,
		ready_time: 20,
		gluten: "t",
		dairy: "f",
		vegetarian: "f",
		vegan: "f",
		servings: 2,
		price_serving: 426.06,
		cuisines: "[]",
		// dish_type: "["lunch", "main course", "main dish", "dinner"]",
		// diets: "["gluten free", "primal", "pescatarian"]",
		calories: null
		},
		// id: 13,
		// recipe_id: "695539",
		// title: "Lasagna with Slow-Roasted Tomato Sauce",
		// image: "lasagna-with-slow-roasted-tomato-sauce-695539.jpg",
		// source_uri: "http://www.eatingwell.com/recipes/lasagna_roasted_tomato_sauce.html",
		// source_name: "Eating Well",
		// prep_time: 60,
		// cook_time: 180,
		// ready_time: 240,
		// gluten: "f",
		// dairy: "f",
		// vegetarian: "f",
		// vegan: "f",
		// servings: 10,
		// price_serving: 182.61,
		// cuisines: "["mediterranean", "european", "italian"]",
		// dish_type: "["lunch", "main course", "main dish", "dinner"]",
		// diets: "[]",
		// calories: null
		{
		id: 14,
		recipe_id: "622084",
		title: "Farro Salad with Butternut Squash, Red Onions, and Brie",
		image: "Farro-Salad-with-Butternut-Squash--Red-Onions--and-Brie-622084.jpg",
		source_uri: "http://joanne-eatswellwithothers.com/2014/12/farro-salad-butternut-squash-red-onions-brie.html",
		source_name: "Joanne Eats Well with Others",
		prep_time: null,
		cook_time: null,
		ready_time: 45,
		gluten: "f",
		dairy: "f",
		vegetarian: "t",
		vegan: "f",
		servings: 8,
		price_serving: 153.94,
		cuisines: "[]",
		// dish_type: "["side dish", "lunch", "main course", "salad", "main dish", "dinner"]",
		// diets: "["vegetarian"]",
		calories: null
		},
		{
		id: 15,
		recipe_id: "597895",
		title: "Ginger and Carrot Stir-Fry",
		image: "Ginger-and-Carrot-Stir-Fry-597895.jpg",
		source_uri: "http://leitesculinaria.com/78645/recipes-ginger-and-carrot-stir-fry.html",
		source_name: "Leites Culinaria",
		prep_time: 25,
		cook_time: 0,
		ready_time: 25,
		gluten: "t",
		dairy: "t",
		vegetarian: "f",
		vegan: "f",
		servings: 4,
		price_serving: 254.28,
		cuisines: "[]",
		// dish_type: "["lunch", "main course", "main dish", "dinner"]",
		// diets: "["gluten free", "dairy free"]",
		calories: null
		},
		{
		id: 16,
		recipe_id: "222589",
		title: "Asparagus pasta with mint pesto",
		image: "Asparagus-pasta-with-mint-pesto-222589.jpg",
		source_uri: "http://www.bbcgoodfood.com/recipes/5860/asparagus-pasta-with-mint-pesto",
		source_name: "BBC Good Food",
		prep_time: 5,
		cook_time: 10,
		ready_time: 15,
		gluten: "f",
		dairy: "f",
		vegetarian: "f",
		vegan: "f",
		servings: 4,
		price_serving: 165.49,
		cuisines: "[]",
		// dish_type: "["side dish", "lunch", "main course", "main dish", "dinner"]",
		// diets: "[]",
		calories: null
		},
		{
		id: 17,
		recipe_id: "532952",
		title: "Tequila & Sriracha Glazed Salmon",
		image: "Tequila---Sriracha-Glazed-Salmon-532952.jpg",
		source_uri: "http://www.lifeasastrawberry.com/tequila-sriracha-glazed-salmon/",
		source_name: "Life as a Strawberry",
		prep_time: 5,
		cook_time: 15,
		ready_time: 20,
		gluten: "t",
		dairy: "t",
		vegetarian: "f",
		vegan: "f",
		servings: 4,
		price_serving: 358.86,
		cuisines: "[]",
		// dish_type: "["lunch", "main course", "main dish", "dinner"]",
		// diets: "["gluten free", "dairy free", "fodmap friendly", "pescatarian"]",
		calories: null
		},
		{
		id: 18,
		recipe_id: "264166",
		title: "Mexican Cabbage",
		image: "Mexican-Cabbage-264166.jpg",
		source_uri: "http://happyherbivore.com/recipe/quick-mexican-cabbage/",
		source_name: "Happy Herbivore",
		prep_time: null,
		cook_time: null,
		ready_time: 45,
		gluten: "t",
		dairy: "t",
		vegetarian: "f",
		vegan: "f",
		servings: 2,
		price_serving: 199.08,
		cuisines: "[mexican]",
		// dish_type: "["lunch", "main course", "main dish", "dinner"]",
		// diets: "["gluten free", "dairy free"]",
		calories: null
		},
		{
		id: 19,
		recipe_id: "695432",
		title: "Chopped Greek Salad with Chicken for Two",
		image: "chopped-greek-salad-with-chicken-for-two-695432.jpg",
		source_uri: "http://www.eatingwell.com/recipes/chopped_greek_salad_with_chicken_for_two.html",
		source_name: "Eating Well",
		prep_time: 25,
		cook_time: 0,
		ready_time: 25,
		gluten: "t",
		dairy: "f",
		vegetarian: "f",
		vegan: "f",
		servings: 2,
		price_serving: 178.75,
		cuisines: "[greek, mediterranean, european]",
		// dish_type: "["side dish", "lunch", "main course", "salad", "main dish", "dinner"]",
		// diets: "["gluten free", "primal", "ketogenic"]",
		calories: null
		},
		{
		id: 20,
		recipe_id: "199544",
		title: "Stir Fried Pork and Cabbage with Black Bean Sauce",
		image: "Stir-Fried-Pork-and-Cabbage-with-Black-Bean-Sauce-199544.jpg",
		source_uri: "http://www.seriouseats.com/recipes/2010/12/stir-fried-pork-cabbage-black-bean-sauce-recipe.html",
		source_name: "Serious Eats",
		prep_time: null,
		cook_time: null,
		ready_time: 30,
		gluten: "t",
		dairy: "t",
		vegetarian: "f",
		vegan: "f",
		servings: 3,
		price_serving: 475.88,
		cuisines: "[]",
		// dish_type: "["lunch", "main course", "main dish", "dinner"]",
		// diets: "["gluten free", "dairy free"]",
		calories: null
	}
];

class FilterRecipes extends Component {
	render() {
    console.log("xxxxxxxxxxxxx");
		return (
      <FilterableRecipeTable recipes={allRecipes}/>
		);
	}
}

export default FilterRecipes;
