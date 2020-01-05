export interface Tour {
  id: string
  name: string
  rate: number
  numberOfRates: number
  destination: string
  description: string
  images: string[]
  terms: Term[]
}

export interface Term {
  id: string
  startDate: Date
  endDate: Date
  price: number
  numberOfLeftPlaces: number
  numberOfPlaces: number
}
