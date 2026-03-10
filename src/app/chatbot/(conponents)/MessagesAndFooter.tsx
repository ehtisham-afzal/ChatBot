"use client";

import { useRef, useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MessageComp from "./MessageComp";
import { ArrowUp, PaperclipIcon, SparklesIcon } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type Message = {
  role: string;
  message: string;
  time: string;
  messageId: string;
};

export default function MessagesAndFooter() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      message: "#### Welcome to chatbot.co, how can I help you?",
      time: "09.12PM",
      messageId: "1",
    },
    {
      role: "user",
      message: "how to deploy webapp into vercel",
      time: "12:01 PM",
      messageId: "2",
    },
    {
      role: "bot",
      message:
        'Deploying a web app to Vercel is straightforward. Here\u2019s a step-by-step guide to help you:\n\n### 1. **Set Up Your Project**\n   - Ensure your project is version-controlled using Git.\n   - Make sure your project is a compatible framework (e.g., Next.js, React, Vue, etc.) or a static site.\n\n### 2. **Install Vercel CLI (Optional)**\n   - You can deploy directly from the Vercel website, but the Vercel CLI gives you more control.\n   - Install it using npm:\n     ```bash\n     npm install -g vercel\n     ```\n\n### 3. **Deploy from the Vercel Dashboard**\n   1. Go to [Vercel\'s website](https://vercel.com/) and log in or sign up.\n   2. Click on the "New Project" button.\n   3. Import your Git repository (from GitHub, GitLab, or Bitbucket).\n   4. Configure your project settings (build command, output directory, etc.). Vercel usually detects these settings automatically.\n   5. Click "Deploy."\n\n### 4. **Deploy Using Vercel CLI**\n   1. Navigate to your project directory:\n      ```bash\n      cd your-project-directory\n      ```\n   2. Run the following command:\n      ```bash\n      vercel\n      ```\n   3. Follow the prompts to link your project to a Vercel account and set up deployment configurations.\n   4. Once completed, Vercel will build and deploy your project. You\'ll receive a live URL.\n\n### 5. **Environment Variables (Optional)**\n   - If your project requires environment variables, you can set them up in the Vercel dashboard under the "Environment Variables" section or by using the CLI:\n     ```bash\n     vercel env add\n     ```\n\n### 6. **Custom Domain (Optional)**\n   - You can add a custom domain by going to your project in the Vercel dashboard, navigating to the "Domains" tab, and adding a domain.\n\n### 7. **Continuous Deployment**\n   - Vercel automatically sets up continuous deployment, meaning every push to your main branch will trigger a new deployment.\n\nThat\'s it! Your web app should now be live on Vercel. If you run into any issues, Vercel\'s documentation and community support are great resources.',
      time: "12:02 PM",
      messageId: "3",
    },
    {
      role: "user",
      message: " and how to netlify",
      time: "12:02 PM",
      messageId: "4",
    },
    {
      role: "bot",
      message:
        'Deploying a web app to Netlify is also a simple process. Here\u2019s how you can do it:\n\n### 1. **Set Up Your Project**\n   - Make sure your project is version-controlled using Git.\n   - Ensure your project is compatible (e.g., React, Vue, Gatsby, static site, etc.).\n\n### 2. **Install Netlify CLI (Optional)**\n   - Like Vercel, you can deploy directly from the Netlify website, but the CLI provides more flexibility.\n   - Install it using npm:\n     ```bash\n     npm install -g netlify-cli\n     ```\n\n### 3. **Deploy from the Netlify Dashboard**\n   1. Go to [Netlify\'s website](https://www.netlify.com/) and log in or sign up.\n   2. Click on "Add new site" and select "Import an existing project."\n   3. Connect your Git repository (from GitHub, GitLab, or Bitbucket).\n   4. Configure your project settings (build command, publish directory, etc.). Netlify usually auto-detects these settings.\n   5. Click "Deploy site."\n\n### 4. **Deploy Using Netlify CLI**\n   1. Navigate to your project directory:\n      ```bash\n      cd your-project-directory\n      ```\n   2. Log in to Netlify via the CLI:\n      ```bash\n      netlify login\n      ```\n   3. Deploy your site:\n      ```bash\n      netlify deploy\n      ```\n   4. Follow the prompts to configure your site. You\u2019ll be asked to link it to an existing site or create a new one.\n   5. After the initial deployment, you can deploy updates with:\n      ```bash\n      netlify deploy --prod\n      ```\n   6. Netlify will provide a live preview URL for each deployment, and if deploying to production, it will update the main site URL.\n\n### 5. **Environment Variables (Optional)**\n   - You can add environment variables in the Netlify dashboard under the "Site settings" -> "Build & deploy" -> "Environment" section.\n\n### 6. **Custom Domain (Optional)**\n   - You can add a custom domain by navigating to "Domain settings" in your site\u2019s dashboard and following the instructions to configure DNS.\n\n### 7. **Continuous Deployment**\n   - By linking your Git repository, Netlify automatically sets up continuous deployment. Any push to your main branch will trigger a new deployment.\n\n### 8. **Netlify Functions (Optional)**\n   - If your project requires serverless functions, you can add them in a `netlify/functions` directory. They will automatically be deployed as Netlify Functions.\n\nYour web app should now be live on Netlify. The platform also provides an intuitive dashboard for monitoring and managing your site. If you need more advanced settings or run into issues, Netlify\u2019s documentation is very helpful.',
      time: "12:02 PM",
      messageId: "5",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      role: "user",
      message: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      messageId: Date.now().toString(),
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        role: "bot",
        message: "This is a simulated bot response.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        messageId: (Date.now() + 1).toString(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <ScrollArea className="h-full max-h-full px-3 pb-16">
        {/* ChatBot Avatar */}
        <div className="flex h-full flex-col items-center justify-center space-y-3 pb-16 pt-8 animate-fade-in">
          <div className="relative">
            <Avatar className="h-16 w-16 border-2 border-muted-foreground/30 bg-secondary p-2 shadow-md">
              <AvatarImage src="/Bot.png" alt="ChatBot" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0.5 right-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-xl font-bold">Chatbot</h2>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <SparklesIcon className="h-3 w-3 text-blue-400" />
              <span>AI-powered assistant, here to help you</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            {["Explain a concept", "Write some code", "Summarize text"].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInputValue(suggestion)}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* ChatBot Messages */}
        <div className="flex flex-1 flex-col space-y-3">
          {messages.map((message) => (
            <MessageComp key={message.messageId} MessageData={message} />
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-end space-x-2 pr-[10%] sm:pr-[20%] animate-fade-in">
              <Avatar className="size-9 border border-muted-foreground/30 bg-secondary p-1 mb-6">
                <AvatarImage src="/Bot.png" alt="bot Image" />
                <AvatarFallback>BT</AvatarFallback>
              </Avatar>
              <div className="rounded-lg rounded-bl-none border bg-primary px-4 py-3 shadow">
                <div className="flex items-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="inline-block h-2 w-2 rounded-full bg-secondary animate-bounce-dot"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div ref={messagesEndRef} className="block h-4 w-full" />
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      {/* Input footer */}
      <footer className="absolute bottom-3 flex w-[97%] items-end self-center overflow-hidden rounded-2xl border bg-background shadow-md transition-shadow focus-within:shadow-lg focus-within:border-blue-500/40">
        <button
          type="button"
          className="mb-2.5 ml-3 flex h-5 w-5 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Attach file"
        >
          <PaperclipIcon className="h-4 w-4" />
        </button>
        <textarea
          onKeyDown={handleKeyDown}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          rows={1}
          dir="auto"
          placeholder="Ask me anything…"
          className="mx-3 mb-2.5 h-full max-h-[25dvh] min-h-full flex-1 resize-none bg-transparent text-sm focus:outline-none"
        />
        <Button
          size="sm"
          variant={inputValue.trim() ? "default" : "secondary"}
          disabled={!inputValue.trim() || isTyping}
          className="mb-2 mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-0 transition-all"
          onClick={sendMessage}
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </footer>
    </>
  );
}
