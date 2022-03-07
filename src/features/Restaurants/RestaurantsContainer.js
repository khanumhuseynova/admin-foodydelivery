// import React from 'react';
// import Carousel from 'react-material-ui-carousel';
// import { Paper, Button } from '@material-ui/core';

// const RestaurantsContainer = () => {
	
//     const items = [
//         {
//             name: 'Aya Bouchiha',
//             description: 'Full Stack Web Developer',
//         },
//         {
//             name: 'John Doe',
//             description: 'Author',
//         },
//         {
//             name: 'Pitsu Coma',
//             description: 'Math Student',
//         },
//     ];

//     return (
//         <Carousel>
//             {items.map((item, i) => (
//                 <Item key={i} {...item} />
//             ))}
//         </Carousel>
//     );
// }

// const Item = ({name, description}) => {
//     return (
//         <Paper>
//             <h2>{name}</h2>
//             <p>{description}</p>
//             <Button>more info...</Button>
//         </Paper>
//     );
// };


// export default RestaurantsContainer;
import React, { Component } from "react";
import Slider from "react-slick";

export default class RestaurantsContainer extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}