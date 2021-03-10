import Heading from "../layout/Heading";
import { Link } from "react-router-dom";
import ProductPage from "./products/ProductsPage";

export default function DashboardPage({ children }) {
  console.log(children);
  return (
    <>
      <Heading content="Dashboard" />
      <nav>
        Sections: <Link to="/dashboard/products">Products</Link>
      </nav>
      {children ? children : <p>Please select a page</p>}
    </>
  );
}
