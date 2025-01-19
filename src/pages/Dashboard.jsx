// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import Cards from "../components/Cards";
// import Modal from "antd/es/modal/Modal";
// import AddExpense from "../components/Modals/addExpense";
// import AddIncome from "../components/Modals/addIncome";
// import { addDoc, collection, getDocs, query } from "firebase/firestore";
// import { toast } from "react-toastify";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, db } from "../firebase";
// import TransactionsTable from "../components/TransactionsTable";
// import ChartComponent from "../components/Charts";
// import NoTransactions from "../components/NoTransactions";

// const Dashboard = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [income, setIncome] = useState(0);
//   const [expense, setExpense] = useState(0);
//   const [totalBalance, setTotalBalance] = useState(0);
//   const [user] = useAuthState(auth);
//   const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
//   const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);

//   const showExpenseModal = () => {
//     setIsExpenseModalVisible(true);
//   };

//   const showIncomeModal = () => {
//     setIsIncomeModalVisible(true);
//   };

//   const handleExpenseCancel = () => {
//     setIsExpenseModalVisible(false);
//   };

//   const handleIncomeCancel = () => {
//     setIsIncomeModalVisible(false);
//   };

//   const onFinish = (values, type) => {
//     const newTransaction = {
//       type: type,
//       date: values.date.format("YYYY-MM-DD"),
//       amount: parseFloat(values.amount) || 0, // Ensure valid number
//       tag: values.tag,
//       name: values.name,
//     };
//     addTransaction(newTransaction);
//   };

//   const addTransaction = async (transaction, many) => {
//     try {
//       const docRef = await addDoc(
//         collection(db, `users/${user.uid}/transactions`),
//         transaction
//       );
//       console.log("Document written with ID:", docRef.id);
//       if (!many) toast.success("Transaction added successfully");

//       setTransactions((prev) => [...prev, transaction]);
//     } catch (error) {
//       console.error("Error adding document:", error);
//       if (!many) toast.error("Couldn't add transaction");
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, [user]);

//   useEffect(() => {
//     calculateBalance();
//   }, [transactions]);

//   const calculateBalance = () => {
//     let incomeTotal = 0;
//     let expenseTotal = 0;

//     transactions.forEach((transaction) => {
//       const amount = parseFloat(transaction.amount); // Ensure amount is a valid number
//       if (!isNaN(amount)) { // Check if amount is a valid number
//         if (transaction.type === "income") {
//           incomeTotal += amount;
//         } else {
//           expenseTotal += amount;
//         }
//       }
//     });

//     setIncome(incomeTotal.toFixed(2)); // Round to 2 decimal places
//     setExpense(expenseTotal.toFixed(2)); // Round to 2 decimal places
//     setTotalBalance((incomeTotal - expenseTotal).toFixed(2)); // Round to 2 decimal places
//   };

//   const fetchTransactions = async () => {
//     setLoading(true);
//     if (user) {
//       const q = query(collection(db, `users/${user.uid}/transactions`));
//       const querySnapshot = await getDocs(q);
//       const transactionsArray = [];
//       querySnapshot.forEach((doc) => {
//         const transaction = doc.data();
//         transaction.id = doc.id;
//         transaction.amount = parseFloat(transaction.amount) || 0; // Ensure amount is a valid number
//         transactionsArray.push(transaction);
//       });
//       setTransactions(transactionsArray);
//       console.log("Transactions array", transactionsArray);

//       toast.success("Transactions fetched successfully");
//     }
//     setLoading(false);
//   };

//   let sortedTransactions = transactions.sort((a, b) => {
//     return new Date(b.date) - new Date(a.date);
//   });

//   return (
//     <div>
//       <Header />
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <Cards
//             income={income}
//             expense={expense}
//             totalBalance={totalBalance}
//             showExpensesModal={showExpenseModal}
//             showIncomeModal={showIncomeModal}
//           />
//           {transactions && transactions.length !== 0 ? (
//             <ChartComponent sortedTransactions={sortedTransactions} />
//           ) : (
//             <NoTransactions />
//           )}

//           <AddExpense
//             isExpenseModalVisible={isExpenseModalVisible}
//             handleExpenseCancel={handleExpenseCancel}
//             onFinish={onFinish}
//           />

//           <AddIncome
//             isIncomeModalVisible={isIncomeModalVisible}
//             handleIncomeCancel={handleIncomeCancel}
//             onFinish={onFinish}
//           />
//           <TransactionsTable
//             transactions={transactions}
//             addTransaction={addTransaction}
//             fetchTransactions={fetchTransactions}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Modal from "antd/es/modal/Modal";
import AddExpense from "../components/Modals/addExpense";
import AddIncome from "../components/Modals/addIncome";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import TransactionsTable from "../components/TransactionsTable";
import ChartComponent from "../components/Charts";
import NoTransactions from "../components/NoTransactions";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [user] = useAuthState(auth);
  const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
  const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);

  const showExpenseModal = () => {
    setIsExpenseModalVisible(true);
  };

  const showIncomeModal = () => {
    setIsIncomeModalVisible(true);
  };

  const handleExpenseCancel = () => {
    setIsExpenseModalVisible(false);
  };

  const handleIncomeCancel = () => {
    setIsIncomeModalVisible(false);
  };

  const onFinish = (values, type) => {
    const newTransaction = {
      type: type,
      date: values.date.format("YYYY-MM-DD"),
      amount: parseFloat(values.amount) || 0, // Ensure valid number
      tag: values.tag,
      name: values.name,
    };
    addTransaction(newTransaction);
  };

  const addTransaction = async (transaction, many) => {
    try {
      const docRef = await addDoc(
        collection(db, `users/${user.uid}/transactions`),
        transaction
      );
      console.log("Document written with ID:", docRef.id);
      if (!many) toast.success("Transaction added successfully");

      setTransactions((prev) => [...prev, transaction]);
    } catch (error) {
      console.error("Error adding document:", error);
      if (!many) toast.error("Couldn't add transaction");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [user]);

  useEffect(() => {
    calculateBalance();
  }, [transactions]);

  const calculateBalance = () => {
    let incomeTotal = 0;
    let expenseTotal = 0;

    transactions.forEach((transaction) => {
      const amount = parseFloat(transaction.amount); // Ensure amount is a valid number
      if (!isNaN(amount)) {
        // Check if amount is a valid number
        if (transaction.type === "income") {
          incomeTotal += amount;
        } else {
          expenseTotal += amount;
        }
      }
    });

    setIncome(incomeTotal.toFixed(2)); // Round to 2 decimal places
    setExpense(expenseTotal.toFixed(2)); // Round to 2 decimal places
    setTotalBalance((incomeTotal - expenseTotal).toFixed(2)); // Round to 2 decimal places
  };

  const fetchTransactions = async () => {
    setLoading(true);
    if (user) {
      const q = query(collection(db, `users/${user.uid}/transactions`));
      const querySnapshot = await getDocs(q);
      const transactionsArray = [];
      querySnapshot.forEach((doc) => {
        const transaction = doc.data();
        transaction.id = doc.id;
        transaction.amount = parseFloat(transaction.amount) || 0; // Ensure amount is a valid number
        transactionsArray.push(transaction);
      });
      setTransactions(transactionsArray);
      console.log("Transactions array", transactionsArray);

      toast.success("Transactions fetched successfully");
    }
    setLoading(false);
  };

  const resetDashboard = () => {
    setTransactions([]);
    setIncome(0);
    setExpense(0);
    setTotalBalance(0);
    toast.success("Dashboard reset successfully!");
  };

  let sortedTransactions = transactions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Cards
            income={parseFloat(income)}
            expense={parseFloat(expense)}
            totalBalance={parseFloat(totalBalance)}
            showExpensesModal={showExpenseModal}
            showIncomeModal={showIncomeModal}
            resetDashboard={resetDashboard} // Pass reset function as a prop
          />
          {transactions && transactions.length !== 0 ? (
            <ChartComponent sortedTransactions={sortedTransactions} />
          ) : (
            <NoTransactions />
          )}

          <AddExpense
            isExpenseModalVisible={isExpenseModalVisible}
            handleExpenseCancel={handleExpenseCancel}
            onFinish={onFinish}
          />

          <AddIncome
            isIncomeModalVisible={isIncomeModalVisible}
            handleIncomeCancel={handleIncomeCancel}
            onFinish={onFinish}
          />
          <TransactionsTable
            transactions={transactions}
            addTransaction={addTransaction}
            fetchTransactions={fetchTransactions}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
