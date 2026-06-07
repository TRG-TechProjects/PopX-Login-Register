import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileContainer from "../components/MobileContainer";
import InputField from "../components/InputField";
import Button from "../components/Button";

import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/account");
  };

  return (
    <MobileContainer>
      <div className="login-page">

        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <InputField
          label="Email Address"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          text="Login"
          onClick={handleLogin}
        />

      </div>
    </MobileContainer>
  );
};

export default Login;