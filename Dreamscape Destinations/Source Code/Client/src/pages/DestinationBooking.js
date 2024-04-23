import React from "react";
import { useParams } from "react-router-dom";
import Auth from "../utils/auth";
import Layout from "../components/Layout/Dashboard";
import Data from "../components/Home/Data/Discover-Data";
import Book from "../components/Home/Booking"

function DestinationBooking() {
  // Access the id parameter from the URL
  const destinations = Data;
  const { id } = useParams();
  const loading = false;
  const destination = destinations.find((dest) => dest.id === id);

  // Fetch destination details based on the id
  // You can fetch data from an API or use static data

  // For demonstration purposes, I'll use static data

  return (
    <Layout>
      <div className="w-full h-full min-h-screen p-4 flex flex-col justify-center items-center">
        <div className="w-full mt-[120px] mx-8 mb-8 flex flex-col justify-center items-center text-white">
          <h1>{destination.name}</h1>
          <div className="flex flex-row justify-center items-flex-start space-x-4">
            <div className="w-1/2 rounded-md shadow-lg hover:shadow-slate-400">
              <img
                src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2434&q=80"
                alt="..."
                className="rounded-md hover:rounded-xl"
              />
            </div>
            <div className="w-1/2 bg-slate-700/50 rounded-md shadow p-4 hover:rounded-xl shadow-lg hover:shadow-slate-400">
              <h3>Description</h3>
              <p>{destination.description}</p>
            </div>
          </div>
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

export default DestinationBooking;
