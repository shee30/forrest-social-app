import React from "react";
import logo from "./assets/logo.png";
import playStore from "./assets/playstorebtn.png";
import apple from "./assets/applebtn.png";
import bottom from "./assets/bottom.svg";
import bottom2 from "./assets/bottom2.png";
import butterfly from "./assets/butterfly.png";
import butterfly2 from "./assets/butterfly2.png";
import iphoneL from "./assets/iphoneL.svg";
import iphoneR from "./assets/iphoneR.svg";
import iphoneM from "./assets/iphoneM.svg";
import heart from "./assets/heart.png";
import about from "./assets/about.png";
import line from "./assets/line.svg";
import btn1 from "./assets/btn1.png";
import btn2 from "./assets/btn2.png";
import phone1 from "./assets/phone1.svg";
import phone2 from "./assets/phone2.svg";
import phone3 from "./assets/phone3.svg";
import lady1 from "./assets/lady1.png";
import lady2 from "./assets/lady2.png";
import Lorem from "./components/lorem";
import LoremIpsum from "./components/LoremIpsum";
import Footer from "./components/Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const App = () => {
  return (
    <>
      <div className="bg-hero bg-contain h-[100%] overflow-x-hidden">
        <div className="pl-10">
          <div className="py-10 pl-28">
            <img src={logo} className="w-16 h-16 rounded-2xl"></img>
          </div>

          <div className=" flex justify-around items-center w-full">
            <div className="w-[40%] mr-10">
              <h1 className="text-white text-5xl font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-white mt-4 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                expedita sed accusamus, nam, earum excepturi tempore ipsum quo
                ipsam voluptatum, reiciendis distinctio in explicabo molestiae!
              </p>

              <button className="mx-4">
                <img src={apple} className="w-44 h-16" />
              </button>

              <button className="mx-4">
                <img src={playStore} className="w-44 h-16" />
              </button>

              <div className="flex justify-end w-[45vw]">
                <img className="w-72" src={butterfly}></img>
              </div>
            </div>
            <div className=" relative">
              <img
                src={heart}
                className="absolute top-[-8rem] left-20 w-12"
              ></img>
              <svg
                className="absolute right-1 bottom-3"
                width="550"
                height="400"
                viewBox="0 0 700 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M700 193.75C700 412.5 375.656 589.562 361.844 596.875C358.203 598.833 354.134 599.859 350 599.859C345.866 599.859 341.797 598.833 338.156 596.875C324.344 589.562 0 412.5 0 193.75C0.057898 142.382 20.4894 93.1346 56.812 56.812C93.1346 20.4894 142.382 0.057898 193.75 0C258.281 0 314.781 27.75 350 74.6562C385.219 27.75 441.719 0 506.25 0C557.618 0.057898 606.865 20.4894 643.188 56.812C679.511 93.1346 699.942 142.382 700 193.75Z"
                  fill="#F8F8F8"
                  fill-opacity="0.23"
                />
              </svg>
              <div className="flex">
                <img
                  className="relative right-[5rem] w-32 bottom-20"
                  src={iphoneL}
                />
                <img
                  className="relative right-[5.5rem] w-32 top-6"
                  src={iphoneM}
                />
                <img
                  className="relative right-[5.9rem] w-32 bottom-20"
                  src={iphoneR}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <img src={bottom}></img>
        </div>
      </div>

      {/* about */}
      <div>
        <div className="flex flex-wrap px-28 pb-10 justify-between items-center">
          <div className="w-1/2">
            <img src={about} className="w-[38vw]"></img>
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl font-bold pb-3">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium inventore harum, id quod, labore accusamus
              exercitationem debitis ad consequuntur molestiae dolore
              necessitatibus, quaerat dicta nostrum!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              nesciunt animi, neque ipsum nisi officia alias nobis aperiam
              laudantium veritatis debitis quas aliquam, cum ad odio iure id
              deserunt magnam? Maxime assumenda autem rerum voluptatum? Alias
              sequi at temporibus inventore earum, eveniet, molestias, fugiat
              sed natus consequuntur maxime suscipit consectetur. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo atque
              reiciendis architecto eius voluptatem! Error impedit voluptates,
              voluptatum expedita deserunt porro. Voluptate obcaecati
              repudiandae saepe?
            </p>
            <button className="w-56 mt-4">
              <img src={btn2} className=""></img>
            </button>
          </div>
        </div>
      </div>

      {/* lorem*/}
      <div className="bg-rectangle2 bg-cover">
        <div className="">
          <img src={bottom2}></img>
        </div>
        <div className="">
          <div className="flex justify-around">
            <div className="w-[20%]"></div>
            <h1 className="text-white text-center text-5xl font-bold">
              Lorem ipsum
            </h1>
            <img className="h-20" src={butterfly2}></img>
          </div>
          <div className="flex flex-wrap my-10 mx-20 ">
            <Lorem
              title="01"
              h1="Lorem ipsum dolor sit."
              p=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt, inventore culpa eius repellendus similique laboriosam voluptas nesciunt rem quibusdam autem odit consequatur, dolor beatae?"
            />
            <img src={line} className=""></img>
            <Lorem
              title="02"
              h1="Lorem ipsum dolor sit."
              p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt, inventore culpa eius repellendus similique laboriosam voluptas nesciunt rem quibusdam autem odit consequatur, dolor beatae?"
            />

            <img src={line}></img>
            <Lorem
              title="03"
              h1="Lorem ipsum dolor sit."
              p="        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt, inventore culpa eius repellendus similique laboriosam voluptas nesciunt rem quibusdam autem odit consequatur, dolor beatae?"
            />
          </div>

          <div className="flex justify-evenly">
            <img className="w-80" src={butterfly}></img>
            <button className="w-64">
              <img src={btn1} />
            </button>
            <div className="w-[20%]"></div>
          </div>
        </div>
        <div className="">
          <img src={bottom}></img>
        </div>
      </div>

      {/* lorem ipsum */}
      <div className="">
        <div className="flex flex-wrap justify-center items-center ">
          <div className="">
            <img src={phone1} className="w-[50rem] h-[100%] "></img>
          </div>
          <div className="w-1/3">
            <LoremIpsum />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center ">
          <div className="w-1/3">
            <LoremIpsum />
          </div>
          <div className="">
            <img src={phone2} className="w-[50rem] h-[100%]"></img>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div>
            <img src={phone3} className="w-[50rem] h-[100%] "></img>
          </div>
          <div className="w-1/3  relative right-20 bottom-9 ">
            <LoremIpsum />
          </div>
        </div>
      </div>

      {/* customer feedback */}
      <div className=" bg-blue-50 my-10">
        <div className="flex justify-between items-center mx-40">
          <div>
          <h1 className="text-4xl font-semibold">Our Customer Feedback</h1>
            <p className="text-base text-gray-700">Don't take our word for it. Trust our customers</p>
            </div>
          <div className="flex">
            <button className="border-2 border-black flex justify-center items-center mx-3 rounded-2xl py-1 px-2" ><IoIosArrowBack /> Previous</button>
            <button className="border-2 border-black flex justify-center items-center mx-3 rounded-2xl py-1 px-3"> Next <IoIosArrowForward /></button>
          </div>
        </div>
        <div></div>
      </div>



    {/* bottom */}

      <div className="bg-rectangle3 bg-cover">
        <div className="flex flex-wrap justify-center items-center pt-20  px-16">
          <div className="w-[49%] text-white pr-10">
            <h1 className="font-bold text-4xl my-3">Lorem ipsum dolor sit.</h1>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              perferendis aperiam delectus fuga animi autem possimus quo, quae
              eveniet exercitationem rem, accusamus voluptas, natus libero ab
              cumque incidunt ex temporibus consectetur praesentium fugiat est
              architecto provident veniam! Tempore laborum temporibus rem, velit
              sed nobis maxime?
            </p>
            <div className="flex justify-end">
              <img src={butterfly2} />
            </div>
          </div>
          <div className="w-[38%] ">
            <div className="relative">
              <img src={lady1} className=""></img>

              <img
                src={lady2}
                className="absolute top-[-2rem] right-5 h-[20rem]"
              ></img>
            </div>
          </div>
        </div>

        <div className="relative ">
          <img src={bottom} className=""></img>
          <div className="absolute translate-y-2/4 top-[60%] w-full">
           <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
