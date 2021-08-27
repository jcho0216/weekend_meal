import { Global } from "@emotion/react";
import { reset } from "./style/globalStyles";
import RootRouter from "./router";
const App = () => {
  return (
    <>
      <Global styles={reset}/>
      <RootRouter />
    </>
  );
};

export default App;
