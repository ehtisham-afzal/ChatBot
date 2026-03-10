import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { marked } from "marked";
import MessageActions from "./MessageActions";

type MessageCompProps = {
  role: string;
  message: string;
  time: string;
  messageId: string;
};

const MessageComp = ({ MessageData }: { MessageData: MessageCompProps }) => {
  const { role, message, time } = MessageData;
  const htmlContent = marked(message);

  return (
    <div
      className={`flex w-full animate-fade-in ${role === "bot" ? "items-end justify-start space-x-2 pr-[10%] sm:pr-[20%]" : "items-start justify-end pl-[10%] sm:pl-[20%]"}`}
    >
      {role === "bot" && (
        <Avatar className="mb-6 size-9 shrink-0 border border-muted-foreground/30 bg-secondary p-1">
          <AvatarImage src="/Bot.png" alt={"bot Image"} />
          <AvatarFallback>BT</AvatarFallback>
        </Avatar>
      )}
      <div className="flex flex-col gap-1.5">
        <div
          className={`${
            role === "bot"
              ? "rounded-bl-none bg-primary text-secondary dark:prose-stone"
              : "rounded-br-none bg-blue-600 text-white prose-p:my-2"
          } prose prose-sm prose-invert h-fit rounded-xl border px-4 shadow-sm sm:prose-base`}
        >
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
        <div className="flex items-center justify-between gap-2 px-1 text-xs text-muted-foreground">
          {role === "bot" && <MessageActions message={message} />}
          <span className={role === "user" ? "ml-auto" : ""}>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageComp;
