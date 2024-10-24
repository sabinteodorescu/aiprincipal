import React from 'react'

function About() {
  return (
    <section className="container">
        <h2 className="header">What do we offer?</h2>
        <div className="features">
          <div className="card">
            <span><i className="ri-questionnaire-fill"></i></span>
            <h4>Graded Quiz</h4>
            <p>
              Find out what and how much you know on the subject with our standardized graded quizzez
            </p>
            <a href="#">Take a quiz! <i className="ri-arrow-right-line"></i></a>
          </div>
          <div className="card">
            <span><i className="ri-phone-find-fill"></i></span>
            <h4>Find the best courses</h4>
            <p>
              Find out which of our courses fit you best by telling our AI-Principal your intrests
            </p>
            <a href="#">To the Principal's Office! <i className="ri-arrow-right-line"></i></a>
          </div>
        </div>
    </section>
  )
}

export default About