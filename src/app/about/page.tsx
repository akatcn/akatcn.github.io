import ContactCard from '@/component/about/ContactCard'
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
        <p>신뢰도 높은 소프트웨어 <strong>설계</strong>를 고민합니다</p>
        <p><strong>단순함</strong>을 지향합니다</p>
        <p><strong>프론트엔드 기술</strong>을 통한 문제 해결을 연구합니다</p>
      </div>
      <ResumeSection title="Contact" hasDivider>
        <ContactCard />
      </ResumeSection>
      <ResumeSection title="Work Experience" hasDivider>
        <ExperienceCard
          organization='뉴빌리티'
          description='Frontend Developer'
          startDate={new Date("2023-06")}
          endDate={new Date("2025-02")}>
          <ProjectCard
            projectName='뉴비고'
            projectDescription='자율주행 로봇 뉴비(Neubie)의 모니터링 및 관리 통합 플랫폼'
            skills={["Next.js", "TypeScript", "TailwindCSS", "React Hook Form", "Tanstack Query", "AmazonKinesis"]}
            tasks={[
              "사우디 아라비아에서도, 플로리다에서도 관제 이슈 0건! 높은 신뢰도를 보여준 WebRTC 기반의 **다중 관제** 서비스 개발",
              "TailwindCSS, CVA, TypeScript를 사용한 뉴빌리티 **디자인 시스템** 구축",
              "STOMP over WebSocket을 통해 로봇과 서버의 RabbitMQ로부터 메시지를 구독하여 로봇 데이터(속도, 방향, 자율주행 여부 등) 기반의 UI 컴포넌트 개발"
            ]}
          />
          <ProjectCard
            projectName='뉴비오더'
            projectDescription='자율주행 로봇 뉴비(Neubie)를 활용한 배달 주문 플랫폼'
            skills={["Next.js", "TypeScript", "next-i18n"]}
            tasks={[
              "OAuth 2.0 기반의 Third-Party 로그인 기능 개발",
              "쿠폰 발급 및 적용 UI 개발",
              "아랍권 고객 대상 국제화 작업"
            ]}
          />
        </ExperienceCard>
      </ResumeSection>
      <ResumeSection title="Skills" hasDivider>
        <SkillCard
          skillName='React'
          descriptions={[
            "컴포넌트 렌더링 과정과 **Effect의 설계 철학을 이해**하며, 이를 기반으로 컴포넌트와 Hook을 설계할 수 있습니다",
            "순수한 컴포넌트를 만들기 위해 노력합니다. **불필요한 Effect 사용을 지양**하며, 렌더링 과정중에 state와 props로 부터 계산이 가능한지 항상 점검합니다",
            "React의 단방향 데이터 흐름을 적극 활용합니다. props driling이 과도하게 발생하지 않는 이상 컨테이너 사용을 최대한 지양합니다",
            "로직과 UI 분리를 위해 custom Hook을 애용합니다"
          ]}
        />
        <SkillCard
          skillName='Next'
          descriptions={[
            "페이지별 정적/동적 렌더링을 적절히 선택하여 서비스할 수 있습니다",
            "렌더링 방식에 알맞는 네비게이팅 방식을 채택할 수 있습니다"
          ]}
        />
        <SkillCard
          skillName='JavaScript(Core)'
          descriptions={[
            "클로저의 동작 원리를 이해하며, 응용해본 경험이 있습니다",
            "비동기 로직이 엔진에서 처리되는 과정을 이해하며, 이를 기반으로 **비동기 로직 코드를 작성할 수 있습니다**",
            "웹 브라우저 환경과 Node.js 실행 환경 차이를 이해하고 있습니다. 웹 프론트 애플리케이션에 사용가능한 패키지를 구분하여 설치할 수 있습니다",
            "CRA, Vite 없이 React SPA를 빌드한 경험이 있습니다. 개발 환경 설정에 필요한 패키지를 설치할 수 있습니다"
          ]}
        />
        <SkillCard
          skillName='JavaScript(Web)'
          descriptions={[
            "`LocalStorage`, `SessionStorage` API의 인터페이스를 숙지하고 있습니다. 각 API가 필요한 상황을 구분하고 적용할 수 있습니다",
            "DOM API의 인터페이스 상속 구조를 이해하고 있습니다",
            "MDN 문서를 탐색하여 **기능 구현에 필요한 Web API를 적용**할 수 있습니다"
          ]}
        />
        <SkillCard
          skillName='Browser'
          descriptions={[
            "CORS 정책과 이슈 발생 유형을 이해하고 있으며, 대응 시나리오를 숙지하고 있습니다",
            "XSS, CSRF 등 브라우저 보안 이슈에 대한 이해와 예방 전략에 대해 숙지하고 있습니다.",
            "HTML 파싱부터 Render Tree 구성, 페인트 과정 등 렌더링 흐름을 이해하고 있으며, 이에 기반한 **퍼포먼스 최적화 경험**이 있습니다"
          ]}
        />
        <SkillCard
          skillName='TypeScript'
          descriptions={[
            "Type Manipulation 문법을 활용하여 **타입들을 조합 및 분리하는 방법**을 숙지하고 있으며, 디자인 시스템 구축에 응용한 경험이 있습니다",
            "제네릭을 활용하여 타입의 추상화 및 재사용성을 높일 수 있습니다"
          ]}
        />
      </ResumeSection>
      <ResumeSection title="Other Experience">
        <ExperienceCard
          organization='전북대학교'
          description='IT응용공학과, 학사'
          startDate={new Date("2014-03")}
          endDate={new Date("2020-02")}
        />
        <ExperienceCard
          organization='한국과학기술정보연구원'
          description='인턴'
          startDate={new Date("2020-09")}
          endDate={new Date("2021-02")}
        />
        <ExperienceCard
          organization='GoSpace'
          description='CEO, CTO'
          startDate={new Date("2021-06")}
          endDate={new Date("2022-01")}>
          <ProjectCard
            projectName='Go Space'
            projectDescription='헬스장 운동기구에 부착되어 사용자의 운동량을 기록 및 분석하는 솔루션 개발'
            tasks={[
              "IoT 모듈 펌웨어 개발",
              "iOS 앱 개발 및 배포"
            ]}
            keyAchievements={[
              "서울 시내 회원 1,500여명 규모의 헬스장에서 베타 테스트 진행",
              '예비 창업 패키지 "우수 기업"으로 평가',
            ]}
          />
        </ExperienceCard>
        <ExperienceCard
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
