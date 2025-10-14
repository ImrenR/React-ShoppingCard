
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";

const ProductList = () => {
  const BASE_URL = "https://68ee1779df2025af780251b8.mockapi.io/Shopping";


  

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        {"" ? (
          <p>Loading.....</p>
        ) : (
          <>
            <article id="product-panel" className="col-md-6">
              {[].map((urun) => (
                <ProductCard  />
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
