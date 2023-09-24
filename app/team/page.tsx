import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  imgSrc: string;
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

    <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
      {description}
    </p>
  </div>
);

const TeamPage: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      imgSrc: 'https://source.unsplash.com/mEZ3PoFGs_k',
      name: 'Arthur Melo',
      role: 'Director',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.',
    },
    {
      imgSrc: 'https://source.unsplash.com/QXevDflbl8A',
      name: 'Amelia Anderson',
      role: 'Lead Stylist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.',
    },
    {
      imgSrc: 'https://source.unsplash.com/C8Ta0gwPbQg',
      name: 'Olivia Wathan',
      role: 'Hair Stylist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      name: 'John Doe',
      role: 'Hair Stylist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.',
    },
  ];

  return (
    <section className="mt-14 mb-32">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl">
          Our <span className="text-gray-500">Executive Team</span>
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center ">
        Experience the artistry and expertise of our talented team of salon professionals, dedicated to bringing out your natural beauty and enhancing your unique style.
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
    </section>
  );
};

export default TeamPage;
