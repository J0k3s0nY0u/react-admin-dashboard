import React from "react";
import "./pieChartBox.scss";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mobile", value: 300, color: "#0008fc" },
  { name: "Desktop", value: 400, color: "#00c57e" },
  { name: "Laptop", value: 200, color: "#ffbf3c" },
  { name: "Tablet", value: 300, color: "#ffbd53" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by Source</h1>
      <ResponsiveContainer>
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartBox;
