import React from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  totalPages: number;
  onPageChange: (selectedPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
}) => {
  const handlePageClick = (data: { selected: number }) => {
    onPageChange(data.selected + 1); // react-paginate returns 0-based index
  };

  return (
    <div className="flex justify-center mt-4">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeLinkClassName={"active"}
        previousLinkClassName={"prev-button"}
        nextLinkClassName={"next-button"}
        disabledLinkClassName={"disabled"}
        pageLinkClassName={"page-item"}
      />
    </div>
  );
};

export default Pagination;
