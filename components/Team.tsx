"use client";
import React from "react";
import { TbCopy } from "react-icons/tb";

// Define TypeScript types for team members
interface TeamMember {
  id: number;
  name: string;
  position: string;
  email: string;
  profilePicture: string;
  // Add more properties as needed
}

const Team: React.FC = () => {
  // Dummy data for team members (replace with your actual team data)
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Adam Nzinza",
      position: "Creative & Marketing Strategist",
      email: "adamnzinza@gmail.com",
      profilePicture: "/nzinza.jpeg",
    },
    {
      id: 2,
      name: "Emmanuel Makoye",
      position: "Software Engineer and Resource Architect",
      email: "elm102@case.edu",
      profilePicture: "/makoye.jpeg",
    },
    {
      id: 3,
      name: "Rashidi Shabani",
      position: "Chief Operating Officer",
      email: "rashidishabani@gmail.com",
      profilePicture: "/big.png",
    },
  ];

  const copyEmailToClipboard = (email: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    alert("Email copied to clipboard: " + email);
  };

  return (
    <div className="p-5 text-center">
      <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
      <br />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <li
            key={member.id}
            className="rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={member.profilePicture}
              alt={`${member.name}'s Profile`}
              className="rounded-full h-32 w-32 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-lg">{member.position}</p>
            <div className="flex items-center mt-2">
              <p className="mr-2">Email: {member.email}</p>
              <button
                onClick={() => copyEmailToClipboard(member.email)}
                className="ml-2 p-1 bg-neat-color text-white rounded hover:bg-blue-400"
              >
                <TbCopy />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
