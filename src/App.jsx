import ProductPage from "./pages/ProductPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ProductPage />
      <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          theme="light"
      />
    </>
  );
}

export default App;