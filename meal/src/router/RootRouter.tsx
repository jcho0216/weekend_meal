import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
const MainRouter = React.lazy(() => import("./MainRouter"));

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1 style={{textAlign: "center", fontSize: "50px", marginTop: "45px"}}>loading...</h1>}>
        <MainRouter />
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
