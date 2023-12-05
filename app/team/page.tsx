"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import sting from '../media/team/sting.jpg';
import chelsea from '../media/team/chelsea.jpg';
import soya from '../media/team/soya.jpg';
import jenny from '../media/team/jenny.jpg';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

interface TeamMemberProps {
  imgSrc: any;
  name: string;
  role: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  imgSrc,
  name,
  role,
  description,
}) => (
  <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
    <div className="flex flex-col sm:-mx-4 sm:flex-row">
      <Image
        className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
        src={imgSrc}
        alt=""
        width={500}
        height={500}
      />

      <div className="mt-4 sm:mx-4 sm:mt-0">
        <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
          {name}
        </h1>

        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
          {role}
        </p>
      </div>
    </div>

    <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300 tracking-tight">
      {description}
    </p>
  </div>
);

const TeamPage: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      imgSrc: soya,
      name: "Soya",
      role: "Director",
      description:
        "With an impressive 16-year tenure as a senior hairstylist, she brings a wealth of expertise from renowned organizations such as Bblunt, Loreal, and Cloud 9. Her extensive skill set encompasses the latest trends, cutting-edge and color techniques, and a nuanced understanding of diverse hair types. Known for delivering exceptional results, she seamlessly combines creativity and precision, ensuring clients not only leave satisfied but transformed. A true professional, her background reflects an unwavering commitment to excellence and a passionate dedication to providing top-notch hairstyling services. With a proven track record, she consistently infuses every client experience with creativity, precision, and a deep understanding of the latest trends, setting her apart as a distinguished figure in the beauty industry.",
    },
    {
      imgSrc: chelsea,
      name: "Chelsea",
      role: "Lead Stylist",
      description:
        "A highly skilled beautician with a delightful personality, she is always dedicated to enhancing your experience. Prioritizing the delivery of top-quality service, she consistently works her magic to leave clients amazed with her skillful touch. Her expertise has played a pivotal role in boosting the confidence of numerous clients, as she ensures that every visitor departs with a smile and a profound sense of satisfaction.",
    },
    {
      imgSrc: sting,
      name: "Sting",
      role: "Hair Stylist",
      description:
        "A seasoned professional with an impressive 8-year tenure in the salon industry, Sting has honed his skills at distinguished establishments such as Aboom Salon, Kukaz Salon, and Swan & Beyonce Salon. His wealth of experience and expertise make him a valuable addition to our team. Sting's passion for hairstyling, coupled with his unwavering commitment to excellence, ensures that clients consistently receive top-notch service during every visit.",
    },
    {
      imgSrc: jenny,
      name: "Jenny",
      role: "Hair Stylist",
      description:
        "As a skilled professional at PIXIE UNISEX SALON SPA, Jenny boasts a year of comprehensive experience in delivering top-notch beauty services. Her expertise spans a diverse range of beauty treatments, showcasing her dedication and proficiency in the salon's offerings. Jenny's unwavering commitment to excellence shines through, making her an invaluable asset to our team.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
      viewport={{ once: true }}
      className="mt-14 mb-32"
    >
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl">
          Our <span className="text-gray-500">Executive Team</span>
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center ">
          Experience the artistry and expertise of our talented team of salon
          professionals, dedicated to bringing out your natural beauty and
          enhancing your unique style.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              imgSrc={member.imgSrc}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamPage;
