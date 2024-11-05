import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import '../assets/css/creditScore.scss' // Import your CSS file

const CreditScore = ({item}) => {
  return (
    <div className="score-container">
      {/* Half Circular Progress Section */}
      <div className="half-circle">
        <div className="half-circle-rotate">
          <CircularProgressbar
            value={item?.data?.score}
            styles={buildStyles({
              pathColor: '#6c757d',
              textColor: '#333',
              trailColor: '#e0e0e0',
              textSize: '24px'
            })}
          />
        </div>

        {/* Display Score and Date */}
        <div className="score-info">
          <div>

            <p className="score-date">{item?.data?.scoreDate}</p>
          </div>
          <p className="score-text">{item?.data?.score}</p>
        </div>
        <p className="credit-score">
          Your Credit Score is <span style={{ color: '#333' }}>Excellent</span>
        </p>
      </div>

      {/* Categories Section */}
      <div className="categories-container">
        {item?.data?.categories.map((category, index) => (
          <div key={index} className="category-item">
            <span className="category-color" style={{ backgroundColor: category.color }}></span>
            <span className="category-label">{category.label}</span>
            <span className="category-count">({category.count})</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CreditScore