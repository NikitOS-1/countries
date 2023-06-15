import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import style from "./App.module.scss";

function App() {
  return (
    <div className={"dark"}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
