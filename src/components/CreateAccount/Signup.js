import React, { useState } from "react";
// import "./styles/Item.css";

const Signup = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    reEnterPassword: "",
  });

  // State to store the form errors
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validate the form fields
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (!formData.reEnterPassword) {
      newErrors.reEnterPassword = "Re-enter password is required";
    } else if (formData.reEnterPassword !== formData.password) {
      newErrors.reEnterPassword = "Passwords do not match";
    }

    // If there are any errors, update the state to show them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If the form is valid, submit it
    }
  };

  // Function to handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <label htmlFor="reEnterPassword">Re-enter Password:</label>
      <input
        type="password"
        id="reEnterPassword"
        name="reEnterPassword"
        value={formData.reEnterPassword}
        onChange={handleChange}
      />
      {errors.reEnterPassword && (
        <p className="error">{errors.reEnterPassword}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
