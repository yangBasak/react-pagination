import React from "react";
import styles from "./postList.module.css";
const PostList = ({ post }) => {
  return (
    <div className={styles.postBox}>
      {post.map((item) => {
        return (
          <div key={item.id} className={styles.post}>
            <span>{item.id}</span>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
