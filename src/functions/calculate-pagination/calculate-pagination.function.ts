import { ICalculatePagination } from './calculate-pagination.interface';

export function calculatePagination(params: ICalculatePagination.Params) {
  const {
    currentPage,
    totalCount,
    rowCount,
    pageCount,
  } = params;

  const currentPageItem: ICalculatePagination.PageItem = {
    page: currentPage,
    isActive: true,
  };

  let remain = currentPage % pageCount;
  
  let displayFirstPage = 0;
  if (remain === 0) {
    displayFirstPage = currentPage - (pageCount - 1);
  } else {
    displayFirstPage = currentPage - ((currentPage % pageCount) - 1);
  }

  const bestNextPageItem: ICalculatePagination.PageItem = {
    page: Math.ceil(totalCount / rowCount),
    isActive: false,
  };

  let displayLastPage = displayFirstPage + (pageCount - 1);
  if (displayLastPage > bestNextPageItem.page) {
    displayLastPage = bestNextPageItem.page;
  }

  const pageItems: ICalculatePagination.PageItem[] = [];
  for (let i = displayFirstPage; i <= displayLastPage; i++) {
    pageItems.push({
      page: i,
      isActive: i === currentPage,
    });
  }

  const prevDisplayLastPageItem: ICalculatePagination.PageItem = {
    page: displayFirstPage - 1,
    isActive: false,
  };
  if (prevDisplayLastPageItem.page <= 0) {
    prevDisplayLastPageItem.page = 1;
  }

  const bestPrevPageItem: ICalculatePagination.PageItem = {
    page: 1,
    isActive: false,
  };

  const nextDisplayFirstPageItem: ICalculatePagination.PageItem = {
    page: displayLastPage + 1,
    isActive: false,
  };
  if (nextDisplayFirstPageItem.page > bestNextPageItem.page) {
    nextDisplayFirstPageItem.page = bestNextPageItem.page;
  }

  const isFirstPage = currentPage === 1;
  let isLastPage = currentPage === bestNextPageItem.page;
  const isFirstPagesDisplay = displayFirstPage === bestPrevPageItem.page;
  const isLastPagesDisplay = displayLastPage === bestNextPageItem.page;

  if (totalCount === 0 && pageItems.length === 0) {
    pageItems.push({
      page: 1,
      isActive: true,
    });
    isLastPage = true;
    nextDisplayFirstPageItem.page = 1;
    bestNextPageItem.page = 1;
  }

  const info: ICalculatePagination.PaginationInfo = {
    currentPageItem,
    pageItems,
    prevDisplayLastPageItem,
    bestPrevPageItem,
    nextDisplayFirstPageItem,
    bestNextPageItem,
    isFirstPage,
    isLastPage,
    isFirstPagesDisplay,
    isLastPagesDisplay,
  };
  return info;
}