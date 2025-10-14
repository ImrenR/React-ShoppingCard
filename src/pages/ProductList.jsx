
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import { useEffect, useState } from "react";
import axios from "axios";
const ProductList = () => {

const [products, setProducts] = useState([])

  const BASE_URL = "https://68ee1779df2025af780251b8.mockapi.io/Shopping";

useEffect(() => {
 axios
 .get(BASE_URL)
 .then((res)=> setProducts(res.data))
}, [])

  

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        {"" ? (
          <p>Loading.....</p>
        ) : (
          <>
            <article id="product-panel" className="col-md-6">
              {[products].map((urun) => (
                <ProductCard urun={urun} />
              ))}
            </article>
            <article>
              <CardTotal  />
            </article>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
