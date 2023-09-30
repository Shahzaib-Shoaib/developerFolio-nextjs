import React from "react";

export default function AchivementCard({ cardInfo }: any) {
  function openUrlInNewTab(url: any) {
    if (!url) {
      return;
    }

    window.open(url, '_blank')?.focus(); // okay also

  }

  return (
    <div className="certificate-card">
      <div className="certificate-image-div">
        <img src={cardInfo.image.default.src} alt="Certificate" className="card-image"></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.description}</p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v: any, i: any) => {
          return (
            <p key={i} onClick={() => openUrlInNewTab(v.url)}>
              {v.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
