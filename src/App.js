import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/header/Header";
import MainLayout from "./components/main/MainLayout";

function AppContent() {
  return (
    <Provider store={store}>
      <Header />
      <MainLayout />
    </Provider>
  );
}

export const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
export default App;
