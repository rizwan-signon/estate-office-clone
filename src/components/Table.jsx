import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
export default function Table() {
  const { ref: newsRef, inView: visible } = useInView();
  // const newsRef = useRef();
  // const [visible, setVisible] = useState();
  // useEffect(() => {
  //   const options = { root: null, threshold: 0.5 };
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setVisible(entry.isIntersecting);
  //   }, options);
  //   observer.observe(newsRef.current);
  // }, []);
  return (
    <>
      <div className="table">
        <h2
          ref={newsRef}
          className={`${
            visible ? "visible" : "notvisibal"
          } text-center text-2xl text-green-600`}
        >
          News Updates
        </h2>
        <button
          ref={newsRef}
          className={`${
            visible ? "visible" : "notvisible"
          } absolute top-0 right-0`}
        >
          <a className="view" href="#">
            view all
            <FaGreaterThan className="text-xs bg-green-600 rounded-full p-3" />
          </a>
        </button>
        <table className=" w-full">
          <tbody>
            <tr>
              <td>
                <p>05 june 2024</p>
                <a href="#" className=" bg-blue-700 px-4 py-1 rounded-lg">
                  news
                </a>
              </td>
              <td className=" font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                repellat?Lorem
              </td>
              <td>
                <button className=" bg-green-500 px-8 rounded-xl float-end">
                  read more
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <p>05 june 2024</p>
                <a href="#" className=" bg-blue-700 px-4 py-1 rounded-lg">
                  news
                </a>
              </td>
              <td className=" font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                repellat?Lorem
              </td>
              <td>
                <button className=" bg-green-500 px-8 rounded-xl float-end">
                  read more
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <p>05 june 2024</p>
                <a href="#" className=" bg-blue-700 px-4 py-1 rounded-lg">
                  news
                </a>
              </td>
              <td className=" font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                repellat?Lorem
              </td>
              <td>
                <button className=" bg-green-500 px-8 rounded-xl float-end">
                  read more
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <p>05 june 2024</p>
                <a href="#" className=" bg-blue-700 px-4 py-1 rounded-lg">
                  news
                </a>
              </td>
              <td className=" font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                repellat?Lorem
              </td>
              <td>
                <button className=" bg-green-500 px-8 rounded-xl float-end">
                  read more
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <p>05 june 2024</p>
                <a href="#" className=" bg-blue-700 px-4 py-1 rounded-lg">
                  news
                </a>
              </td>
              <td className=" font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                repellat?Lorem
              </td>
              <td>
                <button className=" bg-green-500 px-8 rounded-xl float-end">
                  read more
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <p>05 june 2024</p>
                <a href="#" className=" bg-blue-700 px-4 py-1 rounded-lg">
                  news
                </a>
              </td>
              <td className=" font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                repellat?Lorem
              </td>
              <td>
                <button className=" bg-green-500 px-8 rounded-xl float-end">
                  read more
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <p>05 june 2024</p>
                <a href="#" className=" bg-blue-700 px-4 py-1 rounded-lg">
                  news
                </a>
              </td>
              <td className=" font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                repellat?
              </td>
              <td>
                <button className=" bg-green-500 px-8 rounded-xl float-end">
                  read more
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <p>05 june 2024</p>
                <a href="#" className=" bg-blue-700 px-4 py-1 rounded-lg">
                  news
                </a>
              </td>
              <td className=" font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                repellat?
              </td>
              <td>
                <button className=" bg-green-500 px-8 rounded-xl float-end">
                  read more
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <p>05 june 2024</p>
                <a href="#" className=" bg-blue-700 px-4 py-1 rounded-lg">
                  news
                </a>
              </td>
              <td className=" font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                repellat?
              </td>
              <td>
                <button className=" bg-green-500 px-8 rounded-xl float-end">
                  read more
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <p>05 june 2024</p>
                <a href="#" className=" bg-blue-700 px-4 py-1 rounded-lg">
                  news
                </a>
              </td>
              <td className=" font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                repellat?
              </td>
              <td>
                <button className=" bg-green-500 px-8 rounded-xl my-7 float-end">
                  read more
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="toggle-btn flex mt-12">
          <button className="btn prev">previous</button>
          <button className="btn next">Next</button>
        </div>
      </div>
    </>
  );
}
