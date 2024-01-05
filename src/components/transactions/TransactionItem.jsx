import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <div className="flex items-center">
        <p className="text-sm">{transaction.description}</p>
        <div>
          <span className="mr-2">${transaction.amount}</span>
          <button
            onClick={() => {
              deleteTransaction(transaction.id); // Llamando a la función deleteTransaction
            }}
            className="ml-2"
          >
            X
          </button>
        </div>
      </div>
    </li>
  );
}

export default TransactionItem;
