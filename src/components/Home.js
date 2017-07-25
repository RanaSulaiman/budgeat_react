import React, { Component } from 'react';

export const Home = () => (
  <div className='container'>
    <h1>A Word from Author</h1>
    <p className='text-justify'>
      The available data indicates that the great majority of low-income Americans not only understand the importance of healthy eating but also they want to know more about how to do so. The biggest barriers are cost and time.
    </p>

    <p className='text-justify'>
       <strong>BudgEat </strong>is my capstone project for Ada Developers Academy, Cohort 7. Users of <strong>BudgEat </strong> not only have access to a variety of healthy, inexpensive, and easy to make recipes with cooking time and cost per serving accessible, they can search recipes by dish type, and food intolerances.
    </p>

    <p className='text-justify'>
      - Price per serving is an estimated price based on average costs. Since grocery prices do range  from region to region and store to store.
    </p>

    <p className='text-justify'>
      - I consumed <a href='https://market.mashape.com/spoonacular/recipe-food-nutrition' target= '_blank'><strong>Mashape API</strong></a> to build the backend data for this application.

    </p>


    <p className='text-justify'>
      <i>Have a healthy delecious meal !!</i>
    </p>

</div>

)

export default Home;
