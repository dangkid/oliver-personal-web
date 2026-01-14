"use client";

import { GithubIcon, LinkedinIcon, TwitterIcon, EmailIcon } from "./Icons";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  username?: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/dangkid",
    icon: <GithubIcon className="w-5 h-5" />,
    username: "@dangkid"
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: <LinkedinIcon className="w-5 h-5" />,
    username: "Oliver Dangelo"
  },
  {
    name: "Twitter",
    url: "#",
    icon: <TwitterIcon className="w-5 h-5" />,
    username: "@odangelo"
  },
  {
    name: "Email",
    url: "mailto:oliver@ejemplo.com",
    icon: <EmailIcon className="w-5 h-5" />,
    username: "oliver@ejemplo.com"
  },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 transition-all duration-300 hover:scale-110"
          aria-label={social.name}
        >
          <div className="text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">
            {social.icon}
          </div>
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {social.username || social.name}
          </div>
        </a>
      ))}
    </div>
  );
}
