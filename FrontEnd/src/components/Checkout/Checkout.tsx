import { useLocation, useNavigate } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import { Image, Badge, Box } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import "../Checkout/Checkout.css"
import { PropertyData } from '../../utils/propertyData';
import axios from 'axios';


// interface FormData {
//   name: string;
//   mobile: string;
//   area: string;
//   landmark: string;
//   pincode: string;
//   email: string;
//   addressType: string;
// }

export function Checkout(): JSX.Element {


const navigate = useNavigate();
    const location = useLocation();
    const { state} = location;

    const [data, setData] = useState<PropertyData>();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<PropertyData>(
            `https://staybnb-server.onrender.com/property/${state.id}`
          );
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [state]);
  
  // console.log(location);
  console.log(state);


  // const [formData, setFormData] = useState<FormData>({
  //   name: '',
  //   mobile: '',
  //   area: '',
  //   landmark: '',
  //   pincode: '',
  //   email: '',
  //   addressType: ''
  // });

  // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
  //   const { id, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [id]: value
  //   }));
  // };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   localStorage.setItem('address', JSON.stringify(formData));
  //   Navigate to payment page after submission
  //   window.location.href = 'payment.html';
  // };

  // const property = {
  //   imageUrl: 'https://bit.ly/2Z4KKcF',
  //   imageAlt: 'Rear view of modern home with pool',
  //   beds: 3,
  //   baths: 2,
  //   title: 'Modern home in city center in the heart of historic Los Angeles',
  //   formattedPrice: '$1,900.00',
  //   reviewCount: 34,
  //   rating: 4
  // };
  return (
    <>
   <div id = "checkout-component">
     
          <div id="orderSummary">
            <h3><strong>Booking Details:-</strong><span id="totalitem"></span></h3>
            <Box  w='auto'  borderRadius='lg' overflow='hidden'>
              <Image borderRadius='50%' marginTop='20px' p='2px' h='180px' w='180px' src={data?.images[0]} alt={data?.name} />
              <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                  <Badge borderRadius='full' px='2' colorScheme='teal'>
                    New
                  </Badge>
                  <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                  >
                    {data?.beds} beds &bull; {data?.bathrooms} baths
                  </Box>
                </Box>
                <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                  {data?.name}
                </Box>
                <Box>
                  {data?.price}
                  <Box as='span' color='gray.600' fontSize='sm'>
                    / $
                  </Box>
                </Box>
                <Box display='flex' mt='2' alignItems='center'>
                  {Array(5).fill('').map((_, i) => (
                    <StarIcon
                      key={i}
                      color={ data?.guestFavorite? 'teal.500' : 'gray.300'}
                    />
                  ))}
                  <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    {data?.number_of_reviews} reviews
                  </Box>
                </Box>
              </Box>
            </Box>
            <hr />
            <div>
              <p className="gray">Per Night charge</p>
              <p id="totalmrp">{data?.price}$ /person</p>
            </div>
            <div>
              <p className="gray">Days</p>
              <p className="payday">{state.stayNights}</p>
            </div>
            {/* <div>
              <p className="gray">check-in Date</p>
              <p className="payday">{state.checkinDate}</p>
            </div> */}
            {/* <div>
              <p className="gray">check-out Date</p>
              <p className="payday">{state.checkoutDate}</p>
            </div> */}
            <div>
              <p className="gray">Room Service</p>
              <p className="payday">Free</p>
            </div>
            <div>
              <p className="gray">Discounts</p>
              <p id="totaldiscount" className="green">- 0₹</p>
            </div>
            <hr />
            <div>
              <strong>
              <h1>Payable Amount</h1></strong>
              <strong>
      <h1 id="paytm">{state.totalprice}</h1></strong>
     
            </div>
            <hr />
            <button id='submit-form' onClick={()=>{
              alert('moving to the payment page')
              navigate('/payment')}} >
      confirm for Payment
       </button>
          </div>
   </div>
    </>
  );
}

