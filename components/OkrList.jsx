import React, { Component, PropTypes } from 'react'
import Okr from './Okr.jsx'

export default class OkrList extends Component {
   render() {
      return (
         <ul>
            {this.props.okrs.map(okr =>
               <Okr
                  key = {okr.id}
                  {...okr}
               />
            )}
         </ul>
      )
   }
}