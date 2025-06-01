import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: white;
  color: black;
  cursor: pointer;
  border: none;
  margin-top: 1rem;
`;

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (username === "admin" && password === "0987654321") {
      onLogin(); // call callback to update App state
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Wrapper>
      <h2>Login</h2>
      <Input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSubmit}>Login</Button>
    </Wrapper>
  );
};

export default LoginScreen;
