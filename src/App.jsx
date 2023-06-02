import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AddExpense from "./pages/addExpense/AddExpense";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-expense" element={<AddExpense />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
