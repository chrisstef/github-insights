import Chart from "chart.js";
import languageDataColors from "./languageDataColors";

const buildScales = axes => {
  const scales = {
    xAxes: [
      {
        ticks: {
          fontFamily: "Inter",
          fontColor: "#f6f8fa",
          fontSize: 12,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontFamily: "Inter",
          fontColor: "#f6f8fa",
          fontSize: 12,
        },
      },
    ],
  };

  return axes ? scales : null;
};

const buildLegend = legend => {
  const legendConfig = {
    position: "right",
    labels: {
      fontFamily: "Inter",
      fontColor: "#f6f8fa",
    },
  };
  return legend ? legendConfig : null;
};

const buildChart = config => {
  const { canvasElement, chartType, labels, data, axes, legend } = config;
  const defaultBackgroundColors = [
    "#ff6384",
    "#36a2eb",
    "#cc65fe",
    "#ffce56",
    "#4bc0c0",
    "#ffa600",
    "#8d5b4c",
    "#6495ed",
    "#ffb6c1",
    "#87cefa"
  ];

  let backgroundColor;

  if (labels) {
    backgroundColor = labels.map(language => languageDataColors[language]);
  } else {
    backgroundColor = defaultBackgroundColors.slice(0, data.length);
  }

  // Overwrite the default background color with language colors if they are provided
  backgroundColor = backgroundColor.map((color, index) =>
    color ? color : defaultBackgroundColors[index]
  );

  return new Chart(canvasElement, {
    type: chartType,
    responsive: true,
    maintainAspectRatio: false,
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: buildScales(axes),
      legend: buildLegend(legend),
      tooltips: {
        titleFontFamily: "Inter",
        bodyFontFamily: "Inter",
        cornerRadius: 3,
      },
    },
  });
};





export default buildChart;
