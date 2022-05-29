import React from "react";
import { Link } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { useSelector } from "react-redux";

const Card = ({ product }) => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <table className="table align-middle mb-0 bg-white">
      <thead className="bg-light">
        <tr>
          <th>image</th>
          <th>name</th>
          <th>price</th>
          <th>status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products && products.map(product=>
        <tr key={product._id}>
        <td>
          <img
            src={`/uploads/${product.fileName}`}
            alt=""
            style={{ width: 45, height: 45 }}
          />
        </td>
        <td>{product.productName}</td>
        <td>{product.productPrice}</td>
        <td>
          <p className="text-muted">
            {product.productQty <= 0 ? "Out of Stock" : "In Stock"}
          </p>
        </td>
        <td>
          <Link
            to={`/admin/edit/product/${product._id}`}
            type="button"
            className="btn btn-secondary btn-sm mr-1 my-1"
          >
            <i className="far fa-edit pr-1"></i>
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(deleteProduct(product._id))}
          >
            <i className="far fa-trash-alt pr-1"></i>
            Delete
          </button>
        </td>
      </tr>
          )}
        
      </tbody>
    </table>
  );
};

export default Card;
