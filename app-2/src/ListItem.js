import React from 'react'

export default function ListItem(props) {
    return (
        <div>
        <h2><a href={`https://www.dnd5eapi.co${props.item.url}`}>{props.item.name}</a></h2>
        </div>
    )
}
