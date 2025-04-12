import { useEffect } from "react";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import Img from "../../components/img";

// Hobby images
import footballImg from "../../assets/imgs/hobbies/football.jpg";
import readingImg from "../../assets/imgs/hobbies/reading.jpg";
import codingImg from "../../assets/imgs/hobbies/coding.jpg";
import cookingImg from "../../assets/imgs/hobbies/cooking.jpg";
import musicImg from "../../assets/imgs/hobbies/music.jpg";
import travelImg from "../../assets/imgs/hobbies/travel.jpg";
import lienquanImg from "../../assets/imgs/hobbies/lienquan.jpg"; // Ensure this image exists

function Hobbies() {
  useEffect(() => {
    document.title = "❤️ - My Hobbies";
  }, []);

  const favoriteHobbies = [
    { name: "Football", time: "1520", img: footballImg },
    { name: "Reading", time: "820", img: readingImg },
    { name: "Coding", time: "2100", img: codingImg },
    { name: "Playing Arena of Valor", time: "1300", img: lienquanImg },
  ];

  const otherHobbies = [
    { name: "Cooking", time: "310", img: cookingImg },
    { name: "Listening to music", time: "640", img: musicImg },
    { name: "Traveling", time: "450", img: travelImg },
  ];

  return (
    <motion.div
      className='font-bold text-neutral-800 w-full pb-4'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className='mb-3 flex text-3xl gap-2 font-bold items-center'>
        <motion.div className='bg-neutral-800 h-[36px] w-2' layout />
        <motion.h2
          whileHover={{ scale: 1.05, color: "#06b6d4" }}
          transition={{ duration: 0.3 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
        >
          My Hobbies ❤️
        </motion.h2>
      </div>
      <motion.p
        className="mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Things I enjoy doing every day... ✨
      </motion.p>

      {/* Favorite hobbies */}
      <motion.h3
        className='mb-2 text-lg mt-6 flex items-center gap-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span>⬤</span> The hobbies I spend the most time on
      </motion.h3>

      <div className='flex gap-4 flex-wrap'>
        {favoriteHobbies.map(({ name, time, img }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <Tippy
              placement='right'
              offset={[-6, 8]}
              animation='scale'
              content={`${time}h = ${(time / 24).toFixed(2)} days`}
            >
              <p className='text-cyan-600 w-fit'>{time}h</p>
            </Tippy>
            <motion.div
              className='w-40 h-64 mb-1 rounded-xl cursor-pointer overflow-hidden transition-all ring-cyan-600 hover:ring-4 focus:ring-4'
              whileHover={{ scale: 1.1, rotate: 1 }}
            >
              <Img className='object-cover size-full' src={img} alt={name} />
            </motion.div>
            <h4 className='truncate w-full'>{name}</h4>
          </motion.div>
        ))}
      </div>

      {/* Other hobbies */}
      <motion.h3
        className='mb-2 text-lg mt-6 flex items-center gap-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span>⬤</span> Other hobbies ✨
      </motion.h3>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3'>
        {otherHobbies.map(({ name, time, img }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Tippy
              arrow={false}
              offset={[-1, 5]}
              placement='top-start'
              content={
                <div>
                  <h4>{name}</h4>
                  <p className='text-cyan-300'>{time} hours</p>
                </div>
              }
            >
              <motion.div
                className='flex justify-center border-[1px] border-slate-800/10 items-center rounded-sm overflow-hidden h-[84px] w-full transition-transform ring-cyan-600 hover:ring-2 focus:ring-2'
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <Img className='object-cover bg-slate-300' src={img} alt={name} />
              </motion.div>
            </Tippy>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Hobbies;
