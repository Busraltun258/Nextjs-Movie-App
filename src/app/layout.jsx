
import React from 'react'
import './globals.css'
import Header from './components/Header'
import Provieders from './Provieders'
import Tab from './components/Tab'

const layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provieders>
                <Header />
                <Tab/>
                {children}
                </Provieders>
               
                
            </body>

        </html>
    )
}

export default layout