const xValues = ["M", "T", "W", "T", "F" , "s" , "s"];
const yValues = [50, 40, 15, 45, 35 , 48 , 65];
const barColors = ["rgba(14,130,253,0.85)", "rgba(14,130,253,0.85)","rgba(14,130,253,0.85)","rgba(251,191,36,1)","rgba(14,130,253,0.85)","rgba(14,130,253,0.85)","rgba(14,130,253,0.85)"];

const ctx = document.getElementById('Chart1');

new Chart(ctx, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: {display: false},
      title: {
        display: true,
        // text: "World Wine Production 2018",
        font: {size: 16}
      }
    }
  }
});
const xxValues = ["M", "T", "W", "T", "F" , "s" , "s"];
const yyValues = [40 , 20, 30, 60, 90 , 40 , 110];
const barrColors = ["rgba(15,23,42,1)", "rgba(15,23,42,1)","rgba(15,23,42,1)","rgba(15,23,42,1)","rgba(15,23,42,1)","rgba(14,130,253,0.85)","rgba(15,23,42,1)"];

const catx = document.getElementById('Chart2');

new Chart(catx, {
  type: "bar",
  data: {
    labels: xxValues,
    datasets: [{
      backgroundColor: barrColors,
      data: yyValues
    }]
  },
  options: {
    plugins: {
      legend: {display: false},
      title: {
        display: true,
        // text: "World Wine Production 2018",
        font: {size: 16}
      }
    }
  }
});