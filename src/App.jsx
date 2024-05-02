import './css/app.css';
import {Outlet} from 'react-router-dom'
import Header from './componentes/HeaderFooterComponents/Header';
import Footer from './componentes/HeaderFooterComponents/Footer';

function App() {
  const pageTitle = 'Buscaminas online';
  const footerText = 'Reduciendo la productividad en las empresas desde 1989';

  return (
    <>
      <Header title={pageTitle} />
      <main>
        <Outlet />
      </main>
      <Footer text={footerText}/>
    </>
  )
}

export default App