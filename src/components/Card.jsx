import React from "react";

export default function Card(props) {
 let badgeText
 if(props.item.openSpots === 0) {
  badgeText = "SOLD OUT";
 } else if (props.item.location === "Online") {
   badgeText = "ONLINE";
 }

  return (
    <section>
     {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../../src/assets/${props.item.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../../src/assets/Star.png" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) &bull; </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </section>
  );
}
