import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContextMenuState, MenuType } from "./ctxmenu";



const _initialState : ContextMenuState = { 
  menus:  [
    {
      items: [
        {
          text: "Open"
        }
      ]
    }
  ]
}


const contextMenuReducer = createSlice({
  name: "ctxmenu",
  initialState: _initialState, 
  reducers: {
    createMenu(state:ContextMenuState, payload:PayloadAction<MenuType>) { 
      
    }
  }
})

export default contextMenuReducer

export const { createMenu } = contextMenuReducer.actions