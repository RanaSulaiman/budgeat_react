import React, { Component } from 'react'
import axios from 'axios'

//react-icons
import Leaf from 'react-icons/lib/fa/leaf';

// import Leaf from 'react-icons/lib/ti/leaf';

import AccessTime from 'react-icons/lib/md/access-time';
import Stopwatch from 'react-icons/lib/ti/stopwatch';
import Heart from 'react-icons/lib/ti/heart';
import Money from 'react-icons/lib/fa/money';

// Checked and nonChecked
import CheckCircle from 'react-icons/lib/md/check-circle';
import HighlightRemove from 'react-icons/lib/md/highlight-remove'

// images
import gluten from '../images/gluten.png'
import dairy from '../images/dairy.png'
import vegetarian from '../images/vegetarian.png'
// import wheat from '../images/wheat.png'





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
       return <Leaf className='info-icon-size'/>
    }
 }

 dairy() {
   var dairyFree = this.state.recipe.dairy;
   console.log('in Dairy Function = ' + dairyFree);
    console.log(dairyFree);
  if (dairyFree === "t"){
      return <CheckCircle className='info-icon'/>
   }
 }

 vegetarian() {
   var vegetarian = this.state.recipe.vegetarian;
  if (vegetarian === "t"){
      return <img src={vegetarian} className='info-img'/>
   }
 }





  componentDidMount(){
    let recipe_id = this.props.match.params.recipe_id;

    axios.get('http://localhost:4000/recipes/' + recipe_id)
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
    // if (!this.state.recipe) {
    //   return <div>Loading</div>
    // }
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
                <ul className='info-icons-list'>
                  <li className='info-icons-spcing'><Money className='info-icon-size
                    '/> $ {Number(((this.state.recipe.price_serving)/100).toFixed(2))} per serving </li>
                  <li className='info-icons-spcing'><Stopwatch className='info-icon-size
                    '/> ready in  {this.state.recipe.ready_time} minutes </li>
                  <li className='info-icons-spcing'><Heart className='info-icon-size
                    '/> {this.state.recipe.weightWatcherSmartPoints} points of weight watcher </li>
                  {/* To skip rendering empty tag(spce in the browser) if the output is null */}
                  {this.gluten() ? (
                    <li className='info-icons-spcing'>
                      <Leaf className='info-icon-size' />
                    </li>)
                  : null}

                  {this.dairy() ?
                    <li className='info-icons-spcing'>
                      <CheckCircle className='info-icon-size'/>
                    </li>
                  : null}

                  {this.vegetarian() ?
                    <li className='info-icons-spcing'>
                      <img className='info-img' src={vegetarian} />
                    </li>
                  : null}

                  {/* <li><img src={wheat} width='30' color="red"/></li> */}

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
          <p>{this.state.recipe.vegan}</p>
        <p>{this.state.recipe.vegetarian}</p>


            <p className='info-instructions'>{this.state.recipe.instructions}</p>
            </div>

        </div>
    );
  }
}
export default RecipeInfo
