export declare namespace ICalculatePagination {
  export interface Params {
    currentPage: number;
    totalCount: number;
    rowCount: number;
    pageCount: number;
  }

  export interface PageItem {
    page: number;
    isActive: boolean;
  }

  export interface PaginationInfo {
    currentPageItem: PageItem;
    pageItems: PageItem[];

    prevDisplayLastPageItem: PageItem;
    bestPrevPageItem: PageItem;

    nextDisplayFirstPageItem: PageItem;
    bestNextPageItem: PageItem;

    isFirstPage: boolean;
    isLastPage: boolean;

    isFirstPagesDisplay: boolean;
    isLastPagesDisplay: boolean;
  }
}