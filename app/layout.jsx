import Nav from '@components/Nav';
import '@styles/globals.css'

export  const metadata = {
    title: 'prompt engine',
    description: 'Discover the best AI prompts'
}

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <div className='main'>
                <div className='gradient'></div>
            </div>
            
            <main className='app'>
            <Nav/>
                {children}</main>
        </body>
    </html>
  )
}

export default RootLayout;