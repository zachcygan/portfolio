import { Metadata } from 'next'
import ResumeInfo from '../../components/resume'

export const metadata: Metadata = {
  title: 'Zach Cygan - Resume',
  description: 'Zach Cygan\'s Resume',
}

export default function Resume() {
  return (
    <ResumeInfo />
  );
}