export declare namespace IPaginationCalculator {
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
    currentPage: number;
    pageItems: PageItem[];

    prevPageItem: PageItem;
    bestPrevPageItem: PageItem;

    nextPageItem: PageItem;
    bestNextPageItem: PageItem;

    isFirstPage: boolean;
    isLastPage: boolean;
  }
}