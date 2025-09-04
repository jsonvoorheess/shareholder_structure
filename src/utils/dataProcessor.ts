import { Shareholder } from '../types/shareholder'


export const processShareholderData = (inputData: Shareholder[]): Shareholder[] => {
  const uniqueShareholders = new Map<string, number>()
  
  inputData.forEach((shareholderItem) => {

    const existingValue = uniqueShareholders.get(shareholderItem.holder) || 0
    uniqueShareholders.set(shareholderItem.holder, existingValue + parseFloat(shareholderItem.share_percent))

  })
  
  const result = Array.from(uniqueShareholders.entries()).map(([holderName, percentValue]) => ({

    holder: holderName,
    share_percent: percentValue.toFixed(3)
  }))
  

  const total_percent = result.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.share_percent), 0)
  
  if (total_percent > 100) {

    const scaleFactor = 100 / total_percent
    return result.map(shareholderItem => ({
      holder: shareholderItem.holder,

      share_percent: (parseFloat(shareholderItem.share_percent) * scaleFactor).toFixed(3)
    }))
  }
  

  return result
}

export const getChartColors = (): string[] => {

  return [
    "#3B82F6",  
    '#EF4444',  

    "#F59E0B",  
    '#167F47',  
    "#8B5CF6",  

    '#EC4899',  
  ]
}