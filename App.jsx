import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOkr } from './actions/actions'

import AddOkr from './components/AddOkr.jsx'
import OkrList from './components/OkrList.jsx'

class App extends Component {
   render() {
      const { dispatch, visibleOkrs } = this.props
	
      return (
         <div>
            <AddOkr onAddClick = {text => dispatch(addOkr(text))} />
            <OkrList okrs = {visibleOkrs}/>
         </div>
      )
   }
}

function select(state) {
   return {
      visibleOkrs: state.okrs
   }
}

export default connect(select)(App)