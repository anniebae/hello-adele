import React, {Component} from 'react'
import {Link} from 'react-router'
import Menu from 'components/Menu'
import Styles from '../stylesheets/styles.css'
var blueBg = require('../stylesheets').blueBg

var HomeContainer = React.createClass({
  getInitialState:function() {
    return {
      username: ''
    }
  },
  onUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },
  render:function() {
    return(
      <div className="home-body">
        <Menu />
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={blueBg}>
        <h1>{this.props.route.header}</h1>
          <div className="col-sm-12">
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="enter Artist" 
                  onChange={this.onUpdateUser}
                  value={this.state.username}
                  type="text"/>
              </div>

              <div className="form-group col-sm-4 col-sm-offset-4">
                <button
                  className="btn btn-block btn-success"
                  type="submit">
                    Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
})

// const HomeContainer = props => {

//     return(
//       <div className="home-body">
//         <Menu />
//         <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={blueBg}>
//         <h1>{props.route.header}</h1>
//           <div className="col-sm-12">
//             <form>
//               <div className="form-group">
//                 <input
//                   className="form-control"
//                   placeholder="enter Artist" 
//                   type="text"/>
//               </div>

//               <div className="form-group col-sm-4 col-sm-offset-4">
//                 <button
//                   className="btn btn-block btn-success"
//                   type="submit">
//                     Continue
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     )

// }



export default HomeContainer