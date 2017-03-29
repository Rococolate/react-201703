import React , {Component} from 'react'
import config from '../data/config.json'

class Edit extends Component {
  constructor(props){
    super(props);
    this.state={
      isEdit: true,
      isShow: false,
      isHide: true,
      value: this.props.cont,
      libg: this.props.bgColor
    }
  }

  //编辑
  edit = () => {
    this.setState({
      isShow: true,
      isHide: false
    });
    if(!this.state.isEdit){
      this.setState({
          isShow: false,
          isHide: true,
          isEdit: true
      })
    }
  }

  //输入
  changeHandle = (e) => {
    this.setState({
      isEdit: false,
      value: e.target.value
    })
  }

  //选择背景
  changeBg = (e) => {
    console.log(e.target.value);
    this.setState({
        isEdit: false,
        libg:e.target.value
    },() => {
        this.props.bgChg(this.state.libg)
    })
  }

  del = () => {
    
  }

  componentDidMount(){

  }

  render(){
    //console.log(this.props)
    const val = this.state.isEdit ? '编辑' : '保存'
    const value = this.state.value
    return(
    <div>
        {this.state.isShow &&
          <div>
            <input type="text" value={value} placeholder={this.props.cont} onChange={this.changeHandle} />
            <select value={this.state.libg} onChange={this.changeBg}>
            {
              config.map((item,i) => {
                return (
                    <option key={i}>{item.bgColor}</option>
                )
              })
            }
            </select>
          </div>
        }
        {this.state.isHide &&
          <span>{value}</span>
        }
        <input type="button" value={val} className="btn" onClick={this.edit} />
        <input type="button" value='删除' className="btn" onClick={this.del} />
    </div>

    )
  }

}

export default Edit
