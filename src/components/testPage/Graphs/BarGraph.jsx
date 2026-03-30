import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const renderLegend = (props) => {
  const { payload } = props;
 
  return (
    <ul className="flex justify-end gap-3 list-none p-0  ">
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          className="flex justify-center items-center mb-4 lg:text-base md:text-sm text-xs"
        >
          <svg width="14" height="14" className="mr-2">
            <circle cx="7" cy="7" r="7" fill={entry.color} />
          </svg>
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

export default function BarGraph({
  data,
  dataKey1,
  dataKey2,
  dataKey3,
  title,
}) {
  return (
    <>
      <div className="header header-1 lg:w-[80%] w-full mb-8">
        <h2 className="md:text-2xl text-base font-semibold ribbon">{title}</h2>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="center"
            content={renderLegend}
          />
          {dataKey1 && (
            <Bar dataKey={dataKey1} stackId="a" fill="#b8de6f">
              <LabelList dataKey={dataKey1} fill="#000" />
            </Bar>
          )}
          {dataKey2 && (
            <Bar dataKey={dataKey2} stackId="a" fill="#ff7f7f">
              <LabelList dataKey={dataKey2} fill="#000" />
            </Bar>
          )}
          {dataKey3 && (
            <Bar dataKey={dataKey3} stackId="a" fill="#f8efd4">
              <LabelList dataKey={dataKey3} fill="#000" />
            </Bar>
          )}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
