import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const COLORS = ["#b8de6f", "#ff7f7f", "#f8efd4", "#000"];

const RADIAN = Math.PI / 180;
const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul className="flex justify-center gap-3 list-none p-0 ">
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          className="flex items-center lg:mt-0 mt-4 lg:text-base md:text-sm text-xs"
        >
          <svg width="14" height="14" className="mr-2">
            <circle cx="7" cy="7" r="7" fill={entry.color} />
          </svg>
          {entry.payload.value} {entry.payload.name}
        </li>
      ))}
    </ul>
  );
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieGraph = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          content={renderLegend}
        />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius="80%"
          fill="#000"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieGraph;
