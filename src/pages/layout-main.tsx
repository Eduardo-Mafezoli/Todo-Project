import { Outlet } from "react-router";
import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import MainContent from "../components/core/Main-content";




export default function LayoutMain() {
  return (
    <>
      
      <Header />
      
      <MainContent>
        <Outlet />
      </MainContent>

      <Footer />
    </>
  )
}