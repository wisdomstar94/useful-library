"use client"

import Link from "next/link";
import { ReactNode, useState } from "react";

export function RootLayoutClient(props: { children: ReactNode }) {
  const [menus, setMenus] = useState([
    { href: '/test/calculate-pagination', name: '/test/calculate-pagination' },
  ]);

  return (
    <>
      <div className="w-full flex flex-wrap relative">
        <ul className="w-full flex flex-wrap relative gap-2">
          {
            menus.map(item => {
              return (
                <li
                  key={item.href}>
                  <Link href={item.href} className="inline-flex px-3 py-1.5 text-xs text-slate-600 border border-slate-400 rounded-md cursor-pointer hover:bg-slate-200">{ item.name }</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="w-full flex flex-wrap relative gap-2">
        { props.children }
      </div>
    </>
  );
}