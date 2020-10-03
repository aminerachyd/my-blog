import React, { useState } from "react";
import PostSearch from "./PostSearch";
import BlogPosts from "./blogposts/BlogPosts";

export const Blog = () => {
  const [itemsState, setItemsState] = useState({
    items: "",
  });

  const { items } = itemsState;

  // TODO Implement Search bar
  const searchItems = (items) => {
    setItemsState({
      ...itemsState,
      items,
    });
  };

  return (
    <div className="container mt-100">
      <div className="row">
        <div className="col">
          <div className="container ml-auto">
            <PostSearch searchItems={searchItems} />
            <BlogPosts items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};
