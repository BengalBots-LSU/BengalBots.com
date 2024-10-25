import type React from 'react';
import { IconBrandLinkedin, IconMail, IconBrandGithub, IconWorldWww, IconSchool } from '@tabler/icons-react';
import type { ImageProps } from '@static/images';

interface SocialLink {
  link: string;
  variant: "email" | "linkedin" | "google-scholar" | "github" | "website";
}

interface TeamMemberProps {
  name: string;
  role: string;
  quote: string;
  image: ImageProps | string;
  socials?: SocialLink[];
}

export const TeamMember: React.FC<TeamMemberProps> = ({ name, role, quote, socials, image }) => {
  const renderSocialIcon = (variant: SocialLink['variant']) => {
    switch (variant) {
      case 'email':
        return <IconMail stroke={2} />;
      case 'linkedin':
        return <IconBrandLinkedin stroke={2} />;
      case 'github':
        return <IconBrandGithub stroke={2} />;
      case 'website':
        return <IconWorldWww stroke={2} />;
      case 'google-scholar':
        return <IconSchool stroke={2} />;
      // Add more cases if needed
      default:
        return null;
    }
  };

  const renderSocialLinks = () => {
    return socials?.map((social, index) => (
      <a
        key={index}
        className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        href={social.link}
      >
        {renderSocialIcon(social.variant)}
      </a>
    ));
  };

  return (
    <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
      <div className="flex items-center gap-x-4">
        <img className="rounded-full size-20" src={image} alt="Avatar" />
        <div className="grow">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200 mb-0">
            {name}
          </h3>
          <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
            {role}
          </p>
        </div>
      </div>
      <p className="mt-4 text-gray-500 dark:text-neutral-500">
        {quote}
      </p>

      {/* Social Brands */}
      <div className="mt-4 space-x-2">
        {renderSocialLinks()}
      </div>
      {/* End Social Brands */}
    </div>
  );
};

export default TeamMember;