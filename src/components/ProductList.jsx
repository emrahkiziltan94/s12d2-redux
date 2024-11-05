import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const products = [
  { id: 1, name: 'ürün 1', price: 40 },
  { id: 2, name: 'ürün 2', price: 50 },
  { id: 3, name: 'ürün 3', price: 60 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div style={styles.container}>
      <h2>Ürünler</h2>
      <ul style={styles.list}>
        {products.map((product) => (
          <li key={product.id}>
            <span>
              {product.name}-{product.price}
            </span>
            <button onClick={() => handleAddToCart(product)}>
              Sepete Ekle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
const styles = {
  container: {
    width: '45%',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
};
