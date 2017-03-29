import React , {Component} from 'react'
import Edit from './edit.js'

class Lis extends Component {
  constructor(props){
    super(props);
    this.state={
      libg:this.props.bgColor
    }
  }

  liBgColor = (val) => {
    this.setState({
      libg:val
    })
  }

  render(){
    return(
      <li className="content" style={{background: this.state.libg}}>
        <Edit cont={this.props.content} bgColor={this.props.bgColor} bgChg={this.liBgColor.bind(this)} />
      </li>
    )
  }

}

export default Lis
