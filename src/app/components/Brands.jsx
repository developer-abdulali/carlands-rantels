// import { motion } from "framer-motion";
// import { fadeIn } from "../../../variants";
// import Image from "next/image";

// const Brands = () => {
//   const allBrands = [
//     { logo: "icons/brands/ford.svg", alt: "Ford" },
//     { logo: "icons/brands/audi.svg", alt: "Audi" },
//     { logo: "icons/brands/bmw.svg", alt: "BMW" },
//     { logo: "icons/brands/vw.svg", alt: "Volkswagen" },
//     { logo: "icons/brands/mercedes.svg", alt: "Mercedes" },
//     { logo: "icons/brands/hyundai.svg", alt: "Hyundai" },
//     { logo: "icons/brands/kia.svg", alt: "Kia" },
//     { logo: "icons/brands/renault.svg", alt: "Renault" },
//     { logo: "icons/brands/nissan.svg", alt: "Nissan" },
//   ];

//   return (
//     <section className="xl:mt-16 xl:h-[200px] bg-white flex flex-col justify-center">
//       <div className="container mx-auto">
//         {/* brand wrapper */}
//         <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
//           {allBrands.map((brand, i) => (
//             <motion.div
//               key={i}
//               variants={fadeIn}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="flex items-center justify-center h-16 w-16"
//             >
//               <Image src={brand.logo} width={60} height={60} alt={brand.alt} />
//             </motion.div>
//           ))}
//           {/* <div>
//             <Image
//               src={"icons/brands/ford.svg"}
//               width={60}
//               height={60}
//               alt="ford"
//             />
//           </div>
//           <div>
//             <Image
//               src={"icons/brands/audi.svg"}
//               width={85}
//               height={50}
//               alt="audi"
//             />
//           </div>
//           <div>
//             <Image
//               src={"icons/brands/bmw.svg"}
//               width={60}
//               height={60}
//               alt="bmw"
//             />
//           </div>
//           <div>
//             <Image
//               src={"icons/brands/vw.svg"}
//               width={60}
//               height={60}
//               alt="vw"
//             />
//           </div>
//           <div>
//             <Image
//               src={"icons/brands/skoda.svg"}
//               width={60}
//               height={60}
//               alt="skoda"
//             />
//           </div>
//           <div>
//             <Image
//               src={"icons/brands/mazda.svg"}
//               width={60}
//               height={60}
//               alt="mazda"
//             />
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Brands;

import Image from "next/image";

const Brands = () => {
  const allBrands = [
    { logo: "icons/brands/ford.svg", alt: "Ford" },
    { logo: "icons/brands/audi.svg", alt: "Audi" },
    { logo: "icons/brands/bmw.svg", alt: "BMW" },
    { logo: "icons/brands/vw.svg", alt: "Volkswagen" },
    { logo: "icons/brands/skoda.svg", alt: "Skoda" },
    { logo: "icons/brands/mazda.svg", alt: "Mazda" },
    // { logo: "icons/brands/hyundai.png", alt: "Hyundai" },
    // { logo: "icons/brands/kia.svg", alt: "Kia" },
    // { logo: "icons/brands/renault.svg", alt: "Renault" },
    // { logo: "icons/brands/nissan.svg", alt: "Nissan" },
  ];

  return (
    <section className="xl:mt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          {allBrands?.map((brand, i) => (
            <div key={i} className="flex items-center justify-center h-16 w-16">
              <Image
                src={brand.logo}
                width={60}
                height={60}
                alt={brand.alt}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
