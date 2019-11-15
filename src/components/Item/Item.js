import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {

    state = {
        description: "",
        imageUrl: "",
        edit: false
    }


    deleteButton = (item) => {
        this.props.dispatch({ type: "DELETE_ITEM", payload: item })
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
            [property]: event.target.value
        })
    }

    saveButton = (item) => {
        this.props.dispatch({ type: "EDIT_ITEM", payload: {id: item.id, ...this.state} })
            this.setState({
                ...this.state,
                edit: false
            })

    };


    render() {
        return (

            <div>
                    {this.props.item.description}
                    <img src={this.props.item.image_url} alt="" />
                    {this.props.item.user_id === this.props.user.id && <>
                        <button onClick={() => this.deleteButton(this.props.item.id)}>Delete</button>
                        <button onClick={this.editButton}>Edit</button>
                        {this.state.edit && <><input onChange={(event) => this.handleChangeFor("description", event)}
                            value={this.state.description} />
                            <input onChange={(event) => this.handleChangeFor("imageUrl", event)}
                                value={this.state.imageUrl} /> <button onClick={() => this.saveButton(this.props.item)}>Save</button></>}</>
                    }
            </div>

        )
    }
}

const map = reduxState => reduxState;

export default connect(map)(Item);
