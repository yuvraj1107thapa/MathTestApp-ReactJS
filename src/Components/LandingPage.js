import React, { Component } from 'react';
import './LandingPage.css'; 


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', // to store user's name
      selectedQuestions: [], // to store selected question IDs
      totalTestTime: 0, // to store total test time in minutes
    };
  }

  // Handle input changes for name and checkboxes
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleCheckboxChange = (event) => {
    const questionId = event.target.value;
    let selectedQuestions = [...this.state.selectedQuestions];

    if (event.target.checked) {
      selectedQuestions.push(questionId);
    } else {
      selectedQuestions = selectedQuestions.filter(
        (id) => id !== questionId
      );
    }

    // Calculate total test time (5 minutes per selected question)
    const totalTestTime = selectedQuestions.length * 5;

    this.setState({ selectedQuestions, totalTestTime });
  };

  // Handle form submission (when user clicks "Start Test" button)
  handleSubmit = (event) => {
    event.preventDefault();

    // You can perform any necessary actions here, such as starting the test or navigating to the test page.
  };

  render() {
    return (
      <div className="container">
        <h2>Welcome to the Math Test</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              required
            />
          </label>
  
          <div>
            <h3>Select Questions:</h3>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value="AreaUnderTheCurve_21"
                onChange={this.handleCheckboxChange}
              />
              Question 1
            </label>
  
            {/* Repeat similar code for other questions */}
          </div>
  
          <p>Total Test Time: {this.state.totalTestTime} minutes</p>
  
          <button type="submit">Start Test</button>
        </form>
      </div>
    );
  }
  
}

export default LandingPage;
