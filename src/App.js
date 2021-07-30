import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

import AppStyles from "./components/styles/AppStyles";

function App() {
  return (
    <div className="App">
      <AppStyles.Sidebar>
        <Sidebar />
      </AppStyles.Sidebar>
      <AppStyles.Container>
        <AppStyles.Header>
          <Header />
        </AppStyles.Header>
        <AppStyles.Main>
          <Main />
        </AppStyles.Main>
        <AppStyles.Footer>
          <Footer />
        </AppStyles.Footer>
      </AppStyles.Container>
    </div>
  );
}

export default App;
