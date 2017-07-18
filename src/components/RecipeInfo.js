import React, { Component } from 'react'
import axios from 'axios'

// imported react-icons
import Leaf from 'react-icons/lib/fa/leaf';

// import Leaf from 'react-icons/lib/ti/leaf';

import AccessTime from 'react-icons/lib/md/access-time';
import Stopwatch from 'react-icons/lib/ti/stopwatch';
import Heart from 'react-icons/lib/ti/heart';
import Money from 'react-icons/lib/fa/money';

// Checked and nonChecked
import CheckCircle from 'react-icons/lib/md/check-circle';
import HighlightRemove from 'react-icons/lib/md/highlight-remove'

class RecipeInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
    }
  }

  Gluten() {
    var glutenFree = this.state.recipe.gluten;
    console.log('Gluten function diet = ');
    console.log('in Gluten Function = ' + glutenFree);
   if (glutenFree === "t"){
       return
       <Leaf className='info-icon'/>
    }
 }

 Dairy() {
   var dairyFree = this.state.recipe.dairy;
   console.log('in Dairy Function = ' + dairyFree);
    console.log(dairyFree);
  if (dairyFree === "t"){
      return
      <CheckCircle className='info-icon'/>
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
    // if (!this.state.recipe) {
    //   return <div>Loading</div>
    // }
    let recipe_id = this.props.match.params.recipe_id;
    console.log('xxyyhhyyhhhyy' + this.state.recipe.diets );


    let allergy_1 = this.state.recipe.diets;
    console.log("allergy_1 is " + allergy_1);


    return(
        <div >
          {/* <h1>Detail for recipe # {recipe_id}</h1> */}
          <h1 className ='title'>{this.state.recipe.title}</h1>
          {/* <h1>{this.state.recipe.sourceName}</h1> */}
          <div className='container'>
            <div className='row'>

              <div className='col-sm-6'>
              <p><img className='recipe-img'src= {this.state.recipe.image} /></p>
              <p><a href= {this.state.recipe.source_url} target= '_blank'>Click here for ingredients and full details &copy;</a></p>
              </div>{/* img_sourcelink column*/}

              <div className='col-sm-6'>
                <ul className='icons-list'>
                  <li><Money className='info-icon'/> $ {Number(((this.state.recipe.price_serving)/100).toFixed(2))} per serving </li>
                  <li><Stopwatch className='info-icon'/> ready in  {this.state.recipe.ready_time} minutes </li>
                  {/* <li>
                    listitem {this.state.recipe.diets}
                  </li> */}
                  <li>
                    {/* { this.Gluten ? <Leaf className='info-icon'/> : " "} gluten free */}
                    {this.Gluten}

                  </li>

                  <li>
                    {/* { this.Dairy ? <CheckCircle className='info-icon'/> : " "} dairy free */}
                    {this.Dairy}

                  </li>

                    {/* <Leaf className='info-icon'/>{this.state.recipe.diets} </li>
                  <li><CheckCircle className='info-icon'/> {this.state.recipe.diets}</li>
                  <li><HighlightRemove className='info-icon'/> </li> */}
                  {/* { allergy_2 ? <Leaf/> : " "} */}


                  <li><Heart className='info-icon'/> {this.state.recipe.weightWatcherSmartPoints} points of weight watcher </li>


                </ul>

              </div>{/* icons column */}


            </div>{/*row */}
          </div>{/*container*/}

            <div className='details'>
            <p>WeightWatcherSmartPoints :- {this.state.recipe.weightWatcherSmartPoints}</p>
            <p>Servings :- {this.state.recipe.servings}</p>
            <p>Price_Serving:- $ {Number(((this.state.recipe.price_serving)/100).toFixed(2))}</p>

            <p>Preperation Time :- {this.state.recipe.prep_time} minutes</p>
            <p>Cooking Time :- {this.state.recipe.cook_time} minutes</p>
            <p>{this.state.recipe.diets}</p>

            <p className='instructions'>{this.state.recipe.instructions}</p>
            </div>

        </div>
    );
  }
}
export default RecipeInfo
