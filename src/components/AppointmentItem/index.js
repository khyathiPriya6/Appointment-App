// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStar} = props
  const {id, title, date, stared} = appointmentDetails
  const starImgUrl = stared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const clickStarBtn = () => {
    toggleStar(id)
  }

  return (
    <li className="each-appointment">
      <div className="details-container">
        <p className="title-style">{title}</p>
        <p className="date-style">{date} tuesday date</p>
      </div>
      <button
        className="star-btn"
        type="submit"
        testid="star"
        onClick={clickStarBtn}
      >
        <img src={starImgUrl} alt="star" className="star-style" />
      </button>
    </li>
  )
}

export default AppointmentItem
