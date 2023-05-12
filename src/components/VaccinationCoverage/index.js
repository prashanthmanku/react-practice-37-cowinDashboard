import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props
  //   const {dose1, dose2, vaccineDate} = last7DaysVaccination
  return (
    <div className="vaccination-card">
      <h1 className="card-heading">Vaccination Coverage</h1>
      <ResponsiveContainer width="90%" height={400}>
        <BarChart
          width={600}
          height={300}
          data={last7DaysVaccination}
          margin={{
            top: 10,
          }}

          //   barCategoryGap={}
        >
          <CartesianGrid
            strokeDasharray="5,5"
            // tick={{
            //   stroke: 'red',
            // }}
            stroke="gray"
          />
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: '#94a3b8',
              strokeWidth: 0.5,
              fontSize: 15,
              fontWeight: 400,
            }}
          />
          <YAxis
            tick={{
              stroke: '#94a3b8',
              strokeWidth: 0.5,
              fontSize: 15,
              fontWeight: 400,
            }}
          />
          <Legend wrapperStyle={{padding: 20}} iconType="square" />
          <Tooltip />

          <Bar
            dataKey="dose_1"
            name="Dose 1"
            fill=" #5a8dee"
            barSize="70%"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="dose_2"
            name="Dose 2"
            fill="#f54394"
            barSize="70%"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationCoverage
