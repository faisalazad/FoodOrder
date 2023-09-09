import React from 'react';
import { Link } from 'react-router-dom';


// const products = [
//   { id: 1, name: 'Pizza 1', imageSrc: 'pisa.jpg' },
//   { id: 2, name: 'Pizza 2', imageSrc: 'pisa.jpg' },
//   { id: 3, name: 'Pizza 3', imageSrc: 'pisa.jpg' },
//   { id: 4, name: 'Pizza 4', imageSrc: 'pisa.jpg' },
//   { id: 1, name: 'Pizza 1', imageSrc: 'pisa.jpg' },
//   { id: 2, name: 'Pizza 2', imageSrc: 'pisa.jpg' },
//   { id: 3, name: 'Pizza 3', imageSrc: 'pisa.jpg' },
//   { id: 4, name: 'Pizza 4', imageSrc: 'pisa.jpg' },
//   { id: 1, name: 'Pizza 1', imageSrc: 'pisa.jpg' },
//   { id: 2, name: 'Pizza 2', imageSrc: 'pisa.jpg' },
//   { id: 3, name: 'Pizza 3', imageSrc: 'pisa.jpg' },
//   { id: 4, name: 'Pizza 4', imageSrc: 'pisa.jpg' },
// , // Add cursor image as a product
//   // Add more product objects as needed
// ];

const Maindesign = ()=> {
  // Define a style object for the adjusted image
  const adjustedImageStyle = {
    width: '30%', // Adjust the width as needed
    margin: 'auto', // Center the image horizontally
    display: 'block', // Make the image a block element
    position: 'relative', // Position the image relative to its container
  };

  // Define a style object for the grid container
  // Define a style object for the grid container
const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns in each row
    gap: '20px', // Adjust the gap between products
    textAlign: 'center', // Center align the products within each grid cell
  };
  

  // Define a style object for the product images
  const productImageStyle = {
    width: '50%', // Make sure the images fill their grid cells
  };

  return (
    <div>
      <nav>
        <ul>
        <Link to = '/product'><li><a href='#'></a>Products</li></Link> 
          <li>Order</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="content">
        <h1>World's Best Pizza Shop</h1>
        <hr />
        <div>
        <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur dsfgd adipisicing elit.
           Commodi
          eaque aperiam htrg laborum ratione ipsa expedita asperiores minima
          animi adipisci
        </p>
        </div>
        
            {/* Place the pizza image at the top */}
            <img src="pizza.gif" alt="" style={adjustedImageStyle} />
          </div>
        
      </div>

      {/* Place the pizza image at the top */}
    

      {/* Create a grid for the products, including the cursor image */}
      {/* <div style={gridContainerStyle}>
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imageSrc} alt={product.name} style={productImageStyle} />
            <p>{product.name}</p>
            <button>ORDER NOW</button>
          </div>
        ))}
      </div> */}
    </div>
  );
}

                        export default Maindesign;
