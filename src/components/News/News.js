import React from "react";
import styles from "./NewsSection.module.css";
import { NewsData } from "../../constants/constants";
import { Section, SectionDivider } from "../../styles/GlobalComponents";

const News = () => {
  const truncateContent = (content) => {
    const words = content.split(" ");
    return words.slice(0, 20).join(" ") + "...";
  };

  return (
    <Section id="news">
      <SectionDivider divider />
      <div className={styles.newsContainer}>
        {NewsData.map((news) => (
          <div key={news.id} className={styles.newsItem}>
            <img
              className={styles.newsImage}
              src={news.image}
              alt={news.title}
            />
            <div className={styles.newsContent}>
              <h3 className={styles.newsTitle}>{news.title}</h3>
              <p className={styles.newsDate}>{news.date}</p>
              <p className={styles.newsDescription}>
                {truncateContent(news.content)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default News;
