export enum sortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface Pagination {
  total: number,
  page: number,
  limit: number,
}

export interface ListAccountUser {
  email: string,
  familyName: string,
  lastLogin: string,
  loginId: string,
  isActive: boolean
}