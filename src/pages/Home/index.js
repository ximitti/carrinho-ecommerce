// react redux
import { useSelector } from "react-redux";

//-------------------------------------
const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h2>Produtos</h2>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div><img src={product.image} alt={product.name}/></div>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
