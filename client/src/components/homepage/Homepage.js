import React, { Fragment } from "react";
import HomepageLeft from "./homepageleft/HomepageLeft";
import { HomepageRight } from "./homepageright/HomepageRight";
import { BlogHero } from "./BlogHero";

export const Homepage = () => {
  return (
    <Fragment>
      <BlogHero />
      <div className="container pt-3 mb-5">
        <div className="row">
          <HomepageLeft />
          <HomepageRight />
        </div>
      </div>
    </Fragment>
  );
};
