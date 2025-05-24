import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Films = lazy(() => import("./pages/Films"));
const WeddingGallery = lazy(() => import("./pages/WeddingGallery"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="w-12 h-12 border-4 border-dotted border-[#5C4A4A] rounded-full animate-spin"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/films" element={<Films />} />
          <Route path="/gallery" element={<WeddingGallery />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
