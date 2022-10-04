import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import { TPair, TTranslateResponse } from '../api/types'

const useTranslationHistory = (data?: TTranslateResponse) => {
  const [history, setHistory] = useLocalStorage<TPair[]>('history', [])
  const addToHistory = (pairs: TPair[]) => setHistory([...history, ...pairs])

  useEffect(() => {
    if (data) {
      addToHistory(data.data.pairs)
    }
  }, [data])
}

export default useTranslationHistory
