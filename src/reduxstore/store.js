import {configureStore} from '@reduxjs/toolkit'
import { Reducer } from './reducer'
export const Mystore=configureStore({reducer:Reducer})