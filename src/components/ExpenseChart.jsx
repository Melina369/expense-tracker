import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();
  const total = transactions.reduce(
    (acc, transaction) => (acc += transaction.amount),
    0
  );

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPorcentage = Math.round(
    (totalExpenses / totalIncome) * 100
  );
  const totalIncomePorcentage = 100 - totalExpensesPorcentage;

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Gastos", y: totalExpensesPorcentage },
        { x: "Ingresos", y: totalIncomePorcentage },
      ]}
      animate={{
        duration: 200,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        ></VictoryLabel>
      }
    />
  );
}

export default ExpenseChart;
