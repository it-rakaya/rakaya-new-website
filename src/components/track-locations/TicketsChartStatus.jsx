import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const test = [
  { color: "#e29697" },
  { color: "#399ddd" },
  { color: "#837f7e" },
  { color: "#00aabb" },
];

const TicketsChartStatus = ({
  segments = test,
  isDarkMode,
  tickets_by_status,
}) => {
  const labels = tickets_by_status?.map((item) => item.attribute);
  const dataValues = tickets_by_status?.map((item) => item?.count);

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataValues || 0,
        backgroundColor: segments.map((segment) => segment.color),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    rotation: -90,
    circumference: 180,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${data.labels[tooltipItem.dataIndex]}: ${
              data.datasets[0].data[tooltipItem.dataIndex]
            }`;
          },
        },
      },
      legend: {
        display: true,
        color: isDarkMode ? "#ffffff" : "#000",
        labels: {
          font: {
            size: 12,
            family: "IBM Plex Sans Arabic",
          },
          color: isDarkMode ? "white" : "black",
        },
      },
      title: {
        display: true,
        text: "حسب الحالة",
        color: isDarkMode ? "#ffffff" : "#000",
        font: {
          size: 14,
          family: "IBM Plex Sans Arabic",
        },
      },
    },
  };

  const minValue = Math?.min(...dataValues);
  const maxValue = Math?.max(...dataValues);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "300px",
        height: "300px",
        margin: "auto",
      }}
      className="text_Dark "
    >
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "22%",
          transform: "translate(-50%, -0%)",
          textAlign: "center",
          fontSize: "14px",
        }}
        className="text_Dark "
      >
        {minValue == "Infinity" ? "0" : minValue}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "22%",
          transform: "translate(50%, -0%)",
          textAlign: "center",
          fontSize: "14px",
        }}
        className="text_Dark "
      >
        {/* {maxValue || 0} */}
        {maxValue == "-Infinity" ? "0" : maxValue}
      </div>
    </div>
  );
};

export default TicketsChartStatus;
