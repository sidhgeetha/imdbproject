import React, { useState } from "react";

function Pagination() {
  let [pageNumber, setPage] = useState(1);
  const onPrevious = () => {
    if (pageNumber > 1) {
      setPage(pageNumber - 1);
    }
  };

  const onNext = () => {
    setPage(pageNumber + 1);
  };
  return (
    <div className="flex justify-center my-4 ">
      <div
        className="border-2 p-2 border-r-0 rounded-l-xl border-blue-400"
        onClick={onPrevious}
      >
        Previous
      </div>

      <div
        className="border-2 p-2 border-r-0 border-blue-400"
        onClick={onPrevious}
      >
        {pageNumber}
      </div>

      <div
        className="border-2 p-2 rounded-r-xl border-blue-400"
        onClick={onNext}
      >
        Next
      </div>
    </div>
  );
}

export default Pagination;
