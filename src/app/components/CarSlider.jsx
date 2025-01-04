"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: "images/carSlider/car01.svg",
    info: [
      { icon: "icons/carSlider/gearshift.svg", text: "Manual" },
      { icon: "icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "icons/carSlider/gas.svg", text: "Gas" },
      { icon: "icons/carSlider/engine.svg", text: "16 HP" },
      { icon: "icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: 5,
    image: "images/carSlider/car02.svg",
    info: [
      { icon: "icons/carSlider/gearshift.svg", text: "Manual" },
      { icon: "icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "icons/carSlider/gas.svg", text: "Gas" },
      { icon: "icons/carSlider/engine.svg", text: "16 HP" },
      { icon: "icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: "images/carSlider/car03.svg",
    info: [
      { icon: "icons/carSlider/gearshift.svg", text: "Automatic" },
      { icon: "icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "icons/carSlider/gas.svg", text: "Gas" },
      { icon: "icons/carSlider/engine.svg", text: "16 HP" },
      { icon: "icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: "images/carSlider/car02.svg",
    info: [
      { icon: "icons/carSlider/gearshift.svg", text: "Automatic" },
      { icon: "icons/carSlider/seat.svg", text: "5 Seats" },
      { icon: "icons/carSlider/gas.svg", text: "Gas" },
      { icon: "icons/carSlider/engine.svg", text: "16 HP" },
      { icon: "icons/carSlider/wheel.svg", text: "Front" },
    ],
  },
];

const CarSlider = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars?.map((car, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="max-w-[385px] mx-auto sm:mx-0 bg-gray-100">
                <Image
                  src={car.image}
                  width={380}
                  height={284}
                  alt={car.name}
                />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <h3 className="mb-10 text-accent font-semibold uppercase">
                      {car.price}
                    </h3>
                  </div>
                  {/* stars */}
                  <div>stars</div>
                </div>
                {/* car info */}
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((item, i) => {
                    return (
                      <div key={i} className="flex flex-col items-center">
                        <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt={item.text}
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">See details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default CarSlider;
