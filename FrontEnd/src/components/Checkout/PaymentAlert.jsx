import {React} from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,Button,
  useDisclosure,Box,CloseButton
} from '@chakra-ui/react';

/**
 * @returns {JSX.Element} Payment alert component
 */

export function PaymentAlert(){
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: true })
    
      return isVisible ? (
        <Alert status='success'>
          <AlertIcon />
          <Box>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your application has been received. We will review your application
              and respond within the next 48 hours.
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      ) : (
        <Button onClick={onOpen}>Show Alert</Button>
      )
    }
