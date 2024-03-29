import React from "react";
import "./App.css";
import "./style.css";
import {
  SnackbarProvider
} from "notistack";
import User from "./user";
import "line-awesome/dist/line-awesome/css/line-awesome.css";

const App = () => {
  return(
    <SnackbarProvider maxSnack = {4}>
    <User />
   </SnackbarProvider>
  );
};

export default App;
