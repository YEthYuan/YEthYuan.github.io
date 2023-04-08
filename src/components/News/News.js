import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { NewsData } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: false,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: false,
  autoPlay: true,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: false,
  emulateTouch: true,
  autoFocus: false,
  thumbWidth: 100,
  selectedItem: 0,
  interval: 6000,
  transitionTime: 500,
  swipeScrollTolerance: 5,
  ariaLabel: "ariaLabel",
});

const News = () => {
  const truncateContent = (content) => {
    const words = content.split(" ");
    return words.slice(0, 20).join(" ") + "...";
  };

  // Sort the NewsData array by date in descending order and take the first 5 elements
  const sortedNewsData = NewsData.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  }).slice(0, 9);

  return (
    <Section id="news" style={{ marginBottom: "50px" }}>
      <SectionDivider divider />
      <SectionTitle>Latest News</SectionTitle>
      <Carousel {...getConfigurableProps()}>
        {sortedNewsData.map((news) => (
          <div key={news.id}>
            <img
              src={news.image}
              style={{ width: "1100px", height: "600px", objectFit: "cover" }}
            />
            <p className="legend">{news.title}</p>
            {/* <div className={styles.newsContent}>
              <h3 className={styles.newsTitle}>{news.title}</h3>
              <p className={styles.newsDate}>{news.date}</p>
              <p className={styles.newsDescription}>
                {truncateContent(news.content)}
              </p>
            </div> */}
          </div>
        ))}
      </Carousel>
    </Section>
  );
};

export default News;
