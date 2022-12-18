import LandingPage from "./Components/LandingPage";

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <LandingPage></LandingPage>
      </ChakraProvider>
    </div>
  );
}

export default App;
