import React, { FC, useMemo } from 'react'

interface State {
  expandedSidebar: boolean
}

const initialState = {
  expandedSidebar: false,
}

type Action =
  | {
      type: 'EXPAND_SIDEBAR'
    }
  | {
      type: 'MINIMIZE_SIDEBAR'
    }

export const UIContext = React.createContext<State | any>(initialState)

UIContext.displayName = 'UIContext'

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'EXPAND_SIDEBAR': {
      return {
        ...state,
        expandedSidebar: true,
      }
    }
    case 'MINIMIZE_SIDEBAR': {
      return {
        ...state,
        expandedSidebar: false,
      }
    }
    default: {
      console.warn(`${action!.type} does not exist`)
      return state
    }
  }
}

interface IUIContext {
  expandedSidebar: boolean
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
  closeSidebarIfPresent: () => void
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState)

  const value = useMemo(
    () =>
      ({
        ...state,
        openSidebar: () => dispatch({ type: 'EXPAND_SIDEBAR' }),
        closeSidebar: () => dispatch({ type: 'MINIMIZE_SIDEBAR' }),
        toggleSidebar: () =>
          state.expandedSidebar
            ? dispatch({ type: 'MINIMIZE_SIDEBAR' })
            : dispatch({ type: 'EXPAND_SIDEBAR' }),
        closeSidebarIfPresent: () =>
          state.expandedSidebar && dispatch({ type: 'MINIMIZE_SIDEBAR' }),
      } as IUIContext),
    // eslint-disable-next-line
    [state]
  )

  return <UIContext.Provider value={value} {...props} />
}
/**
 * Usage:
 *
 * const { expandedSidebar, toggleSidebar } = useUI()
 *
 * return (
 *   <div>
 *     <button onClick={toggleSidebar}>toggle Sidebar</button>
 *     <aside>{expandedSidebar ? "expanded" : "minimized"}</aside>
 *   </div>
 * )
 */
const useUI = () => {
  const context = React.useContext<IUIContext>(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export default useUI
