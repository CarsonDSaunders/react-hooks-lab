import React from 'react'
import Todo from './Todo'

export default function List(props) {
    return (
        <div className="list">
            {props.list.map((ele, index) => {
                return <Todo item={ele} key={index} />
            })}
        </div>
    )
}
