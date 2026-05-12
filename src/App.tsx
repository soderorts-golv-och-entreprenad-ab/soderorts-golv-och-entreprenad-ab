import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./views/Landing";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
      </main>
      <Footer />
    </>
  );
}

export default App;
