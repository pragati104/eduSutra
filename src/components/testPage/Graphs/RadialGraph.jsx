import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "You",
    value: 30,
    fill: "#8884d8",
  },
  {
    name: "Average",
    value: 60,
    fill: "#83a6ed",
  },
  {
    name: "Topper",
    value: 90,
    fill: "#8dd1e1",
  },
];

export default function RadialGraph({ title }) {
  return (
    <>
      {" "}
      <div className="header header-1 lg:w-[80%] w-full my-8">
        <h2 className="md:text-2xl text-base font-semibold ribbon">{title}</h2>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip shared={false} trigger="click" />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#8884d8">
            {" "}
            <LabelList dataKey="value" fill="#000" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
