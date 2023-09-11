'use client'
import { Metadata } from 'next'
import AboutMe from "../components/aboutMe"

export const metadata: Metadata = {
  title: 'Zach Cygan - Full Stack Web Developer',
  description: 'Zachary Cygan is a full stack web developer with a passion for creating beautiful, functional websites and web applications.',
}

export default function Home() {
  return (
    <AboutMe />
  )
}
