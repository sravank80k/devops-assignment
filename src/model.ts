export interface IUser  {
    id: string,
    firstName: string,
    lastName: string,
    country: string,
    email: string,
    phoneNumber: string,
    city: string,
    createdAt: Date,
}

export interface IEvent {
    globalId: string,
    event: string,
    data: IUser
}