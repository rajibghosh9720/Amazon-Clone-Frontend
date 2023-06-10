import React from 'react'
import './Newnav.css'
import nav from './nav1.jpg'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Newnav = () => {
  return (
  <div className="new_nav">

        <div className="nav_data">


              <div className="left_data">
              <Badge color="primary">
              <ShoppingCartIcon id="icon"/>
              <p>All</p>
              </Badge>
                
                <p>Mobiles</p>
                <p>Fashion</p>
                <p>Best Sellers</p>
                <p>Customer Service</p>
                <p>Electronics</p>
                <p>Prime</p>
                <p>Today's Deals</p>
                <p>Amazon Pay</p>

              </div>

              <div className="right_data">
                <img src={nav} alt="" srcset="" />

              </div>

        </div>


  </div>
  )
}

export default Newnav
