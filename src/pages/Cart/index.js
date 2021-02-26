// react redux
import { useSelector } from "react-redux";

// material ui
import { Box } from "@material-ui/core";

// components
import ProductCard from "../../components/Card";

//-------------------------------------
const Cart = () => {
  const products = useSelector((state) => state.list);

  return (
    <Box width={{ xs: "100%", sm: "60%" }}>
      <h2>Carrinho</h2>
      <Box my={1}>
        Total: R$ 
        <span>
          {products.reduce((acc, product) => {
            return acc + product.price * product.quantity;
          }, 0)}
        </span>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        flexWrap={{ xs: "nowrap", sm: "wrap" }}
        justifyContent={{ xs: "flex-start", sm: "center" }}
        alignItems={{ xs: "center", sm: "flex-start" }}
      >
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} remove />;
        })}
      </Box>
    </Box>
  );
};
export default Cart;
