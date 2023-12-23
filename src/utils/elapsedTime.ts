interface ITimeStartPhrase {
  years: number
  moreOrExact: 'more' | 'exact'
  lang: 'pt-br' | 'en'
}
export const getElapsedTimePhrase = ({ years, moreOrExact, lang }: ITimeStartPhrase): string => {
  const prefixPhrase = {
    more: {
      'pt-br': 'com mais de',
      en: 'with more than',
    },
    exact: {
      'pt-br': 'com',
      en: 'with',
    },
  }

  return `${prefixPhrase[moreOrExact][lang]} ${years}`
}
