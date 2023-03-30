import { Outlet, Link, useLocation } from 'react-router-dom'

const styles = {
    link: `text-2xl block mt-2 hover:text-blue-300`,
}

const resaltarPaginaActual = (ubi) => {
    const color = location.pathname === ubi ? 'text-blue-300': 'text-white'
    return color
}



const Layout = () => {

    const location = useLocation();

  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
            <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
            <nav className='mt-10'>
                <Link className={`${resaltarPaginaActual('/')} ${styles.link}`} to="/">Clientes</Link>
                <Link className={`${resaltarPaginaActual('/clientes/nuevo')} ${styles.link}`} to="/clientes/nuevo">Nuevo Cliente</Link>
            </nav>
        </aside>

        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet />
        </main>



    </div>
  )
}

export default Layout