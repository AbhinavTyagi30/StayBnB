import { Box } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { PropertyInterface } from "../../utils/propertyInterface";

const newData: PropertyInterface[] = [
  {
    id: "8450130",
    name: "Beautiful 2 Bed Flat in Charming Belsize Park",
    description:
      "BRAND NEW LISTING: A recently renovated, bright and airy two bedroom flat located in a beautiful period house in the heart of Belsize Park, moments from Hampstead, Primrose Hill and Camden. - Two large bedrooms with storage and garden views - Reception room with high ceilings, large windows, and a bed sofa for extra guests - Open-space kitchen with washing machine, dishwasher, microwave, toaster, etc - Modern fixtures and fittings and wooden floors - Fantastic location in charming Belsize Park, minutes walk from Chalk Farm station - Renovated and refurbished Nov 2016 Available to offer help and advice. Very quiet neighbourhood, yet only 1km (12 min) walk to Camden Market. Gorgeous Primrose Hill is minutes away by foot. Many restaurants and pubs can be found in nearby Haverstock Hill, Camden, and Hampstead. 550m (6 min) walk to Chalk Farm station 950m (9 min) walk to Belsize Park station 1km (12 min) walk to Swiss Cottage station",
    host_name: "Ron",
    host_thumbnail_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_small",
    host_picture_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_x_medium",
    smart_location: "London, United Kingdom",
    accommodates: 6,
    bathrooms: 1,
    bedrooms: 2,
    beds: 2,
    price: 180,
    number_of_reviews: 6,
    review_scores_rating: 93,
    guestFavorite: false,
    images: [
      "https://a0.muscache.com/im/pictures/7a0e4e5f-ce39-485a-b8d3-cc95c2c81a7e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/37e5513e-8eef-43db-b7c9-f0f552147069.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/3964dd7b-b61a-4b39-80f9-f90c9605f215.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/1c563107-82dd-4075-9368-4d8457920877.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/910938ca-0b50-45da-8db6-ca98452a8860.jpg?im_w=720",
    ],
  },
  {
    id: "8450130",
    name: "Beautiful 2 Bed Flat in Charming Belsize Park",
    description:
      "BRAND NEW LISTING: A recently renovated, bright and airy two bedroom flat located in a beautiful period house in the heart of Belsize Park, moments from Hampstead, Primrose Hill and Camden. - Two large bedrooms with storage and garden views - Reception room with high ceilings, large windows, and a bed sofa for extra guests - Open-space kitchen with washing machine, dishwasher, microwave, toaster, etc - Modern fixtures and fittings and wooden floors - Fantastic location in charming Belsize Park, minutes walk from Chalk Farm station - Renovated and refurbished Nov 2016 Available to offer help and advice. Very quiet neighbourhood, yet only 1km (12 min) walk to Camden Market. Gorgeous Primrose Hill is minutes away by foot. Many restaurants and pubs can be found in nearby Haverstock Hill, Camden, and Hampstead. 550m (6 min) walk to Chalk Farm station 950m (9 min) walk to Belsize Park station 1km (12 min) walk to Swiss Cottage station",
    host_name: "Ron",
    host_thumbnail_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_small",
    host_picture_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_x_medium",
    smart_location: "London, United Kingdom",
    accommodates: 6,
    bathrooms: 1,
    bedrooms: 2,
    beds: 2,
    price: 180,
    number_of_reviews: 6,
    review_scores_rating: 93,
    guestFavorite: false,
    images: [
      "https://a0.muscache.com/im/pictures/7a0e4e5f-ce39-485a-b8d3-cc95c2c81a7e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/37e5513e-8eef-43db-b7c9-f0f552147069.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/3964dd7b-b61a-4b39-80f9-f90c9605f215.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/1c563107-82dd-4075-9368-4d8457920877.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/910938ca-0b50-45da-8db6-ca98452a8860.jpg?im_w=720",
    ],
  },
  {
    id: "8450130",
    name: "Beautiful 2 Bed Flat in Charming Belsize Park",
    description:
      "BRAND NEW LISTING: A recently renovated, bright and airy two bedroom flat located in a beautiful period house in the heart of Belsize Park, moments from Hampstead, Primrose Hill and Camden. - Two large bedrooms with storage and garden views - Reception room with high ceilings, large windows, and a bed sofa for extra guests - Open-space kitchen with washing machine, dishwasher, microwave, toaster, etc - Modern fixtures and fittings and wooden floors - Fantastic location in charming Belsize Park, minutes walk from Chalk Farm station - Renovated and refurbished Nov 2016 Available to offer help and advice. Very quiet neighbourhood, yet only 1km (12 min) walk to Camden Market. Gorgeous Primrose Hill is minutes away by foot. Many restaurants and pubs can be found in nearby Haverstock Hill, Camden, and Hampstead. 550m (6 min) walk to Chalk Farm station 950m (9 min) walk to Belsize Park station 1km (12 min) walk to Swiss Cottage station",
    host_name: "Ron",
    host_thumbnail_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_small",
    host_picture_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_x_medium",
    smart_location: "London, United Kingdom",
    accommodates: 6,
    bathrooms: 1,
    bedrooms: 2,
    beds: 2,
    price: 180,
    number_of_reviews: 6,
    review_scores_rating: 93,
    guestFavorite: false,
    images: [
      "https://a0.muscache.com/im/pictures/7a0e4e5f-ce39-485a-b8d3-cc95c2c81a7e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/37e5513e-8eef-43db-b7c9-f0f552147069.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/3964dd7b-b61a-4b39-80f9-f90c9605f215.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/1c563107-82dd-4075-9368-4d8457920877.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/910938ca-0b50-45da-8db6-ca98452a8860.jpg?im_w=720",
    ],
  },
  {
    id: "8450130",
    name: "Beautiful 2 Bed Flat in Charming Belsize Park",
    description:
      "BRAND NEW LISTING: A recently renovated, bright and airy two bedroom flat located in a beautiful period house in the heart of Belsize Park, moments from Hampstead, Primrose Hill and Camden. - Two large bedrooms with storage and garden views - Reception room with high ceilings, large windows, and a bed sofa for extra guests - Open-space kitchen with washing machine, dishwasher, microwave, toaster, etc - Modern fixtures and fittings and wooden floors - Fantastic location in charming Belsize Park, minutes walk from Chalk Farm station - Renovated and refurbished Nov 2016 Available to offer help and advice. Very quiet neighbourhood, yet only 1km (12 min) walk to Camden Market. Gorgeous Primrose Hill is minutes away by foot. Many restaurants and pubs can be found in nearby Haverstock Hill, Camden, and Hampstead. 550m (6 min) walk to Chalk Farm station 950m (9 min) walk to Belsize Park station 1km (12 min) walk to Swiss Cottage station",
    host_name: "Ron",
    host_thumbnail_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_small",
    host_picture_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_x_medium",
    smart_location: "London, United Kingdom",
    accommodates: 6,
    bathrooms: 1,
    bedrooms: 2,
    beds: 2,
    price: 180,
    number_of_reviews: 6,
    review_scores_rating: 93,
    guestFavorite: false,
    images: [
      "https://a0.muscache.com/im/pictures/7a0e4e5f-ce39-485a-b8d3-cc95c2c81a7e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/37e5513e-8eef-43db-b7c9-f0f552147069.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/3964dd7b-b61a-4b39-80f9-f90c9605f215.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/1c563107-82dd-4075-9368-4d8457920877.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/910938ca-0b50-45da-8db6-ca98452a8860.jpg?im_w=720",
    ],
  },
  {
    id: "8450130",
    name: "Beautiful 2 Bed Flat in Charming Belsize Park",
    description:
      "BRAND NEW LISTING: A recently renovated, bright and airy two bedroom flat located in a beautiful period house in the heart of Belsize Park, moments from Hampstead, Primrose Hill and Camden. - Two large bedrooms with storage and garden views - Reception room with high ceilings, large windows, and a bed sofa for extra guests - Open-space kitchen with washing machine, dishwasher, microwave, toaster, etc - Modern fixtures and fittings and wooden floors - Fantastic location in charming Belsize Park, minutes walk from Chalk Farm station - Renovated and refurbished Nov 2016 Available to offer help and advice. Very quiet neighbourhood, yet only 1km (12 min) walk to Camden Market. Gorgeous Primrose Hill is minutes away by foot. Many restaurants and pubs can be found in nearby Haverstock Hill, Camden, and Hampstead. 550m (6 min) walk to Chalk Farm station 950m (9 min) walk to Belsize Park station 1km (12 min) walk to Swiss Cottage station",
    host_name: "Ron",
    host_thumbnail_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_small",
    host_picture_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_x_medium",
    smart_location: "London, United Kingdom",
    accommodates: 6,
    bathrooms: 1,
    bedrooms: 2,
    beds: 2,
    price: 180,
    number_of_reviews: 6,
    review_scores_rating: 93,
    guestFavorite: false,
    images: [
      "https://a0.muscache.com/im/pictures/7a0e4e5f-ce39-485a-b8d3-cc95c2c81a7e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/37e5513e-8eef-43db-b7c9-f0f552147069.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/3964dd7b-b61a-4b39-80f9-f90c9605f215.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/1c563107-82dd-4075-9368-4d8457920877.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/910938ca-0b50-45da-8db6-ca98452a8860.jpg?im_w=720",
    ],
  },
  {
    id: "8450130",
    name: "Beautiful 2 Bed Flat in Charming Belsize Park",
    description:
      "BRAND NEW LISTING: A recently renovated, bright and airy two bedroom flat located in a beautiful period house in the heart of Belsize Park, moments from Hampstead, Primrose Hill and Camden. - Two large bedrooms with storage and garden views - Reception room with high ceilings, large windows, and a bed sofa for extra guests - Open-space kitchen with washing machine, dishwasher, microwave, toaster, etc - Modern fixtures and fittings and wooden floors - Fantastic location in charming Belsize Park, minutes walk from Chalk Farm station - Renovated and refurbished Nov 2016 Available to offer help and advice. Very quiet neighbourhood, yet only 1km (12 min) walk to Camden Market. Gorgeous Primrose Hill is minutes away by foot. Many restaurants and pubs can be found in nearby Haverstock Hill, Camden, and Hampstead. 550m (6 min) walk to Chalk Farm station 950m (9 min) walk to Belsize Park station 1km (12 min) walk to Swiss Cottage station",
    host_name: "Ron",
    host_thumbnail_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_small",
    host_picture_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_x_medium",
    smart_location: "London, United Kingdom",
    accommodates: 6,
    bathrooms: 1,
    bedrooms: 2,
    beds: 2,
    price: 180,
    number_of_reviews: 6,
    review_scores_rating: 93,
    guestFavorite: false,
    images: [
      "https://a0.muscache.com/im/pictures/7a0e4e5f-ce39-485a-b8d3-cc95c2c81a7e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/37e5513e-8eef-43db-b7c9-f0f552147069.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/3964dd7b-b61a-4b39-80f9-f90c9605f215.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/1c563107-82dd-4075-9368-4d8457920877.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/910938ca-0b50-45da-8db6-ca98452a8860.jpg?im_w=720",
    ],
  },
];

export const CardContainer: FC = () => {
  const [data, setData] = useState<PropertyInterface[]>([]);

  const getData = () => {
    setData((prev) => prev.concat(newData));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      {data.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
    </Box>
  );
};
