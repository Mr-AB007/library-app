import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ExploreTopBooks } from "./layouts/Homepage/components/ExploreTopBooks";
import { Carousel } from "./layouts/Homepage/components/Carousel";
import { Heros } from "./layouts/Homepage/components/Heros";
import { LibraryServices } from "./layouts/Homepage/components/LibraryServices";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/Homepage/HomePage";
import { SearchBooksPage } from "./layouts/SearchBookPage/SearchBooksPage";

export const App=()=> {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <SearchBooksPage/>
      <Footer />
    </div>
  );
}
