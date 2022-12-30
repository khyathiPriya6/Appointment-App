import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem/index'

import './index.css'

class Appointment extends Component {
  state = {title: '', date: '', stared: false, prevList: [], starBtn: false}

  changeTitle = event => {
    this.setState({title: event.target.value})
    console.log(this.state)
  }

  changeDate = event => {
    this.setState({date: event.target.value})
  }

  toggleStar = id =>
    this.setState(prevState => ({
      prevList: prevState.prevList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, stared: !eachItem.stared}
        }
        return {...eachItem}
      }),
    }))

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      stared: false,
    }

    this.setState(prevState => ({
      prevList: [...prevState.prevList, newAppointment],
      title: '',
      date: '',
    }))
  }

  toggleStarBtn = () => {
    this.setState(prevState => ({
      starBtn: !prevState.starBtn,
    }))
  }

  render() {
    const {title, date, prevList, starBtn} = this.state
    const isActive = starBtn === true
    const filteredList = isActive
      ? prevList.filter(eachItem => eachItem.stared === true)
      : prevList

    return (
      <div className="app-container">
        <div className="main-container">
          <div className="appointment-section">
            <form
              className="appointment-input-section"
              onSubmit={this.addAppointment}
            >
              <h2 className="add-appointment-heading">Add Appointment</h2>
              <div className="title-container">
                <label htmlFor="title-input" className="input-label">
                  TITLE
                </label>
                <input
                  id="title-input"
                  type="text"
                  className="title-input-style"
                  placeholder="Title"
                  value={title}
                  onChange={this.changeTitle}
                />
              </div>
              <div className="title-container">
                <label
                  htmlFor="date-input"
                  className="input-label"
                  onClick={this.addAppointment}
                >
                  DATE
                </label>
                <input
                  id="date-input"
                  type="date"
                  className="title-input-style"
                  value={date}
                  onChange={this.changeDate}
                />
              </div>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <div className="appointment-img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt=" appointments"
                className="appointment-style"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="appointment-list-container">
            <div className="appointment-top-part">
              <h1 className="add-appointment-heading">Appointments</h1>
              <div>
                <button
                  className="starred-btn"
                  type="submit"
                  onClick={this.toggleStarBtn}
                >
                  Starred
                </button>
              </div>
            </div>
            <div>
              <ul className="appointment-list">
                {filteredList.map(eachItem => (
                  <AppointmentItem
                    appointmentDetails={eachItem}
                    key={eachItem.id}
                    toggleStar={this.toggleStar}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointment
