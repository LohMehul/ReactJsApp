// import React from 'react';

// const Styling = () => {
//     return (
//         <div className='container'>
//             <h4>Styling</h4>
//         </div>
//     );
// };

// export default Styling;

// import React from 'react';
// import styled from 'styled-components';

// const HomePageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #f9f9f9;
// `;

// const Banner = styled.img`
//   width: 100%;
//   max-height: 300px;
//   object-fit: cover;
// `;

// const Title = styled.h1`
//   font-size: 36px;
//   margin: 30px 0;
// `;

// const ProductList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

// const ProductCard = styled.div`
//   width: 300px;
//   margin: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 10px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 5px;
//   margin-bottom: 10px;
// `;

// const ProductTitle = styled.h3`
//   font-size: 18px;
//   margin-bottom: 5px;
// `;

// const ProductPrice = styled.p`
//   font-size: 16px;
//   color: #007bff;
//   margin-bottom: 10px;
// `;

// const ProductDescription = styled.p`
//   font-size: 14px;
// `;

// const HomePage = () => {
//   return (
//     <HomePageContainer>
//       <Banner src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F004%2F299%2F835%2Foriginal%2Fonline-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg&tbnid=70ts1C3wRzToWM&vet=12ahUKEwjU753q3riAAxUkoekKHb2WCmsQMygCegUIARD_AQ..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fshop-banner&docid=84dTWMcrn6f5UM&w=1920&h=576&q=shopping%20banner&ved=2ahUKEwjU753q3riAAxUkoekKHb2WCmsQMygCegUIARD_AQ" alt="Shopping site banner" />
//       <Title>Welcome to My Shopping Site</Title>
//       <ProductList>
//         <ProductCard>
//           <ProductImage src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F90946%2Fpexels-photo-90946.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-math-90946.jpg%26fm%3Djpg&tbnid=Wmnu3T05GveSeM&vet=12ahUKEwiat4n03riAAxV3mmMGHeHTDTgQMygAegUIARDzAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fproduct%2F&docid=nMjIODhQZ_AKUM&w=4314&h=2857&q=product%20image&ved=2ahUKEwiat4n03riAAxV3mmMGHeHTDTgQMygAegUIARDzAQ" alt="Product 1" />
//           <ProductTitle>Product 1</ProductTitle>
//           <ProductPrice>$29.99</ProductPrice>
//           <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProductDescription>
//         </ProductCard>
//         <ProductCard>
//           <ProductImage src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1505740420928-5e560c06d30e%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%253D%253D%26w%3D1000%26q%3D80&tbnid=zIS0W5xsGFb95M&vet=12ahUKEwiat4n03riAAxV3mmMGHeHTDTgQMygCegUIARD3AQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fproduct&docid=Bfa8p_BERHYMYM&w=1000&h=667&q=product%20image&ved=2ahUKEwiat4n03riAAxV3mmMGHeHTDTgQMygCegUIARD3AQ" alt="Product 2" />
//           <ProductTitle>Product 2</ProductTitle>
//           <ProductPrice>$19.99</ProductPrice>
//           <ProductDescription>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ProductDescription>
//         </ProductCard>
//         {/* Add more products here */}
//       </ProductList>
//     </HomePageContainer>
//   );
// };

// export default HomePage;


// import React from 'react';
// import styled from 'styled-components';
// import { FiShoppingCart } from 'react-icons/fi';

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const Banner = styled.div`
//   background-color: #f1f1f1;
//   padding: 20px;
//   text-align: center;
// `;

// const ProductGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 20px;
//   margin-top: 20px;
// `;

// const ProductItem = styled.div`
//   border: 1px solid #ccc;
//   padding: 20px;
//   text-align: center;
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   max-height: 150px;
//   object-fit: cover;
// `;

// const App = () => {
//   return (
//     <Container>
//       <Banner>
//         <h1>Welcome to our Shopping Site</h1>
//         <p>Discover amazing products just for you!</p>
//       </Banner>
//       <ProductGrid>
//         <ProductItem>
//           <ProductImage src="product1.jpg" alt="Product 1" />
//           <h3>Product 1</h3>
//           <p>Price: $19.99</p>
//           <button>Add to Cart</button>
//         </ProductItem>
//         <ProductItem>
//           <ProductImage src="product2.jpg" alt="Product 2" />
//           <h3>Product 2</h3>
//           <p>Price: $29.99</p>
//           <button>Add to Cart</button>
//         </ProductItem>
//         <ProductItem>
//           <ProductImage src="product3.jpg" alt="Product 3" />
//           <h3>Product 3</h3>
//           <p>Price: $14.99</p>
//           <button>Add to Cart</button>
//         </ProductItem>
//         <ProductItem>
//           <ProductImage src="product4.jpg" alt="Product 4" />
//           <h3>Product 4</h3>
//           <p>Price: $24.99</p>
//           <button>Add to Cart</button>
//         </ProductItem>
//         <ProductItem>
//           <ProductImage src="product5.jpg" alt="Product 5" />
//           <h3>Product 5</h3>
//           <p>Price: $34.99</p>
//           <button>Add to Cart</button>
//         </ProductItem>
//       </ProductGrid>
//     </Container>
//   );
// };

// export default App;


import React, { useState } from 'react';
import styled from 'styled-components';
// import { FiShoppingCart } from 'react-icons/fi';

// imort

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Banner = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
`;

const ProductItem = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
`;

const AddToCartButton = styled.button`
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const RemoveFromCartButton = styled.button`
  margin-top: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #d32f2f;
  }
`;

const CartContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CartImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 10px;
`;

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((product) => product !== productToRemove));
  };

  return (
    <Container>
      <Banner>
        <h1>Welcome to our Unique Store</h1>
        <p>Discover amazing products just for you!</p>
      </Banner>
      <ProductGrid>
        {/* Product 1 */}
        <ProductItem>
          <ProductImage src="product1.jpg" alt="Product 1" />
          <h3>Product 1</h3>
          <p>Price: $19.99</p>
          <AddToCartButton onClick={() => addToCart('Product 1')}>Add to Cart</AddToCartButton>
        </ProductItem>

        {/* Product 2 */}
        <ProductItem>
          <ProductImage src="product2.jpg" alt="Product 2" />
          <h3>Product 2</h3>
          <p>Price: $29.99</p>
          <AddToCartButton onClick={() => addToCart('Product 2')}>Add to Cart</AddToCartButton>
        </ProductItem>

        {/* Product 3 */}
        <ProductItem>
          <ProductImage src="product3.jpg" alt="Product 3" />
          <h3>Product 3</h3>
          <p>Price: $14.99</p>
          <AddToCartButton onClick={() => addToCart('Product 3')}>Add to Cart</AddToCartButton>
        </ProductItem>

        {/* Product 4 */}
        <ProductItem>
          <ProductImage src="product4.jpg" alt="Product 4" />
          <h3>Product 4</h3>
          <p>Price: $24.99</p>
          <AddToCartButton onClick={() => addToCart('Product 4')}>Add to Cart</AddToCartButton>
        </ProductItem>

        {/* Product 5 */}
        <ProductItem>
          <ProductImage src="product5.jpg" alt="Product 5" />
          <h3>Product 5</h3>
          <p>Price: $34.99</p>
          <AddToCartButton onClick={() => addToCart('Product 5')}>Add to Cart</AddToCartButton>
        </ProductItem>

        {/* Product 6 */}
        <ProductItem>
          <ProductImage src="product6.jpg" alt="Product 6" />
          <h3>Product 6</h3>
          <p>Price: $39.99</p>
          <AddToCartButton onClick={() => addToCart('Product 6')}>Add to Cart</AddToCartButton>
        </ProductItem>
      </ProductGrid>

      <CartContainer>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((product, index) => (
            <CartItem key={index}>
              <CartImage src={`product${index + 1}.jpg`} alt={`Product ${index + 1}`} />
              <p>{product}</p>
              <RemoveFromCartButton onClick={() => removeFromCart(product)}>
                Remove from Cart
              </RemoveFromCartButton>
            </CartItem>
          ))
        )}
      </CartContainer>
    </Container>
  );
};

export default App;
