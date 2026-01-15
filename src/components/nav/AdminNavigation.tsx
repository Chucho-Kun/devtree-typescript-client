import React from 'react'
import { useQueryClient } from '@tanstack/react-query'

export default function AdminNavigation() {

  const queryClient = useQueryClient()

  const logout = () => {
    localStorage.removeItem('AUTH_TOKEN')
    queryClient.invalidateQueries({ queryKey: ['user'] })
  }

  return (
    <button
        className="btn-2"
        onClick={ logout }
    >
        Cerrar Sesión
    </button>
  )
}
