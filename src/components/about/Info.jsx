import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-code-block about__icon'></i>
            <h3 className="about__title">Developer</h3>
            <span className="about__subtitle">5 Years</span>
        </div>

        <div className="about__box">
            <i class='bx bxs-school about__icon'></i>
            <h3 className="about__title">Teacher</h3>
            <span className="about__subtitle">1 Year</span>
        </div>

        <div className="about__box">
            <i class='bx bxs-factory about__icon'></i>
            <h3 className="about__title">Manager</h3>
            <span className="about__subtitle">2 Years</span>
        </div>
    </div>
  )
}

export default Info