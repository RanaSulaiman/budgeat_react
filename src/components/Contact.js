import React, { Component } from 'react';
import { Form, Text } from 'react-form';

// imported react-icons
import FacebookSquare from 'react-icons/lib/fa/facebook-square';
import GithubSquare from 'react-icons/lib/fa/github-square';
import GithubAlt from 'react-icons/lib/fa/github-alt';

import Mail from 'react-icons/lib/ti/mail';



export const Contact = () => (
  <div>

      <h1>Contact Page</h1>
      <Form
        onSubmit={(values) => {
          console.log('Success!', values)
        }}
        validate={({ name }) => {
          return {
            name: !name ? 'A name is required' : undefined
          }
        }}
      >
        {({submitForm}) => {
          return (
            <form onSubmit={submitForm}>
              <Text field='name' />
              <button type='submit'>Submit</button>
            </form>
          )
        }}
      </Form>
</div>


)

export default Contact;
