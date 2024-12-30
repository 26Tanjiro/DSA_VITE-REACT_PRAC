import React, { useState } from "react";
import "./SportList.css";

const SportsList = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    height: "",
    weight: "",
    sports: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSportForm, setShowSportForm] = useState(false);
  const [selectedTeam,setSelectedTeam] = useState ("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.sports) {
      alert("Please select a sport before submitting!");
      return;
    }

    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true); 
  };

  const HomePage = () => (
    <div className="home-container">
      <h1>Welcome to PUPBC Sports</h1>
      <p>Thank you for signing up, {formData.name || "User"}!</p>
      <p>Your selected sport: {formData.sports || "None selected"}</p>
      {formData.height && <p>Your height: {formData.height} cm</p>}
      {formData.weight && <p>Your weight: {formData.weight} kg</p>}
      <button onClick={() => setShowSportForm(true)}>Continue</button>
    </div>
  );

  const SportForm = () => {
    const teams = {
      Basketball: ["Team A", "Team B", "Team C"],
      Badminton: ["Shuttle Kings", "Net Smashers", "Ace Player", "Green Lucks"],
      Volleyball: ["Spike Masters", "Volley Stars","Boss Tiger","King Dragon"],
      Tennis: ["Ace Squad", "Court Runners","Speed Motion", "Gravity Snipper"],
      Arnis: ["Stick Fighters", "Blade Warriors","Green Slasher", "Mist Striker "],
    };

    const selectedTeams = teams[formData.sports] || [];
 
    const handleTeamClick =(team) => {
      setSelectedTeam(team);
      console.log(`You selected: ${team}`);
    };

    return (
      <div className="sportForm">
        <h1>{formData.sports ? formData.sports : "Select a Sport"}</h1>
        <div className="box">
          <h2>Selection Team</h2>
          {selectedTeams.length > 0 ? (
            <div className="team-buttons">
              {selectedTeams.map((team, index) => (
                <button 
                  key={index} 
                  onClick={() => handleTeamClick(team)} 
                  className="team-button"
                >
                  {team}
                </button>
              ))}
            </div>
          ) : (
            <p>No teams available for this sport. Please select a different sport or check back later.</p>
          )}
        </div>
        {selectedTeam && <p>You have selected: {selectedTeam}</p>}
        {formData.name && <p>FullName: {formData.name} </p>}
        {formData.age && <p>Age: {formData.age} yrs Old</p>}
        {formData.email && <p>Email: {formData.email}</p>}
        {formData.height && <p>Your height: {formData.height} cm</p>}
        {formData.weight && <p>Your weight: {formData.weight} kg</p>}
        {formData.sports && <p> Sports:{formData.sports} </p>}
      </div>
    );
  };

  return (
    <div className="form-container">
      {isSubmitted ? (
        showSportForm ? (
          <SportForm /> // Show SportForm when showSportForm is true
        ) : (
          <HomePage /> // Show HomePage if not clicked yet
        )
      ) : (
        <div className="form-card">
          <h1>Sport Form for PUPBC</h1>
          <p>Fill out the details if you're interested</p>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">
                Full Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your fullname"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-field">
              <label htmlFor="email">
                Email:
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-field">
              {/*
              <label htmlFor="height">
                Height (cm):
                <input
                  type="number"
                  id="height"
                  name="height"
                  placeholder="Enter your height in cm"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
              </label>
               */}
            </div>

            <div className="form-field">
              {/*
              <label htmlFor="weight">
                Weight (kg):
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  placeholder="Enter your weight in kg"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </label>
              */}
            </div>

            <div className="form-field">
              <label htmlFor="sports">
                Sports:
                <select
                  id="sports"
                  name="sports"
                  value={formData.sports}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Sport</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Badminton">Badminton</option>
                  <option value="Volleyball">Volleyball</option>
                  <option value="Tennis">Tennis</option>
                  <option value="Arnis">Arnis</option>
                </select>
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SportsList;
