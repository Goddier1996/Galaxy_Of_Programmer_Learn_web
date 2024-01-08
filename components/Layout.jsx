import dynamic from 'next/dynamic'
const Heater = dynamic(() => import('../components/heater/Heater'), {})
const Footer = dynamic(() => import('../components/footer/Footer'), {})


const Layout = ({ children }) => {

    return (
        <div className='content'>
            <Heater />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout