import { useAuth } from "@clerk/clerk-react"
import Header from "../components/shared/Header"
import { Outlet, useNavigate } from "react-router-dom";
import React from "react";

const Products = () => {
  const {userId, isLoaded} = useAuth();
  const navigate = useNavigate();

  console.log('test', userId);

  React.useEffect(() => {
    if(!userId) {
      navigate('/sign-in')
    }
  });

  if (!isLoaded) return "Loading...";

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Products
