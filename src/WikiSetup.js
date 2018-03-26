import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WikiApi from './WikiApi.js';

export default class WikiSetup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '' 
    };
  }

  componentDidMount() {
    var self = this;
    
    this.setState({ title: 'New York City' });
    
    // WikiApi.getRandomArticles(Math.random()).then({
      
    //   function(text){
        
    //     self.setState({
    //       title: text
          
    //     });
    //     console.log(text.batchcomplete);
    //   }
      
    // })
    
  }

  render() {
    if (this.state.title) {
      var link = {
        pathname: this.state.title,
        state: { titles: [this.state.title] },
      };
      return (
        <Link to={link}>
          <Button>Start with {this.state.title}</Button>
        </Link>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}
