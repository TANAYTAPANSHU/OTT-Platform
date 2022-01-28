import React from "react";
import ShowCard from "./ShowCard";

const trending = [
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1837/1101837-v-6d58f6a29934",
    title: "Human",
    desc: "In the race to make the next money-spinning drug, saving lives takes a backseat and people become le ...",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235",
    title: "Eternals",
    desc: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5883/1095883-v-c0fa911c0098",
    title: "Eternals",
    desc: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4368/1094368-v-bdcf85c3f505",
    title: "Eternals",
    desc: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3863/1093863-v-0bcaa3a2beb5",
    title: "Eternals",
    desc: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...",
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6783/1086783-v-987c1faa6265",
    title: "Eternals",
    desc: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and c ...",
  },
];

function TrendingCategory() {
  return (
    <div
      className="Trending"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {trending.map((element, index) => {
        return (
          <ShowCard
            key={index}
            image={element.image}
            title={element.title}
            desc={element.desc}
          />
        );
      })}{" "}
    </div>
  );
}

export default TrendingCategory;
