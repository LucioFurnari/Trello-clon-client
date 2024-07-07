'use client'

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
    <div className={isMenuOpen ? 'block' : 'hidden'}>
      <div className="bg-gray-600 h-20">
      <h2>{title}</h2>
      <div>
        {
          list?.map((item, index) => {
            return(
              <div key={index}>
                <h3>{item.title}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
    </div>
  )
}