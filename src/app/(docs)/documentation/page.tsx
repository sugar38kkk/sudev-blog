import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { Metadata } from 'next'
import { FC } from 'react'
import DocumentationTabs from '@/components/DocumentationTabs';

export const metadata: Metadata = {
  title: 'Similarity API | Documentation',
  description: 'Free & open-source text similarity API',
}


const Documentation: FC = ({}) => {
  return <div className='container mx-auto mt-12 max-w-7xl' >
    <div className="flex flex-col items-center gap-6">
      <LargeHeading>Making a request</LargeHeading>
      <Paragraph>api/v1/similarity</Paragraph>
      <DocumentationTabs/>
    </div>
  </div>
}


export default Documentation