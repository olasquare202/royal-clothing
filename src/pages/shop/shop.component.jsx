import React from 'react';
//import { useLocation } from 'react-router-dom';

import { Route } from 'react-router-dom';

import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
console.log(match)
        return (
       
        <div className='shop-page'>
                
                <Route path={`${match?.path}`} element={<CollectionsOverviewComponent/>} />
                <Route path={`${match?.path}/:collectionId`} element={<CollectionPage/>} />
            
                
        </div>
        )};
        
// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// })


export default  ShopPage;









// import React, { useEffect, useState } from "react"



// const ShopPage = () =>{

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         setData(SHOP_DATA)
//     },[])

//     return(
//         <div  className='shop-page'>
//              {
//                 data.map(({ id, ...otherCollectionProps}) => (
//                  <CollectionPreview key={id} {...otherCollectionProps} />   
//                 ))
//             }


//         </div>
//     )
// }
// export default ShopPage