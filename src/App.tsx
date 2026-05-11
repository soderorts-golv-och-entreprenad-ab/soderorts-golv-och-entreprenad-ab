import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToHash from "./components/ScrollToHash";
import Landing from "./views/Landing";

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main>
        <Landing />
      </main>
      <Footer />
    </>
  );
}

export default App;
