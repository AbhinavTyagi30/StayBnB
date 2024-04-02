import {
  Box,
  Button,
  css,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import AnimateHeight, { Height } from "react-animate-height";
import "../../styles/Footer/footer.css";

const allTabs: string[] = [
  "Popular",
  "Arts & culture",
  "Outdoors",
  "Mountains",
  "Beach",
  "Unique stays",
  "Categories",
  "Things to do",
];

interface tabContentType {
  url: string;
  location: string;
  property_type: string;
}

interface tabContentsType {
  Popular: tabContentType[];
  ArtsCulture: tabContentType[];
  Outdoors: tabContentType[];
  Mountains: tabContentType[];
  Beach: tabContentType[];
  UniqueStays: tabContentType[];
  Categories: tabContentType[];
  ThingsToDo: tabContentType[];
  [key: string]: tabContentType[];
}

const tabContents: tabContentsType = {
  Popular: [
    {
      url: "",
      location: "Canmore",
      property_type: "Chalet rentals",
    },
    {
      url: "",
      location: "Benalmádena",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Marbella",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Mijas",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Prescott",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Scottsdale",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Tucson",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Jasper",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Mountain View",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Devonport",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Mallacoota",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Ibiza",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Anaheim",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Monterey",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Paso Robles",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Santa Barbara",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Sonoma",
      property_type: "Rentals with pools",
    },
    {
      url: "",
      location: "La Serena",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Dubai",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Birmingham",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Brighton",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Bude",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Newcastle upon Tyne",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Padstow",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "South West England",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Whitby",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Fort Myers",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Jacksonville",
      property_type: "Mansion rentals",
    },
    {
      url: "",
      location: "Kissimmee",
      property_type: "Family-friendly rentals",
    },
    {
      url: "",
      location: "Longboat Key",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Orlando",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "St Petersburg",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "St. Augustine",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "The Villages",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Dahlonega",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Crete",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Mykonos",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Santorini",
      property_type: "Rentals with pools",
    },
    {
      url: "",
      location: "O‘ahu",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Capri",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Bar Harbor",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Mackinac Island",
      property_type: "Lakehouse rentals",
    },
    {
      url: "",
      location: "St. Joseph",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Larsmont",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Las Vegas",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Madrid",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Santa Fe",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Bermagui",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Evans Head",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Sawtell",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Young",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Ocracoke",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Florence",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Lakeside",
      property_type: "Lakehouse rentals",
    },
    {
      url: "",
      location: "Lincoln City",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Paphos",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Maleny",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Stanthorpe",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Newport",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Glasgow",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Scottish Highlands",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "St Andrews",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "McLaren Vale",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Wallaroo",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Charleston",
      property_type: "Rentals with pools",
    },
    {
      url: "",
      location: "Hvar",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Saint John",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Chattanooga",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Concan",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Fredericksburg",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "New Braunfels",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Rockport",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Waco",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Forest of Dean District",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Jersey",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Lyme Regis",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Manchester",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Seaview",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Southwold",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Staithes",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Wells-next-the-Sea",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "St. George",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Benidorm",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Barwon Heads",
      property_type: "Family-friendly rentals",
    },
    {
      url: "",
      location: "Castlemaine",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Healesville",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Marysville",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Sorrento",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Chincoteague",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Williamsburg",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Hay-on-Wye",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Llandudno",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Tenby",
      property_type: "Beach house rentals",
    },
  ],

  ArtsCulture: [
    {
      url: "",
      location: "Phoenix",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Hot Springs",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Los Angeles",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "San Diego",
      property_type: "Bungalow rentals",
    },
    {
      url: "",
      location: "San Francisco",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Barcelona",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Prague",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Washington",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Keswick",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "London",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Scarborough",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Sherwood Forest",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "York",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Paris",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Rhodes",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Nashville",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Dublin",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Florence",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Rome",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Lisbon",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Grand Isle",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "New Orleans",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Martha's Vineyard",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "South Haven",
      property_type: "Rentals with pools",
    },
    {
      url: "",
      location: "Duluth",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Amsterdam",
      property_type: "Chalet rentals",
    },
    {
      url: "",
      location: "New York",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Nice",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Inverness",
      property_type: "Chalet rentals",
    },
    {
      url: "",
      location: "Málaga",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Valencia",
      property_type: "Chalet rentals",
    },
    {
      url: "",
      location: "Split",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Nashville",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Austin",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Houston",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Dartmouth",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Edinburgh",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Liverpool",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "St Ives",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Lake Powell",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Lake Anna",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Leavenworth",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Seattle",
      property_type: "Holiday rentals",
    },
  ],

  Outdoors: [
    {
      url: "",
      location: "Lake Martin",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Banff",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Nerja",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Greer",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Lake Havasu City",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Lake Powell",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "North Rim",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Payson",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Pinetop-Lakeside",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Red Rock",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Dinner Plain",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Streaky Bay",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Emerald Lake",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Vancouver Island",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Victoria",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Idyllwild-Pine Cove",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Mammoth Lakes",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Palm Desert",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Shaver Lake",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "South Lake Tahoe",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Cultus Lake",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Georgian Bay",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Manitoulin Island",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Ottawa River",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "The Blue Mountains",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "West Kelowna",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Gran Canaria",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Lanzarote",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Castle Hill",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Aspen",
      property_type: "Ski-in/ski-out rentals",
    },
    {
      url: "",
      location: "Colorado Springs",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Denver",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Durango",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Estes Park",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Grand Lake",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Keystone",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Vail",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Winter Park",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Salcombe",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Swanage",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Cape Coral",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Blue Ridge",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Jekyll Island",
      property_type: "Rentals with pools",
    },
    {
      url: "",
      location: "Lake Lanier",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Corfu",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "McCall",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Clear Lake",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Lough Eske",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Lake Cumberland",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Portland",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "South Portland",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Deep Creek Lake",
      property_type: "Rentals with pools",
    },
    {
      url: "",
      location: "Lake Michigan Beach",
      property_type: "Lakehouse rentals",
    },
    {
      url: "",
      location: "Lakeside",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Torch Lake",
      property_type: "Lakehouse rentals",
    },
    {
      url: "",
      location: "Traverse City",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Upper Peninsula of Michigan",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Branson",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Lake of the Ozarks",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Big Sky",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "West Yellowstone",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Mount Charleston",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Cloudcroft",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Red River",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Bellingen",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Brunswick Heads",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Adirondack Mountains",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Lake Placid",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Niagara Falls",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Bald Head Island",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Bryson City",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Emerald Isle",
      property_type: "Beach apartment rentals",
    },
    {
      url: "",
      location: "Lake Gaston",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Lake Lure",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Lake Norman of Catawba",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Mount Airy",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Oak Island",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Geneva-on-the-Lake",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Medicine Park",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Turner Falls",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Muskoka Lakes",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Tobermory",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Bend",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Crater Lake",
      property_type: "Lakehouse rentals",
    },
    {
      url: "",
      location: "Northern Oregon Coast Range",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Sunriver",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Lake Harmony",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Mount Pocono",
      property_type: "Family-friendly rentals",
    },
    {
      url: "",
      location: "Mont-Tremblant",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Aviemore",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Isle of Mull",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Robe",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Mountain Rest",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "St Helens",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "United States",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Canyon Lake",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Lake Austin",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Lake Buchanan",
      property_type: "Lakehouse rentals",
    },
    {
      url: "",
      location: "Betws-y-Coed",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Filey",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Fort William",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Loch Lomond",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Port Isaac",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Moab",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Mount Zion",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Moraira",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Inverloch",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Metung",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Mount Buller",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Port Campbell",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Wilsons Promontory",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Shenandoah",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Smith Mountain Lake",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Snowdon",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Lake Chelan",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Lake Crescent",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Lake Quinault",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Quinault",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Skamania",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Snowshoe",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Lake Geneva",
      property_type: "Rentals with pools",
    },
    {
      url: "",
      location: "Wisconsin Dells",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "United States",
      property_type: "Holiday rentals",
    },
  ],

  Mountains: [
    {
      url: "",
      location: "Mentone",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Sedona",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Helen",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Pine Mountain",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Stone Mountain",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Island Park",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Blue Mountains",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Asheville",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Blowing Rock",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Boone",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Hochatown",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Pigeon Forge",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Townsend",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Wears Valley",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Cabins",
      property_type: "Holiday rentals",
    },
  ],

  Beach: [
    {
      url: "",
      location: "Dauphin Island",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Fort Morgan",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Gulf Shores",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Bruny Island",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Crescent Head",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Gerringong",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Hamilton Island",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Lancelin",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Melbourne Beach",
      property_type: "Beach apartment rentals",
    },
    {
      url: "",
      location: "Moonta Bay",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Ocean Grove",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Majorca",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Big Sur",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Bodega Bay",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Cambria",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Cayucos",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Huntington Beach",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "la Jolla Shores Beach",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Laguna Beach",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Long Beach",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Malibu",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Mission Beach",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Newport Beach",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Oceanside",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Palm Springs",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Pismo Beach",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Santa Cruz",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Santa Monica",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Sea Ranch",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Playa Blanca",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Fuerteventura",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Puerto del Carmen",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Tenerife",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Ayia Napa",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Bethany Beach",
      property_type: "Beach apartment rentals",
    },
    {
      url: "",
      location: "Dewey Beach",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Blackpool",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Isle of Wight",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Newquay",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Weymouth",
      property_type: "Cabin rentals",
    },
    {
      url: "",
      location: "Albufeira",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Alys Beach",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Anna Maria Island",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Boca Grande",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Bradenton",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Cape San Blas",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Captiva",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Clearwater Beach",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Cocoa Beach",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Daytona Beach",
      property_type: "Beach apartment rentals",
    },
    {
      url: "",
      location: "Destin",
      property_type: "Bungalow rentals",
    },
    {
      url: "",
      location: "Englewood",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Fort Lauderdale",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Fort Myers Beach",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Fort Walton Beach",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Grayton Beach",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Gulf of Mexico",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Indian Rocks Beach",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Islamorada",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Jacksonville Beach",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Key Largo",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Madeira Beach",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Marathon",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Marco Island",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Mexico Beach",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Miami Beach",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Miami",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Miramar Beach",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Naples",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Navarre Beach",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "New Smyrna Beach",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Okaloosa Island",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Panama City Beach",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Pensacola Beach",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Perdido Key",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Rosemary Beach",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Saint George Island",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Santa Rosa Beach",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Sarasota",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Seagrove Beach",
      property_type: "Bungalow rentals",
    },
    {
      url: "",
      location: "Seaside",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "South Beach",
      property_type: "Beach apartment rentals",
    },
    {
      url: "",
      location: "St. Augustine Beach",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "St. Pete Beach",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Tampa",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "West Palm Beach",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Bora-Bora",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Tybee Island",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Honolulu",
      property_type: "Beach apartment rentals",
    },
    {
      url: "",
      location: "Kailua-Kona",
      property_type: "Flat rentals",
    },
    {
      url: "",
      location: "Kapalua",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Kauai",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Kihei",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Ko Olina Beach",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Maui",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Topsail Island",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Old Orchard Beach",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Wells",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Cape Cod",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Nantucket",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Biloxi",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Avalon",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Jersey Shore",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "North Wildwood",
      property_type: "Rentals with pools",
    },
    {
      url: "",
      location: "Ocean City",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Sea Isle City",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Stone Harbor",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Hyams Beach",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Fire Island",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Montauk",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Ocean Beach",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Atlantic Beach",
      property_type: "Rentals with pools",
    },
    {
      url: "",
      location: "Carolina Beach",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Corolla",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Holden Beach",
      property_type: "Rentals with pools",
    },
    {
      url: "",
      location: "Kitty Hawk",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Kure Beach",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Nags Head",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Ocean Isle Beach",
      property_type: "Rentals with pools",
    },
    {
      url: "",
      location: "Sunset Beach",
      property_type: "Beach apartment rentals",
    },
    {
      url: "",
      location: "Surf City",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Wilmington",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Wrightsville Beach",
      property_type: "Apartment rentals",
    },
    {
      url: "",
      location: "Sauble Beach",
      property_type: "Chalet rentals",
    },
    {
      url: "",
      location: "Wasaga Beach",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Cannon Beach",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Seaside",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Carvoeiro",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Gold Coast",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Moreton Island",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Block Island",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Puerto Peñasco",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Charleston Oceanfront Villas",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Edisto Beach",
      property_type: "Beach house rentals",
    },
    {
      url: "",
      location: "Folly Beach",
      property_type: "Beach apartment rentals",
    },
    {
      url: "",
      location: "Fripp Island",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Isle of Palms",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Kiawah Island",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Myrtle Beach",
      property_type: "Cottage rentals",
    },
    {
      url: "",
      location: "Pawleys Island",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Seabrook Island",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Sullivan's Island",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Surfside Beach",
      property_type: "Beach apartment rentals",
    },
    {
      url: "",
      location: "Alicante",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Costa Adeje",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "Costa del Sol Occidental",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Fuengirola",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Los Cristianos",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Corpus Christi",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Port Aransas",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "South Padre Island",
      property_type: "Beachfront rentals",
    },
    {
      url: "",
      location: "Surfside Beach",
      property_type: "Pet-friendly rentals",
    },
    {
      url: "",
      location: "Bournemouth",
      property_type: "Villa rentals",
    },
    {
      url: "",
      location: "New Quay",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Anglesea",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Abersoch",
      property_type: "House rentals",
    },
    {
      url: "",
      location: "Seabrook",
      property_type: "Holiday rentals",
    },
    {
      url: "",
      location: "Jurien Bay",
      property_type: "Pet-friendly rentals",
    },
  ],

  UniqueStays: [
    {
      url: "",
      location: "Yurt Rentals",
      property_type: "United States",
    },
    {
      url: "",
      location: "Yurt Rentals",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Castle Rentals",
      property_type: "United States",
    },
    {
      url: "",
      location: "Houseboats",
      property_type: "United States",
    },
    {
      url: "",
      location: "Holiday Caravans",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Private Island Rentals",
      property_type: "United States",
    },
    {
      url: "",
      location: "Farm Houses",
      property_type: "United States",
    },
    {
      url: "",
      location: "Farm Cottages",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Cabin Rentals",
      property_type: "Australia",
    },
    {
      url: "",
      location: "Luxury Cabins",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Luxury Cabins",
      property_type: "United States",
    },
    {
      url: "",
      location: "Holiday Chalets",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Cottage Rentals",
      property_type: "United States",
    },
    {
      url: "",
      location: "Holiday Cottages",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Mansion Rentals",
      property_type: "United States",
    },
    {
      url: "",
      location: "Villa Rentals",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Holiday Bungalows",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Bungalow Rentals",
      property_type: "United States",
    },
    {
      url: "",
      location: "Condo Rentals",
      property_type: "United States",
    },
    {
      url: "",
      location: "Holiday Apartments",
      property_type: "Australia",
    },
    {
      url: "",
      location: "Holiday Houses",
      property_type: "United States",
    },
    {
      url: "",
      location: "Holiday Houses",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Private Holiday Rentals",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Big House Rentals",
      property_type: "United States",
    },
    {
      url: "",
      location: "Big Cottages",
      property_type: "Australia",
    },
    {
      url: "",
      location: "Large Villas",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "House Rentals with a Pool",
      property_type: "United States",
    },
    {
      url: "",
      location: "Cabin Rentals with a Pool",
      property_type: "United States",
    },
    {
      url: "",
      location: "Villas with a Pool",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Apartments with a Hot Tub",
      property_type: "United States",
    },
    {
      url: "",
      location: "Holiday Cottages with a Hot Tub",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Beach Cabins",
      property_type: "United States",
    },
    {
      url: "",
      location: "Beach Condos",
      property_type: "United States",
    },
    {
      url: "",
      location: "Beachfront Rentals",
      property_type: "United States",
    },
    {
      url: "",
      location: "Beach Houses",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Beach Villas",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Coastal Cottages",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Pet-Friendly Vacation Rentals",
      property_type: "United States",
    },
    {
      url: "",
      location: "Pet-Friendly Beach Rentals",
      property_type: "United States",
    },
    {
      url: "",
      location: "Pet-Friendly Cabin Rentals",
      property_type: "United States",
    },
    {
      url: "",
      location: "Dog-Friendly Cottages",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Luxury Dog-Friendly Cottages",
      property_type: "United Kingdom",
    },
  ],

  Categories: [
    {
      url: "",
      location: "Amazing pools",
      property_type: "",
    },
    {
      url: "",
      location: "Arctic",
      property_type: "",
    },
    {
      url: "",
      location: "Camping",
      property_type: "",
    },
    {
      url: "",
      location: "Camper vans",
      property_type: "",
    },
    {
      url: "",
      location: "Castles",
      property_type: "",
    },
    {
      url: "",
      location: "Containers",
      property_type: "",
    },
    {
      url: "",
      location: "Countryside",
      property_type: "",
    },
    {
      url: "",
      location: "Design",
      property_type: "",
    },
    {
      url: "",
      location: "Earth homes",
      property_type: "",
    },
    {
      url: "",
      location: "Farms",
      property_type: "",
    },
    {
      url: "",
      location: "National parks",
      property_type: "",
    },
    {
      url: "",
      location: "Vineyards",
      property_type: "",
    },
    {
      url: "",
      location: "OMG!",
      property_type: "",
    },
    {
      url: "",
      location: "Tiny homes",
      property_type: "",
    },
    {
      url: "",
      location: "Towers",
      property_type: "",
    },
    {
      url: "",
      location: "Windmills",
      property_type: "",
    },
    {
      url: "",
      location: "Luxe",
      property_type: "",
    },
  ],

  ThingsToDo: [
    {
      url: "",
      location: "London",
      property_type: "England",
    },
    {
      url: "",
      location: "Paris",
      property_type: "Île-de-France",
    },
    {
      url: "",
      location: "New York",
      property_type: "New York",
    },
    {
      url: "",
      location: "Barcelona",
      property_type: "Catalonia",
    },
    {
      url: "",
      location: "İstanbul",
      property_type: "İstanbul",
    },
    {
      url: "",
      location: "Bali",
      property_type: "Indonesia",
    },
    {
      url: "",
      location: "Amsterdam",
      property_type: "North Holland",
    },
    {
      url: "",
      location: "Miami",
      property_type: "Florida",
    },
    {
      url: "",
      location: "Madrid",
      property_type: "Community of Madrid",
    },
    {
      url: "",
      location: "Los Angeles",
      property_type: "California",
    },
    {
      url: "",
      location: "Rome",
      property_type: "Lazio",
    },
    {
      url: "",
      location: "Lisbon",
      property_type: "Lisbon",
    },
    {
      url: "",
      location: "Tokyo",
      property_type: "Tokyo",
    },
    {
      url: "",
      location: "Vienna",
      property_type: "Vienna",
    },
    {
      url: "",
      location: "Athens",
      property_type: "Greece",
    },
    {
      url: "",
      location: "Prague",
      property_type: "Czechia",
    },
    {
      url: "",
      location: "Orlando",
      property_type: "Florida",
    },
    {
      url: "",
      location: "Cancún",
      property_type: "Quintana Roo",
    },
    {
      url: "",
      location: "Santorini",
      property_type: "Greece",
    },
    {
      url: "",
      location: "Mexico City",
      property_type: "Mexico City",
    },
    {
      url: "",
      location: "Venice",
      property_type: "Veneto",
    },
    {
      url: "",
      location: "Playa del Carmen",
      property_type: "Quintana Roo",
    },
    {
      url: "",
      location: "San Francisco",
      property_type: "California",
    },
    {
      url: "",
      location: "Las Vegas",
      property_type: "Nevada",
    },
    {
      url: "",
      location: "Boston",
      property_type: "Massachusetts",
    },
    {
      url: "",
      location: "San Diego",
      property_type: "California",
    },
    {
      url: "",
      location: "Chicago",
      property_type: "Illinois",
    },
    {
      url: "",
      location: "Seattle",
      property_type: "Washington",
    },
    {
      url: "",
      location: "Washington",
      property_type: "District of Columbia",
    },
    {
      url: "",
      location: "Atlanta",
      property_type: "Georgia",
    },
    {
      url: "",
      location: "Austin",
      property_type: "Texas",
    },
    {
      url: "",
      location: "Maui",
      property_type: "Hawaii",
    },
    {
      url: "",
      location: "New Orleans",
      property_type: "Louisiana",
    },
    {
      url: "",
      location: "San Juan",
      property_type: "San Juan",
    },
    {
      url: "",
      location: "O‘ahu",
      property_type: "Hawaii",
    },
    {
      url: "",
      location: "Denver",
      property_type: "Colorado",
    },
    {
      url: "",
      location: "Nashville",
      property_type: "Tennessee",
    },
    {
      url: "",
      location: "Charleston",
      property_type: "South Carolina",
    },
    {
      url: "",
      location: "Los Cabos",
      property_type: "Baja California Sur",
    },
    {
      url: "",
      location: "Savannah",
      property_type: "Georgia",
    },
    {
      url: "",
      location: "Dubai",
      property_type: "Dubai",
    },
    {
      url: "",
      location: "Seoul",
      property_type: "Seoul",
    },
    {
      url: "",
      location: "France",
      property_type: "",
    },
    {
      url: "",
      location: "Berlin",
      property_type: "Berlin",
    },
    {
      url: "",
      location: "Canada",
      property_type: "",
    },
    {
      url: "",
      location: "Toronto",
      property_type: "Ontario",
    },
    {
      url: "",
      location: "Switzerland",
      property_type: "",
    },
    {
      url: "",
      location: "Budapest",
      property_type: "Hungary",
    },
    {
      url: "",
      location: "Spain",
      property_type: "",
    },
    {
      url: "",
      location: "Portugal",
      property_type: "",
    },
    {
      url: "",
      location: "United States",
      property_type: "",
    },
    {
      url: "",
      location: "Italy",
      property_type: "",
    },
    {
      url: "",
      location: "Greece",
      property_type: "",
    },
    {
      url: "",
      location: "Malta",
      property_type: "",
    },
    {
      url: "",
      location: "Türkiye",
      property_type: "",
    },
    {
      url: "",
      location: "Croatia",
      property_type: "",
    },
    {
      url: "",
      location: "Vancouver",
      property_type: "British Columbia",
    },
    {
      url: "",
      location: "Mexico",
      property_type: "",
    },
    {
      url: "",
      location: "Milan",
      property_type: "Lombardy",
    },
    {
      url: "",
      location: "Dublin",
      property_type: "County Dublin",
    },
    {
      url: "",
      location: "Germany",
      property_type: "",
    },
    {
      url: "",
      location: "Costa Rica",
      property_type: "",
    },
    {
      url: "",
      location: "Manhattan",
      property_type: "New York",
    },
    {
      url: "",
      location: "Japan",
      property_type: "",
    },
    {
      url: "",
      location: "Málaga",
      property_type: "Andalusia",
    },
    {
      url: "",
      location: "Copenhagen",
      property_type: "Denmark",
    },
    {
      url: "",
      location: "Montreal",
      property_type: "Quebec",
    },
    {
      url: "",
      location: "Brussels",
      property_type: "Brussels",
    },
    {
      url: "",
      location: "Valencia",
      property_type: "Valencian Community",
    },
    {
      url: "",
      location: "Singapore",
      property_type: "",
    },
    {
      url: "",
      location: "Nice",
      property_type: "Provence-Alpes-Côte d'Azur",
    },
    {
      url: "",
      location: "Munich",
      property_type: "Bavaria",
    },
    {
      url: "",
      location: "Majorca",
      property_type: "Balearic Islands",
    },
    {
      url: "",
      location: "Thailand",
      property_type: "",
    },
    {
      url: "",
      location: "Tulum",
      property_type: "Quintana Roo",
    },
    {
      url: "",
      location: "Ireland",
      property_type: "",
    },
    {
      url: "",
      location: "Porto",
      property_type: "Porto District",
    },
    {
      url: "",
      location: "England",
      property_type: "United Kingdom",
    },
    {
      url: "",
      location: "Miami Beach",
      property_type: "Florida",
    },
    {
      url: "",
      location: "Tenerife",
      property_type: "Canary Islands",
    },
    {
      url: "",
      location: "Netherlands",
      property_type: "",
    },
    {
      url: "",
      location: "Zürich",
      property_type: "Zurich",
    },
    {
      url: "",
      location: "Cyprus",
      property_type: "",
    },
    {
      url: "",
      location: "Stockholm",
      property_type: "Stockholm County",
    },
    {
      url: "",
      location: "Cape Town",
      property_type: "Western Cape",
    },
    {
      url: "",
      location: "Norway",
      property_type: "",
    },
    {
      url: "",
      location: "Sydney",
      property_type: "New South Wales",
    },
    {
      url: "",
      location: "Tuscany",
      property_type: "Italy",
    },
    {
      url: "",
      location: "Mykonos",
      property_type: "Greece",
    },
    {
      url: "",
      location: "Hawaii",
      property_type: "United States",
    },
    {
      url: "",
      location: "Florence",
      property_type: "Tuscany",
    },
    {
      url: "",
      location: "Colombia",
      property_type: "",
    },
    {
      url: "",
      location: "Kyiv",
      property_type: "Ukraine",
    },
    {
      url: "",
      location: "Antalya",
      property_type: "Antalya",
    },
    {
      url: "",
      location: "Iceland",
      property_type: "",
    },
    {
      url: "",
      location: "Bangkok",
      property_type: "Thailand",
    },
    {
      url: "",
      location: "Buenos Aires",
      property_type: "Buenos Aires",
    },
    {
      url: "",
      location: "Bogotá",
      property_type: "Bogota",
    },
    {
      url: "",
      location: "Warsaw",
      property_type: "Masovian Voivodeship",
    },
  ],
};

interface footLinkType {
  Support: string[];
  Hosting: string[];
  Airbnb: string[];
  [key: string]: string[];
}

const footLink: footLinkType = {
  Support: [
    "Help Centre",
    "AirCover",
    "Anti-discrimination",
    "Disability support",
    "Cancellation options",
    "Report neighbourhood concern",
  ],

  Hosting: [
    "Airbnb your home",
    "AirCover for Hosts",
    "Hosting resources",
    "Community forum",
    "Hosting responsibly",
    "Join a free Hosting class",
  ],

  Airbnb: [
    "Newsroom",
    "New features",
    "Careers",
    "Investors",
    "Airbnb.org emergency stays",
  ],
};

const Footer = () => {
  const initialHeight = 180;
  const [height, setHeight] = useState<Height>(initialHeight);
  return (
    <Box className="footer-container" p={{ base: "1rem", lg: "1rem 4rem" }}>
      <Text className="footer-title" fontSize={{ base: "xl", xl: "2xl" }}>
        Inspiration for future getaways
      </Text>

      <Tabs className="tabs">
        <TabList
          className="tablist"
          overflowX="auto"
          css={css({
            scrollbarWidth: "none",
            "::-webkit-scrollbar": { display: "none" },

            boxShadow: "inset 0 -2px 0 rgba(0, 0, 0, 0.1)",
            border: "0 none",
          })}
          py={1}
        >
          {allTabs.map((tabs) => {
            return (
              <Tab className="tab" key={tabs}>
                {tabs}
              </Tab>
            );
          })}
        </TabList>

        <TabPanels className="tabpanels">
          {Object.keys(tabContents).map((tabContent: string) => {
            return (
              <TabPanel className="tabpanel" key={tabContent}>
                <AnimateHeight
                  id="example-panel"
                  className="animated-height-panel"
                  duration={500}
                  height={height} // see props documentation below
                >
                  <Grid
                    className="gridContainer"
                    templateColumns={{
                      base: "repeat(2, 1fr)",
                      lg: "repeat(3, 1fr)",
                      xl: "repeat(6, 1fr)",
                    }}
                    gap={6}
                  >
                    {tabContents[tabContent].map(
                      (content: tabContentType, index: number) => {
                        return (
                          <GridItem
                            className="gridItem"
                            key={content.location + index}
                            w="100%"
                          >
                            <a
                              className="url"
                              href={content.url}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                              }}
                            >
                              <span
                                className="location"
                                style={{ fontSize: "13px", fontWeight: 600 }}
                              >
                                {content.location}
                              </span>
                              <span
                                className="property"
                                style={{ fontSize: "13px" }}
                              >
                                {content.property_type}
                              </span>
                            </a>
                          </GridItem>
                        );
                      }
                    )}
                  </Grid>
                </AnimateHeight>

                <Button
                  className="showmore"
                  variant="ghost"
                  aria-expanded={height !== initialHeight}
                  aria-controls="example-panel"
                  onClick={() =>
                    setHeight(height === initialHeight ? "auto" : initialHeight)
                  }
                >
                  {height === initialHeight ? "See more" : "See less"}
                </Button>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
      <hr />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
        className="footerFoot"
        mt={10}
      >
        {Object.keys(footLink).map((heading: string) => {
          return (
            <GridItem
              key={heading}
              w="100%"
              className="footerFootLinkContainer"
            >
              <Text fontSize="sm" style={{ fontWeight: "600" }}>
                {heading}
              </Text>

              <ul>
                {footLink[heading].map((item: string, index: number) => {
                  return (
                    <li key={item + index}>
                      <a href="">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export { Footer };
