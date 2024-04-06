import { useAuth } from "@clerk/clerk-react"
import Header from "../components/shared/Header"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const {userId, isLoaded} = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const url = 'http://localhost:3000/products';

  console.log('test', userId);

  useEffect(() => {
    if(!userId) {
      navigate('/sign-in')
    }
  });
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  if (!isLoaded) return "Loading...";

  return (
    <div>
      <Header />
      {/* <Outlet /> */}
      <div className="container p-16">
        <div className="justify-between items-center">
            <h3 className="font-bold text-2xl">Products</h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-5">
                {products.map((product) => 
                    <ProductCard
                        key={product._id}
                        img={product.image}
                        name={product.name}
                        price={product.price} 
                    />
                )}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Products
