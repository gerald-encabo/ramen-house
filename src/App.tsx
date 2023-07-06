import { useState } from 'react';
import { createBrowserRouter,  RouterProvider, Outlet } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import MenuSidebar from '@/components/MenuSidebar';
import ProductDisplay from '@/pages/ProductDisplay';
import Home from '@/pages/Home'
import '@/styles/globalStyle.scss';

const Layout = () => {

  const [toggleCartSidebar, setToggleCartSidebar] = useState<boolean>(false)
  const [toggleMenuSidebar, setToggleMenuSidebar] = useState<boolean>(false)

  const handleCartSidebar = () => setToggleCartSidebar(!toggleCartSidebar);
  const handleMenuSidebar = () => setToggleMenuSidebar(!toggleMenuSidebar);

  return (
    <div>
      <Navbar handleCartSidebar={handleCartSidebar} handleMenuSidebar={handleMenuSidebar}/>
      {/* Cart Sidebar */}
      { toggleCartSidebar && <CartSidebar handleCartSidebar={handleCartSidebar} /> }
      {/* Menu Sidebar */}
      { toggleMenuSidebar && <MenuSidebar handleMenuSidebar={handleMenuSidebar} /> }
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/product/:id',
        element: <ProductDisplay />
      },
      {
        path: '*',
        element: <Home/>
      },
    ]
  },
])

function App() {

  return (
      <div className="App">
          <RouterProvider router={router} />
      </div>
  )
}

export default App