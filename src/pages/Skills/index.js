import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as brandStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import Img from "../../components/img";

// Icons
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import javascriptIcon from "../../assets/icons/javascript.svg";
import nodejsIcon from "../../assets/icons/nodejs-dark.svg";
import vscodeIcon from "../../assets/icons/vscode.svg";
import githubIcon from "../../assets/icons/github.svg";
import notepadppIcon from "../../assets/icons/notepadplusplus.svg";
import tailwindIcon from "../../assets/icons/tailwind.svg";
import reactIcon from "../../assets/icons/react.svg";
import typescriptIcon from "../../assets/icons/typescript.svg";
import phpIcon from "../../assets/icons/php.svg";
import vuejsIcon from "../../assets/icons/vuejs.svg";
import laravelIcon from "../../assets/icons/laravel-2.svg";
import wordpressIcon from "../../assets/icons/wordpress.svg";
import mysqlIcon from "../../assets/icons/mysql.svg"; // 🆕 MySQL icon

class Skill {
  constructor(name, content, img, skillLevel) {
    this.name = name;
    this.content = content;
    this.img = img;
    this.skillLevel = skillLevel;
  }

  render() {
    return (
      <div className='p-2 my-1 bg-slate-100 rounded-xl flex gap-4 items-center'>
        <div className='size-14 min-w-14 rounded-xl overflow-hidden'>
          <Img className='size-full' src={this.img} alt={this.name} />
        </div>
        <div className='w-full group hover:*:whitespace-normal overflow-hidden'>
          <p className='truncate transition-all'>{this.content}</p>
          <p className='group-hover:hidden text-sm'>
            {this.skillLevel.map((level, index) => (
              <FontAwesomeIcon key={index} icon={level} />
            ))}
          </p>
        </div>
      </div>
    );
  }
}

function Skills() {
  useEffect(() => {
    document.title = "📚 - HÙng";
  }, []);

  const [openCategory, setOpenCategory] = useState(0);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const skillList = [
    new Skill("HTML", "HTML: (HyperText Markup Language) is the building block 🧱 of web pages, using tags to define structure and content.", htmlIcon, [
      brandStar, brandStar, brandStar, regularStar, regularStar,
    ]),
    new Skill("CSS", "CSS: (Cascading Style Sheets) The language for styling and layout of HTML, helping developers create visually appealing web pages 🎨.", cssIcon, [
      brandStar, brandStar, brandStar, regularStar, regularStar,
    ]),
    new Skill("JavaScript", "JavaScript: A flexible language that adds interactivity ✨ and dynamic behavior 🥏 to web pages, enhancing the user experience.", javascriptIcon, [
      brandStar, regularStar, regularStar, regularStar, regularStar,
    ]),
    new Skill("TypeScript", "TypeScript: A powerful programming language built on JavaScript, providing better tooling for all scales of development.", typescriptIcon, [
      brandStar, regularStar, regularStar, regularStar, regularStar,
    ]),
    new Skill("PHP", "PHP: A popular server-side programming language suitable for dynamic web development.", phpIcon, [
      brandStar, regularStar, regularStar, regularStar, regularStar,
    ]),
    new Skill("Tailwind CSS", "Tailwind CSS: A utility-first CSS framework that enables developers to quickly build user interfaces without leaving their HTML.", tailwindIcon, [
      brandStar, brandStar, brandStar, regularStar, regularStar,
    ]),
    new Skill("ReactJS", "ReactJS: A library for building user interfaces for both web and native apps. It allows you to build UIs from individual components written in JavaScript.", reactIcon, [
      brandStar, brandStar, regularStar, regularStar, regularStar,
    ]),
    new Skill("VueJS", "VueJS: A lightweight and easy-to-learn JavaScript framework used for building interactive web interfaces.", vuejsIcon, [
      brandStar, regularStar, regularStar, regularStar, regularStar,
    ]),
    new Skill("Laravel", "Laravel: A powerful PHP framework that makes web development fast and efficient.", laravelIcon, [
      brandStar, regularStar, regularStar, regularStar, regularStar,
    ]),
    new Skill("WordPress", "WordPress: A popular CMS platform that allows for rapid website creation, with extensive customization options via themes and plugins.", wordpressIcon, [
      brandStar, brandStar, regularStar, regularStar, regularStar,
    ]),
    new Skill("Node.js", "Node.js: A JavaScript runtime environment for server-side programming 🖥, enabling scalable and efficient web applications.", nodejsIcon, [
      brandStar, regularStar, regularStar, regularStar, regularStar,
    ]),
    new Skill("Visual Studio Code", "Visual Studio Code: A free ✨ and open-source code editor developed by Microsoft. It offers many features and extensions for multiple programming languages.", vscodeIcon, [
      brandStar, brandStar, brandStar, brandStar, regularStar,
    ]),
    new Skill("GitHub", "GitHub: A platform for collaboration and version control, allowing developers to store 👩‍💻, review, and manage code repositories for software projects.", githubIcon, [
      brandStar, brandStar, regularStar, regularStar, regularStar,
    ]),
    new Skill("Notepad++", "Notepad++: A lightweight, free, and open-source text editor 📝 for Windows with a variety of features.", notepadppIcon, [
      brandStar, brandStar, brandStar, brandStar, brandStar,
    ]),
    new Skill("MySQL", "MySQL: A popular open-source relational database management system (RDBMS), widely used for storing and retrieving data in web apps.", mysqlIcon, [
      brandStar, brandStar, regularStar, regularStar, regularStar,
    ]), // 🆕 MySQL Skill
  ];

  const categories = [
    {
      name: "Languages",
      contents: skillList.slice(0, 5),
    },
    {
      name: "Frameworks & Styling",
      contents: skillList.slice(5, 10),
    },
    {
      name: "Development Tools",
      contents: skillList.slice(10, 13),
    },
    {
      name: "Text Editors",
      contents: skillList.slice(13, 14),
    },
    {
      name: "Databases",
      contents: skillList.slice(14, 15), // 🆕 MySQL category
    },
  ];

  return (
    <div className='font-bold text-neutral-800 w-full pb-4'>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mb-3 flex text-3xl gap-2 font-bold'
      >
        <div className='bg-neutral-800 h-[36px] w-2'></div>
        <h2>Skills 🔍</h2>
      </motion.div>

      <p>The skills and technologies I use to build everything. 😊</p>

      <div className='mt-6'>
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='border-b-slate-600/40 border-b-[1px] cursor-pointer'
          >
            <div onClick={() => toggleCategory(index)}>
              <div className='pt-6 pb-4'>
                <h2 className='text-lg flex justify-between'>
                  {category.name}
                  <motion.span
                    animate={{ rotate: openCategory === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className='text-cyan-600'
                  >
                    {openCategory === index ? "-" : "+"}
                  </motion.span>
                </h2>
              </div>

              {openCategory === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.contents.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.render()}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
