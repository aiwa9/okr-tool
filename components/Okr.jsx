import React, { Component, PropTypes } from 'react'

export default class Okr extends Component {
   render() {
      return (
         <li>
            {this.props.okrInput}
         </li>
      )
   }
}