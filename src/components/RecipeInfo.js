import React, { Component } from 'react'
import axios from 'axios'

//react-icons
import Leaf from 'react-icons/lib/fa/leaf';

import Stopwatch from 'react-icons/lib/ti/stopwatch';
// import Heart from 'react-icons/lib/ti/heart';


// images
import wheat from '../images/wheat.png'
import dairy from '../images/dairy.png'
import vegetarian from '../images/vegetarian.png'
import vegan from '../images/vegan.png'
import money from '../images/money.png'
import health from '../images/health.png'
import cow from '../images/cow.png'
import clock from '../images/clock.png'

class RecipeInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
    }
  }
  // For summary icons - conditional rendering
  gluten() {
    var glutenFree = this.state.recipe.gluten;
    if (glutenFree === "t"){
      return true
    } else {
      return false
    }
  }

  dairy() {
    var dairyFree = this.state.recipe.dairy;
    console.log('in Dairy Function = ' + dairyFree);
    console.log(dairyFree);
    if (dairyFree === "t"){
      return true
    } else {
      return false
    }
  }

  vegetarian() {
    var vegetarian = this.state.recipe.vegetarian;
    if (vegetarian === "t"){
      return true
    } else {
      return false
    }
  }

  vegan() {
    var vegan = this.state.recipe.vegan;
    if (vegan === "t"){
      return true
    } else {
      return false
    }
  }

  componentDidMount(){
    let recipe_id = this.props.match.params.recipe_id;

    axios.get('https://api.budgeat.net/recipes/' + recipe_id)
      .then((response)=>{
        const recipe = response.data;
          this.setState({ recipe });
          console.log('getRecipeInfoById: Successful API call');
        })
        .catch((error)=>{
          console.log('getRecipeInfoById: Failed API call');
          console.log(error);
        })
  }

  render() {
    console.log("Rendering RecipeInfo");
    console.log("RecipeInfo.state = ", this.state);
    let recipe_id = this.props.match.params.recipe_id;
    console.log('xxyyhhyyhhhyy' + this.state.recipe.diets );

    return(
        <div className='container'>
          <h1>Detail for recipe # {recipe_id}</h1>
          {/* <h1>{this.state.recipe.sourceName}</h1> */}
            <h1 className ='info-title'>{this.state.recipe.title}</h1>


            <div className='row'>
              <div className='col-sm-6'>
              <p><img className='recipe-img'src= {this.state.recipe.image} /></p>
              <p><a href= {this.state.recipe.source_url} target= '_blank'>Click here for ingredients and full details &copy;</a></p>
              </div>{/* img_sourcelink column*/}

              <div className='col-sm-6'>
                {/* <Leaf color='#DC2424' size='1.5em'/>red */}
                {/* <Leaf color='#215f00' size='1.5em'/>green  */}
                {/* <Stopwatch color='#AA076B' size='1.5em'/>purple */}
                {/* <Stopwatch color='#FF512F' size='1.5em'/>clock */}
                <ul className='info-icons-list'>
                  <li className='info-icons-spcing'><img src={money} className='info-img'/> $ {Number(((this.state.recipe.price_serving)/100).toFixed(2))} per serving </li>
                  <li className='info-icons-spcing'><img src={clock} className='info-img'/> ready in  {this.state.recipe.ready_time} minutes </li>
                  <li className='info-icons-spcing'><img src={health} className='info-img'
                  /> {this.state.recipe.weightWatcherSmartPoints} weight watcher points </li>
                  {/* To skip rendering empty tag(spce in the browser) if the output is null */}
                  {this.gluten() ? (
                    <li className='info-icons-spcing'>
                      <img src={wheat} className='info-img' /> gluten free
                    </li>)
                  : null}

                  {this.dairy() ?
                    <li className='info-icons-spcing'>
                      <img src={dairy} className='info-img'/> dairy free
                    </li>
                  : null}

                  {this.vegetarian() ?
                    <li className='info-icons-spcing'>
                      <img className='info-img' src={vegetarian} /> vegetarian
                    </li>
                  : null}

                  {this.vegan() ?
                    <li className='info-icons-spcing'>
                      <img className='info-img' src={cow} /> vegan
                    </li>
                  : null}

                </ul>

              </div>{/*icons column*/}
            </div>{/*row*/}

            <div className='details'>{/*details is not used*/}
            <p>WeightWatcherSmartPoints :- {this.state.recipe.weightWatcherSmartPoints}</p>
            <p>Servings :- {this.state.recipe.servings}</p>
            <p>Price_Serving:- $ {Number(((this.state.recipe.price_serving)/100).toFixed(2))}</p>

            <p>Preperation Time :- {this.state.recipe.prep_time} minutes</p>
            <p>Cooking Time :- {this.state.recipe.cook_time} minutes</p>
            <p>Gluten free :- {this.state.recipe.gluten}</p>
            <p>Dairy free :- {this.state.recipe.dairy}</p>
            <p>Vegan:- {this.state.recipe.vegan}</p>
            <p>Vegetarian:- {this.state.recipe.vegetarian}</p>
            <p className='info-instructions'>{this.state.recipe.instructions}</p>
            </div>

        </div>//container
    );
  }

}
export default RecipeInfo
