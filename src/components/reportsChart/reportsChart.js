import { useWindowWidth } from '@react-hook/window-size';
import {
  ComposedChart,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import s from './reportsChart.module.css';

const data = [
  {
    name: 'Page A',
    price: 4000,
  },
  {
    name: 'Page B',
    price: 3000,
  },
  {
    name: 'Page C',
    price: 2000,
  },
  {
    name: 'Page D',
    price: 2780,
  },
  {
    name: 'Page E',
    price: 1890,
  },
  {
    name: 'Page F',
    price: 2390,
  },
  {
    name: 'Page G',
    price: 3490,
  },
];
const customBarLabelMobile = ({ x, y, width, name, value }) => (
  <>
    <text
      x={x + width / 100}
      y={y}
      fill="#52555F"
      fontSize="10"
      textAnchor="start"
      dy={-4}
    >
      {`${name}`}
    </text>
    <text
      style={{}}
      x={x + width / 1.3}
      y={y}
      fill="#52555F"
      fontSize="10"
      dy={-4}
    >
      {`${value}грн.`}
    </text>
  </>
);

const customBarLabelTablet = ({ x, y, width, value }) => (
  <text
    x={x + width / 100}
    y={y}
    fill="#52555F"
    fontSize="10"
    textAnchor="start"
    dy={-4}
  >{`${value}грн.`}</text>
);

export default function charts() {
  const width = useWindowWidth();
  return width < 768 ? (
    <div className={s.mob_wrapper}>
      <ResponsiveContainer width="100%" aspect={1}>
        <ComposedChart
          layout="vertical"
          width={500}
          height={200}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 10,
            left: 10,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" vertical={false} horizontal={false} />
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" scale="band" hide />

          <Bar
            dataKey="price"
            barSize={14}
            fill="#FF751D"
            radius={[0, 10, 10, 0]}
            label={customBarLabelMobile}
          >
            {data.map((_, index) => (
              <Cell fill={index % 3 ? '#FED9BF' : '#ff751d'} />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className={s.tabl_wrapper}>
      <ResponsiveContainer width="100%" aspect={1.8}>
        <BarChart
          layout="horizontal"
          data={data}
          margin={{
            top: 5,
            right: 10,
            bottom: 10,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" vertical={false} />
          <XAxis
            dataKey="name"
            type="category"
            axisLine={false}
            tickLine={false}
          />
          <YAxis height={500} type="number" tickCount={25} hide />

          <Bar
            dataKey="price"
            barSize={40}
            fill="#FF751D"
            label={customBarLabelTablet}
          >
            {data.map((_, index) => (
              <Cell fill={index % 3 ? '#FED9BF' : '#ff751d'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
