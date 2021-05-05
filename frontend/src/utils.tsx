export const setLocalstorageJWT = (token: string) =>
  localStorage.setItem('token', token)

export const getLocalstorageJWT = () => localStorage.getItem('token')
