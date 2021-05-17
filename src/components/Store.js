import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import styling from "../styles/Store.module.css";
import FlexRow from "../UI/FlexRow.js";
import FlexProduct from "../UI/FlexProduct.js";
import "../styles/ToastStyling.css";
import Modal from "styled-react-modal";
import styled from "styled-components";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const StyledModal = Modal.styled`
  width: calc(400px - 20px);
  max-width:calc(100% - 20%);
  min-height:250px;
  flex-direction:column;
  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:white;
  div {
    display:flex;
    align-items:center;
      gap:20px;

    justify-content:center;
    flex-direction:column;
  }

  div > img {
    width:200px;
    max-width:100%;
  }

`;

const Store = () => {
  const { productctx, cartctx } = useContext(StoreContext);
  const [products, setProducts] = productctx;

  const [carts, setCarts] = cartctx;
  const [selectedProduct, setselectedProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styling.Store}>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={() => setIsOpen(false)}
        onEscapeKeydown
      >
        <div key={selectedProduct.id}>
          <img src={selectedProduct.image} />
          <h1>{selectedProduct.title}</h1>
          <h4>{selectedProduct.price}€</h4>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </StyledModal>
      <FlexRow>
        {products.map((product) => {
          const accept = () =>
            toast.success(`${product.title} Product added to the Cart`);

          return (
            <FlexProduct
              openModal={() => {
                setIsOpen(true);

                setselectedProduct(product);
              }}
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              addToCart={(e) => {
                e.preventDefault();
                accept();

                setCarts([
                  ...carts,

                  {
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    count: product.count
                  }
                ]);
              }}
            />
          );
        })}
      </FlexRow>

      <ToastContainer
        position={"top-center"}
        progressClassName={"toastProgress"}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        transition={Slide}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Store;
