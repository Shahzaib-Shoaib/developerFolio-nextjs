import React from "react";
import "./AchievementCard.scss";
import Link from "next/link";

export default function AchievementCard({cardInfo, isDark}) {
  console.log(cardInfo);
  
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <><Link href={cardInfo.footer[0].url}>
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      {/* <div className="certificate-image-div">
        <img
          src={cardInfo.image.default.src}
          alt={cardInfo.title || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div> */}
      <div className="certificate-detail-div">
      {/* certificate-detail-div */}
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
        {/* className={isDark ? "dark-mode card-title" : "card-title"} */}
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
        {/* className={isDark ? "dark-mode card-subtitle" : "card-subtitle"} */}
          {cardInfo.description}
        </p>
      </div>
      {/* <div className="certificate-card-footer" >
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })}
      </div> */}
    </div></Link></>
  );
}