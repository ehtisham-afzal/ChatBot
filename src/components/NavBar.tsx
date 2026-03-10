import { siteConfig } from "config/site";
import Image from "next/image";
import Link from "next/link";
import SignInOrUserAvatar from "./SignInOrUserAvatar";
import { MessageSquareIcon } from "lucide-react";

export default function NavBar() {
  const navigation = [
    { title: "Features", path: "/#features" },
    { title: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800/60 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            className="rounded-lg bg-gray-800/60 size-9 p-1 transition-transform group-hover:scale-105"
            src="/Bot.png"
            width={40}
            height={40}
            alt={siteConfig.name + " logo"}
          />
          <span className="hidden text-sm font-semibold text-gray-200 sm:block">
            {siteConfig.name}
          </span>
        </Link>

        {/* Navigation links */}
        <ul className="flex items-center gap-1">
          {navigation.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.path}
                className="rounded-md px-3 py-1.5 text-sm text-gray-400 transition-colors hover:bg-gray-800/60 hover:text-gray-100"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/chatbot"
            className="hidden items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-gray-400 transition-colors hover:bg-gray-800/60 hover:text-gray-100 sm:flex"
          >
            <MessageSquareIcon className="h-3.5 w-3.5" />
            Chat
          </Link>
          <SignInOrUserAvatar />
        </div>
      </div>
    </nav>
  );
}
