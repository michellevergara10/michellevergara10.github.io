import React from "react";
import SectionCSS from "../css/Section.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Function to dynamically import all images from the assets/images folder
const importAll = (r) => r.keys().map(r);

function Section(project) {
    var images;
  switch(project) {
    // This is the only special case with videos
    case 'animations':
      const videos = importAll(
        require.context('../assets/images/motionGraphics', false, /\.mp4$/)
      );
      images = importAll(
        require.context('../assets/images/motionGraphics', false, /\.(webp|png|jpg|jpeg|gif)$/)
      );
      return (
        <div className={SectionCSS.gridContainer}>
          {videos.map((src, index) => (
            <video width="auto" height="auto" controls>
              <source src={src} type="video/mp4"/>
            </video>
          ))}
          {images.map((src, index) => (
            <ImageWrapper key={index} src={src} index={index} />
          ))}
        </div>
      );
    case 'allThatGlitters':
      images = importAll(
        require.context('../assets/images/allThatGlitters', false, /\.(webp|png|jpg|jpeg|gif)$/)
      );
      break;
    case 'freelance':
      images = importAll(
        require.context('../assets/images/freelance', false, /\.(webp|png|jpg|jpeg|gif)$/)
      );
      break;
    case 'productionDesign':
      images = importAll(
        require.context('../assets/images/productionDesign', false, /\.(webp|png|jpg|jpeg|gif)$/)
      );
      break;
    case 'theGiftOfLosAngeles':
      images = importAll(
        require.context('../assets/images/theGiftOfLosAngeles', false, /\.(webp|png|jpg|jpeg|gif)$/)
      );
      break;
  }
  return (
    <div className={SectionCSS.gridContainer}>
      {images.map((src, index) => (
        <ImageWrapper key={index} src={src} index={index} />
      ))}
    </div>
  );
}

function ImageWrapper({ src, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeIn" }}
      className={SectionCSS.imageWrapper}
    >
      <img
        src={src}
        alt={`Section ${index + 1}`}
        className={SectionCSS.image}
        draggable="false"
      />
    </motion.div>
  );
}

export default Section;
