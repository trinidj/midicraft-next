"use client"

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        size="icon"
        variant="outline"
        className="cursor-pointer"
        disabled
      >
        <Sun className="opacity-0" />
      </Button>
    )
  }

  return (
    <Button
      size="icon"
      variant="outline"
      className="cursor-pointer"
      onClick={() => setTheme(theme === 'dark' ? 'light': 'dark')}
    >
      {theme === 'light' ? <Sun /> : <Moon />}
    </Button>
  )
}