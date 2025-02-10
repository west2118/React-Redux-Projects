import React, { useEffect, useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ContactsPage from "./pages/ContactsPage";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import Login from "./pages/Login";
import Details from "./pages/Details";
import CheckoutPage from "./pages/CheckoutPage";
import { useDispatch, useSelector } from "react-redux";
import { replaceCart } from "./store/cart-slice";
import { replaceBook } from "./store/ui-slice";
import fetchData from "./hooks/fetchData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <Details /> },
      { path: "/contacts", element: <ContactsPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/favorites", element: <FavoritesPage /> },
      { path: "/login", element: <Login /> },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const books = useSelector((state) => state.book.books);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch(
          "https://cart-practice-f8e66-default-rtdb.firebaseio.com/booksCart.json"
        );

        if (!response.ok) {
          throw new Error("Fetching data failed!");
        }

        const data = await response.json();

        console.log(data);

        const updatedCart = {
          items: data.items || [],
          totalQuantity: data.totalQuantity || 0,
          subtotal: data.subtotal || 0,
        };

        dispatch(replaceCart(updatedCart));
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCartData();
  }, [dispatch]);

  useEffect(() => {
    if (books.length === 0) return; // Prevent sending empty data

    const sendData = async () => {
      await fetchData(
        "https://cart-practice-f8e66-default-rtdb.firebaseio.com/booksCart.json",
        cartItems
      );
    };

    const timer = setTimeout(() => {
      sendData();
    }, 500); // Debounce to avoid too many requests

    return () => clearTimeout(timer); // Cleanup on re-renders
  }, [cartItems]);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(
          "https://cart-practice-f8e66-default-rtdb.firebaseio.com/books.json"
        );

        if (!response.ok) {
          throw new Error("Fetching data failed!");
        }

        const data = await response.json();

        if (data) {
          dispatch(replaceBook(data));
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchBookData();
  }, [dispatch]);

  useEffect(() => {
    if (books.length === 0) return; // Prevent sending empty data

    const sendData = async () => {
      await fetchData(
        "https://cart-practice-f8e66-default-rtdb.firebaseio.com/books.json",
        books
      );
    };

    const timer = setTimeout(() => {
      sendData();
    }, 500); // Debounce to avoid too many requests

    return () => clearTimeout(timer); // Cleanup on re-renders
  }, [books]);

  return <RouterProvider router={router} />;
};

export default App;
