export class AuthRequiredError extends Error {
  constructor(message = 'Auth is required to acces this page.') {
    super(message)
    this.name = 'AuthRequiredError'
  }
}

export class FetchDataError extends Error {
  constructor(message = 'Error fetching the data.') {
    super(message)
    this.name = 'FetchDataError'
  }
}