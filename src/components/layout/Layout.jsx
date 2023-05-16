import Header from './Header';
import Footer from './Footer';
import useTheme from '../../hooks/useTheme';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','400', '500','700'],
  style: ['normal', 'italic']
})

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme} ${montserrat.className}`}>
      <Header />
      {/* Wrap all content in column-direction flexbox */}
      <div className="contentWindow">
        {children}
      </div>
      <Footer />
    </div> 
  )
};

export default Layout