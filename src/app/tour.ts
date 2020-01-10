export interface Tour {
  id: string
  name: string
  rates: Rate[]
  destination: string
  description: string
  images: string[]
  terms: Term[]
}

export interface Rate {
  userID: string
  rate: number
}

export interface TermReservation {
  numberOfTakenPlaces: number
  userID: string
}

export interface Term {
  id: string
  startDate: Date
  endDate: Date
  price: number
  numberOfPlaces: number
  reservations: TermReservation[]
  bookings: TermReservation[]
}
