import React from "react";
import Data from "./Data/Book-Data";
import axios from "axios";
import { useState } from "react";

const Book = () => {
  const destinations = Data;
  const [price, setPrice] = useState(false);

  // display return date if `round trip` is selected
  const roundTripHandleChange = (event) => {
    document.getElementById("return-date").style.visibility =
      event.checked && event.id === "round-trip" ? "hidden" : "visible";
    const options = {
      method: "POST",
      url: "https://travel-advisor.p.rapidapi.com/locations/v2/list-nearby",
      params: {
        currency: "USD",
        units: "km",
        lang: "en_US",
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "b432c645a6mshced874f573bbdb8p128504jsna632a17a58d0",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
      data: {
        contentId: "cc8fc7b8-88ed-47d3-a70e-0de9991f6604",
        contentType: "restaurant",
        filters: [
          {
            id: "placetype",
            value: ["hotel", "attraction", "restaurant"],
          },
          {
            id: "minRating",
            value: ["30"],
          },
        ],
        boundingBox: {
          northEastCorner: {
            latitude: 12.248278039408776,
            longitude: 109.1981618106365,
          },
          southWestCorner: {
            latitude: 12.243407232845051,
            longitude: 109.1921640560031,
          },
        },
      },
    };

    try {
      const response = axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const checkBestPrices = (event) => {
    event.preventDefault();
    console.log("CLICK");
    setPrice(true);
  };

  // hide return date if `one way` is selected
  const oneWayHandleChange = (event) => {
    document.getElementById("return-date").style.visibility =
      event.checked && event.id === "one-way" ? "visible" : "hidden";
  };

  return (
    <div
      name="book"
      className="book w-full relative p-8 mb-6 mt-4"
    >
      <div className="w-full md:max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center">
        <h1>Find the best prices</h1>

        <div className="w-full md:max-w-screen-lg flex flex-row flex-wrap justify-center items-center">
          {/* SEARCH DESTINATIONS */}
          <div className="w-full md:max-w-screen-md">
            <form className="search-form w-full mx-auto grid grid-cols-1 md:grid-cols-3 mb-4">
              <div className="col-span-1 md:col-span-3">
                <input
                  type="radio"
                  id="round-trip"
                  name="trip-type"
                  value="round-trip"
                  onChange={roundTripHandleChange}
                  defaultChecked
                />
                <label for="round-trip" className="pl-2 pr-6">
                  Round-Trip
                </label>
                <input
                  type="radio"
                  id="one-way"
                  name="trip-type"
                  value="one-way"
                  onChange={oneWayHandleChange}
                />
                <label for="one-way" className="pl-2">
                  One-Way
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-3 gap-4 py-4 place-items-stretch">
                <div>
                  <label className="block">From</label>
                  <input type="text" placeholder="Origin city or airport" />
                </div>
                <div>
                  <label className="block">To</label>
                  <input
                    type="text"
                    placeholder="Destination city or airport"
                  />
                </div>
                <div>
                  <label className="block">Passengers</label>
                  <select>
                    <option value="1">1 Passenger</option>
                    <option value="1">2 Passengers</option>
                    <option value="1">3 Passengers</option>
                    <option value="1">4 Passengers</option>
                    <option value="1">5 Passengers</option>
                    <option value="1">6 Passengers</option>
                    <option value="1">7 Passengers</option>
                    <option value="1">8 Passengers</option>
                    <option value="1">9 Passengers</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-3 gap-4 pb-4 place-items-stretch">
                <div id="departure-date" className="w-full">
                  <label className="block">Departure Date</label>
                  <input type="date" />
                </div>
                <div id="return-date" className="w-full">
                  <label className="block">Return Date</label>
                  <input type="date" />
                </div>
                <div className="pt-6">
                  <button
                    className="primary w-full h-[43px]"
                    onClick={checkBestPrices}
                  >
                    Find Best Prices
                  </button>
                </div>
              </div>
            </form>
          </div>
          {price ? (
            <div className="min-w-full bg-slate-600/30 rounded-md px-60 py-4">
              <p className="font-bold">Flights</p>
              <hr class="h-px my-1 bg-slate-200/50 border-0 dark:bg-slate-300" />
              <div className="pl-10">
                <div className="flex justify-start items-center">
                  <input
                      type="radio"
                      id="one-way"
                      name="flight-selection"
                      value="Qatar"
                    />
                  <div className="font-normal ml-3">Qatar Airways</div>
                  <div className="text-red-400 font-semibold ml-auto">
                    $70
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <input
                        type="radio"
                        id="one-way"
                        name="flight-selection"
                        value="Eurowings"
                      />
                  <div className="font-normal ml-3">Eurowings</div>
                  <div className="text-red-400 font-semibold ml-auto">
                    $68
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <input
                        type="radio"
                        id="one-way"
                        name="flight-selection"
                        value="Emirates"
                      />
                  <div className="font-normal ml-3">Emirates</div>
                  <div className="text-red-400 font-semibold ml-auto">
                    $70
                  </div>
                </div>
              </div>

              <p className="font-bold">Hotel</p>
              <hr class="h-px my-1 bg-slate-200/50 border-0 dark:bg-slate-300" />
              <div className="pl-10">
                <div className="flex justify-start items-center">
                  <input
                      type="radio"
                      id="one-way"
                      name="hotel-selection"
                      value="Qatar"
                    />
                  <div className="font-normal ml-3">Icos Aria</div>
                  <div className="text-red-400 font-semibold ml-auto">
                    $70
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <input
                        type="radio"
                        id="one-way"
                        name="hotel-selection"
                        value="Eurowings"
                      />
                  <div className="font-normal ml-3">Hotel Colline</div>
                  <div className="text-red-400 font-semibold ml-auto">
                    $68
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <input
                        type="radio"
                        id="one-way"
                        name="hotel-selection"
                        value="Emirates"
                      />
                  <div className="font-normal ml-3">Tulemar Resort</div>
                  <div className="text-red-400 font-semibold ml-auto">
                    $70
                  </div>
                </div>
              </div>

              <p className="font-bold">Guide</p>
              <hr class="h-px my-1 bg-slate-200/50 border-0 dark:bg-slate-300" />
              <div className="pl-10">
                <div className="flex justify-start items-center">
                  <input
                      type="radio"
                      id="one-way"
                      name="guide-selection"
                      value="Qatar"
                    />
                  <div className="font-normal ml-3">Full Time</div>
                  <div className="text-red-400 font-semibold ml-auto">
                    $90
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <input
                        type="radio"
                        id="one-way"
                        name="guide-selection"
                        value="Eurowings"
                      />
                  <div className="font-normal ml-3">Part Time</div>
                  <div className="text-red-400 font-semibold ml-auto">
                    $50
                  </div>
                </div>
              </div>

              <hr class="h-px my-1 bg-slate-700 border-0 dark:bg-slate-700" />
              <div className="flex justify-start items-center">
                  <div className="font-bold">Total</div>
                  <div className="text-red-400 font-semibold ml-auto">
                    $350
                  </div>
                </div>
              <button className="primary w-full mt-4">Book Now</button>
            </div>
          ) : (
            <>
              <p>
                Please Enter your Dream Destination to check the best prices
              </p>
            </>
          )}

          {/* SEARCH DEALS */}
          <div className="w-full">
            <h2 className="mb-8 text-teal-400 text-center">
              Don't miss these deals
            </h2>
          </div>

          <div className="images grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
            {destinations.map((city) => (
              <div className="max-w-sm rounded-md overflow-hidden shadow-lg hover:shadow-slate-400 transition-all ease-in duration-300">
                <img src={city.image} alt={city.imgAlt} className="w-full" />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-xl">{city.name}</div>
                    <div className="text-teal-400 font-semibold text-xl">
                      {city.price}
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-gray-500 text-xs">
                    <div>{city.deal}</div>
                    <div>per person</div>
                  </div>
                  <button className="primary w-full mt-4">View Deal</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
