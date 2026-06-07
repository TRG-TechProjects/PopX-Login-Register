import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import Button from "../components/Button";
import "../styles/welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="welcome-page">

        <div className="welcome-content">

          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

          <Button
            text="Create Account"
            onClick={() => navigate("/register")}
          />

          <div style={{ marginTop: "10px" }}>
            <Button
              secondary
              text="Already Registered? Login"
              onClick={() => navigate("/login")}
            />
          </div>

        </div>
      </div>
    </MobileContainer>
  );
};

export default Welcome;