"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import client from "../../public/images/client.webp";
import client1 from "../../public/images/client1.jpg";
import client2 from "../../public/images/client2.webp";
import client3 from "../../public/images/client3.webp";
import client4 from "../../public/images/client4.webp";
import client5 from "../../public/images/client5.webp";
import client6 from "../../public/images/client6.webp";
import client7 from "../../public/images/client7.webp";
import client8 from "../../public/images/client8.jpg";
import client9 from "../../public/images/client9.jpg";
import client10 from "../../public/images/client10.webp";
import client11 from "../../public/images/client11.webp";
import Link from "next/link";

const Testimonial = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed:5000,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const tesmonials = [
    {
      icon: "",
      name: "tradie_ltd",
      comment:
        "Sonaly is very good freelancer! She completed converting from Figma design in very short time. Very good eye for details and quality of work. Thanks!",
    },
    {
      icon: client1,
      name: "matteohon892",
      comment:
        "Sonali is an exceptional seller. She successfully delivered a complex interface through a modern and responsive webpage. Extremely approved and highly recommended for anyone in need of a professional React interface of any genre, Sonali's expertise and ability to translate intricate designs into functional, user-friendly web pages stand out. Her dedication to quality and detail ensures a seamless user experience across all device types, making her services invaluable for projects requiring cutting-edge web solutions.",
    },
    {
      icon: client2,
      name: "helenabreo",
      comment:
        "Sonaly was absolutely phenomenal dev, very patience and responsive and above all a quick decision make. She converted my figma desgin to stunning react js website is no time. Thanks you for yoor contribution",
    },
    {
      icon: "",
      name: "alshifa_global",
      comment:
        "Working with you on Fiverr has been a positive experience. Your professionalism, responsiveness, and quality of work have been commendable. I am grateful for your contributions and look forward to potential collaborations in the future.",
    },
    {
      icon: client1,
      name: "matteohon892",
      comment:
        "The React interface designed for us truly stands out for its excellence and the seamless communication it facilitates. The developer has leveraged React's robust capabilities to craft an interface that is not only aesthetically pleasing but also highly functional, ensuring a smooth user experience. The attention to detail in both design and usability aspects is evident, reflecting a deep understanding of user needs and preferences.",
    },
    {
      icon: "",
      name: " oliverdhz",
      comment:
        "She did exactly what I needed! Until now she’s the Best Freelancer I’ve ever met, I’m completely pleased of her work.",
    },
    {
      icon: "",
      name: " oliverdhz",
      comment:
        "She did exactly what I needed! Until now she’s the Best Freelancer I’ve ever met, I’m completely pleased of her work.",
    },
    {
      icon: "",
      name: " tradie_ltd",
      comment:
        " The gig work has been completed in very short time! This seller is unbelievable good :) Very pleased with the service and delivery. The communication was also great. She is very good with Tailwind and the layout for the website is working as expected :) Many thanks!",
    },

    {
      icon: "",
      name: " pps2022569",
      comment:
        "Highly recommended seller! Sonaly did a really good work, with a lot of attention to detail and code quality, and also very good customer support. I'll work with her again in the future for sure, no doubt about it.",
    },
    {
      icon: "",
      name: " raniaa369",
      comment:
        "Amazing! 😍 Delivered the pages exactly how i wanted and on time. Great communication, always kept me updates. Would recommend.",
    },
    {
      icon: client6,
      name: " sid_rama",
      comment:
        "Sonaly is an expert in frontend web development. She is highly skilled in tailwind CSS, Reactjs and website redesign. All her designs were fully responsive. She is also very good at debugging errors. Her communication is top-notch and she speaks fluent English. She met all deadlines. I would love to hire her again.",
    },

    {
      icon: client3,
      name: " edipizarro",
      comment:
        "Sonaly did a fantastic Job. - ReactJS looks exactly as my Figma design. - Code is well structured and easy to read. There are only a few repetitions of code that could have been implemented with components. - Very fast delivery and good documentation - Solved all my reviews without problems. I would recommend her and work with her again.",
    },
    {
      icon: client11,
      name: " ux_artisan",
      comment:
        " Sonaly was just exceptional at communicating and understanding my needs. I've worked with other sellers before but no one comes close to her. I'm a bit a perfectionist when it comes to designing, so I was really appreciative of how she was patient and she even made some great suggestions!",
    },
    {
      icon: client10,
      name: " ranuvijay",
      comment:
        " We had a static website build with tailwind and next js, impressed that the seller is well aware of the modern tech and is also good at communication and revisions, we had a bit of revisions but at last received what I was looking for.",
    },

    {
      icon: client4,
      name: " swebdev",
      comment: "Kind and honest developer. Thank you for all the work.",
    },
    {
      icon: "",
      name: " adnanaitzait",
      comment: " Amazing website designer and her communication are unreal!",
    },
    {
      icon: client5,
      name: " adwertit",
      comment:
        " Great work and quality. Exceeded expectations by a huge margin. Unconditional recommendation!",
    },
    {
      icon: "",
      name: " freeid",
      comment: " Great job, continuing to work together",
    },
    {
      icon: client7,
      name: " alexkwood",
      comment:
        " My first project sonaly_mehr and very happy with the delivered solution. My goto developer for react projects.",
    },
    {
      icon: client8,
      name: " nickyvel",
      comment:
        "Amazing seller and an amazing programmer! All the requirements were met! I would definitely work again with sonaly.",
    },
    {
      icon: client9,
      name: " davidgrabovac",
      comment:
        "She understood the assignment and did everything i asked fore. My first very good experience on fiverr!",
    },
  ];
  const stars = () => {
    const starlist = [];
    for (let index = 1; index <= 5; index++) {
      starlist.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFCE00"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    return starlist;
  };
  return (
    <div
      className="mt-16 mb-0 lg:mt-24 lg:mb-24 px-2 lg:px-10 text-center"
      id="testimonials"
    >
      <h2 className="text-left text-4xl font-bold text-white pt-14 pb-10">
        Testimonials
      </h2>

      <Slider {...settings}>
        {tesmonials.map((testimonial, index) => (
          <div
            key={index}
            className="pt-7 pb-8 mb-5 lg:mb-8 h-[430px] bg-gradient-to-br from-primary-500 to-secondary-500 px-4 rounded-lg relative overflow-auto z-50 text-white"
          >
            <div className="flex justify-center">
              <Image
                src={testimonial.icon ? testimonial.icon : client}
                alt=""
                className="w-[80px] h-[80px] rounded-full"
                unoptimized={true}
              />
            </div>
            <h4 className="font-semibold text-lg capitalize mt-4">
              {testimonial.name}
            </h4>
            <div className="flex gap-1 justify-center">{stars()}</div>
            <div className="flex justify-center">
              <svg
                className="rotate-[180deg] mt-5 mb-2"
                fill="#a31400"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>
            <p className=" leading-7">{testimonial?.comment}</p>
          </div>
        ))}
      </Slider>
      <Link
        href="https://www.fiverr.com/sonaly_mehr/develop-react-responsive-website-c843"
        target="_blank"
        className="cursor-pointer mt-16  lg:mt-24 px-1 inline-block py-1 sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
      >
        <span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-10 py-2">
          See More
        </span>
      </Link>
    </div>
  );
};

export default Testimonial;
