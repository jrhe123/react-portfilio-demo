import React, { Component, PropTypes } from 'react';


// Library
import Waypoint from 'react-waypoint';


export default class WhenInView extends Component {

  constructor(props){
    super(props);

    this.state = {
      isInView: false
    };
  }


  onEnter({previousPosition}){
    if(previousPosition === Waypoint.below){
      this.setState({
        isInView: true
      })
    }
  }


  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnter.bind(this)}></Waypoint>
        {this.props.children({isInView: this.state.isInView})}
      </div>
    );
  }

}