import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import localAvatar from "../assets/imgs/mee.jpg";


function CustomStatus({ customStatus }) {
  return (
    <>
      {customStatus && (
        <p className='text-sm text-slate-600 mt-[2px]'>
          ▸ {customStatus.emoji && <span className='mr-1'>{customStatus.emoji.name}</span>}
          {customStatus.state}
        </p>
      )}
    </>
  );
}

function replaceCharacters(inputString) {
  return inputString.replace(/;/g, ",").replace(/'/g, ",");
}

function UserInfo() {
  const [userData, setUserData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isWeather, setIsWeather] = useState(false);
  const [weather, setWeather] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isBirth, setIsBirth] = useState(false); // Thêm dòng này
  const [isPhone, setIsPhone] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.lanyard.rest/v1/users/915876843884777472");
      const userData = response.data.data;
      setUserData(userData);
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  const fetchWeather = () => {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather?q=Ho%20Chi%20Minh,vn&appid=a601622a383aee1aea5573743d8e8875&units=metric")
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("Lỗi:", error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchWeather();

    const intervalId = setInterval(
      () => {
        fetchData();
        fetchWeather();
      },
      1 * 60 * 1000
    );

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (userData) {
      const startTimestamp = userData.activities.find((activity) => activity.type === 0)?.timestamps.start;
      const intervalId = setInterval(() => {
        const currentTimestamp = Date.now();
        const elapsed = currentTimestamp - startTimestamp;
        setElapsedTime(elapsed);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [userData]);

  const formatElapsedTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;
    } else if (hours > 0) {
      return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  };

  if (!userData || !weather) {
    return (
      <>
        <div className='md:flex gap-6 items-center'>
          <div className='md:m-0 mb-5 mx-auto rounded-full min-w-32 size-32 overflow-hidden border-4 border-cyan-500'>
            <div className='rounded-full overflow-hidden border-4 border-transparent'>
              <div className='size-[112px] bg-slate-300 animate-pulse'></div>
            </div>
          </div>
          <div className='text-gray-900 '>
            <h2 className='font-semibold text-2xl'>
              Hey, I'm{" "}
              <Tippy animation='scale' content='Thanh Hùng'>
                <span className='text-cyan-800'>Nguyễn Thanh Hùng</span>
              </Tippy>{" "}
              👋
            </h2>
            <div className='w-full h-1 bg-cyan-500 rounded-sm my-1'></div>
            <div className='font-semibold text-justify'>
              Chào mọi người! Tui là Hùng (<span className='text-cyan-800'>2004</span>), lập trình viên web tự học và là người chơi Minecraft. Với kiến thức tự học và các dự án thú vị, tui đang tìm kiếm cơ hội mới để
              đem sự sáng tạo và đam mê vào làm việc.{" "}
              <Link className='text-slate-600 underline' to='/skills'>
                Xem thêm không nhỉ
              </Link>{" "}
              ✒️
            </div>
          </div>
        </div>
        <div className='w-56 rounded-full bg-slate-300 animate-pulse h-4 mt-4'></div>
        <div className='w-52 rounded-full bg-slate-300 animate-pulse h-4 mt-3'></div>
      </>
    );
  }

  const { discord_user, activities, discord_status } = userData;
  const { avatar } = discord_user;
  const customStatus = activities.find((activity) => activity.type === 4);
  const listeningToSpotify = activities.find((activity) => activity.type === 2);


  return (
    <>
      <div className='md:flex gap-6 items-center'>
        <div className='md:m-0 mb-5 mx-auto rounded-full min-w-32 size-32 overflow-hidden border-4 border-cyan-500'>
          <div className='rounded-full overflow-hidden border-4 border-transparent'>
          {/* <img src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${avatar}.png`} alt='Avatar' /> */}

          <img src={localAvatar} alt="Avatar" style={{ width: '160px', height: '140px' }} />
            
          </div>
        </div>
        <div className='text-gray-900 '>
          <h2 className='font-semibold text-2xl'>
            Hey, I'm{" "}
            <Tippy animation='scale' content='Thanh Hùng'>
              <span className='text-cyan-800'>Nguyễn Thanh Hùng</span>
            </Tippy>{" "}
            👋
          </h2>
          <div className='w-full h-1 bg-cyan-500 rounded-sm my-1'></div>
          <div className='font-semibold text-justify'>
            Hi i'm Hung, a Front End Developer ( Fresher ) . I'm 21 year old and don't have much experience in the industry 🤔. Despite my limited experience, I'm always eager to learn and conquer new challenges in the Front End field.  I really want to impress recruiters so I can do my favorite job. 😄. I believe that my enthusiasm and self-learning ability will help me develop myself faster. Thank you for reading 😚.
            <Link className='text-slate-600 underline' to='/skills'>
              Xem thêm không nhỉ
            </Link>{" "}
            ✒️
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-3'>
        {/* Ngày sinh */}
        <div className='flex items-center'>
          {/* Icon sinh nhật */}
          <svg
            className='w-5 h-5 text-gray-800 -translate-x-[4px] -translate-y-[1px]'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              fillRule='evenodd'
              d='M12 2c.83 0 1.5.67 1.5 1.5S12 5 12 5s-1.5-.67-1.5-1.5S11.17 2 12 2Zm4 0c.83 0 1.5.67 1.5 1.5S16 5 16 5s-1.5-.67-1.5-1.5S15.17 2 16 2Zm-8 0c.83 0 1.5.67 1.5 1.5S8 5 8 5s-1.5-.67-1.5-1.5S7.17 2 8 2ZM4 10h16v4H4v-4Zm0 6h16v4H4v-4Z'
              clipRule='evenodd'
            />
          </svg>

          {/* Hiển thị ngày sinh */}
          <div
            className='font-semibold text-gray-900 cursor-pointer'
            onMouseEnter={() => setIsBirth(true)}
            onMouseLeave={() => setIsBirth(false)}
          >
            <p>August 1, 2004</p>

            {isBirth && (
              <div className='cursor-text absolute z-10 translate-x-[-20px] p-2 rounded-xl bg-slate-100 border-dashed border-pink-500 border-4'>
                <p>📅 Full Date of Birth: August 1, 2004</p>
                <p>🔢 Age: {new Date().getFullYear() - 2004} years old</p>

              </div>
            )}
          </div>
        </div>


      </div>
      {/* Số điện thoại */}
      <div className='flex flex-col space-y-3'>
        <div className='flex items-center'>
          {/* Icon điện thoại */}
          <svg
            className='w-5 h-5 text-gray-800 -translate-x-[4px] -translate-y-[1px]'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              fillRule='evenodd'
              d='M6.6 2.6a2 2 0 0 1 2.8 0l2 2a2 2 0 0 1 0 2.8l-.6.6c-.2.2-.3.5-.3.8 0 .4.1.7.3 1 .6 1 1.4 2 2.3 2.8.9.9 1.8 1.6 2.8 2.3.3.2.7.3 1 .3.3 0 .6-.1.8-.3l.6-.6a2 2 0 0 1 2.8 0l2 2a2 2 0 0 1 0 2.8l-1.3 1.3c-.8.8-2 1.2-3.1 1-2.8-.4-5.5-1.8-7.8-4.1-2.3-2.3-3.7-5-4.1-7.8-.2-1.1.2-2.3 1-3.1L6.6 2.6Z'
              clipRule='evenodd'
            />
          </svg>

          {/* Hiển thị số điện thoại */}
          <div
            className='font-semibold text-gray-900 cursor-pointer'
            onMouseEnter={() => setIsPhone(true)}
            onMouseLeave={() => setIsPhone(false)}
          >
            <p>+84 345 781 317</p>

            {isPhone && (
              <div className='cursor-text absolute z-10 translate-x-[-20px] p-2 rounded-xl bg-slate-100 border-dashed border-green-500 border-4'>
                <p>📞 Phone Number: +84 345 781 317</p>
                <p>🕒 Status: Active</p>

              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className='flex items-center'>
          <svg className='w-5 h-5 text-gray-800  -translate-x-[4px] -translate-y-[1px]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
            <path fillRule='evenodd' d='M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' clipRule='evenodd' />
          </svg>

          <div className='font-semibold text-gray-900 cursor-pointer' onMouseEnter={() => setIsWeather(true)} onMouseLeave={() => setIsWeather(false)}>
            <p>No. 26, Street 34, Linh Dong Ward, Thu Duc City, Ho Chi Minh City, Vietnam</p>

            {isWeather && (
              <div className='cursor-text absolute z-10 translate-x-[-20px] p-2 rounded-xl bg-slate-100 border-dashed border-cyan-500 border-4'>
                <p>⛺ City: {weather.name}</p>
                <p>⛅ Temperature: {weather.main.temp} ºC</p>
                <p>🚿 Humidity: {weather.main.humidity}%</p>

              </div>
            )}
          </div>


        </div>
      </div>

    </>
  );
}

export default UserInfo;
