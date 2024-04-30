import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Dashboard";
import Data from "../components/Home/Data/Discover-Data";
import Book from "../components/Home/Booking"

function Booking() {
  // Access the id parameter from the URL
  const destinations = Data;
  const { id } = useParams();
  const loading = false;
  const destination = destinations.find((dest) => dest.id === id);
  console.log(destination);
  // Fetch destination details based on the id
  // You can fetch data from an API or use static data

  // For demonstration purposes, I'll use static data

  return (
    <Layout>
      <div className="w-full h-full min-h-screen p-4 flex flex-col justify-center items-center">
        <div className="w-full mt-[120px] mx-8 mb-8 flex flex-col justify-center items-center text-white">
          <h1>Booking</h1>
          
        </div>
        <div className="box-border max-w-screen-xl mx-4 mb-8 columns-1 md:columns-2 lg:columns-3 flex flex-col">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <Book />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Booking;
