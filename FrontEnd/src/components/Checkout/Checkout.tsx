import  { useState, ChangeEvent, FormEvent } from 'react';
import { Image, Badge, Box } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';


interface FormData {
  name: string;
  mobile: string;
  area: string;
  landmark: string;
  pincode: string;
  email: string;
  addressType: string;
}

export function Checkout(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    area: '',
    landmark: '',
    pincode: '',
    email: '',
    addressType: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    localStorage.setItem('address', JSON.stringify(formData));
    // Navigate to payment page after submission
    // window.location.href = 'payment.html';
  };

  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4
  };
  // const [data,setData] = useState()
  // edit
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get<PropertyData>(
  //         `https://staybnb-server.onrender.com/property/${id}`
  //       );
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
    
  //   fetchData();
   
  // }, [id]);
 //edit
  return (
    <>
      <div id="main" className="wrapper">
        <form onSubmit={handleSubmit} id="addressForm">
          <div className="singleRow">
            <div>
              <p>Name <span>*</span></p>
              <input id="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <p>Mobile No. <span>*</span></p>
              <input id="mobile" type="text" placeholder="Enter your Mobile no." value={formData.mobile} onChange={handleChange} required />
            </div>
          </div>
          <div>
            <p>Address (Area and Street) <span>*</span></p>
            <input id="area" type="text" placeholder="Type your Address" value={formData.area} onChange={handleChange} required />
          </div>
          <div className="singleRow">
            <div>
              <p>Landmark <span>*</span></p>
              <input id="landmark" type="text" placeholder="Enter Landmark" value={formData.landmark} onChange={handleChange} required />
            </div>
            <div>
              <p>Pincode <span>*</span></p>
              <input id="pincode" type="text" placeholder="Enter pincode" value={formData.pincode} onChange={handleChange} required />
            </div>
          </div>
          <div>
            <p>Email <span>*</span></p>
            <input id="email" type="text" placeholder="Enter your Mail Address" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <select name="address" id="addressType" value={formData.addressType} onChange={handleChange}>
              <option value="">Address Type</option>
              <option value="home">Home</option>
              <option value="office">Office</option>
              <option value="others">Others</option>
            </select>
          </div>
          <input type="checkbox" />
          <p className="inline"> I want to subscribe to <strong>StayBnb</strong>.</p>

          <input type="submit" value="Confirm" />
        </form>

        <div id="orderSummary">
          <h3>Booking Details:<span id="totalitem"></span></h3>
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image borderRadius='50%' p='10px' h='150px' w='150px' src={property.imageUrl} alt={property.imageAlt} />
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
                  {property.beds} beds &bull; {property.baths} baths
                </Box>
              </Box>
              <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                {property.title}
              </Box>
              <Box>
                {property.formattedPrice}
                <Box as='span' color='gray.600' fontSize='sm'>
                  / wk
                </Box>
              </Box>
              <Box display='flex' mt='2' alignItems='center'>
                {Array(5).fill('').map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? 'teal.500' : 'gray.300'}
                  />
                ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {property.reviewCount} reviews
                </Box>
              </Box>
            </Box>
          </Box>
          <hr />
          <div>
            <p className="gray">Per Night charge</p>
            <p id="totalmrp">₹1999/person</p>
          </div>
          <div>
            <p className="gray">Days</p>
            <p className="payday">1 day</p>
          </div>
          <div>
            <p className="gray">GST</p>
            <p className="payday">99.95₹</p>
          </div>
          <div>
            <p className="gray">Room Service</p>
            <p className="payday">110₹</p>
          </div>
          <div>
            <p className="gray">Discounts</p>
            <p id="totaldiscount" className="green">- 0₹</p>
          </div>
          <hr />
          <div>
            <h2>Payable Amount</h2>
            <h2 id="paytm">2208.95₹</h2>
          </div>
          <hr />
          <h2 style={{ color: '#f12974' }}>Press Confirm for payment. </h2>
        </div>
      </div>
    </>
  );
}
