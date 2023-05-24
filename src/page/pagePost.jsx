import React, { useState, useEffect } from "react";
import PostList from "../components/postList";
import Paginate from "../components/pagination";

const PostPage = () => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageLimit = 5;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await res.json();
        setPost(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, []);

  let start = (currentPage - 1) * pageLimit;
  let end = start + pageLimit;
  let currentPost = post.slice(start, end);
  let totalPageCount = Math.ceil(post.length / pageLimit);

  const setPageNum = (pageNum) => {
    setCurrentPage(pageNum);
  };
  return (
    <>
      <PostList post={currentPost} />
      <Paginate
        total={10}
        totalPageCount={totalPageCount}
        currentPage={currentPage}
        onClick={setPageNum}
      />
    </>
  );
};
export default PostPage;
