import React, { Component } from 'react';

export const Home = () => (
  <div className='container home-text'>
    <h1>A Word from Author</h1>
    <p className='text-justify '>
      The available data indicates that the great majority of low-income Americans not only understand the importance of healthy eating but also they want to know more about how to do so. The biggest barriers are cost and time.
    </p>

    <p className='text-justify'>
       <strong><i>BudgEat </i></strong>is my capstone project for Ada Developers Academy, Cohort 7. Users of <strong><i>BudgEat </i></strong> not only have access to a variety of healthy, inexpensive, and easy to make recipes with cooking time and cost per serving accessible, they can search recipes by dish type, and food intolerances.
    </p>

    <p className='text-justify'>
      - Price per serving is an estimated price based on average costs since grocery prices do range from region to region and store to store.
    </p>

    <p className='text-justify'>
      - <a href='https://market.mashape.com/spoonacular/recipe-food-nutrition' target= '_blank'><strong>Mashape API</strong></a> is the data source for this application.
    </p>

    <p className='text-justify'>
      <i>Have a healthy delicious meal !!</i>
    </p>

</div>

)

export default Home;
