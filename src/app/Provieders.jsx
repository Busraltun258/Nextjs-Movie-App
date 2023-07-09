"use client"
import React, { Children } from 'react'

import { ThemeProvider } from 'next-themes'


const Provieders = ({children}) => {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
       {children}

    </ThemeProvider>
  )
}

export default Provieders