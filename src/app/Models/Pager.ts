export class Pager {
  constructor(totalItems: number, page?: number, pageSize: number = 10) {
    // calculate total, start and end pages
    const totalPages = Math.ceil(totalItems / pageSize);
    const currentPage = page;
    let startPage = currentPage - 5;
    let endPage = currentPage + 4;
    if (startPage <= 0) {
      endPage -= (startPage - 1);
      startPage = 1;
    }
    if (endPage > totalPages) {
      endPage = totalPages;
      if (endPage > 10) {
        startPage = endPage - 9;
      }
    }

    this.totalItems = totalItems;
    this.currentPage = currentPage;
    this.pageSize = pageSize;
    this.totalPages = totalPages;
    this.startPage = startPage;
    this.endPage = endPage;
  }

  totalItems;
  currentPage;
  pageSize;
  totalPages;
  startPage;
  endPage;
}
