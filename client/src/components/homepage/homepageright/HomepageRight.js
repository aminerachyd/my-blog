import React from "react";
import { HomepageAuthorInfo } from "./HomepageAuthorInfo";
import { HomepageSearchBar } from "./HomepageSearchBar";
import { HomepageTopics } from "./HomepageTopics";
import { HomepageContact } from "./HomepageContact";

export const HomepageRight = () => {
  // TODO Implement other contents

  return (
    <div className="col-md-4" id="sideArea">
      <div className="row">
        <div className="col">
          <HomepageAuthorInfo />
          <HomepageSearchBar />
          <HomepageTopics />
          <HomepageContact />
        </div>
      </div>
    </div>
  );
};
