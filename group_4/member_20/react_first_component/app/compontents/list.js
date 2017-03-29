// var config = require('./config.json');
//
// module.exports = function(){
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// }

import React , {Component} from 'react'
import config from '../data/config.json'
import Lis from './lis.js'
import './list.css'

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
  }

  render(){
    return (
      <div className="containt">
        <ul>
        {
          config.map((item,i)=>{
            return (
              <Lis key={i} bgColor={item.bgColor} content={item.content} />
            )
          })
        }
        </ul>
      </div>
    )
  }
}

export default List
