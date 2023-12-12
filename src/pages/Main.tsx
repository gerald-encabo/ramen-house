import { lazy } from 'react';
const Banner = lazy(() => import("@/components/Banner/Banner"));
const Slider = lazy(() => import("@/components/Slider/Slider"));
const Menu = lazy(() => import("@/components/Menu/Menu"));
import { SelectedMenu } from "@/types/TypeLists";
import Spinner from '@/components/Spinner/Spinner';
import { Suspense } from "react"

const Layout = () => {

  return (
    <>
        <Suspense fallback={<Spinner />}>
          <Banner />
          <Menu id='special' heading={'Weekly ' + SelectedMenu.Special} />
          <Slider />
          <Menu id={SelectedMenu.Ramen.toLowerCase()} heading={SelectedMenu.Ramen} />
          <Menu id={SelectedMenu.Side.toLowerCase()} heading={SelectedMenu.Side} />
          <Menu id={SelectedMenu.Dessert.toLowerCase()} heading={SelectedMenu.Dessert} />
          <Menu id={SelectedMenu.Drink.toLowerCase()} heading={SelectedMenu.Drink} />
        </Suspense>
    </>
  )
}
export default Layout