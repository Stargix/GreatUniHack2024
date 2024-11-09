'use client'

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Heart, Image as ImageIcon, Mic, Paperclip, Send } from "lucide-react"

export default function Component() {
  const [message, setMessage] = useState("")
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md mx-auto overflow-hidden bg-white">
        {/* Status Bar */}
        <div className="px-4 py-2 text-sm text-muted-foreground flex justify-between items-center">
          <div>9:41</div>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
          </div>
        </div>
        
        {/* Chat Header */}
        <div className="p-4 border-b flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>OG</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-semibold">Olivia Grant</div>
            <div className="text-sm text-green-500">Online</div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mic className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Chat Messages */}
        <div className="p-4 space-y-4 min-h-[400px]">
          <div className="max-w-[80%] bg-primary text-primary-foreground rounded-2xl p-3 ml-auto">
            Hi, I&apos;m doing good, thanks for asking. How about you?
          </div>
          
          <div className="max-w-[80%] bg-muted rounded-2xl p-3">
            Same here, everything&apos;s good. Have you made any plans for vacation yet?
          </div>
          
          {/* Voice Message */}
          <div className="max-w-[80%] bg-primary text-primary-foreground rounded-2xl p-3 ml-auto flex items-center gap-2">
            <div className="w-32 h-6 bg-primary-foreground/20 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/40 to-transparent animate-pulse" />
            </div>
            <span className="text-sm">00:35</span>
          </div>
          
          {/* Image Message */}
          <div className="max-w-[80%] space-y-2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Mountain landscape"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-muted rounded-2xl p-3">
              What if we take a vacation to Bromo?
            </div>
          </div>
          
          <div className="max-w-[80%] bg-primary text-primary-foreground rounded-2xl p-3 ml-auto flex items-center gap-2">
            Wow! <Heart className="h-4 w-4 fill-current" />
          </div>
        </div>
        
        {/* Input Area */}
        <div className="p-4 border-t flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Input
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 rounded-full"
          />
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mic className="h-4 w-4" />
          </Button>
          <Button size="icon" className="rounded-full">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}