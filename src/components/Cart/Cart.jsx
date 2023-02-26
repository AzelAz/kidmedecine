import React from 'react';

//Helpers

const Cart = ({ image, title, desc, id }) => {

  // const onClick = () => {
  //   // openInNewTab(id)
  // }

  return (
    <div className='card'>
      <div>
        <img src={image} alt=""/>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Cart;
