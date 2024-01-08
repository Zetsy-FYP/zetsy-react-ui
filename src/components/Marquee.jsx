"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const lists = [
  {
    id: 1,
    list: "ThriftMyOutfit",
  },
  {
    id: 2,
    list: "Ditto",
  },
  {
    id: 3,
    list: "ThriftMyOutfit",
  },
  {
    id: 4,
    list: "Ditto",
  },
  {
    id: 5,
    list: "ThriftMyOutfit",
  },
  {
    id: 6,
    list: "Ditto",
  },
  {
    id: 7,
    list: "ThriftMyOutfit",
  },
  {
    id: 8,
    list: "Ditto",
  },
  {
    id: 9,
    list: "ThriftMyOutfit",
  },
  {
    id: 10,
    list: "Ditto",
  },
];

export default function MarqueeComponent({ speed, pauseOnHover, direction }) {
  return (
    <Marquee speed={speed} pauseOnHover={pauseOnHover} direction={direction}>
      <ul className=" !list-none">
        {lists.map((list) => {
          return <li key={list.id}>{list.list}</li>;
        })}
      </ul>
    </Marquee>
  );
}
