import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileContainer from "../components/MobileContainer";
import InputField from "../components/InputField";
import Button from "../components/Button";

import "../styles/register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("userData", JSON.stringify(formData));
    navigate("/account");
  };

  return (
    <MobileContainer>
      <div className="register-page">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <InputField
          label="Full Name*"
          placeholder="Marry Doe"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />

        <InputField
          label="Phone number*"
          placeholder="Marry Doe"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <InputField
          label="Email address*"
          placeholder="Marry Doe"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <InputField
          label="Password*"
          placeholder="Marry Doe"
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        <InputField
          label="Company name"
          placeholder="Marry Doe"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />

        <div className="agency-section">
          <p>Are you an Agency?*</p>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                checked={formData.agency === "Yes"}
                onChange={() => handleChange("agency", "Yes")}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                checked={formData.agency === "No"}
                onChange={() => handleChange("agency", "No")}
              />
              No
            </label>
          </div>
        </div>

        <div className="register-btn">
          <Button
            text="Create Account"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </MobileContainer>
  );
};

export default Register;