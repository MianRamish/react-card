import React, { Component } from 'react';
import Loader from 'react-loader-spinner'



function Card1(props) {
        return (
            <div className='demo'>
                  <img src={props.image} alt="No image" style={{width:'14rem'}}/>
                <h3>{props.heading}</h3>
              <h5>{props.description}</h5>
              <button className='btn'>ADD To Cart</button>
      <Loader type='TailSpin' color='#00BFFF' width={15} height={15} />
              <button className='btn'>Book NOw</button>

            </div>
        );
    }


export default Card1;