import Image from "next/image";

const testimonials = [
    {
        name: "Amit Verma",
        role: "Marketing Manager",
        text: "Geo Planet’s solutions have transformed our strategy. The insights are incredibly valuable!",
        avatar: "/assets/clientsay/user.png"
    },
    {
        name: "Ravi Sharma",
        role: "Product Designer",
        text: "The user experience is fantastic. Everything is so intuitive and easy to use.",
        avatar: "/assets/clientsay/user.png"
    },
    {
        name: "Neha Gupta",
        role: "CEO, GreenTech Innovations",
        text: "Our team’s productivity has grown significantly since using Geo Planet’s service.",
        avatar: "/assets/clientsay/user.png"
    },
    {
        name: "Vikram Joshi",
        role: "Business Analyst",
        text: "TThe analytics are precise and easy to understand. Highly recommended!",
        avatar: "/assets/clientsay/user.png"
    }
];

const Clientsay = () => {
    return (
        <div className="mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8">
            <h3 className='text-navyblue text-center text-4xl lg:text-6xl font-semibold mb-10'>What Our Clients Say</h3>
            <h4 className="text-lg font-normal text-darkgray text-center mb-12">
            Discover how we’ve helped businesses across various sectors achieve their goals.
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105">
                        <Image src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} width={80} height={80} className="rounded-full mb-4" />
                        <h5 className="text-xl font-semibold text-center">{testimonial.name}</h5>
                        <h6 className="text-md font-medium text-gray-500 mb-2">{testimonial.role}</h6>
                        <p className="text-center text-gray-700">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clientsay;
