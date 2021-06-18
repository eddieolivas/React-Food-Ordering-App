import Modal from '../UI/Modal';
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", ammount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onShowCart={props.onShowCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onShowCart}>Close</button>
        <button className={classes.button}>Order</button>  
      </div>
    </Modal>
  );
};

export default Cart;
