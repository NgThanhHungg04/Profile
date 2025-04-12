import { useEffect } from "react";
import { motion } from "framer-motion";

function Specs() {
  useEffect(() => {
    document.title = "👨‍🏫 - References";
  }, []);

  const teacherInfo = {
    name: "Nguyen Huy Hoang",
    department: "Software Technology",
    position: "Head of Software Engineering",
    email: "hoanghn@tdc.edu.vn",
    phone: "0909 210 045",
    office: "Room B115 - IT Faculty",
  };

  return (
    <motion.div
      className='font-bold text-neutral-800 w-full pb-4'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Header */}
      <motion.div
        className='mb-3 flex text-3xl gap-2 font-bold items-center'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className='bg-neutral-800 h-[36px] w-2'
          layout
        />
        <motion.h2
          whileHover={{ scale: 1.05, color: "#0ea5e9" }}
          transition={{ duration: 0.3 }}
        >
          References
        </motion.h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Below is the information of the teacher who guided me during the internship at the enterprise.
      </motion.p>

      {/* Info Grid */}
      <div className='w-full mt-4 grid md:grid-cols-2 grid-cols-1 gap-5'>
        <motion.div
          className='p-4 rounded-xl bg-slate-100 shadow-md'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className='mb-2 text-2xl font-bold text-cyan-700'>Personal Information</h4>
          <ul className='list-disc text-sm ml-6'>
            <li>Lecturer Name: {teacherInfo.name}</li>
            <li>Department: {teacherInfo.department}</li>
            <li>Position: {teacherInfo.position}</li>
          </ul>
        </motion.div>

        <motion.div
          className='p-4 rounded-xl bg-slate-100 shadow-md'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className='mb-2 text-2xl font-bold text-cyan-700'>Contact</h4>
          <ul className='list-disc text-sm ml-6'>
            <li>Email: {teacherInfo.email}</li>
            <li>Phone: {teacherInfo.phone}</li>
            <li>Office: {teacherInfo.office}</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Specs;
