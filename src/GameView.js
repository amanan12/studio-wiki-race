import React, { Component } from 'react';
import WikiApi from './WikiApi.js'

export default class GameView extends Component {
  constructor(props) {
      super(props);
      this.state = {
          summary: "Loading...",
          links: "Loading...."
      }
  }
  
  componentDidMount() {
      var self = this;
      function a(a){
        WikiApi.getSummary(a).then(
          function(text){
            
              self.setState({
                  summary: text
              });
          })
      }
          a(this.props.title);
          
          
          
          WikiApi.getLinks(this.props.title).then(
          function(text){
            
            var link = [];
            
            text.forEach(function(a){
              link.push(<button class="btn btn-primary" onClick={  ()=>self.props.addTitle(a)  }>{a}</button>);
            });
            
            self.setState({
                  links: link
              });
              
          })

  }
  
  componentWillReceiveProps(nextProps){
    var self = this;
      function a(a){
        WikiApi.getSummary(a).then(
          function(text){
              self.setState({
                  summary: text
              });
          })
      }
          a(nextProps.title);
          
          WikiApi.getLinks(nextProps.title).then(
          function(text){
            
            var link = [];
            
            text.forEach(function(a){
              link.push(<button onClick={  ()=>nextProps.addTitle(a)  }>{a}</button>);
            });
            
            self.setState({
                  links: link
              });
              
          })
  }
  
  render() {
    var currentTitle = this.props.title;

    return (
      <div>
      <center><h1>{this.props.title}</h1></center>
        <p class="sum">{this.state.summary}</p>
        <p class="sam">{this.state.links}</p>
      </div>
    );
  }
}
