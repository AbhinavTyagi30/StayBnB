import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC } from "react";
import axios from "axios";

interface FormData {
  [key: string]: string | number | boolean | Array<string>;
  id: string;
  name: string;
  host_name: string;
  host_thumbnail_url: string;
  host_picture_url: string;
  smart_location: string;
  accomodates: number;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  price: number;
  number_of_reviews: number;
  review_scores_rating: number;
  guestFavorite: boolean;
  images: string[];
}
const InitialFocus: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initState = {
    id: "",
    name: "",
    host_name: "",
    host_thumbnail_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_small",
    host_picture_url:
      "https://a0.muscache.com/im/users/9028043/profile_pic/1413189878/original.jpg?aki_policy=profile_x_medium",
    smart_location: "",
    accomodates: 4,
    bathrooms: 0,
    bedrooms: 0,
    beds: 2,
    price: 0,
    number_of_reviews: 0,
    review_scores_rating: 0,
    guestFavorite: false,
    images: [
      "https://a0.muscache.com/im/pictures/7a0e4e5f-ce39-485a-b8d3-cc95c2c81a7e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/37e5513e-8eef-43db-b7c9-f0f552147069.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/3964dd7b-b61a-4b39-80f9-f90c9605f215.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-39373135/original/1c563107-82dd-4075-9368-4d8457920877.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/910938ca-0b50-45da-8db6-ca98452a8860.jpg?im_w=720",
    ],
  };
  const [formState, setFormState] = React.useState<FormData>(initState);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formState);
    (async () => {
      try {
        const response = await axios.post(
          "https://staybnb-server.onrender.com/property",
          formState
        );
        console.log(response.data);
        console.log(response);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return (
    <>
      <Button onClick={onOpen}>
        <AddIcon />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Data Here</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form
              onSubmit={(e) => {
                onClose();
                handleSubmit(e);
              }}
            >
              <FormControl mt={4} display={"grid"} gridTemplateColumns={"auto"}>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  placeholder="Property name"
                  onChange={handleChange}
                />
                <FormLabel>Host Name</FormLabel>
                <Input
                  name="host_name"
                  placeholder="Host name"
                  onChange={handleChange}
                />
                <FormLabel>Beds</FormLabel>
                <Input
                  name="bedrooms"
                  placeholder="Number of Beds"
                  type="number"
                  onChange={handleChange}
                />
                <FormLabel>Baths</FormLabel>
                <Input
                  name="bathrooms"
                  placeholder="Number of Baths"
                  type="number"
                  onChange={handleChange}
                />
                <FormLabel>Location</FormLabel>
                <Input
                  name="smart_location"
                  placeholder="location"
                  onChange={handleChange}
                />
                <FormLabel>Price</FormLabel>
                <Input
                  name="price"
                  placeholder="Price"
                  onChange={handleChange}
                />
              </FormControl>
              <Button colorScheme="blue" mr={3} mt={3} type={"submit"}>
                Save
              </Button>
              <Button onClick={onClose} mr={3} mt={3}>
                Cancel
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default InitialFocus;
