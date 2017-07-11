import React, { Component } from 'react'
import axios from 'axios'

class RailsApi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      table: [],
    }
  }

  componentDidMount(){
    axios.get('http://wwww.localhost:4000')

    .then((response)=>{
        const table = response.data;
          this.setState({ table });
          console.log('API Call : Success');

        console.log("In success callback");
        console.log(response);
      })

      .catch((error)=>{
        console.log('API Call : Error');
        console.log(error);
      })
  }

  render() {
    return(
      <div>
        {this.state.table.title}
      </div>
    );
  }
}


export default RailsApi
