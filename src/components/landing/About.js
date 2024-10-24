import React from 'react'

function About() {
  return (
    <section className="container">
        <h2 className="header">What do we offer?</h2>
        <div className="features">
          <div className="card">
            <span><i className="ri-questionnaire-fill"></i></span>
            <h2>Efficiency</h2>
            <p>
              Our platform is built with efficiency in mind. Our approach ensures that the training your newcommers 
              receive is tailored to their learning style in order to maximise the  effectiveness of the training.

            </p>
            {/* <a href="#">BUTTON<i className="ri-arrow-right-line"></i></a> */}
          </div>
          <div className="card">
            <span><i className="ri-phone-find-fill"></i></span>
            <h2></h2>
            <p>
              
            </p>
            {/* <a href="#">BUTTON<i className="ri-arrow-right-line"></i></a> */}
          </div>
        </div>
    </section>
  )
}

export default About