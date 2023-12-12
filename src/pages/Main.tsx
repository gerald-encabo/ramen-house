import { lazy } from 'react';
const Banner = lazy(() => import("@/components/Banner/Banner"));
const Slider = lazy(() => import("@/components/Slider/Slider"));
const Product = lazy(() => import("@/components/Menu/Menu"));
import { SelectedMenu } from "@/types/TypeLists";
import Spinner from '@/components/Spinner/Spinner';
import { Suspense } from "react"

const Layout = () => {

  return (
    <>
        <Suspense fallback={<Spinner />}>
          <Banner />
          <Product id='special' heading={'Weekly ' + SelectedMenu.Special} />
          <Slider />
          <Product id={SelectedMenu.Ramen.toLowerCase()} heading={SelectedMenu.Ramen} />
          <Product id={SelectedMenu.Side.toLowerCase()} heading={SelectedMenu.Side} />
          <Product id={SelectedMenu.Dessert.toLowerCase()} heading={SelectedMenu.Dessert} />
          <Product id={SelectedMenu.Drink.toLowerCase()} heading={SelectedMenu.Drink} />
        </Suspense>
    </>
  )
}
export default Layout