import LoginForm from "./components/Login/LoginForm";
import SelectRule from "./components/Login/SelectRule";
import { useState } from "react";
import "./components/Login/Login.css";
import axios from "axios";
import MainWindow from "./components/Main/MainWindow";

function App() {
  const adminUser = {
    email: "admin@gmail.com",
    password: "123",
    role: "admin"
  };
  const [user, setUser] = useState({ name: "", email: "", role : "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
        role : details.role
      });
    } else {
      setError("Login failed !");
    }
    console.log(details);
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
    setError("");
  };
  return (
    <div className="App">
      {user.email === adminUser.email ? (
        <MainWindow Logout =  {Logout} name = {user.name}/>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
