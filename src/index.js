import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

 import {store} from "./Store";
import BioPage from "./BioPage";
import './App.css'

render(
  <Provider store={store}>
    <BioPage />
  </Provider>,

  document.getElementById("root")
);
