import "./SportList.css";
import React, { useState } from "react";

const SportsList = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    sports: "",
  });

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

    setFormData({
      name: "",
      age: "",
      email: "",
      sports: "",
    });
  };

  return (
    
    <div className="form-container">
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
            <label htmlFor="age">
              Age:
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
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
    </div>
    
  );
};

export default SportsList;
