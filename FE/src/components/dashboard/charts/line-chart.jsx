import { Line } from 'react-chartjs-2'
export function LineChart({ chartData }) {
    return (
      <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Line Chart</h2>
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Education Career 10th-MCA"
              },
              legend: {
                display: false
              }
            }
          }}
        />
      </div>
    );
}