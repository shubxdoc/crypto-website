import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this

function LineChart({ chartData, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        type: "linear", // Use a valid scale type like 'linear' for crypto1
        position: "left",
      },
      y2: {
        type: "linear", // Use a valid scale type like 'linear' for crypto2
        position: "right",
        display: multiAxis, // Only show the second scale if multiAxis is true
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
