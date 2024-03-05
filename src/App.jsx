//import FAQ from "./components/FAQ";
import Description from "./components/Description";
import Logoemp from "./components/Logoemp";
import Services from "./components/Services";

export function App() {
  return (
    <div className=" w-full h-screen">
      <div className="p-14 bg-base-bg-bg">
        <Logoemp />
        <div className="mb-6 mt-6">
          <div className=" flex gap-5 lg:gap-96">
            <Services />
            <Description />
          </div>
        </div>
        <Logoemp />
      </div>
    </div>
  );
}

export default App;
