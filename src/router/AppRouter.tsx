import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home";
import NotFound from "../pages/not-found/NotFound";

export default function AppRouter() {

  return (
    <div className="h-screen">
      <BrowserRouter >
        <Routes>
          <Route path="*" Component={NotFound} />
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
