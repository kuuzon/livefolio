import Header from './Header';
import Footer from './Footer';
import useTheme from '../../hooks/useTheme'; // Our Custom Hook

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={"app " + theme}>
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