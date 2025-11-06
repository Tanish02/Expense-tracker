import { useState } from "react";


function ExpenseTracker() {

    const [expenses, setExpenses] = useState([]);
    const [item, setItem] = useState("");
    const [amount, setAmount] = useState("");

    function handleAdd() {
        if (!item || !amount) return;
        setExpenses([...expenses, { item, amount: parseFloat(amount) }]);
        setItem("");
        setAmount("");
    }

    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    return (

        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>My Personal Expense Tracker 💰</h2>
            <input
                type="text"
                placeholder="Item"
                value={item}
                onChange={(e) => setItem(e.target.value)}
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleAdd}>
                Add
            </button>

            <ul>

            </ul>



        </div>
    )


}

export { ExpenseTracker };



// end Code
// Lifting state up -> One parent component manages multiple child states.
//reduce()-> Summing values from an array.
// Multiple controlled inputs -> Managing several form fields.