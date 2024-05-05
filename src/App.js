import React from "react";
function App() {
  return (
    <div className="App">
      <html lang="en">
        <head>
          <title>Survey Form</title>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          <h1 id="title">freeCodeCamp Survey Form</h1>
          <p id="description">
            Thank you for taking the time to help us improve the platform
          </p>
          <form id="survey-form">
            <label id="name-label">
              Name
              <input
                id="name"
                type="text"
                required
                placeholder="Enter your name"
              />
            </label>
            <label id="email-label">
              Email
              <input
                id="email"
                type="Email"
                required
                placeholder="Enter your email"
              />
            </label>
            <label id="number-label">
              Age (optional)
              <input
                id="number"
                type="Number"
                min="18"
                max="120"
                required
                placeholder="Age"
              />
            </label>
            <label>
              Which option best describes your current role?
              <select id="dropdown">
                <option>Select current role</option>
                <option>Student</option>
                <option>Full time job</option>
                <option>Full Time Learner</option>
                <option>Prefer not to say</option>
                <option>Other</option>
              </select>
            </label>
            <label>Would you recommend freeCodeCamp to a friend? </label>
            <label for="definitely">
              <input
                id="definitely"
                name="recommend"
                type="radio"
                class="inline"
                value="definitely"
                checked
              />
              Definitely
            </label>
            <label for="maybe">
              <input
                id="maybe"
                name="recommend"
                type="radio"
                class="inline"
                value="maybe"
              />
              Maybe
            </label>
            <label for="not-sure">
              <input
                id="not-sure"
                name="recommend"
                type="radio"
                class="inline"
                value="not-sure"
              />
              Not sure
            </label>
            <label>
              What is your favorite feature of freeCodeCamp?
              <select>
                <option>Select an option</option>
                <option>Projects</option>
                <option>Challenges</option>
                <option>Community</option>
                <option>Open Source</option>
              </select>
            </label>

            <label>
              What would you like to see improved? (Check all that apply)
            </label>
            <label for="front-end">
              <input
                id="front-end"
                name="front-end"
                type="checkbox"
                class="inline"
                value="front-end"
              />
              Front-end Projects{" "}
            </label>
            <label for="back-end">
              <input
                id="back-end"
                name="back-end"
                type="checkbox"
                class="inline"
                value="back-end"
              />
              Back-end Projects{" "}
            </label>
            <label for="data">
              <input
                id="data"
                name="data"
                type="checkbox"
                class="inline"
                value="data"
              />
              Data Visualization{" "}
            </label>
            <label for="challenges">
              <input
                id="challenges"
                name="challenges"
                type="checkbox"
                class="inline"
                value="challenges"
              />
              Challenges{" "}
            </label>
            <label for="open">
              <input
                id="open"
                name="open"
                type="checkbox"
                class="inline"
                value="open"
              />
              Open Source Community{" "}
            </label>
            <label for="glitter">
              <input
                id="glitter"
                name="glitter"
                type="checkbox"
                class="inline"
                value="glitter"
              />
              Gitter help rooms{" "}
            </label>
            <label for="videos">
              <input
                id="videos"
                name="videos"
                type="checkbox"
                class="inline"
                value="videos"
              />
              Videos{" "}
            </label>
            <label for="city">
              <input
                id="city"
                name="city"
                type="checkbox"
                class="inline"
                value="city"
              />
              City Meetups{" "}
            </label>
            <label for="wiki">
              <input
                id="wiki"
                name="wiki"
                type="checkbox"
                class="inline"
                value="wiki"
              />
              Wiki{" "}
            </label>
            <label for="forum">
              <input
                id="forum"
                name="forum"
                type="checkbox"
                class="inline"
                value="forum"
              />
              Forum{" "}
            </label>
            <label for="additional">
              <input
                id="additional"
                name="additional"
                type="checkbox"
                class="inline"
                value="additional"
              />
              Additional Courses{" "}
            </label>
            <label>
              Any comments or suggestions?
              <textarea placeholder="Enter your comment here..."></textarea>
            </label>
            <input id="submit" type="submit" value="Submit" />
          </form>
        </body>
      </html>
    </div>
  );
}

export default App;
