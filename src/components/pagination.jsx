import React, { useState } from "react";
import styles from "./pagination.module.css";

const Paginate = ({ totalPageCount, onClick, currentPage }) => {
  return (
    <ul className={styles.paginateBox}>
      {currentPage !== 1 && (
        <li
          className={styles.paginateItem}
          onClick={() => {
            onClick(currentPage - 1);
          }}
        >
          이전
        </li>
      )}
      {[...Array(parseInt(totalPageCount))].map((item, i) => (
        <li
          className={styles.paginateItem}
          key={i}
          onClick={() => {
            onClick(i + 1);
          }}
        >
          {i + 1}
        </li>
      ))}
      {currentPage !== totalPageCount && (
        <li
          className={styles.paginateItem}
          onClick={() => {
            onClick(currentPage + 1);
          }}
        >
          다음
        </li>
      )}
    </ul>
  );
};
export default Paginate;
