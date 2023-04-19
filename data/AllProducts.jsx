import { Beds } from "../data/Beds";
import { Seats } from "../data/Seats";
import { Tables } from "../data/Tables";
import { Wardrobes } from "../data/Wardrobes";

export const AllProducts = [
  ...Wardrobes.slice(0, 10),
  ...Seats.slice(0, 10),
  ...Beds.slice(0, 10),
  ...Tables.slice(0, 10),
];
