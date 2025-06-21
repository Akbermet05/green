import React, { useEffect } from "react";
import { useShop } from "../context/ProductContext";
import Pagination from "@mui/material/Pagination";
const PaginationPost = () => {
  const { totalPage, currentPage, setCurrentPage, readShop } = useShop();
  useEffect(() => {
    readShop();
  }, [currentPage]);
  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <Pagination
        onChange={(e, value) => setCurrentPage(value)}
        count={totalPage}
        page={currentPage}
        color="secondary"
      />
    </div>
  );
};

export default PaginationPost;
