import React from "react";
// import { withRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/hats');
      };

      return (
                
    <div className={`${size} menu-item background-image`} onclick={() => history.push(`${match.url}${linkUrl}`)}
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
                    <span className='subtitle' onClick={handleClick}>SHOP NOW</span>
                </div>
            </div>
      )
    
            
};


export default MenuItem;