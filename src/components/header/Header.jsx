import { useDispatch, useSelector } from "react-redux";
import { authAction,  } from "../../store/auth/authSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const isAuthrized = useSelector((state) => state.auth.isAuthrized);
  return (
    <StyledHeader>
      <h1> Todo List Redux-Toolkit </h1>
      {isAuthrized && (
        <nav>
          <ul>
            <li>
              <Link to={"/"}>
                <button
                  onClick={() => dispatch(authAction.getLogIn())}
                >
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:orange;
  color: white;
  padding: 0 10%;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;

    li {
      margin: 0 1rem;
    }
  }


  button {
    font-size: 1.25rem;
    background-color: #ffbb00;
    border: 1px solid #ffbb00;
    padding: 0.5rem 1.5rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    color:white;
  }

  &button:hover,
  &button:active {
    background-color: #ffa600;
    border-color: #ffa600;
  }
`;
export default Header;
