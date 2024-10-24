import React from 'react'

function Plans() {
  return (
    <section className="container">
      <h2 className="header">TUTORING PLANS</h2>
      <p className="sub-header">
        Our pricing plans come with various membership tiers, each tailored to cater to different needs and
        class types.
      </p>
      <div className="pricing">
        <div className="card">
          <div className="content">
              <h4>Basic Plan</h4>
              <h3>0$</h3>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                1 on 1 conversation with the Principal
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Quizz to determine the best academic path for you to follow
              </p>
          </div>
          <button className="btn">Join Now</button>
        </div>
        <div className="card">
          <div className="content">
              <h4>Gold Plan</h4>
              <h3>10$ /month</h3>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Bi-weekly tutoring classes for 5 subjects of your choosing
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                1 on 1 conversations with the Principal
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Quizz to determine the best academic path for you to follow
              </p>
          </div>
          <button className="btn">Join Now</button>
        </div>
        <div className="card">
          <div className="content">
            <h4>Diamond Plan</h4>
            <h3>100$ /month</h3>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              Weekly tutoring classes for 5 subjects of your choosing
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              Bi-weekly tutoring classes for 5 subjects of your choosing
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              1 on 1 conversations with the Principal
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              Quizz to determine the best academic path for you to follow
            </p>
          </div>
          <button className="btn">Join Now</button>
        </div>
        <div className="aw">
          <div className="content">
            <h4>ACADEMIC WEAPON</h4>
            <h3>200$ /month</h3>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              Upload your own courses!!!
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              Access to our lectures (the base for training our AI Teachers)
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              DAILY tutoring classes for all subjects of your choosing
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              1 on 1 conversations with the Principal
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              Quizz to determine the best academic path for you to follow
            </p>
          </div>
          <button className="btn">Join Now</button>
        </div>
      </div>
    </section>
  )
}

export default Plans