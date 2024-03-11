import Mains from "./components/main/Mains";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      {/* Header Here */}
      <Navbar />

      {/* Main Here */}
      <Mains />

      {/* Footer Here */}
      <Footer />
    </>
  );
}

export default App;
