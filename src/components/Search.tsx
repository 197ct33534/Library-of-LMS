import React from 'react';

const Search = () => {
  return (
    <>
      <div className="book-control-right_search">
        <i className="bx bx-search"></i>
        <input
          type="text"
          placeholder="Tìm kết quả theo tên, lớp, môn học,..."
        />
      </div>
    </>
  );
};

export default Search;
