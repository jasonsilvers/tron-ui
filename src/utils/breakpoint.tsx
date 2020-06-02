// https://medium.com/better-programming/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97
import React, { useState, useEffect, createContext, useContext } from 'react'

interface IMatchedQueries {
  ns: boolean
  m: boolean
  l: boolean
  or: boolean
}

interface IQueries {
  ns: string
  m: string
  l: string
  or: string
  [key: string]: any
}

const queryList: IQueries = {
  ns: 'screen and (min-width: 30em)',
  m: 'screen and (min-width: 30em) and (max-width: 60em)',
  l: 'screen and (min-width: 60em)',
  or: '(orientation: portrait)'
}

const defaultMatches = {} as IMatchedQueries

const BreakPointContext = createContext<IMatchedQueries>(defaultMatches)

type BreakPointProps = {
  children: React.ReactNode
}

const BreakpointProvider = ({ children }: BreakPointProps) => {
  const [queryMatch, setQueryMatch] = useState<IMatchedQueries>(
    {} as IMatchedQueries
  )

  useEffect(() => {
    const mediaQueryLists = {} as any
    const keys = Object.keys(queryList)

    // To check whether event listener is attached or not
    let isAttached = false

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc: any, media: string) => {
        acc[media] = !!(
          mediaQueryLists[media] && mediaQueryLists[media].matches
        )
        return acc
      }, {})

      // Setting state to the updated matches
      // when document either starts or stops matching a query
      setQueryMatch(updatedMatches)
    }

    if (window && window.matchMedia) {
      const matches = {} as any
      keys.forEach((media) => {
        if (typeof queryList[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(queryList[media])
          matches[media] = mediaQueryLists[media].matches
        } else {
          matches[media] = false
        }
      })

      setQueryMatch(matches)
      isAttached = true
      keys.forEach((media) => {
        if (typeof queryList[media] === 'string') {
          mediaQueryLists[media].addListener(handleQueryListener)
        }
      })
    }

    return () => {
      if (isAttached) {
        keys.forEach((media) => {
          if (typeof queryList[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener)
          }
        })
      }
    }
  }, [])

  return (
    <BreakPointContext.Provider value={queryMatch}>
      {children}
    </BreakPointContext.Provider>
  )
}

function useBreakPoint() {
  const context = useContext(BreakPointContext)
  if (context === defaultMatches) {
    throw new Error('useBreakpoint must be used within Breakpoint Provider')
  }
  return context
}

export { useBreakPoint, BreakpointProvider }
