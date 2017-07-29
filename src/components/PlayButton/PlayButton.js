import React, { Component, PropTypes } from 'react';

export default function PlayButton(props) {

  return (
    <svg width='400' height='180' {...props}>
    <rect x='50' y='20' rx='20' ry='20' width='150' height='150' fill='red'
    stroke='#000' strokeWidth='5' opacity='.5' />Sorry, your browser does not support inline SVG.</svg>   
  );

}