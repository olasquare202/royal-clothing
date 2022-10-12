import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { selectCollections } from "../../redux/shop/shop.selectors.js";

import "./collections-overview.styles.scss";
import { collection } from "firebase/firestore";

const CollectionsOverview = ({ collections }) =>{ 
    console.log(collections)
    return(
    <div className="collections-overview">
    {/* {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))} */}
    <div>{collection.hats.id}</div>
    <div>{collections.hats.item.map((item, id)=>
    <p>{item.name}</p>)}</div>
  </div>
    )
  }
;

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
