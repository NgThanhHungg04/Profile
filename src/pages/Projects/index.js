import { useEffect } from "react";
import { motion } from "framer-motion";
import GithubProjects from "../../api/githubApi";

function Projects() {
  useEffect(() => {
    document.title = "🗂 - Hùng";
  }, []);

  return (
    <motion.div
      className='font-bold text-neutral-800 w-full pb-4'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Tiêu đề */}
      <motion.div
        className='mb-3 flex text-3xl gap-2 font-bold items-center'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className='bg-neutral-800 h-[36px] w-2' layout />
        <motion.h2
          whileHover={{ scale: 1.05, color: "#0ea5e9" }}
          transition={{ duration: 0.3 }}
        >
          Projects 🕓
        </motion.h2>
      </motion.div>

      {/* Đoạn mô tả */}
      <motion.p
        className='mb-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        My projects 💾, though not perfect, but...
      </motion.p>

      {/* Các project */}
      <motion.div
        className='md:grid w-full mt-6 flex flex-col lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <GithubProjects />
      </motion.div>
    </motion.div>
  );
}

export default Projects;
