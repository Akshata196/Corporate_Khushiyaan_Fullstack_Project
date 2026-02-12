import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import PageNavigation from '../components/PageNavigation';


function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetchProducts()
      // .then((res) => setProducts(res.data))
      .then((res) => {
      setProducts(res.data);
      setLoading(false);
    })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  const addToCart = (product) => {
      

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // check if product already exists
  const existingProduct = cart.find(item => item._id === product._id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart 🛒");
};



  return (
    <div style={pageStyle}>
      <PageNavigation />
      <h2 style={headingStyle}>Our Corporate Gifts</h2>

      {products.length === 0 ? (
        <p>Loading Products...</p>
      ) : (
        <div style={gridStyle}>
          {products.map((product) => (
            <div
              key={product._id}
              style={cardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >



            <img
                    src={product.image}
                    alt={product.name}
                    style={imageStyle}
            />   

            <div style={contentStyle}>   
              <h3 style={cardTitle}>{product.name}</h3>
              <p style={cardText}>{product.description}</p>
              <p style={priceStyle}>₹ {product.price}</p>
              <span style={categoryStyle}>{product.category}</span>

              <button
                style={cartBtn}
                onClick={() => addToCart(product)}
                >
                   Add to Cart
                </button>

            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* -------- Styles -------- */

const pageStyle = {
  padding: '50px 60px',
  backgroundColor: '#f9fafb',
  minHeight: '80vh',
};

const imageStyle = {
  width: '100%',
  height: '260px',     // BIG image
  objectFit: 'cover',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
};

const contentStyle = {
  padding: '5px',
};


const headingStyle = {
  textAlign: 'center',
  marginBottom: '40px',
  color: '#1f2933',
  fontSize: '32px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '30px',
};

// const cardStyle = {
//   backgroundColor: '#1f2933',
//   color: '#e5e7eb',
//   padding: '20px',
//   borderRadius: '12px',
//   boxShadow: '0 8px 18px rgba(0,0,0,0.25)',
//   transition: 'transform 0.3s ease'
// };

// const cardStyle = {
//   backgroundColor: '#1f2933',
//   color: '#e5e7eb',
//   borderRadius: '12px',
//   overflow: 'hidden',
//   boxShadow: '0 8px 18px rgba(0,0,0,0.25)',
//   display: 'flex',
//   flexDirection: 'column'
// };

const cardStyle = {
  backgroundColor: '#1f2933',
  color: '#e5e7eb',
  borderRadius: '10px',
  overflow: 'hidden',
  transition: '0.3s',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
};


// const cardTitle = {
//   marginBottom: '8px',
//   color: 'white',
// };

// const cardText = {
//   fontSize: '15px',
//   marginBottom: '15px',
// };

// const priceStyle = {
//   fontWeight: '600',
//   marginBottom: '10px',
// };

const categoryStyle = {
  fontSize: '13px',
  color: '#9ca3af',
};


const cardTitle = {
  marginBottom: '8px',
  fontSize: '18px'
};

const cardText = {
  fontSize: '14px',
  marginBottom: '10px',
  color: '#cbd5e1'
};

const priceStyle = {
  fontWeight: '600',
  marginBottom: '6px',
  fontSize: '16px'
};

const cartBtn = {
  marginTop: "12px",
  padding: "10px",
  width: "100%",
  backgroundColor: "#d4af37",
  border: "none",
  borderRadius: "6px",
  fontWeight: "600",
  cursor: "pointer"
};


export default Products;

