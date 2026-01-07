import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import SettingsContainer from "../common/SettingsContainer";
import BoxVisualization from "../common/components/BoxVisualization";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="bg-gray-300 flex flex-wrap grow gap-8 justify-center items-center px-8 ">
        <BoxVisualization />
        <SettingsContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
