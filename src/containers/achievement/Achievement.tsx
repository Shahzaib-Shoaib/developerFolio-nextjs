import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (

    <Fade bottom duration={1000} distance="20px">
                      <h1>Zitiiiiiiiiiiii1</h1>

      <div className="main" id="achievements">
      <h1>Zitiiiiiiiiiiii2</h1>

        <div className="achievement-main-div">
        <h1>Zitiiiiiiiiiiii3</h1>

          <div className="achievement-header">
          <h1>Zitiiiiiiiiiiii4</h1>

            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
                              <h1>Zitiiiiiiiiiiii5</h1>

              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            <h1>gfdgdfdfhghgdf</h1>
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <>
                <h1>Zitiiiiiiiiiiii</h1>
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink
                  }}
                />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
