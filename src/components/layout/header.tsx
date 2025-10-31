"use client"

import { useState } from 'react'

import { Sun, Music, Settings, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  FieldLegend,
  FieldDescription,
  FieldGroup,
  FieldSet,
  Field,
  FieldLabel,
} from "@/components/ui/field"

import {
  Select, 
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from "@/components/ui/tooltip"

function Header() { 
  const midiModels = ['Piano', 'Transkun']
  const [showAdvanced, setShowAdvanced] = useState(false)

  return (
    <header className="flex flex-col items-center gap-6">
      <div className="fixed items-center top-20 right-20 flex gap-2 z-50">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon" className="group cursor-pointer">
              <Settings className="transition-transform duration-300 group-hover:rotate-90"/>
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Settings 
                  size={20}
                  className="text-purple-800"
                />
                Conversion Settings
              </DialogTitle>
              <DialogDescription>
                Configure your MIDI conversion settings and output preferences.
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-6">
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Transcription Model</FieldLabel>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {midiModels.map((model) => (
                            <SelectItem key={model} value={model}>
                              { model }
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
              </FieldSet>

              <FieldSet>
                <FieldLegend>Timing Parameters</FieldLegend>
                <FieldDescription>Control how audio is processed and divided during transcription</FieldDescription>

                <FieldGroup>
                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <div className="flex items-center gap-2">
                        <FieldLabel>Chunk Duration (sec)</FieldLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info size={14} />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Increasing the audio processing chunk size improves performance but results in higher memory consumption</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      
                      <Input type="number" />
                    </Field>

                    <Field>
                      <div className="flex items-center gap-2">
                        <FieldLabel>Max Notes</FieldLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info 
                                size={14}
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Maximum note duration filter. Lower values remove sustained notes</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>

                      <Input type="number" />
                    </Field>

                    <Field>
                      <div className="flex items-center gap-2">
                        <FieldLabel>Start Time (sec)</FieldLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info 
                                size={14}
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Trim audio start point. Leave at 0 to start from beginning</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>

                      <Input type="number" />
                    </Field>

                    <Field>
                      <div className="flex items-center gap-2">
                        <FieldLabel>End Time (sec, 0=full)</FieldLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info 
                                size={14}
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Trim audio endpoint. Leave at 0 to process to the end</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      
                      <Input type="number" />
                    </Field>
                  </div>
                </FieldGroup>
              </FieldSet>

              <FieldSet>
                <FieldLegend>Output Options</FieldLegend>
                <FieldDescription>Configure MIDI file output format and quality settings.</FieldDescription>

                <FieldGroup>
                  <Field orientation="horizontal">
                    <Checkbox defaultChecked />
                    <Label htmlFor="max-note-filter">Max Note Duration Filter</Label>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info 
                            size={14}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Keep all sustained notes without filtering</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Field>
                  
                  <div className="flex flex-col">
                    <Field orientation="horizontal">
                      <Checkbox
                        checked={showAdvanced}
                        onCheckedChange={(checked) => setShowAdvanced(checked === true)}
                      />
                      <Label htmlFor="zip-export">Export all as ZIP file</Label>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info 
                              size={14}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Bundle all MIDI files into one ZIP file instead of individual downloads</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Field>
                  </div>

                  
                  {showAdvanced && (
                    <Field>
                      <Label>ZIP Filename</Label>
                      <Input type="text" className='h-8'/>
                    </Field>
                  )}
                  

                  <Field orientation="horizontal">
                    <Checkbox />
                    <Label htmlFor="save-mp3">Save audio files (MP3)</Label>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info 
                            size={14}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Keep the downloaded / converted MP3 files instead of deleting them after MIDI conversion</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </form>

            <DialogFooter className="gap-2">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="cursor-pointer">Cancel</Button>
              </DialogClose>
              <Button type="submit" className="cursor-pointer">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-purple-100 p-4 rounded-xl">
        <Music 
          size={40}
          className="text-purple-800"
        />
      </div>
      <h1 className="text-6xl font-bold">
        MIDI Craft
      </h1>
      <p className="text-2xl text-gray-500">
        Convert Youtube Links or Audio files to MIDI Files
      </p>
    </header>
  )
}

export { Header }