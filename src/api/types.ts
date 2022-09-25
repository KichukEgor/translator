type TPair = Record<string, string>

type TLanguage = {
  didYouMean: boolean
  iso: string
}

type TText = {
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
      language: TLanguage
      text: TText
    }
  }
  message: string
}

export type TQueryParams = {
  text: string
  tl: string
  sl: string
}
