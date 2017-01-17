import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <header>
        <h1>Blog name</h1>
        <nav>
          <Link to="/post">View post</Link>
          <Link to="/home">Go home</Link>
        </nav>
      </header>
    )
  }
})
