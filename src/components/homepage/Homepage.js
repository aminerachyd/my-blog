import React from "react";
import { HomepageLeft } from "./homepageleft/HomepageLeft";
import { HomepageRight } from "./homepageright/HomepageRight";

export const Homepage = () => {
  return (
    <div className="container pt-3 mb-5">
      <div className="row">
        <HomepageLeft />
        <HomepageRight />
      </div>
    </div>
  );
};
