'use client'
import { Metadata } from 'next' 
import PortfolioInfo from "../../components/portfolio"

export const metadata: Metadata = {
    title: 'Zach Cygan - Portfolio',
    description: 'Zach Cygan\'s portfolio',
}

export default function Portfolio() {
    return (
        <PortfolioInfo />
    )
}