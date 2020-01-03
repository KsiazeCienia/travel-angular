export interface Tour {
  id: string
  name: string
  rate: number
  numberOfRates: number
  dates: Dates
  destination: string
  description: string
  images: string[]
}

export interface Dates {
  startDate: Date
  endDate: Date
  price: number
  numberOfLeftPlaces: number
  numberOfPlaces: number
}
