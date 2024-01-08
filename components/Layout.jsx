import dynamic from 'next/dynamic'

const Heater = dynamic(() => import('./heater/Heater'), {})

const Footer = dynamic(() => import('./footer/Footer'), {})


const Layout = ({ children }) => {


    return (
        <div className='content'>
            <Heater />
            {children}
            <Footer />
        </div>
    )
}

export default Layout