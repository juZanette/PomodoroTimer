import React from 'react'
import Box from '@material-ui/core/Box'
import { CountdownCircle } from './components/CountdownCircle'
import { ToggleButton } from './components/ToggleButton'
import { RoundsCounter } from './components/RoundsCounter'
import { ResetButton } from './components/ResetButton'
import { SkipButton } from './components/SkipButton'
import { LabelsMenuButton } from './components/LabelsMenuButton'
import { FullscreenDialog } from './components/Labels/FullscreenDialog'
import { DesktopDialog } from './components/Labels/DesktopDialog'

export const Timer = () => {
  return (
    <Box width={300} m="auto">
      <CountdownCircle />
      <ToggleButton />

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <RoundsCounter />

        <Box display="flex">
          <ResetButton />
          <SkipButton />
          <LabelsMenuButton />
        </Box>
      </Box>

      <FullscreenDialog />
      <DesktopDialog />
    </Box>
  )
}
