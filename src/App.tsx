import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './styles/GlobalStyle';
import Main from '@/pages/Main'
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CartSidebar from '@/components/CartSideBar/CartSidebar';
import MenuSidebar from '@/components/MenuSideBar/MenuSidebar';

const theme = {
  colors: {
    primary: '#fddb00',
    secondary: '#150f0f',
    tertiary: '#282626',
    dark: '#000',
    light: '#fff'
  },
  mediaQuery: {
    mobile: '576px',
    tablet: '768px',
    laptop: '1024px'
  }
}

const Layout = () => {

  const [toggleCartSidebar, setToggleCartSidebar] = useState<boolean>(false)
  const [toggleMenuSidebar, setToggleMenuSidebar] = useState<boolean>(false)

  const handleCartSidebar = () => setToggleCartSidebar(!toggleCartSidebar);
  const handleMenuSidebar = () => setToggleMenuSidebar(!toggleMenuSidebar);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar handleCartSidebar={handleCartSidebar} handleMenuSidebar={handleMenuSidebar}/>
      {/* Cart Sidebar */}
      { toggleCartSidebar ? <CartSidebar handleCartSidebar={handleCartSidebar} /> : null }
      {/* Menu Sidebar */}
      { toggleMenuSidebar ? <MenuSidebar handleMenuSidebar={handleMenuSidebar} /> : null }
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '*',
        element: <Main />
      },
    ]
  },
])

function App() {

  return (
      <div className="App">
          <RouterProvider router={router} />
          <Analytics />
      </div>
  )
}

export default App