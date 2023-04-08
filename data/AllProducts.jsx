import { useEffect } from "react";

import { Beds } from "../data/Beds";
import { Seats } from "../data/Seats";
import { Tables } from "../data/Seats";
import { Wardrobes } from "../data/Wardrobes";

export const AllProducts = [...Wardrobes.slice(0, 15), ...Beds.slice(0, 15)];
