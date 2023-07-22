import { Typography, Stack } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Stack } from "@mui/system";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const Result = ({ data }) => {
  const { homeValue, loanAmount, interestRate, loanTenure, downPayment } = data;
  const totalMonths = loanTenure * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalMonths) /
    ((1 + interestPerMonth) ** totalMonths - 1);
  const totalInterest = monthlyPayment * totalMonths - loanAmount;
  const pieChart = {
    labels: ["Property Value", "Down Payment", "Interest", "Loan Amount"],
    datasets: [
      {
        data: [homeValue, downPayment, totalInterest, loanAmount],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(162, 235, 54, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(99, 100, 200, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(162, 235, 54, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(99, 100, 200, 1)"
        ],
        borderWidth: 1,
        hoverOffset: 4
      }
    ]
  };
  return (
    <Stack gap={5}>
      <Typography variant="h5" textAlign="center">
        Monthly Payment: ${monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChart} />
        </div>
      </Stack>
    </Stack>
  );
};
export default Result;
