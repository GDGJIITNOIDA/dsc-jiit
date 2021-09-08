import React, { useState, useEffect } from "react";
import Navbar2 from "../components/navbar2";
import Contact from "../components/contact";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

function Videos() {
  const key = "AIzaSyCpRRXgv8ehAEgP59SnnTbrmqXXNmr3Gbo";
  const channelId = "UCMqzTZkzwdDOuTzYbSZY8jw";
  const maxResults = 10;

  const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideos(
          data.items.map((video) => {
            return {
              vId: video.id.videoId,
              date: video.snippet.publishTime,
              title: video.snippet.title,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <motion.div
      key="4"
      className="header-3"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Navbar2 />
      <div className="workshop-main-div" data-parallax="false">
        <div className="red-circle circles circle1"></div>
        <div className="yellow-circle circles circle2"></div>
        <div className="red-light-circle circles circle3"></div>
        <div className="green-circle circles circle4"></div>
        <div className="green-light-circle circles circle5"></div>
        <div className="blue-light-circle circles circle6"></div>
        <div className="blue-light-circle circles circle7"></div>
        <div className="container workshop-main-container">
          <div className="row text-center">
            <div className="col-12">
              <h2
                className="title text-center"
                style={{ padding: 50, paddingLeft: 2, marginLeft: 42 }}
              >
                GDSC JIIT NOIDA YOUTUBE COMMUNITY
              </h2>
              <h1
                className="light-offset-title d-none d-md-block title text-center"
                style={{
                  padding: 50,
                  position: "absolute",
                  top: -28,
                  width: "100%",
                  opacity: 0.1,
                }}
              >
                GDSC JIIT NOIDA YOUTUBE COMMUNITY
              </h1>
            </div>
          </div>
          <div className="row">
            {videos.map((video, i) => {
              if (video.vId) {
                console.log(video);
                return (
                  <div className="col-md-6 ml-auto mr-auto" key={i}>
                    <div className="workshop-card card card-profile">
                      <div className="card-body ">
                        <div className="link-container">
                          <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.vId}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>

                        <h4 className="card-title">{video.title}</h4>
                        <span className="badge badge-pill badge-default">
                          {video.date.substr(0, 10)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="bg-yellow"
          style={{
            height: 15,
            width: "33.33%",
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
          }}
        ></div>
        <div
          className="bg-blue"
          style={{
            height: 15,
            width: "33.33%",
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
          }}
        ></div>
        <div
          className="bg-red"
          style={{
            height: 15,
            width: "33.33%",
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
          }}
        ></div>
      </div>
      <Contact />
    </motion.div>
  );
}

export default Videos;