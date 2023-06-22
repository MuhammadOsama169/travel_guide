import prisma from '../lib/prisma'
import { v4 as uuidv4 } from 'uuid';


interface PostCreateInput {
    id: string;
    title: string;
    content?: string;
    createdAt: Date;
    image:string[];
  }
const posts:PostCreateInput[] = [
  {
    title: 'Egypt, Cairo',
    content:
    'Are you ready to explore the wonders of Cairo? Join me on a journey to discover the ancient pyramids, immerse yourself in the vibrant markets, and unravel the rich history of this captivating city.',
    createdAt: generateRandomDate(),
    image: [
      'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1685261734/cairo_xnfp5k.jpg',
    ],
    id:generateRandomId(),

  },
  {
    title: 'Turkey, Istanbul',
    content:
      'Calling all adventurers! Istanbul awaits you with open arms. Let me guide you through the cultural and historical treasures of this enchanting city. From the majestic Hagia Sophia to the bustling Grand Bazaar, every corner of Istanbul holds a story worth exploring.',
    createdAt: generateRandomDate(),
    image: [
      'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1685261735/146_zdrg3m.jpg'
    ],
    id:generateRandomId(),

  },
  {
    title: 'China, Xian',
    content:
      'Step into the realm of ancient China and witness the marvels of Xian. Join me as we unravel the secrets of the Terracotta Army and delve into the rich heritage of this historical capital. Prepare to be amazed',

    createdAt: generateRandomDate(),
    image: [
      'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1685261735/xian_terracotta_warriors_photo_1-a8c6_1400x788_bxpddu.jpg',
    ],
    id:generateRandomId(),
  },
  {
    title: 'France, Marseille',
    content:
      'Bonjour! Embark on a journey to Marseille, a city that embodies the essence of France. Together, let us wander through its charming streets, indulge in delectable cuisine, and bask in the breathtaking views of the Mediterranean coastline. Get ready for an unforgettable experience!',

    createdAt: generateRandomDate(),
    image: [
      'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1685261735/marseille-so-attractive-miami-pano_nl7783.jpg'
    ],
    id:generateRandomId(),
  },
  {
    title: 'Kazakhstan, Almaty',
    content:
      'Welcome to Almaty, the gateway to natural wonders. Join me in exploring the awe-inspiring landscapes of Kazakhstan, where majestic mountains meet modernity. Lets uncover the hidden gems and embrace the unique beauty of Almaty.',

    createdAt: generateRandomDate(),
    image: [
      'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1685261735/Kaindy-Lake-819x1024_hjs4h2.jpg',
    ],
    id:generateRandomId(),
  },
  {
    title: 'Portugal, Porto',
    content:
      'Discover the magic of Porto, a city that captivates hearts. Allow me to introduce you to its vibrant culture, stunning architecture, and the irresistible charm of the Douro River. Together, let us create unforgettable memories in this enchanting Portuguese gem.',
    id: generateRandomId(),
    createdAt: generateRandomDate(),
    image: [
      'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1685261735/marseille_miqhnu.jpg'
    ],
  },
  {
    title: 'Italy, Naples',
    content:
      'Buongiorno! Come and experience the soul of Italy in Naples. Lets indulge in the world-famous pizza, explore the ancient ruins of Pompeii, and venture up the fiery Mount Vesuvius. Get ready to fall in love with the rich history and undeniable charm of Naples.',
    id: generateRandomId(),
    createdAt: generateRandomDate(),
    image: [
      'https://res.cloudinary.com/dcxx6ihq2/image/upload/v1685261734/istockphoto-1399883837-612x612_suyctj.jpg'
    ],

  },
];


function generateRandomId() {
  return uuidv4();
}

function generateRandomDate(): Date {
    const startDate = new Date(2000, 0, 1).getTime();
    const endDate = new Date().getTime();
    const randomTimestamp = startDate + Math.random() * (endDate - startDate);
    return new Date(randomTimestamp);
  }

async function main(){
    console.log(`Start seeding...`)
    for (const post of posts){
        await prisma.post.create({data: post})
    }
    console.log(`Seeding finished!`)
}

main().then(async ()=>{
    await prisma.$disconnect()
})
.catch(async(e) =>{
    console.log(e);
    await prisma.$disconnect()
    process.exit(1)
})