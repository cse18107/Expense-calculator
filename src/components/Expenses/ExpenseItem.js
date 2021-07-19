import "./ExpenseItem.css";
import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

  const [title,setTitle]=useState(props.title);

  // let title = props.title;

  function clickHandler(){
    setTitle('Update!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
export default ExpenseItem;
