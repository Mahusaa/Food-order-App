import React from "react";
import classes from './MealFormItem.module.css'
import Input from "../../UI/Input/Input";

const MealFormItem = (props) => {
    return(
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: "amount_"+ props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "0",
            }}/>
            <button>+ Add</button>
        </form>
    )
};

export default MealFormItem