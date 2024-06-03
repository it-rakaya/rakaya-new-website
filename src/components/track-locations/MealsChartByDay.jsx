import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import chroma from "chroma-js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function MealsChartByDay({ meals_by_day , isDarkMode }) {
  const labels = meals_by_day?.map((item) => item.date);
  const dataValues = meals_by_day?.map((item) => item.count);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: isDarkMode ? "white" : "black", 
          font: {
            family: "IBM Plex Sans Arabic", 
          },
        },
      },
      title: {
        display: true,
        text: "حسب اليوم",
        color: isDarkMode ? "white" : "black",
        font: {
          family: "IBM Plex Sans Arabic",
          size: 14, 
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "الوجبات",
        data: dataValues,
        backgroundColor: "#C9B171",
      },
    //   {
    //     label: "Dataset 2",
    //     data: dataValues,
    //     backgroundColor: "rgba(53, 162, 235, 0.5)",
    //   },
    ],
  };

  return (
    <div className="px-1" style={{ height: "350px" }}>
      <Bar options={options} data={data} />
    </div>
  );
}

export default MealsChartByDay;
