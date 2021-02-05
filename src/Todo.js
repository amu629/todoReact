import React, { Component } from 'react'
import Display from './Display'
import "./Todo.css"

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsArray: [],
            itemsObject : {
                text : '',
                key : ''
            }
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
    }

    handleOnChange = e => {
        this.setState ({
            itemsObject : {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const newItemsObject = this.state.itemsObject;
        if(newItemsObject.text !== '') {
            const newArray = [...this.state.itemsArray, newItemsObject];
            this.setState ({
                itemsArray: newArray,
                itemsObject : {
                    text: '',
                    key: ''
                }
            })
        }    
    }

    deleteItems = key => {
        const filtered = this.state.itemsArray.filter(item => 
            item.key !== key);
        this.setState ({
            itemsArray: filtered
        })
    }

    render() {
        
        return (
            <div className="container">
                <form onSubmit = {this.handleOnSubmit}>
                    <input className="box"
                        type="text"
                        placeholder="Whats on your mind"
                        value={this.state.itemsObject.text}
                        onChange={this.handleOnChange}
                    />
                    <button className="button">Add</button>
                </form>
                <Display items={this.state.itemsArray} deleteItems={this.deleteItems}></Display>
            </div>
        )
    }
}
