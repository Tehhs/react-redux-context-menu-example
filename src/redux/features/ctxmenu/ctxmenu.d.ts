export interface ContextMenuState { 
  menus: Array<MenuType>
}
export interface MenuType { 
  title?: string,
  items: Array<MenuItemType>
}
export interface MenuItemType { 
  text: string 
  selected?: boolean 
}

