import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeamSweat } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faEarthAsia, faUserGraduate, faSchool } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Ripples from "react-ripples";
import ChillImg from "../../assets/imgs/me.jpg";
import Img from "../../components/img";

function About() {
  useEffect(() => {
    document.title = "Hùng";
  }, []);

  return (
    <div className="font-bold text-neutral-800 w-full pb-4">
      <div className='mb-3 flex text-3xl gap-2 font-bold'>
        <div className='bg-neutral-800 h-[36px] w-2'></div>
        <h2>
          <ReactTyped strings={["About 💤", "Welcome to my world!", "Let's explore together!"]} typeSpeed={50} backSpeed={30} loop />
        </h2>
      </div>
      <div className='mt-4 font-semibold md:grid grid-cols-2 gap-x-4'>
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h3 className='mb-2 text-xl mt-6'>
              <span>🧠</span>  How did I start programming? 🤔
            </h3>
            <p className='text-gray-700 text-pretty'>
              I began my journey with a strong curiosity about how websites and games work. Starting from HTML, CSS, and JavaScript, I progressed to learning React in 2024. Each step has been a valuable learning experience that deepened my understanding of web development.
            </p>
            <h3 className='mb-2 text-xl mt-6'>
              <span>🚀</span>  My Goal
            </h3>
            <p className='text-gray-700 text-pretty mt-2'>
              To become a skilled full-stack developer. I’m passionate about technology, eager to learn, and always ready to take on new challenges. I believe in perseverance, teamwork, and continuous improvement.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className='mb-2 text-xl mt-6'>
              <span>💻</span>  About this Website🍜
            </h3>
            <Img className='transition-transform hover:scale-110 duration-300 drag-none size-40 sm:size-44 md:size-48 lg:size-60 float-right mb-1 ml-2 select-none rounded-md border-4 border-red-600/50 bg-neutral-800' alt='img' src={ChillImg}></Img>
            <p className='text-gray-700 text-pretty'>
              This website is a portfolio showcasing my background, projects, and skills. It highlights my journey in tech, from learning to building real applications. I aim to connect with professionals, share experiences, and explore internship opportunities in the IT industry.
            </p>
          </motion.div>
        </div>
        <div>
          <div className='hidden md:block md:pl-12 lg:pl-28 xl:pl-32'>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className='p-4 rounded-lg border-[2px] bg-slate-100 border-slate-200 transition-all hover:shadow-xl hover:-translate-y-1'>
              <div className='flex gap-3 items-center'>
                <div className='text-gray-700'>
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <p>Work</p>
              </div>
              <div className='flex mt-6 gap-3 items-center'>
                <div className='size-10 rounded-full bg-slate-800 text-slate-100 text-lg flex items-center justify-center'>
                  <FontAwesomeIcon icon={faEarthAsia} />
                </div>
                <div className='flex-1'>
                  <h5 className='text-sm'>Lotteria Do Xuan Hop Store</h5>
                  <div className='flex justify-between text-xs text-gray-700'>
                    <p>Seasonal part-time students ...</p>
                    <p>2023 - now</p>
                  </div>
                </div>
              </div>
              {/* Download CV */}
              <div className="mt-6">
                <Ripples className="w-full">
                  <a
                    href="/cv.pdf"
                    download
                    className="w-full py-2 flex text-sm hover:bg-neutral-700 items-center gap-2 justify-center text-white bg-neutral-800 rounded-lg"
                  >
                    Download CV <span className="text-xl">↓</span>
                  </a>
                </Ripples>
              </div>

            </motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className='p-4 mt-4 rounded-lg border-[2px] bg-slate-100 border-slate-200 transition-all hover:shadow-xl hover:-translate-y-1'>
              <div className='flex gap-3 items-center'>
                <div className='text-gray-700'>
                  <FontAwesomeIcon icon={faUserGraduate} />
                </div>
                <p>Education</p>
              </div>
              <div className='flex mt-6 gap-3 items-center'>
                <div className='size-10 rounded-full bg-slate-800 text-slate-100 text-lg flex items-center justify-center'>
                  <FontAwesomeIcon icon={faSchool} />
                </div>
                <div className='flex-1'>
                  <h5 className='text-sm'>Thu Duc College of Technology</h5>
                  <div className='flex justify-between text-xs text-gray-700'>
                    <p>Information Technology</p>
                    <p>2022 - now</p>
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <Ripples className="w-full">
                  <a
                    href='https://tdc.edu.vn/'
                    className="w-full py-2 flex text-sm hover:bg-neutral-700 items-center gap-2 justify-center text-white bg-neutral-800 rounded-lg"
                  >
                    <span>
                      <FontAwesomeIcon icon={faFaceGrinBeamSweat} />
                    </span>
                    <span>Web trường</span>
                  </a>
                </Ripples>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
