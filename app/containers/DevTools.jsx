import React from 'react'

import { createDevTools } from 'redux-devtools'

import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import SliderMonitor from 'redux-slider-monitor'
import Inspector from 'redux-devtools-inspector'
import DiffMonitor from 'redux-devtools-diff-monitor'

import ChartMonitor from 'redux-devtools-chart-monitor'

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" changeMonitorKey="ctrl-m">
        <LogMonitor theme="nicinabox" />
        <SliderMonitor />
        <Inspector theme="tomorrow" />
        <DiffMonitor theme="tomorrow" />
        <ChartMonitor />
    </DockMonitor>
)

export default DevTools