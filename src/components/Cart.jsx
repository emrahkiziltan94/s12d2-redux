import { useSelector, useDispatch } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../redux/actions';

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const total =
    cart && cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Sepet</h2>
      {cart && cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <>
          <ul>
            {cart &&
              cart.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.name}-{item.price} x {item.quantity}
                  </span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <button onClick={() => handleRemove(item.id)}>Delete</button>
                </li>
              ))}
          </ul>
          <h3>TotalPrice: {total}</h3>
        </>
      )}
    </div>
  );
}
