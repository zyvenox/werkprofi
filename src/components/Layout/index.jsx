import { Outlet, ScrollRestoration } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";
import SEO from "../SEO-temp";

function Layout() {
  return (
    <>
      <SEO />
<ScrollRestoration/>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;