import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authAction } from "../../store/auth/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFromState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (event) => {
      setFromState((prev) => ({ ...prev, [name]: event.target.value }));
    };
  };
  const submitHnadler = (event) => {
    event.preventDefault();
    if (
      formState.email === "test@gmail.com" &&
      formState.password === "123123"
    ) {
      navigate("/todos");

      dispatch(authAction.getLogIn());
    }
  };
  return (
    <StyledMain>
      <section>
        <form onSubmit={submitHnadler}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={inputChangeHandler("email")}
              value={formState.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={inputChangeHandler("password")}
              value={formState.password}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color:orange;

  label {
    display: block;
    color: white;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  input {
    display: block;
    width: 20rem;
    margin: auto;
    border-radius: 4px;
    padding: 0.25rem;
    border: 1px solid #ccc;
  }

  button {
    width: 100px;
    height: 30px;
    background-color:white;
    color: orange;
    margin-top: 20px;
    border: none;
  }
`;
export default Auth;
