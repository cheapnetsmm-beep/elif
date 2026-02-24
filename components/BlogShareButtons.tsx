"use client";

import { Mail, MessageCircle, Linkedin, Twitter } from "lucide-react";

const SITE_URL = "https://elifnazoksuz.com";

type Props = { title: string; slug: string };

export default function BlogShareButtons({ title, slug }: Props) {
  const url = `${SITE_URL}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: MessageCircle,
      className: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
    },
    {
      label: "Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: Twitter,
      className: "hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]",
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
      className: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
    },
    {
      label: "E-posta",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: Mail,
      className: "hover:bg-primary-600 hover:text-white hover:border-primary-600",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-gray-600 mr-1">Paylaş:</span>
      {links.map(({ label, href, icon: Icon, className }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-600 transition-colors ${className}`}
          aria-label={`${label} ile paylaş`}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
