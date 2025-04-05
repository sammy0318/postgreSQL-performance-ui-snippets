import Chart from "chart.js/auto";
import { filterDataByBranch } from "../utils/filterUtils";

export function renderChart(ctx, data, selectedBranch) {
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [{
        label: "Performance Metric",
        borderColor: "blue",
        fill: false,
        data: []
      }]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: context => {
              const point = filterDataByBranch(data, selectedBranch)[context.dataIndex];
              return `Commit: ${point.commit}\nMetric: ${context.raw}\nView: ${point.url}`;
            }
          }
        }
      }
    }
  });

  return chart;
}
