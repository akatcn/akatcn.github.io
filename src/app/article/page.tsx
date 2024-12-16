import ArticleCard from '@/component/article/ArticleCard'
import StaticChipGroup, { ChipDataType } from '@/component/ui/static/StaticChipGroup'
import React from 'react'

const chipsA: ChipDataType[] = [
  {
    text: "전체",
    selected: true,
    path: "/"
  },
  {
    text: "Project",
    selected: false,
    path: "/article/project"
  },
  {
    text: "Research",
    selected: false,
    path: "/article/research"
  },
]

const chipsB: ChipDataType[] = [
  {
    text: "tagA",
    selected: false,
    path: "/"
  },
  {
    text: "tagB",
    selected: false,
    path: "/"
  },
  {
    text: "tagC",
    selected: false,
    path: "/"
  },
]

function ArticlePage() {
  return (
    <div className='w-full text-center space-y-6 mt-16'>
      <h1 className='text-8xl font-extrabold'>블로그</h1>
      <p className='text-gray-600'>(블로그 페이지에 대한 간략한 설명)</p>
      <StaticChipGroup chips={chipsA} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4'>
        <ArticleCard
          title={"(제목) 아티클 하나에 대한 제목이 적히는 곳입니다(1)"}
          subTitle={"(부제) 부제가 적히는 곳입니다. 부제는 매우 길어질 수 있기 때문에 여러 줄로 표시될 수 있어야만 합니다. 예를들어 이 문장처럼 부제는 매우 길어질 수 있겠네요"}
          chips={chipsB}
          date={new Date()}
        />
        <ArticleCard
          title={"(제목) 아티클 하나에 대한 제목이 적히는 곳입니다(2)"}
          subTitle={"(부제) 부제가 적히는 곳입니다. 부제는 매우 길어질 수 있기 때문에 여러 줄로 표시될 수 있어야만 합니다. 예를들어 이 문장처럼 부제는 매우 길어질 수 있겠네요"}
          chips={chipsB}
          date={new Date()}
        />
      </div>
    </div>
  )
}

export default ArticlePage