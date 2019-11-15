import React, {Component} from 'react';
import {connect} from 'react-redux';


class Form extends Component {

    state = {
        description:"",
        imageUrl:"",
    }
    
  componentDidMount () {
  }



  handleChangeFor = (property,event) => {
    this.setState({
        ...this.state,
        [property]:event.target.value
    })
  }

  addItem = () => {
      this.props.dispatch({type:'ADD_ITEM',payload:this.state});
  }

  render() {
    return (
      <>
      Description: <input value={this.state.description} onChange={(event) => this.handleChangeFor('description',event)}/>
      Image Url: <input value={this.state.imageUrl} onChange={(event) => this.handleChangeFor('imageUrl',event)}/>
      <button onClick={this.addItem}>Add Item</button>


      </>
  )}
}

const map = reduxState => reduxState

export default connect(map)(Form);
