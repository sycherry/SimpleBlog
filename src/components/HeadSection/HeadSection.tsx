import React from "react";
import styles from "./HeadSection.module.css";
import Image from "next/image";

export default function HeadSection() {
  return (
    <section className={styles.headSection}>
      <div className={styles.headSectionInner}>
        <div className={`${styles.colSet} ${styles.noGutter}`}>
          <div className={styles.col2}>
            <p className={styles.headSectionTitle}>
              Make better
              <br /> coffee
            </p>
          </div>
          <div className={styles.col2}>
            <Image
              className={`${styles.headSectionImage} ${styles.image}`}
              src="/image/croods1.png"
              alt={"croods"}
              fill
              quality={75}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
