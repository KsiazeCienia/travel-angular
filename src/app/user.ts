import { Tour } from 'src/app/tour';

export interface Roles {
    client?: boolean
    admin?: boolean
}

export interface Reservation {
    tourID: string
    termID: string
    numberOfPlaces: number
}

export interface Product {
    tourID: string
    startDate: Date
    endDate: Date
    numberOfPlaces: number
    totalPrice: number
    tourName: string
}

export interface Booking {
    date: Date
    products: Product[]
}

export interface MyUser {
    uid: string
    role: Roles
    bookings: Booking[]
    reservations: Reservation[]
}