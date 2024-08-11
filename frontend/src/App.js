
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Screen/landingScreen/LandingPage";
import HomeScreen from "./Screen/homeScreen/HomeScreen";
import LogAndSign from "./Screen/logAndSign/LogAndSign";
import { createStore } from "redux";
import reducers from "./redux";
import { Provider } from "react-redux";
import OfferScreen from "./Screen/OfferScreen/OfferScree";
import HelpScreen from "./Screen/HelpScreen/HelpScreen";
import CartScreen from "./Screen/CartScreen/CartScreen";
import Res from "./Screen/Restrairants/res";
import City from "./Screen/Restrairants/City";
import ObserCheck from "./utils/ObserCheck";

function App() {
  const store = createStore(reducers, {});
  return (
    <div className="App">
      <Provider store={store}>
        <CartScreen/>
        <ObserCheck/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/l" element={<LandingPage />} />
            <Route exact path="/home" element={<HomeScreen />} />
            <Route exact path="/" element={<LogAndSign />} />
            <Route exact path="/offer" element={<OfferScreen />} />
            <Route exact path="/ds" element={<HelpScreen/>} />
            <Route exact path="/cart" element={<CartScreen/>} />
            <Route exact path="/res" element={<Res/>} />
            <Route exact path="/res1" element={<City/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

