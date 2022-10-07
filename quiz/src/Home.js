import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <h1 className="title">Flashcards for Kids</h1>
      <h1 className="subheading">Choose a card pack</h1>
      <div className="card_selection">
        <Link to="add_subtract_1">
          <div className="card_packs">
            <h2 className="pack_name">Add & Subtract</h2>
            <h2 className="pack_info">(0-10)</h2>
          </div>
        </Link>
        <Link to="add_subtract_2">
          <div className="card_packs">
            <h2 className="pack_name">Add & Subtract</h2>
            <h2 className="pack_info">(0-100)</h2>
          </div>
        </Link>
        <Link to="multiply_1">
          <div className="card_packs">
            <h2 className="pack_name">Multiply</h2>
            <h2 className="pack_info">(0-10)</h2>
          </div>
        </Link>
        <Link to="multiply_2">
          <div className="card_packs">
            <h2 className="pack_name">Multiply</h2>
            <h2 className="pack_info">(0-100)</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
