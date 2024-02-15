import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Chatpage from "./components/Chatpage";
const App = () => {
  return (
    <>
      <div className="App">
        <Route path="/" component={Home} exact />
        <Route path="/chats" component={Chatpage} />
      </div>
    </>
  );
};

export default App;
