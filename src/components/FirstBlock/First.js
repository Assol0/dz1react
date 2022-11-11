import React from 'react'
import Img from '../../image/img.jpg'
import './First.css'

const First = () => {
  return (
    <div className='blocks'>

        <img className='img' src={Img} alt=''/>
          <div className='content'>
            <h2>Apple</h2>
            <p>An apple is an edible fruit produced by an apple tree (Malus domestica).
               Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.
                The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.
                 Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. 
                 Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.
                 </p>
          </div>

    </div>
  )
}

export default First