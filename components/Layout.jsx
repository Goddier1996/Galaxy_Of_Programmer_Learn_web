import dynamic from 'next/dynamic'

const Heater = dynamic(() => import('./heater/Heater'), {
    ssr: false,
})

const Footer = dynamic(() => import('./footer/Footer'), {
    ssr: false,
})



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