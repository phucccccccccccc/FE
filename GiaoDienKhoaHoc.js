
import React from 'react';
import anh1 from "./img/c++.jpg";
import anh2 from "./img/c.jpg";
import anh3 from "./img/html.jpg";
import anh4 from "./img/react-js.png";
import anh5 from "./img/node-js.png";
import anh6 from "./img/javascript.png";
import anh7 from "./img/icon1.jpg";

import {
  FaHome, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaInstagram, FaFacebook, FaYoutube
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="dev">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <img src={anh7} alt="Exam Banner" className="w-12 h-12" />
        <h1 className="text-xl font-bold">DEVGEN</h1>
        <nav>
          <ul className="flex space-x-6 font-medium">
            <li>
              <a href="/" className="flex items-center hover:text-blue-600">
                <FaHome className="mr-2 text-lg" /> TRANG CHỦ
              </a>
            </li>
            <li><a href="/gioithieu" className="hover:text-blue-600">GIỚI THIỆU</a></li>
            <li><a href="/chuong-trinh-hoc" className="hover:text-blue-600">CHƯƠNG TRÌNH HỌC ▼</a></li>
            <li><a href="/blog" className="hover:text-blue-600">BLOG</a></li>
            <li><a href="./Register" className="hover:text-blue-600">KÍCH HOẠT TÀI KHOẢN</a></li>
          </ul>
        </nav>
        <a href="./Login">

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Đăng nhập</button>
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-8 py-16">
        <div className="max-w-lg">


          <li>
            <a href="/gioi-thieu" className="hover:text-blue-600">
              Khóa Học Lập Trình C Cơ Bản Đến Nâng Cao
            </a>
          </li>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Thời lượng: 40 - 60 giờ học (tùy tốc độ học)</li>
            <li className="mb-2">Tổng số bài học: ~15 bài + 1 dự án cuối khóa</li>
            <li className="mb-2">Bài tập thực hành: ~30 bài</li>
            <li className="mb-2">Dự án thực tế: 1 dự án lớn (Quản lý sinh viên)</li>
            <li className="mb-2">Hình thức: Online hoặc Offline</li>
          </ul>
        </div>
        <div className="anh mt-6">
          <img src={anh2} alt="Exam Banner" className="aa" />
        </div>
      </section>
      {/* Khóa học C++ */}
      <section className="flex flex-col md:flex-row items-center px-8 py-16">
        <div className="max-w-lg">

          <li><a href="/gioi-thieu" className="hover:text-blue-600">Khóa Học Lập Trình C++ Cơ Bản Đến Nâng Cao</a></li>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Thời gian học: 50-70 giờ   </li>
            <li className="mb-2">Tổng số bài học: ~15 bài + 1 dự án thực tế  </li>
            <li className="mb-2">Bài tập thực hành: ~30 bài</li>
            <li className="mb-2">Dự án thực tế: 1 dự án lớn (Quản lý sinh viên)</li>
            <li className="mb-2">Hình thức: Online hoặc Offline</li>
          </ul>
        </div>
        <div className="anh">
          <img src={anh1} alt="Exam Banner" className="aa" />
        </div>
      </section>
      {/* Khóa học HTML */}
      <section className="flex flex-col md:flex-row items-center px-8 py-16">
        <div className="max-w-lg">

          <li><a href="/gioi-thieu" className="hover:text-blue-600">Khóa Học Lập Trình HTML Cơ Bản Đến Nâng Cao</a></li>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Thời gian học: 20-30 giờ     </li>
            <li className="mb-2">Tổng số bài học: ~8 bài + 1 dự án cuối khóa   </li>
            <li className="mb-2">Bài tập thực hành: ~20 bài</li>
            <li className="mb-2">Dự án thực tế: 1 dự án lớn (Trang web cá nhân)  </li>
            <li className="mb-2">Hình thức: Online hoặc Offline</li>
          </ul>
        </div>
        <div className="anh">
          <img src={anh3} alt="Exam Banner" className="aa" />
        </div>
      </section>
      {/* Khóa học ReactJS */}
      <section className="flex flex-col md:flex-row items-center px-8 py-16">
        <div className="max-w-lg">

          <li><a href="/gioi-thieu" className="hover:text-blue-600">Khóa Học Lập Trình REACT JS Cơ Bản Đến Nâng Cao</a></li>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Thời gian học: 50-80 giờ</li>
            <li className="mb-2">Xây dựng UI động với Component & Hooks</li>
            <li className="mb-2">Quản lý State với Redux, Context API </li>
            <li className="mb-2">Dự án thực tế ReactJS: Website thương mại điện tử</li>
            <li className="mb-2">Gọi API với Axios, React Router</li>
          </ul>
        </div>
        <div className="anh">
          <img src={anh4} alt="Exam Banner" className="aa" />
        </div>
      </section>
      {/* Khóa học JavaScript */}
      <section className="flex flex-col md:flex-row items-center px-8 py-16">
        <div className="max-w-lg">

          <li><a href="/gioi-thieu" className="hover:text-blue-600">Khóa Học Lập Trình JavaScript Cơ Bản Đến Nâng Cao</a></li>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Thời gian học: 50-80 giờ       </li>
            <li className="mb-2">Tổng số bài học: ~15 bài + 2 dự án thực tế</li>
            <li className="mb-2">Bài tập thực hành: ~30 bài    </li>
            <li className="mb-2">Dự án thực tế: 2 dự án lớn (To-Do List, Weather App)</li>
            <li className="mb-2">Gọi API với Axios, React Router  </li>
          </ul>
        </div>
        <div className="anh">
          <img src={anh6} alt="Exam Banner" className="aa" />
        </div>
      </section>

      {/* Khóa học NodeJS */}
      <section className="flex flex-col md:flex-row items-center px-8 py-16">
        <div className="max-w-lg">

          <li><a href="/gioi-thieu" className="hover:text-blue-600">Khóa Học Lập Trình NodeJs Cơ Bản Đến Nâng Cao</a></li>
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li className="mb-2">Yêu cầu đầu vào: Biết JavaScript cơ bản (ES6, Fetch API)        </li>
            <li className="mb-2">Thời lượng: 50-80 giờ  </li>
            <li className="mb-2">Xây dựng API với Express.js     </li>
            <li className="mb-2">Kết nối Database với MongoDB  </li>
            <li className="mb-2">Xác thực người dùng với JWT   </li>
            <li className="mb-2">Dự án thực tế: API backend cho website bán hàng    </li>
          </ul>
        </div>
        <div className="anh">
          <img src={anh5} alt="Exam Banner" className="aa" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 py-6 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* Thông tin liên hệ */}
          <div>
            <h3 className="font-bold text-lg mb-2">Thông tin liên hệ:</h3>
            <p className="flex items-center"><FaPhone className="mr-2" /> 02814567890</p>
            <p className="flex items-center"><FaEnvelope className="mr-2" /> devgen@gmail.com</p>
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 180 Cao Lỗ, Phường 5, Quận 8, Tp. Hồ Chí Minh</p>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h3 className="font-bold text-lg mb-2">Hỗ trợ:</h3>
            <p className="flex items-center"><FaInstagram className="mr-2" /> <a href="https://instagram.com/dev_gen" className="hover:text-blue-600">Dev_gen</a></p>
            <p className="flex items-center"><FaFacebook className="mr-2" /> <a href="https://facebook.com/DevGenFB" className="hover:text-blue-600">DevGenFB</a></p>
            <p className="flex items-center"><FaYoutube className="mr-2" /> <a href="https://youtube.com/DevGenYTB" className="hover:text-blue-600">DevGenYTB</a></p>
          </div>

          {/* Danh mục */}
          <div>
            <h3 className="font-bold text-lg mb-2">Danh mục:</h3>
            <p><a href="/ngon-ngu-lap-trinh" className="hover:text-blue-600">➤ Ngôn ngữ lập trình</a></p>
            <p><a href="/bai-thi-thu" className="hover:text-blue-600">➤ Bài thi thử</a></p>
            <p><a href="/thanh-toan" className="hover:text-blue-600">➤ Thanh toán</a></p>
          </div>
        </div>
      </footer>
    </div >
  );
};

export default HomePage;