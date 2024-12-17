const paginate = (data, page = 1, pageSize = 10) => {
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const offset = (page - 1) * pageSize;

  const paginatedData = data.slice(offset, offset + pageSize);

  return {
    totalItems,
    totalPages,
    currentPage: page,
    pageSize,
    data: paginatedData,
  };
};

module.exports = paginate;
