import AffiliationPeriodCard from '@/component/about/AffiliationPeriodCard'
import ExperienceCard from '@/component/about/ExperienceCard'
import ProjectCard from '@/component/about/ProjectCard'
import ResumeSection from '@/component/about/ResumeSection'
import SkillCard from '@/component/about/SkillCard'
import React from 'react'

function AboutPage() {
  return (
    <article>
      <h1 className='text-[3rem] md:text-[4rem] lg:text-[8rem] font-extrabold lg:leading-37 text-center lg:text-left'>
        안녕하세요<br/>
        프론트엔드 개발자<br/>
        이용훈입니다
      </h1>
      <div className='text-xl md:text-3xl lg:text-4xl space-y-4 mt-6 mb-16 text-center lg:text-left'>
        <p><strong>단순함</strong>을 추구합니다</p>
        <p>신뢰도 높은 소프트웨어 <strong>설계</strong>를 고민합니다</p>
        <p><strong>프론트엔드 기술</strong>을 통한 문제 해결을 연구합니다</p>
      </div>
      <ResumeSection title="Work Experience" hasDivider>
        <ExperienceCard
          organization='뉴빌리티'
          description='Frontend Developer'
          startDate={new Date("2023-06")}
          endDate={new Date("2025-01")}>
          <ProjectCard
            projectName='뉴비고'
            projectDescription='자율주행 로봇 뉴비(Neubie)의 모니터링 및 관리 통합 플랫폼'
            tasks={[
              "WebRTC 기반 다중 관제 서비스 개발 (관제사가 원격으로 여러 로봇 관제 가능)",
              "WebSocket과 StompJS를 활용한 로봇-서버 간 실시간 양방향 통신 기능 개발",
              "Tailwind와 CVA를 사용한 뉴빌리티 디자인 시스템 구축",
              "React Hook Form을 활용한 form 다이얼로그 개발"
            ]}
            keyAchievements={[
              "Pre-connection 기능 개발로 관제 화면 로드 시간 감소(15초 → 2초, 87% 단축, UX 개선)",
              "중복 컴포넌트 통합으로 개발 스토리 포인트 감소(SP 5 → SP 2, 60% 감소, 생산성 증대)",
              "일부 전역 컨테이너를 지역 컨테이너로 리팩토링하여 불필요한 API 요청 제거(성능 최적화)"
            ]}
          />
          <ProjectCard
            projectName='뉴비오더'
            projectDescription='자율주행 로봇 뉴비(Neubie)를 활용한 배달 주문 플랫폼'
            tasks={[
              "OAuth 2.0 기반의 Third-Party 로그인 기능 개발",
              "쿠폰 발급 및 적용 UI 개발"
            ]}
          />
        </ExperienceCard>
      </ResumeSection>
      <ResumeSection title="Skills" hasDivider>
        <SkillCard
          skillName='React'
          descriptions={[
            "컴포넌트 렌더링 과정과 Effect의 라이프사이클을 이해하며, 이를 기반으로 컴포넌트와 Hook을 설계할 수 있습니다",
            "순수한 컴포넌트를 만들기 위해 노력합니다. 불필요한 Effect 사용을 지양하며, 렌더링 과정중에 state와 props로부터의 계산이 가능한지 항상 점검합니다",
            "React의 단방향 데이터 흐름을 적극 활용합니다. props driling이 과도하게 발생하지 않는 이상 컨테이너 사용을 최대한 지양합니다",
            "로직과 UI 분리를 위해 custom Hook을 애용합니다"
          ]}
        />
        <SkillCard
          skillName='Next'
          descriptions={[
            "페이지별 정적/동적 렌더링을 적절히 선택하여 서비스할 수 있습니다",
            "렌더링된 방식에 알맞는 네비게이팅 방식을 채택하여 Next.js 애플리케이션에 최적화된 네비게이팅 경험을 제공할 수 있습니다"
          ]}
        />
        <SkillCard
          skillName='JavaScript(Core)'
          descriptions={[
            "클로저의 동작 원리를 이해하며, 적용해본 경험이 있습니다",
            "비동기 로직이 엔진에서 처리되는 과정을 이해하고 있으며, 이를 기반으로 비동기 로직 코드를 작성할 수 있습니다",
            "웹 브라우저 환경과 Node.js 실행 환경 차이를 이해하고 있습니다. 웹 프론트 애플리케이션에 사용가능한 패키지를 구분하여 설치할 수 있습니다",
            "CRA, Vite 없이 React SPA를 빌드한 경험이 있습니다. 개발 환경 설정에 필요한 패키지를 설치할 수 있습니다"
          ]}
        />
        <SkillCard
          skillName='JavaScript(Web)'
          descriptions={[
            "LocalStorage, SessionStorage의 차이를 이해하고 있으며, 각 API가 필요한 상황을 구분하고 적용할 수 있습니다",
            "MDN, can i use를 참조하여 기능 구현에 필요한 Web API를 검색 및 적용할 수 있습니다",
            "DOM API의 인터페이스 상속 구조를 이해하고 있습니다"
          ]}
        />
        <SkillCard
          skillName='Browser'
          descriptions={[
            "CORS 정책과 이슈 발생 유형을 이해하고 있으며, 대응 시나리오를 숙지하고 있습니다",
            "console의 다양한 출력 방식을 숙지하여 수월한 디버깅 수행이 가능합니다"
          ]}
        />
        <SkillCard
          skillName='TypeScript'
          descriptions={[
            "제네릭, 조건부 타입을 활용하여 타입들을 조합 및 분리하는 방법을 알고 있습니다"
          ]}
        />
        <SkillCard
          skillName='StompJS'
          descriptions={[
            "STOMP 프로토콜의 아키텍쳐를 이해하고 있습니다",
            "StompJS의 API를 활용하여 애플리케이션 요구사항에 맞는 클래스/Hook을 구현할 수 있습니다"
          ]}
        />
      </ResumeSection>
      <ResumeSection title="Other Experience">
        <AffiliationPeriodCard
          organization='전북대학교'
          description='IT응용공학과, 학사'
          startDate={new Date("2014-03")}
          endDate={new Date("2020-02")}
        />
        <AffiliationPeriodCard
          organization='GoSpace' 
          description='CEO' 
          startDate={new Date("2020-06")} 
          endDate={new Date("2021-12")}
        />
        <AffiliationPeriodCard
          organization='삼성 청년 SW 아카데미' 
          description='Java 전공반' 
          startDate={new Date("2022-06")} 
          endDate={new Date("2023-06")}
        />
      </ResumeSection>
    </article>
  )
}

export default AboutPage
