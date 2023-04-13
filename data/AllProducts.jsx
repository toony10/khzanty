import { useEffect } from "react";

import { Beds } from "../data/Beds";
import { Seats } from "../data/Seats";
import { Tables } from "../data/Tables";
import { Wardrobes } from "../data/Wardrobes";

export const AllProducts = [
  ...Wardrobes.slice(0, 4),
  ...Beds.slice(0, 4),
  ...Seats.slice(0, 4),
  ...Tables.slice(0, 4),
];
