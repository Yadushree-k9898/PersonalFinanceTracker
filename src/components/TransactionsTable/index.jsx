import React, { useState } from "react";
import { Radio, Select, Table } from "antd";
import searchImg from "../../assets/search.svg";
import { parse, unparse } from "papaparse";

import { toast } from "react-toastify";

const TransactionsTable = ({ transactions }) => {
  const { Option } = Select;
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortKey, setSortKey] = useState("");
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  let filteredTransactions = transactions.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      item.type.includes(typeFilter)
  );

  let sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortKey === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortKey === "amount") {
      return a.amount - b.amount;
    } else {
      return 0;
    }
  });

  //   const exportCSV = () => {
  //     const csv = unparse(transactions,{
  //       fields: ["name", "type", "tag", "date", "amount"],
  //       transactions,
  //     });
  //     const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  //     const url = URL.createObjectURL(blob);
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = "transactions.csv";
  //     download.body.appendChild(link);
  //     link.click();
  //     // tempLink.setAttribute("download", "transactions.csv");
  //     document.body.removeChild(tempLink);
  //   };

  const exportCSV = () => {
    const csv = unparse({
      fields: ["name", "type", "tag", "date", "amount"], // Specify CSV columns
      data: transactions, // Provide the correct data source
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "transactions.csv"; // File name for the downloaded file
    document.body.appendChild(link); // Append the link to the DOM
    link.click(); // Programmatically click the link to start the download
    document.body.removeChild(link); // Remove the link after download
  };

  const importFromCSV = () => {
    event.preventDefault();
    try {
      parse(event.target.files[0], {
        header: true,
        complete: async function (results) {
          for (const transaction of results.data) {
            console.log("Transaction", transaction);
            const newTransaction = {
              ...transaction,
              amount: parseFloat(transaction.amount),
            };
            await addTransaction(newTransaction, true);
          }
        },
      });
      toast.success("Transactions imported successfully");
      event.target.files = null;
    } catch (error) {
      toast.error("Couldn't import transactions");
    }
  };

  return (
    <>
      {/* <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name"
      /> */}
      <div className="input-flex">
        <img src={searchImg} width="16" alt="" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name"
        />
      </div>
      <Select
        className="select-input"
        onChange={(value) => setTypeFilter(value)}
        value={typeFilter}
        placeholder="Filter"
        allowClear
      >
        <Option value="">All</Option>
        <Option value="income"> Income</Option>
        <Option value="expense">Expense</Option>
      </Select>

      <div>
        <Radio.Group
          className="input-radio"
          onChange={(e) => setSortKey(e.target.value)}
          value={sortKey}
        >
          <Radio.Button value="">No Sort</Radio.Button>
          <Radio.Button value="date">Sort by date</Radio.Button>
          <Radio.Button value="amount">Sort by amount</Radio.Button>
        </Radio.Group>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            width: "400px",
          }}
        >
          <button className="btn" onClick={exportCSV}>
            {" "}
            Export to CSV
          </button>
          <label htmlFor="file-csv" className="btn btn-blue">
            {" "}
            Import from CSV
          </label>
          <input
            id="file-csv"
            type="file"
            accept=".csv"
            required
            style={{ display: "none" }}
            onChange={importFromCSV}
          />
        </div>
        <Table dataSource={sortedTransactions} columns={columns} />;
      </div>
    </>
  );
};

export default TransactionsTable;
