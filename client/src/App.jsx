import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import Chatpage from "./components/Chatpage";
import Homepage from "./pages/Homepage";
const App = () => {
  return (
    <>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </div>
    </>
  );
};

export default App;
