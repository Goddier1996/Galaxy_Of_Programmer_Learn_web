import dynamic from 'next/dynamic'

const Heater = dynamic(() => import('./Heater'), {
    ssr: false,
})

const Footer = dynamic(() => import('./footer'), {
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