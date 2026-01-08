import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeNavigation() {
  return (
    <div>
      <Link className="btn-a" to='/auth/login' >
        Iniciar sesión
      </Link>
      <Link className="btn-2" to='/auth/register' >
        Registrarme
      </Link>
    </div>
  )
}
