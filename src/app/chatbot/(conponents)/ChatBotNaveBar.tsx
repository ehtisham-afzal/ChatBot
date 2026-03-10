import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";
import EllipsisMenus from "./EllipsisMenus";

const ChatBotNaveBar = () => {
  return (
    <nav className="flex w-full max-w-screen-md items-center justify-between border-b bg-background/95 p-2.5 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-3">
        <div className="relative">
          <Image
            className="size-10 rounded-full border border-muted-foreground/30 bg-secondary p-1"
            src="/Bot.png"
            width={40}
            height={40}
            alt="ChatBot logo"
          />
          {/* Online indicator */}
          <span className="absolute bottom-0 right-0 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-background"></span>
          </span>
        </div>
        <div className="flex h-full w-fit flex-col">
          <h2 className="text-sm font-semibold leading-tight">ChatBot</h2>
          <p className="text-xs text-green-500">Online · Powered by AI</p>
        </div>
      </div>
      <ul className="flex items-center gap-1">
        <ModeToggle />
        <EllipsisMenus />
      </ul>
    </nav>
  );
};

export default ChatBotNaveBar;
