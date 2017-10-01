import React from 'react'
import MousePosition from './MousePosition'
import renderCurves from './renderCurves'
import data from './data'

export default () => <MousePosition>{renderCurves(data)}</MousePosition>
