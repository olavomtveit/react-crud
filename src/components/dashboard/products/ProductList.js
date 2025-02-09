import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, PRODUCTS_ENDPOINT } from "../../../constants/api";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(
    () => {
      async function getAllProducts() {
        try {
          const response = await axios.get(`${BASE_URL}${PRODUCTS_ENDPOINT}`);
          setProducts(response.data);
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      getAllProducts();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>An Error happened</div>;

  return (
    <>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <Link to={`/dashboard/product/edit/${product.id}`}>
                Edit Products
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
