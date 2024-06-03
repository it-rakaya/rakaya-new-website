import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function TicketDangerChart({ isDarkMode, tickets_by_danger }) {
  const labels = tickets_by_danger?.map((item) => item.attribute);
  const dataValues = tickets_by_danger?.map((item) => item.count);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: dataValues,
        backgroundColor: ["#EE6363", "#F0A44B", "#2c710e"],
        borderColor: ["#EE6363", "#F0A44B", "#2c710e"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
        align: "center",
        labels: {
          color: isDarkMode ? "white" : "black",
          font: {
            family: "IBM Plex Sans Arabic",
          },
        },
      },
      title: {
        display: true,
        text: "حسب الخطورة",
        color: isDarkMode ? "white" : "black",
        font: {
          family: "IBM Plex Sans Arabic",
          size: 14,
        },
      },
    },
    layout: {
      padding: {
        left: 90,
        right: 90,
        top: 90,
        bottom: 90,
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default TicketDangerChart;
