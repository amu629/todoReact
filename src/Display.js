import React, { Component } from 'react'
import "./Display.css"

export default class Display extends Component {
    render() {
        const items = this.props.items;
        const allItems = items.map(item => {
            return (
                <div className="display" key="item.key">
                    <p className="para">{item.text}
                        <span>
                            <button className="fa fa-trash-o" 
                            onClick={() => this.props.deleteItems(item.key)}></button>
                        </span>
                    </p>
                </div>
            )
        })
        return (
            <div>
                {allItems}
            </div>
        );
    }
}
