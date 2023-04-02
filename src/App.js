import { useEffect } from "react";
import "./App.css";
import User from "./user";
import "line-awesome/dist/line-awesome/css/line-awesome.css";
import Loading from "react-fullscreen-loading";


function App() {

  return <User />;
  <Loading loading={true} background="#2ecc71" loaderColor="#3498db" />;
}

export default App;
