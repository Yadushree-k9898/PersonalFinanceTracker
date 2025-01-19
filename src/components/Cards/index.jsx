import React from "react";
import "./styles.css";
import { Card, Row } from "antd";
import Button from "../Button";

const Cards = ({
  totalBalance,
  income,
  expense,
  showExpensesModal,
  showIncomeModal,
  cardStyle,
  reset,
}) => {
  return (
    <div>
      <Row className="my-row">
        <Card bordered={true} className="my-card">
          <h2>Current Balance</h2>
          <p>₹{totalBalance}</p>
          <Button  onClick={reset} text="Reset Balance" blue={true}/>
           
        </Card>

        <Card bordered={true} className="my-card">
          <h2>Total Income</h2>
          <p>₹{income}</p>
          <Button onClick={showIncomeModal} text="Add Income" blue={true}/>
           
        </Card>

        <Card bordered={true} className="my-card">
          <h2>Total Expenses</h2>
          <p>₹{expense}</p>
          <Button  onClick={showExpensesModal} text="Add Expenses" blue={true}/>
           
        </Card>
      </Row>
    </div>
  );
};

export default Cards;
