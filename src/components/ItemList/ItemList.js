import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../Item/Item';

class ItemList extends Component {

    state = {
        description: "",
        imageUrl: "",
        edit: false
    }

    componentDidMount() {
        this.props.dispatch({ type: "GET_ITEMS" });
    }

    deleteButton = (item) => {
        this.props.dispatch({type: "DELETE_ITEM", payload: item})
    }
    editButton = () => {
        this.setState({
            ...this.state,
            edit: true
        })
    }

    handleChangeFor = (property, event) => {
        this.setState({
            ...this.state,
            [property]:event.target.value
        })
      }

    saveButton = (item) => {
        this.props.dispatch({type: "EDIT_ITEM", payload: item})
       
    };


    render() {
        return (
            <>
                <ul>
                    {this.props.itemsReducer.map((item, i) =>
                        <div key={i}>

                            <li key={i}>
                                <Item item = {item}/>
                                

                            </li>
                        </div>)}
                </ul>
            </>
        )
    }
}

const map = reduxState => reduxState;

export default connect(map)(ItemList);
