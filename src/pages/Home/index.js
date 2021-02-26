// react redux
import { useSelector } from "react-redux";

// material ui
import { Box } from "@material-ui/core";

// components
import ProductCard from "../../components/Card";

//-------------------------------------
const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <Box width={{ xs: "100%", sm: "60%" }}>
      <h2>Produtos</h2>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        flexWrap={{ xs: "nowrap", sm: "wrap" }}
        justifyContent={{ xs: "flex-start", sm: "center" }}
        alignItems={{xs: "center", sm: "flex-start"}}
      >
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </Box>
    </Box>
  );
};
export default Home;
