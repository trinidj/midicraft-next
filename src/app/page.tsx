"use client"

import { Upload, Clapperboard, Cookie, Info } from "lucide-react"

import { Header } from "@/components/layout/header"
import { Main } from "@/components/layout/main"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export default function Home() { 
  return (
    <div className="flex flex-col justify-center items-center my-20 gap-14">
      <Header />
      <Main>
        <div className="flex justify-center gap-6">
          <div id="left-side">
            <Card className="flex flex-col justify-center w-md">
              <div className="flex justify-center">
                <div className="flex items-center justify-center bg-[#ff2056]/20 p-6 rounded-full">
                  <Upload 
                    size={35}
                    className="text-[#ff2056]"
                  />
                </div>
              </div>

              <CardHeader className="flex flex-col justify-center items-center">
                <CardTitle className="text-2xl">Upload your Audio Files</CardTitle>
                <CardDescription>Click to Browse</CardDescription>
              </CardHeader>

              <CardContent className="flex items-center justify-center">
                <Input type="file" className="cursor-pointer" accept=".mp3,.wav,.flac,.m4a,.ogg,audio/mpeg,audio/wav,audio/flac,audio/mp4,audio/ogg" />
              </CardContent>

              <CardFooter className="flex justify-center text-muted-foreground text-sm">
                Supports MP3, WAV, FLAX, OGG
              </CardFooter>
            </Card>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-muted-foreground font-semibold text-sm">Or</p>
          </div>

          <div id="right-side" className="flex flex-col w-md gap-8">
            {/* Youtube URL Card */}
            <Card>
              <CardHeader className="flex items-center gap-2">
                <CardTitle className="flex items-center gap-2">
                  <Clapperboard 
                    size={20}
                    className="text-[#ff2056]"
                  />
                  YouTube URLs
                </CardTitle>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info 
                        size={14}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Supports individual videos and full playlists</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardHeader>

              <CardContent>
                <Textarea className="resize-none h-16" placeholder="Add one URL per line for batch processing" />
              </CardContent>
            </Card>

            {/* Cookies Card */}
            <Card>
              <CardHeader className="flex items-center gap-2">
                <CardTitle className="flex items-center gap-2">
                  <Cookie 
                    size={20}
                    className="text-[#ff2056]"
                  />
                  Cookie File
                </CardTitle>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info 
                        size={14}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Export cookies.txt from your browser using a cookie extension while logged into YouTube</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardHeader>

              <CardContent>
                <Input type="file" />
              </CardContent>
            </Card>
          </div> 
        </div>

        <Button className="cursor-pointer">Convert</Button>
      </Main>
    </div>
  )
}