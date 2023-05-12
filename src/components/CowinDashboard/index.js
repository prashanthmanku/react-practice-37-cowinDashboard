import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class CowinDashboard extends Component {
  state = {
    cowinData: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCowinData()
  }

  getCowinData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)
    const data = await response.json()

    if (response.ok === true) {
      const last7DaysVaccination = data.last_7_days_vaccination
      const vaccinationByAge = data.vaccination_by_age
      const vaccinationByGender = data.vaccination_by_gender
      const cowinData = {
        last7DaysVaccination,
        vaccinationByAge,
        vaccinationByGender,
      }
      this.setState({
        cowinData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderChartsView = () => {
    const {cowinData} = this.state
    const {
      vaccinationByAge,
      vaccinationByGender,
      last7DaysVaccination,
    } = cowinData
    return (
      <>
        <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </>
    )
  }

  renderLoaderView = () => (
    <div data-testid="loader" className="loading-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="falure-view-contianer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-heading">Something went wrong</h1>
    </div>
  )

  renderPage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderChartsView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="app-width-container">
          <div className="cowin-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="logo-img"
            />
            <p className="logo-text">co-WIN</p>
          </div>
          <h1 className="main-heading">coWIN Vaccination in India</h1>
          {this.renderPage()}
        </div>
      </div>
    )
  }
}
export default CowinDashboard
