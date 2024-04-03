import { AddIcon } from "@chakra-ui/icons"
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { FC } from "react"

 const InitialFocus:FC = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}><AddIcon/></Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Data Here</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Image Link</FormLabel>
                <Input ref={initialRef} placeholder='Image Link Here' />
              </FormControl>
  
              <FormControl mt={4} display={"grid"} gridTemplateColumns={"auto"}>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Property name' />
                <FormLabel>Host Name</FormLabel>
                <Input placeholder='Host name' />
                <FormLabel>Beds</FormLabel>
                <Input placeholder='Host name' />
                <FormLabel>Host Name</FormLabel>
                <Input placeholder='Host name' />
                <FormLabel>Host Name</FormLabel>
                <Input placeholder='Host name' />
                <FormLabel>Host Name</FormLabel>
                <Input placeholder='Host name' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default InitialFocus;