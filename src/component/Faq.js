import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";
export default function Faq() {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        // Perform your data fetching or asynchronous operations here
        // For demonstration, I'll simulate loading for 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 100));
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <Link to="/faq"></Link>
          <div className="container wrappingDiv c1" id="C">
            <div className="display-2" style={{ color: "rgb(105, 58, 19)" }}>
              <b>FAQ's</b>
            </div>
            <ul>
              <li>
                <p className="fq josephin">
                  <h2>How can I book a slot?</h2>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  obcaecati ipsam ex quibusdam animi assumenda minus laboriosam
                  ipsa tempore eum porro consectetur expedita neque minima, magn
                  am culpa architecto libero quas.Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Hic obcaecati ipsam ex quibusdam
                  animi assumenda minus laboriosam ipsa tempore eum porro
                  consectetur expedita neque minima, magn am culpa architecto
                  libero quas.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Hic obcaecati ipsam ex quibusdam animi
                  assumenda minus laboriosam ipsa tempore eum porro consectetur
                  expedita neque minima, magn am culpa architecto libero
                  quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Hic obcaecati ipsam ex quibusdam animi assumenda minus
                  laboriosam ipsa tempore eum porro consectetur expedita neque
                  minima, magn am culpa architecto libero quas.{" "}
                </p>
              </li>
              <li>
                <p className="fq josephin">
                  <h2>How can I book based on location?</h2>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  obcaecati ipsam ex quibusdam animi assumenda minus laboriosam
                  ipsa tempore eum porro consectetur expedita neque minima, magn
                  am culpa architecto libero quas.Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Hic obcaecati ipsam ex quibusdam
                  animi assumenda minus laboriosam ipsa tempore eum porro
                  consectetur expedita neque minima, magn am culpa architecto
                  libero quas.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Hic obcaecati ipsam ex quibusdam animi
                  assumenda minus laboriosam ipsa tempore eum porro consectetur
                  expedita neque minima, magn am culpa architecto libero
                  quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Hic obcaecati ipsam ex quibusdam animi assumenda minus
                  laboriosam ipsa tempore eum porro consectetur expedita neque
                  minima, magn am culpa architecto libero quas.Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Hic obcaecati ipsam ex
                  quibusdam animi assumenda minus laboriosam ipsa tempore eum
                  porro consectetur expedita neque minima, magn am culpa
                  architecto libero quas.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Hic obcaecati ipsam ex quibusdam animi
                  assumenda minus laboriosam ipsa tempore eum porro consectetur
                  expedita neque minima, magn am culpa architecto libero quas.
                </p>
              </li>
              <li>
                <p className="fq josephin">
                  <h2>Who will receive me in college? </h2>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  obcaecati ipsam ex quibusdam animi assumenda minus laboriosam
                  ipsa tempore eum porro consectetur expedita neque minima, magn
                  am culpa architecto libero quas.Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Hic obcaecati ipsam ex quibusdam
                  animi assumenda minus laboriosam ipsa tempore eum porro
                  consectetur expedita neque minima, magn am culpa architecto
                  libero quas.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Hic obcaecati ipsam ex quibusdam animi
                  assumenda minus laboriosam ipsa tempore eum porro consectetur
                  expedita neque minima, magn am culpa architecto libero
                  quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Hic obcaecati ipsam ex quibusdam animi assumenda minus
                  laboriosam ipsa tempore eum porro consectetur expedita neque
                  minima, magn am culpa architecto libero quas.Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Hic obcaecati ipsam ex
                  quibusdam animi assumenda minus laboriosam ipsa tempore eum
                  porro consectetur expedita neque minima, magn am culpa
                  architecto libero quas.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Hic obcaecati ipsam ex quibusdam animi
                  assumenda minus laboriosam ipsa tempore eum porro consectetur
                  expedita neque minima, magn am culpa architecto libero
                  quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Hic obcaecati ipsam ex quibusdam animi assumenda minus
                  laboriosam ipsa tempore eum porro consectetur expedita neque
                  minima, magn am culpa architecto libero quas.Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Hic obcaecati ipsam ex
                  quibusdam animi assumenda minus laboriosam ipsa tempore eum
                  porro consectetur expedita neque minima, magn am culpa
                  architecto libero quas.
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
      <script>window.onload = function () {window.scrollTo(0, 0)};</script>
    </>
  );
}
