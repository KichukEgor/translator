export type TPair = {
  s: string
  t: string
}

export type TApiLanguage = {
  didYouMean: boolean
  iso: string
}

export type TText = {
  autoCorrected: boolean
  value: string
  didYouMean: boolean
}

export type TTranslateResponse = {
  code: number
  data: {
    translation: string
    pronunciation: string
    pairs : TPair[]
    source: {
      language: TApiLanguage
      text: TText
    }
  }
  message: string
}

export type TLanguage = {
  id: string
  language: string
}

export type TQueryParams = {
  sl: string
  tl: string
  text: string
}
