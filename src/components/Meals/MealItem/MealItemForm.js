import { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const submitHandler = event => {
    event.preventDefault();

    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: parseInt(event.target[0].value)
    }
    cartCtx.addItem(item);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
