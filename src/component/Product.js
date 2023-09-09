import React from 'react';

const Products = [
  { id: 1, name: 'Pizza 1', imageSrc: 'pisa.jpg' },
  { id: 2, name: 'Pizza 2', imageSrc: 'pisa.jpg' },
  { id: 3, name: 'Pizza 3', imageSrc: 'pisa.jpg' },
  { id: 4, name: 'Pizza 4', imageSrc: 'pisa.jpg' },
  { id: 1, name: 'Pizza 1', imageSrc: 'pisa.jpg' },
  { id: 2, name: 'Pizza 2', imageSrc: 'pisa.jpg' },
  { id: 3, name: 'Pizza 3', imageSrc: 'pisa.jpg' },
  { id: 4, name: 'Pizza 4', imageSrc: 'pisa.jpg' },
  { id: 1, name: 'Pizza 1', imageSrc: 'pisa.jpg' },
  { id: 2, name: 'Pizza 2', imageSrc: 'pisa.jpg' },
  { id: 3, name: 'Pizza 3', imageSrc: 'pisa.jpg' },
  { id: 4, name: 'Pizza 4', imageSrc: 'pisa.jpg' },
, // Add cursor image as a product
  // Add more product objects as needed
];

function Product() {
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
    width: '100%', // Make sure the images fill their grid cells
  };

  return (
    <div>
      
      <div style={gridContainerStyle}>
        {Products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imageSrc} alt={product.name} style={productImageStyle} />
            <p>{product.name}</p>
            <button>ORDER NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
}

                        export default Product;
