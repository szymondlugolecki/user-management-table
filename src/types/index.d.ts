export interface UserAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: number
    lng: number
  }
}

export interface UserCompany {
  name: string
  catchPhrase: string
  bs: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: UserAddress
  phone: string
  website: string
  company: UserCompany
}

export interface UsersState {
  users: User[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
  filters: {
    name: string
    username: string
    email: string
    phone: string
  }
}
