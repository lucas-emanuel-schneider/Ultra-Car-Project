const authenticator = (token: string | null, user: string | null) => {
  if (token && user) return {status: 200}
  else {
    return { status: 404 }
  }
}
export default authenticator;