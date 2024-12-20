import Image from 'next/image';

interface CardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: CardDataType[] = [
    {
        imgSrc: '/assets/buyers/ourbuyers.svg',
        percent: '10cr+',
        heading: "Satisfied Customers",
        subheading: "Connecting with us has been a journey of success, evident from the numbers!",
    },
    {
        imgSrc: '/assets/buyers/projectcompleted.svg',
        percent: '100+',
        heading: "Project completed",
        subheading: "Spanning diverse industries, ensuring impactful results.",
    },
    {
        imgSrc: '/assets/buyers/happybuyers.svg',
        percent: '80%',
        heading: "Customer Satisfaction Rate",
        subheading: "Delivering quality and value, one client at a time.",
    },
    {
        imgSrc: '/assets/buyers/teammembers.svg',
        percent: '30+',
        heading: "Expert Team Members",
        subheading: "A talented group driving innovation and excellence.",
    }
];

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((item, index) => (
                    <div className='flex flex-col justify-center items-center' key={index}>
                        <div className='flex justify-center border border-border p-2 w-10 rounded-lg'>
                            <Image src={item.imgSrc} alt={item.heading} width={30} height={30} />
                        </div>
                        <h2 className='text-4xl lg:text-6xl text-black font-semibold text-center mt-5'>{item.percent}</h2>
                        <h3 className='text-2xl text-black font-semibold text-center lg:mt-6'>{item.heading}</h3>
                        <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{item.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Buyers;
