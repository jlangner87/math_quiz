import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <h1 className="title">Flashcards for Kids</h1>
      <h1 className="subheading">Choose a card pack</h1>
      <div className="card_selection">
        <h1 className="title">Add and Subtract</h1>
        <div className="category">
          <Link to="add_subtract_1">
            <div className="card_packs_add">
              <h2 className="pack_info">0-10</h2>
            </div>
          </Link>
          <Link to="add_subtract_2">
            <div className="card_packs_add">
              <h2 className="pack_info">0-100</h2>
            </div>
          </Link>
          <Link to="subtract_neg">
            <div className="card_packs_add">
              <h2 className="pack_info3">Subtract</h2>
              <h2 className="pack_info2">Negative Numbers</h2>
            </div>
          </Link>
        </div>
        <h1 className="title">Multiply</h1>
        <div className="category">
          <Link to="multiply_1">
            <div className="card_packs">
              <h2 className="pack_info">by 1</h2>
            </div>
          </Link>
          <Link to="multiply_2">
            <div className="card_packs">
              <h2 className="pack_info">by 2</h2>
            </div>
          </Link>
          <Link to="multiply_3">
            <div className="card_packs">
              <h2 className="pack_info">by 3</h2>
            </div>
          </Link>
          <Link to="multiply_4">
            <div className="card_packs">
              <h2 className="pack_info">by 4</h2>
            </div>
          </Link>
          <Link to="multiply_5">
            <div className="card_packs">
              <h2 className="pack_info">by 5</h2>
            </div>
          </Link>
          <Link to="multiply_6">
            <div className="card_packs">
              <h2 className="pack_info">by 6</h2>
            </div>
          </Link>
          <Link to="multiply_7">
            <div className="card_packs">
              <h2 className="pack_info">by 7</h2>
            </div>
          </Link>
          <Link to="multiply_8">
            <div className="card_packs">
              <h2 className="pack_info">by 8</h2>
            </div>
          </Link>
          <Link to="multiply_9">
            <div className="card_packs">
              <h2 className="pack_info">by 9</h2>
            </div>
          </Link>
          <Link to="multiply_10">
            <div className="card_packs">
              <h2 className="pack_info">by 10</h2>
            </div>
          </Link>
          <Link to="multiply_11">
            <div className="card_packs">
              <h2 className="pack_info">by 11</h2>
            </div>
          </Link>
          <Link to="multiply_all">
            <div className="card_packs">
              <h2 className="pack_info">Big Numbers</h2>
            </div>
          </Link>
        </div>
        <h1 className="title">Miltiply by Multiples</h1>
        <div className="category">
          <Link to="multiply_multiples_2">
            <div className="card_packs">
              <h2 className="pack_info">Multples</h2>
              <h2 className="pack_info2">of 2</h2>
            </div>
          </Link>
          <Link to="multiply_multiples_3">
            <div className="card_packs">
              <h2 className="pack_info">Multples</h2>
              <h2 className="pack_info2">of 3</h2>
            </div>
          </Link>
          <Link to="multiply_multiples_5">
            <div className="card_packs">
              <h2 className="pack_info">Multples</h2>
              <h2 className="pack_info2">of 5</h2>
            </div>
          </Link>
          <Link to="multiply_multiples_10">
            <div className="card_packs">
              <h2 className="pack_info">Multples</h2>
              <h2 className="pack_info2">of 10</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
