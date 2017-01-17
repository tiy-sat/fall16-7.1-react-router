import React from 'react'

export default React.createClass({
  render() {
    return (
      <li onClick={ this.props.onItemClick }
          ref='availableItem'>
        { this.props.itemName }
      </li>
    )
  }
})
