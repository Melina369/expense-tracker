import React, { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const { addTrasaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("Datos a agregar:", {
      id: window.crypto.randomUUID(),
      description,
      amount,
    });

    addTrasaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Enter a Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          
        />
        <input
          type="number"
          id="amount"
          name="amount"
          step="0.01"
          placeholder="00.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />

        <button
          className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          type="submit"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
