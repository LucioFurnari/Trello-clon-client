'use client'

import Link from "next/link"

interface SubMenuItem {
  title: string
}

interface SubMenu {
  title?: string,
  list?: SubMenuItem[],
  isMenuOpen: boolean
}

export default function SubMenu({ title, list, isMenuOpen }: SubMenu) {

  return (
    <>
      {
      isMenuOpen &&
      <div className='absolute top-[52px] left-1 bg-slate-600 min-w-72 px-2'>
        <h2 className="text-sm text-slate-400 m-3 ml-6">{title}</h2>
        <ul>
          {
            list?.map((item, index) => {
              return(
                <li className="m-2" key={index}>
                  <Link className=" text-slate-300 hover:bg-slate-500 p-4 w-full inline-block rounded" href={`/workspace/${item.title}`} >{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      }
    </>
  )
}