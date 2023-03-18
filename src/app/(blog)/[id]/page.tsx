import { getBlogDetail } from '@/server/blog'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import DOMPurify from 'dompurify'
import { primaryFormatDate } from './../../../utils/formatDate';
import readingTime from 'reading-time';

interface IBlogDetailPageProps {
  params: {
    id: string
  }
}

export default async function BlogDetailPage({ params }: IBlogDetailPageProps) {
  const id = params.id
  const data = await getBlogDetail(Number(id))
  const stats = readingTime(data.bodyHTML);
  
  return <div className='container mx-auto max-w-7xl' >
  <div className="relative flex items-center justify-center overflow-hidden">
      <div className="container mx-auto mt-28 max-w-7xl">
        <div className="flex flex-col items-center gap-6">
          <LargeHeading size={'sm'} >{data.title}</LargeHeading>
          <Paragraph>
            {primaryFormatDate(data.createdAt)} . {Math.ceil(stats.minutes)} phút đọc
          </Paragraph>
          <div className='w-full prose dark:prose-invert prose-slate '
                dangerouslySetInnerHTML={{
                  __html: data.bodyHTML
                }}
              />
        </div>
      </div>
    </div>
</div>
}
