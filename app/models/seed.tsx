type CityData = {
  id: string;
  title: string;
  city: string;
  cover: string;
};

type LocationData = {
  link: string;
  title: string;
  description: string;
  type: string;
  media: any;
  images: any;
};

export const cityData: CityData[] = [
  {
    id: '4d713b95-4fb9-4c12-9ec6-sadvasdvasdv',
    title: 'Tokyo - The City That Never Sleeps',
    city: 'Tokyo',
    cover:
      'https://ucarecdn.com/c77e27af-14d9-40ac-8d31-b6b82555b444/pexelsyaroslavshuraev44341362160x384030fps.mp4',
  },
  {
    id: '3ed2e2c8-4980-4ccf-b87f-asdvasdvasv',
    title: 'New York - The City of Dreams',
    city: 'New York',
    cover:
      'https://ucarecdn.com/0c5037f1-961f-46b8-8b1b-701113e91410/pexelsfeyzayldrm143885262160x409625fps.mp4',
  },
  {
    id: '186a3b46-7d2f-4c77-9a9b-asdvasdvasvda',
    title: 'Paris - The City of Love',
    city: 'Paris',
    cover:
      'https://ucarecdn.com/91db13aa-aa62-4a89-8339-48158da6d298/pexelspeggyanke67849101080x192030fps.mp4',
  },
  {
    id: '45b8a437-7a9a-44b3-a2ee-asdvasdvsa',
    title: 'London - The City of History and Royalty',
    city: 'London',
    cover:
      'https://ucarecdn.com/38cde67c-e664-445e-947f-47ab951c5f13/pexelsvladakarpovich80451641080x192050fps.mp4',
  },
  {
    id: '53a5da5f-6405-42e3-8e5f-asdvasdvasvdasvd',
    title: 'Dubai - The City of Luxury and Innovation',
    city: 'Dubai',
    cover:
      'https://ucarecdn.com/8ba376ba-0246-4e62-a407-3e76e6eb268a/pexelspeggyanke53485151080x192030fps.mp4',
  },
  {
    id: 'e569a7e1-8370-4b1f-9a39-asdvasdvasdva',
    title: 'Sydney - The City Down Under',
    city: 'Sydney',
    cover:
      'https://ucarecdn.com/b764ed44-41d0-4c65-a72a-9258fd74f796/pexelscottonbrostudio53296132160x409625fps.mp4',
  },
  {
    id: '0d27e9c9-0d24-472c-a1b5-asdadfasdvasdvasdasfd',
    title: 'Rio de Janeiro - The City of Samba and Sun',
    city: 'Rio de Janeiro',
    cover:
      'https://ucarecdn.com/0572f205-73d9-4028-9ed0-2c7cb531259c/pexelscottonbrostudio51989562160x409625fps.mp4',
  },
  {
    id: '0d27e9c9-0d24-47sdfsd2c-a1b5-asdsadvasdvfasdfasdf',
    title: "Moscow: A Glimpse into Russia's Imperial Past and Modern Present",
    city: 'Moscow, Russia',
    cover:
      'https://ucarecdn.com/af6feab8-5c04-44c1-8563-655146836c3e/pexelscottonbrostudio51382142160x409625fps.mp4',
  },
  {
    id: '0d27easd9c9-0d24-47sdfsd2c-a1b5-asasdvasdvdfasdfasd',
    title: 'Sydney: Surf, Sunsets, and Sights on the Australian Coast',
    city: 'Sydney, Australia',
    cover:
      'https://ucarecdn.com/dd1c8b8c-2398-4621-8b96-895a83af940e/pexelsromanodintsov65203072160x374430fps.mp4',
  },
];

export const locationData: LocationData[] = [
  {
    link: 'https://www.google.com/search?q=best+bar+in+tokyo&oq=best+bar+in+&aqs=chrome.0.0i512l6j69i57j0i512l3.4604j0j7&sourceid=chrome&ie=UTF-8#rlimm=6114541142626704952',
    title:
      'Unveiling the Best Hotel: A Luxurious Haven for Discerning Travelers',
    description:
      "Nestled in the heart of a bustling city, the best hotel in town offers a luxurious haven for discerning travelers. From the moment guests step through its grand entrance, they are transported into a world of elegance and sophistication. The hotel boasts exquisite architecture and stunning design, with every detail carefully crafted to create an unforgettable experience. From the opulent guest rooms and suites to the top-notch amenities and unparalleled service, every aspect of the hotel is designed to exceed expectations. With its prime location, guests have easy access to the city's best attractions, making it the perfect base for exploring all that this vibrant city has to offer. Whether you're traveling for business or pleasure, the best hotel in this city promises an exceptional stay that will leave you feeling pampered and rejuvenated.",
    type: 'Hotel',
    media: [
      'https://ucarecdn.com/262b7069-d664-4671-8a3d-247e4c030d0a/pexelscottonbrostudio51380224096x216025fps.mp4',
    ],
    images: [
      'https://ucarecdn.com/916906c9-f54e-4898-b9ec-251f7e8ab52a/dushawnjovic0WLZQv3Id8unsplash.jpg',
      'https://ucarecdn.com/10e5a08f-7ee9-48cf-8786-b8eb9ce205d4/alevtakilTAW3H7NV5kunsplash.jpg',
      'https://ucarecdn.com/af5da431-4dda-4fe6-82f2-72840018be19/hotellalgarhfortandpalacevjYAvEFdRCounsplash.jpg',
      'https://ucarecdn.com/5a02fdd2-bccc-4468-b92f-85182ecbeeea/iliassamiHhuRZlAaPJ0unsplash.jpg',
    ],
  },
  {
    link: 'https://www.hilton.com/en/hotels/nyccici-conrad-new-york-downtown/',
    title:
      'Raise a Glass at the Best Bar in the City: A Sophisticated Oasis for Cocktail Connoisseurs',
    description:
      "Looking for the perfect spot to unwind and indulge in a delicious cocktail? Look no further than the best bar in the city! Located in the heart of downtown, this sophisticated oasis is a haven for cocktail connoisseurs and those who appreciate a finely crafted drink. Step inside and you'll be transported to a world of elegance and refinement, with luxurious furnishings and a cozy ambiance that invites you to sit back, relax, and savor every sip. The bar's expert mixologists use only the finest ingredients to create a wide variety of classic and inventive cocktails, each one perfectly balanced and bursting with flavor. Whether you prefer a refreshing gin and tonic or a bold and complex whiskey sour, you're sure to find your new favorite drink at the best bar in the city. So why wait? Grab a seat, raise a glass, and toast to the good life!",
    type: 'Bar',
    media: [
      'https://ucarecdn.com/9c2c55b8-25c6-4a48-86ec-35b10f54adf3/pexelsfreevideos8541281920x108025fps.mp4',
    ],
    images: [
      'https://ucarecdn.com/c31d98ae-77ec-4b14-a2d2-bb4d2738f389/aleksandrpopov2GNBoMgKYEounsplash.jpg',
      'https://ucarecdn.com/39ec7d9a-2b57-49b3-a3bc-69412db88106/patricktomassoGXXYkSwndP4unsplash.jpg',
    ],
  },
  {
    link: 'https://www.google.com/maps/place/Sufouh+Beach+-+Al+Sufouh+-+Al+Sufouh+1+-+Dubai+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5f6bf6a4850289:0x620ad3bf45bffc0f?sa=X&ved=2ahUKEwjo3Iy409f-AhXNNd4KHZ2ABeEQ8gF6BQiLARAB',
    title:
      'Discover the Best Beach in the City: A Serene Escape with Crystal Clear Waters and White Sandy Shores',
    description:
      "Escape the hustle and bustle of city life and discover the best beach in town! This serene oasis is a true hidden gem, with crystal clear waters and white sandy shores that will transport you to a tropical paradise. Located just a short drive from the city, the beach offers a peaceful respite from the urban chaos, with plenty of space to spread out and relax. Whether you're looking to soak up the sun, take a refreshing swim, or simply enjoy a leisurely stroll along the shore, the best beach in the city has something for everyone. With its tranquil atmosphere and breathtaking views, it's the perfect place to unwind and recharge your batteries. So pack your sunscreen, grab a beach towel, and get ready to experience the ultimate in relaxation and natural beauty at the best beach in town.",
    type: 'Beach',
    media: [
      'https://ucarecdn.com/c7414c37-d445-4720-8efd-2f7d5e560557/pexelstarynelliott33270581920x108024fps.mp4',
    ],
    images: [
      'https://ucarecdn.com/325f7b1f-1be4-4e5d-b680-ed0375d8918f/benjaminvorosAD6rn3vqG7ounsplash.jpg',
      'https://ucarecdn.com/3ac55893-fe60-403a-b304-240bc98e3cbf/gaddafirusli2ueUnL4CkV8unsplash.jpg',
      'https://ucarecdn.com/69eb5379-3908-4c31-8fe2-ca9448f52315/seanoulashinKMn4VEeEPR8unsplash.jpg',
    ],
  },
];
