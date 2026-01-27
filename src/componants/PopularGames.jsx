import React, { useState } from 'react'
import data from '../GamesData.json'
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

function PopularGames() {

  // console.log(data.length)
  // let d = []
  // for (let i = 0; i < data.length; i++) {
  //   d.push(data[i].downloads)
  // }

  // let a;
  // let b;
  // let sorted = d.sort((a, b) => a - b)
  // let Sorted = sorted.reverse()
  // Sorted.pop()
  // Sorted.pop()
  // Sorted.pop()
  // Sorted.pop()
  // console.log("---->", Sorted)


  let filterData = data.filter((e) => e.isPopular == true)

  return (
    <div className='popularGames'>
      <h1>Most Popular <span> Right Now</span></h1>
      <div className="GameCard">
        {filterData.map((e) => {
          return (
            <div className='gCard' key={e.id}>
              <img src={e.image} alt="image" />
              <div className="firstRow">
                <div className="name">{e.gameName}</div>
                <div className="ratings"><FaStar className='star' />{e.ratings}</div>
              </div>
              <div className="secondRow">
                <div className="title">{e.title}</div>
                <div className="downloads"><FaDownload className='download' />{e.downloads}M</div>
              </div>
            </div>
          )
        })}
      </div>

      <button className='button' >Discover Populer </button>
    </div>
  )
}

export default PopularGames
