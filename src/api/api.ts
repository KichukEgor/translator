import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import { TQueryParams, TTranslateResponse } from './types'

async function getLanguages(): Promise<Record<string, string>> {
  try {
    const response = await axios.get(
      'https://google-translate20.p.rapidapi.com/languages',
      {
        headers: {
          'X-RapidAPI-Key': '1078cc9121mshd2e3c46c9376582p15617ejsnff251baf979d',
          'X-RapidAPI-Host': 'google-translate20.p.rapidapi.com'
        }
      }
    )
    return response.data
  } catch (e: any) {
    throw new Error(e)
  }
}

export const useLanguagesQuery = () => useQuery<Record<string, string>, Error>(['Languages'], getLanguages)

async function getTranslate(params: TQueryParams): Promise<TTranslateResponse> {
  try {
    const response = await axios.get('https://google-translate20.p.rapidapi.com/translate', {
      params,
      headers: {
        'X-RapidAPI-Key': '1078cc9121mshd2e3c46c9376582p15617ejsnff251baf979d',
        'X-RapidAPI-Host': 'google-translate20.p.rapidapi.com'
      }
    })
    return response.data
  } catch (e: any) {
    throw new Error(e)
  }
}

export const useTranslateMutation = () => useMutation<any, Error, any>(
  ['Translate'],
  (param) => getTranslate(param)
)
