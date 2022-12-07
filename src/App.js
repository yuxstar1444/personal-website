import React, {useState, useEffect} from "react";
import customTheme from "./themC";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import Navbar from ;
import {Switch, Route} from "react-router-dom";
import Home from "./";
import About;
import Projects;
import ScrollToTop;

const theme = extendTheme(customTheme);

const fakeRequest = () =>
  new Promise ((resolve) => setTimeout(() => resolve(), 2000))

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fakeRequest().then(() => {
      const loader = document.querySelector(".loader-container");
      if (loader){
        loader.remove();
        setLoading(!loading);
      }
    });
  }, []);

  if (loading){
    return null;
  }
  return (
    <ChakraProvider theme = {theme}>
      <ScrollToTop>
        <div>
          <Navbar />
          <Switch>
            <Route path = "/about">
              <About />  
            </Route>

            <Route path = "/projects">
              <Projects />  
            </Route>

            <Route path = "/projects">
              <Home />  
            </Route>
          </Switch>
        </div>
      </ScrollToTop>
    </ChakraProvider>
  );
}

export default App;
