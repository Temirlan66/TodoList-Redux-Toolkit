import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/header/Header";
import MainTodo from "./components/main/MainTodo";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainTodo />
    </Provider>
  );
}

export default App;
