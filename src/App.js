import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/main/ScrollToTop";
import {ErrorPage , ErrorOccur} from './component/pages/error-page-router';
import Cart from "./component/main/Cart/Cart";
import OrderBill from "./component/main/Cart/OrderBill";

const LandingPage = lazy(() => import("./component/pages/LandingPage"));
const MainPage = lazy(() => import("./component/pages/MainPage"));
const MenuPage = lazy(() => import("./component/pages/MenuPage"));
const SignUp = lazy(() => import("./component/pages/SignUp"));
const LogIn = lazy(() => import("./component/pages/LogIn"));
const Ourstory = lazy(() => import("./component/pages/Ourstory"));
const LocationPage = lazy(() => import("./component/pages/LocationPage"));
const CareersPage = lazy(() => import("./component/pages/CareersPage"));
const FaqPage = lazy(() => import("./component/pages/FaqPage"));
const FeedbackPage = lazy(() => import("./component/pages/FeedbackPage"));
const EnquiryPage = lazy(() => import("./component/pages/EnquiryPage"));


function App() {

const showCart = useSelector((state) => state.cart.cartIsVisible);
const showOrderBill = useSelector((state) => state.cart.orderBillIsVisible);

  return (
    <>
      <ScrollToTop/>
      {showCart && <Cart/>}
      {showOrderBill && <OrderBill/>}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} errorElement={<ErrorOccur/>}  />
          <Route path="Mainpage" element={<MainPage />} errorElement={<ErrorOccur/>}  />
          <Route path="Menupage" element={<MenuPage />} errorElement={<ErrorOccur/>}  />
          <Route path="SignUp" element={<SignUp />} errorElement={<ErrorOccur/>}  />
          <Route path="LogIn" element={<LogIn />} errorElement={<ErrorOccur/>}  />
          <Route path="OurStory" element={<Ourstory />} errorElement={<ErrorOccur/>}  />
          <Route path="Location" element={<LocationPage />} errorElement={<ErrorOccur/>}  />
          <Route path="Careers" element={<CareersPage />} errorElement={<ErrorOccur/>}  />
          <Route path="FAQ" element={<FaqPage />} errorElement={<ErrorOccur/>}  />
          <Route path="Feedback" element={<FeedbackPage />} errorElement={<ErrorOccur/>}  />
          <Route path="Apply" element={<EnquiryPage />} errorElement={<ErrorOccur/>}  />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
