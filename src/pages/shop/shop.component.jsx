// import React from 'react';

import { SHOP_DATA } from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';

// class ShopPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             collections: [],
//         };
      
//         this.componentDidMount = () => {
//             this.setState = ({
//                 collections : SHOP_DATA
//             })
//         }
        
//         console.log(this.state, this.state.collections , "**********");
//     }

//     render() {
//         // const { collections } = this.state.collections;
//         console.log(this.state)
        
//         return (<div className='shop-page'>
//             {
//                 this.state.collections.map(({ id, ...otherCollectionProps}) => (
//                  <CollectionPreview key={id} {...otherCollectionProps} />   
//                 ))
//             }

          

//         </div>);
//     }
// }


// export default ShopPage;


import React, { useEffect, useState } from "react"



const ShopPage = () =>{

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(SHOP_DATA)
    },[])

    return(
        <div  className='shop-page'>
             {
                data.map(({ id, ...otherCollectionProps}) => (
                 <CollectionPreview key={id} {...otherCollectionProps} />   
                ))
            }


        </div>
    )
}
export default ShopPage