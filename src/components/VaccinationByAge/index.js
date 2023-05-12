import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Cell,
} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <div className="vaccination-card">
      <h1 className="card-heading">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie cx="50%" cy="50%" data={vaccinationByAge} dataKey="count" label>
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-60" fill="#64c2a6" />
            <Cell name="Above 60" fill="#a3df9f" />
          </Pie>
          <Legend
            iconType="circle"
            align="center"
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationByAge
