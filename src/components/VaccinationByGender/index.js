import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  console.log(vaccinationByGender)
  return (
    <div className="vaccination-card">
      <h1 className="card-heading">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart
        // width={500} height={300}
        >
          <Pie
            dataKey="count"
            cx="50%"
            cy="80%"
            data={vaccinationByGender}
            startAngle={180}
            endAngle={0}
            innerRadius={70}
            outerRadius={130}
            fill="green"
            label
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill=" #5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="circle" align="center" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationByGender
