import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import { useEffect, useState } from "react";
import axios from "axios";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

  const getData = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if(error === true){
    return <p>Something went wrong..</p>
  }

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        {loading ? (
          <p>Loading.....</p>
        ) : (
          <>
            <article id="product-panel" className="col-md-6">
              {products.map((urun) => (
                <ProductCard urun={urun} getData={getData} />
              ))}
            </article>
            <article>
              <CardTotal products={products} />
            </article>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
