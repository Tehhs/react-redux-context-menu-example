import { useEffect } from "react"
import { Create_Param_MenuType, MenuType } from "./ctxmenu"

import { useSelector, useDispatch } from "react-redux"
import { createMenu } from "./reducer";


export const useContextMenu = () => { 
  
  const dispatch = useDispatch(); 

  const create = (menu: Create_Param_MenuType) => { 
    dispatch(createMenu(menu))
  }

  return {
    create
  }
}
