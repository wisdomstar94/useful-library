"use client"

import { calculatePagination } from "@/functions/calculate-pagination/calculate-pagination.function";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const [rowCount, setRowCount] = useState(10);
  const [pageCount, setPageCount] = useState(5);
  const [totalCount, setTotalCount] = useState(11);

  const paginationInfo = calculatePagination({
    currentPage: page,
    pageCount,
    rowCount,
    totalCount,
  });

  return (
    <>
      <div className="w-full flex flex-wrap relative">
        <h2 className="font-extrabold">
          입력 폼
        </h2>
        <ul className="w-full flex flex-wrap relative gap-2">
          <li className="w-full flex flex-wrap relative gap-2">
            <label>page : </label>
            <input 
              type="number" 
              value={page} 
              onChange={(e) => {
                const v = e.target.value;
                const num = Number(v);
                if (isNaN(num)) return;
                setPage(num);
              }} 
              />
          </li>
          <li className="w-full flex flex-wrap relative gap-2">
            <label>rowCount : </label>
            <input 
              type="number" 
              value={rowCount} 
              onChange={(e) => {
                const v = e.target.value;
                const num = Number(v);
                if (isNaN(num)) return;
                setRowCount(num);
              }} 
              />
          </li>
          <li className="w-full flex flex-wrap relative gap-2">
            <label>pageCount : </label>
            <input 
              type="number" 
              value={pageCount} 
              onChange={(e) => {
                const v = e.target.value;
                const num = Number(v);
                if (isNaN(num)) return;
                setPageCount(num);
              }} 
              />
          </li>
          <li className="w-full flex flex-wrap relative gap-2">
            <label>totalCount : </label>
            <input 
              type="number" 
              value={totalCount} 
              onChange={(e) => {
                const v = e.target.value;
                const num = Number(v);
                if (isNaN(num)) return;
                setTotalCount(num);
              }} 
              />
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-wrap relative">
        <h2 className="font-extrabold">
          결과
        </h2>
        <div className="w-full flex flex-wrap relative">
          <Link href={`/list?page=${paginationInfo.bestPrevPageItem.page}`}>{ '<<' }</Link>
          <Link href={`/list?page=${paginationInfo.prevDisplayLastPageItem.page}`}>{ '<' }</Link>
          {
            paginationInfo.pageItems.map(item => {
              return (
                <Link 
                  key={item.page + (item.isActive ? 'true' : 'false')} 
                  href={`/list?page=${item.page}`}
                  className={`border border-slate-400 ${item.isActive ? 'bg-blue-500 text-white' : ''}`}
                  >
                  { item.page }
                </Link>
              );
            })
          }
          <Link href={`/list?page=${paginationInfo.nextDisplayFirstPageItem.page}`}>{ '>' }</Link>
          <Link href={`/list?page=${paginationInfo.bestNextPageItem.page}`}>{ '>>' }</Link>
        </div>
        <ul className="w-full flex flex-wrap relative gap-2">
          <li className="w-full flex flex-wrap relative gap-2">
            <label>bestPrevPageItem.page : </label>
            <span>{ paginationInfo.bestPrevPageItem.page }</span>
          </li>
          <li className="w-full flex flex-wrap relative gap-2">
            <label>prevDisplayLastPageItem.page : </label>
            <span>{ paginationInfo.prevDisplayLastPageItem.page }</span>
          </li>
          <li className="w-full flex flex-wrap relative gap-2">
            <label>nextDisplayFirstPageItem.page : </label>
            <span>{ paginationInfo.nextDisplayFirstPageItem.page }</span>
          </li>
          <li className="w-full flex flex-wrap relative gap-2">
            <label>bestNextPageItem.page : </label>
            <span>{ paginationInfo.bestNextPageItem.page }</span>
          </li>
          <li className="w-full flex flex-wrap relative gap-2">
            <label>isFirstPage : </label>
            <span>{ paginationInfo.isFirstPage ? 'true' : 'false' }</span>
          </li>
          <li className="w-full flex flex-wrap relative gap-2">
            <label>isLastPage : </label>
            <span>{ paginationInfo.isLastPage ? 'true' : 'false' }</span>
          </li>
          <li className="w-full flex flex-wrap relative gap-2">
            <label>isFirstPagesDisplay : </label>
            <span>{ paginationInfo.isFirstPagesDisplay ? 'true' : 'false' }</span>
          </li>
          <li className="w-full flex flex-wrap relative gap-2">
            <label>isLastPagesDisplay : </label>
            <span>{ paginationInfo.isLastPagesDisplay ? 'true' : 'false' }</span>
          </li>
        </ul>
      </div>
    </>
  );
}