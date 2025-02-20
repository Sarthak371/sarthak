import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import PropertyPage from "./pages/PropertyPage";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Messages from "./pages/Messages";
import Wishlist from "./pages/wishlist"; // Import Wishlist Page
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from "../src/pages/WishlistContext"; // Correct import
import WishlistPage from "./pages/wishlist";
import Dashboard from "./pages/dashboard"; // Corrected import

function App() {
  return (
    <WishlistProvider>
      <Router>
        <Navbar />
        <Toaster position="top-right" reverseOrder={false} />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Added Dashboard Route */}
            <Route path="/properties" element={<PropertyPage />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
        </div>
      </Router>
    </WishlistProvider>
  );
}

export default App;