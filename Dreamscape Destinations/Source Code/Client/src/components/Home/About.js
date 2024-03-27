import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="about md:bg-about bg-cover bg-top w-full h-full md:h-screen"
    >
      <div className="w-full md:max-w-screen-lg mx-auto p-8 flex flex-col justify-center z-[2]">
        <h1 className="mt-6">Bringing the Dreams to the world</h1>
        <p className="my-4 text-center">
          Dream Escape was founded in 2024 by a Dream Escape Team
        </p>
        <div className="flex flex-wrap justify-evenly items-start md:bg-[#ffffff8a] rounded-lg leading-loose">
          <div className="w-full md:w-1/2 p-4">
            At Dream Escape, we're more than just a booking platform – we're
            your partners in exploration, dedicated to unlocking the world's
            wonders one journey at a time. Founded on the belief that travel has
            the power to enrich lives and broaden horizons, we strive to connect
            travelers with authentic experiences that leave a lasting
            impression. With a commitment to excellence and a passion for
            adventure, we've earned a reputation as a trusted authority in the
            travel industry, helping countless explorers turn their wanderlust
            into reality.
          </div>
          <div className="w-full md:w-1/2 p-4">
            Driven by a relentless pursuit of excellence, our team of travel
            enthusiasts is dedicated to crafting seamless and unforgettable
            experiences for every traveler. Whether you're embarking on a solo
            adventure, planning a romantic getaway, or organizing a group
            expedition, we're here to make your travel dreams come true. From
            meticulously curated itineraries to personalized recommendations,
            we're with you every step of the way, ensuring your journey is
            nothing short of extraordinary. Join us on a journey of discovery
            and let's create memories that will last a lifetime.
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
