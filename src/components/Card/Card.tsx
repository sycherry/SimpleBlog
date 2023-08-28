import React from "react";
import styles from "./Card.module.css";
import { PostType } from "../../models/PostType";
import Image from "next/image";
import { MorePostsProps } from "./MorePosts.props";

export default function Card({ morePosts }: MorePostsProps) {
  return (
    <div className={styles.colSet}>
      {morePosts.map((item: PostType, i: number) => (
        <div key={i} className={styles.col3}>
          <div className={styles.cardPanel}>
            <div className={styles.cardPanelHeader}>
              <Image
                className={`${styles.cardPanelImage} ${styles.image}`}
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.category}>{item.category}</p>
            </div>

            <div className={styles.cardPanelContents}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.detail}>{item.body}</p>
            </div>
            <div className={styles.cardPanelFooter}>
              <p className={styles.date}>{item.createdAt}</p>
              <p className={styles.link}>Read more</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
