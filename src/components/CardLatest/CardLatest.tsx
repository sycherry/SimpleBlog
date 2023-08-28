import React from "react";
import styles from "./CardLatest.module.css";
import Image from "next/image";
import { CardLatestType } from "./CardLatest.props";

export default function CardLatest({ latestPost }: CardLatestType) {
  return (
    <section className={styles.cardLatest}>
      <div className={styles.cardPanel}>
        <div className={`${styles.colSet} ${styles.noGutter}`}>
          <div className={styles.col2}>
            <Image
              className={`${styles.cardPanelLatestImage} ${styles.image}`}
              src={latestPost.imageUrl}
              alt={latestPost.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <p className={styles.category}>{latestPost.category}</p>
          </div>

          <div className={styles.col2}>
            <div className={styles.cardPanelInner}>
              <div className={styles.cardPanelContents}>
                <h2 className={styles.title}>{latestPost.title}</h2>
                <p className={styles.detail}>{latestPost.body}</p>
              </div>

              <div className={styles.cardPanelFooter}>
                <p className={styles.date}>{latestPost.createdAt}</p>
                <p className={styles.link}>Read more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
