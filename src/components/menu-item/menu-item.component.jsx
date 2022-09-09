import React from "react";

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    
    <div className={`${size} menu-item background-image`}
    style={{
        backgroundImage: `url(${imageUrl})`
       // background: 'red' 
       }}>

     {/* <div
         className='background-image' 
         style={{
            //backgroundImage: `url(${imageUrl})`
           // background: 'red' 
           }}
        /> */}
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            
);


export default MenuItem;