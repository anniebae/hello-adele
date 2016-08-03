import React, {Component} from 'react'
import {Link} from 'react-router'
import Menu from 'components/Menu'

import Styles from '../stylesheets/styles.css'

const HomeContainer = props => {

    return(
      <div className="home-body">dis mai home
        <Menu />
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>Search ADELE</h1>
          <div className="col-sm-12">
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Search Song" 
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



export default HomeContainer