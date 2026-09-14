import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'
import { useLocalStorage } from 'react-use'
import { userDetail } from '../lib/api/UserApi'
import { alertError } from '../lib/alert'

export default function ProtectedRoute() {
  const [token, setToken] = useLocalStorage('token', '')
  const [isLoading, setIsLoading] = useState(true)

  async function checkSession() {
    if (!token) {
      setIsLoading(false)
      return
    }
    try {
      const response = await userDetail(token)
      const responseBody = await response.json()
      console.log(responseBody)
      if (response.status !== 200) {
        await alertError(responseBody.errors)
        setToken('')
      }
    } catch (error) {
      console.error('(Server mati / Network Error):', error)
      await alertError('Gagal terhubung ke server')
      setToken('')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    checkSession()
  }, [token])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white font-medium">
        <i className="fas fa-spinner fa-spin text-2xl mr-3 text-blue-400" />
        Memeriksa Session...
      </div>
    )
  }

  if (!token) {
    return <Navigate to={'/login'} replace />
  }
  return <Outlet />
}
