import React from "react";

import { connect, useSelector } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selector";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ sections }) => {

 console.log(sections)
 const item = useSelector((state) => state.sections.sections)
 console.log(item)

      return(<div className="directory-menu">
        { item && item.length > 0 ? item?.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        )): <p>No item to display</p>}
      </div>)
    };
  
const mapStateToProps = createStructuredSelector ({
   sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);














// import React from "react";

// import { connect } from "react-redux";

// import MenuItem from "../menu-item/menu-item.component";

// import "./directory.styles.scss";

// class Directory extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       sections: [
//         {
//           title: "HATS",
//           imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
//           id: 1,
//           linkUrl: "hats",
//         },
//         {
//           title: "JACKETS",
//           imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
//           id: 2,
//           linkUrl: "",
//         },
//         {
//           title: "SNEKERS",
//           imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
//           id: 3,
//           linkUrl: "",
//         },
//         {
//           title: "WOMENS",
//           imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
//           size: "large",
//           id: 4,
//           linkUrl: "",
//         },
//         {
//           title: "MENS",
//           imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
//           size: "large",
//           id: 5,
//           linkUrl: "",
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className="directory-menu">
//         {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
//           <MenuItem
//             key={id}
//             title={title}
//             imageUrl={imageUrl}
//             size={size}
//             linkUrl={linkUrl}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Directory;




