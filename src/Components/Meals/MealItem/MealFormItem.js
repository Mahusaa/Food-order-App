import React, {  useRef, useState } from "react";
import classes from "./MealFormItem.module.css";
import Input from "../../UI/Input/Input";

const MealFormItem = (props) => {
    const [amountIsValid, setAmountIsValid] =  useState(true)
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountToNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0||
      enteredAmountToNumber < 1 ||
      enteredAmountToNumber > 5
    ) {
        setAmountIsValid(false)
        return;
    };
    props.onAddToCart(enteredAmountToNumber)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount</p>}
    </form>
  );
};

export default MealFormItem;
