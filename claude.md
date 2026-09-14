# ROOT BRICKS

AI 솔루션 및 지식 그래프 전문 기업 웹사이트

## 프로젝트 개요

ROOT BRICKS는 데이터를 연결하고 지식을 설계하여 비즈니스의 본질적인 가치를 발견하는 AI 솔루션 기업입니다.

## 기술 스택

- **Framework:** Next.js 16.0.8 (App Router)
- **React:** 19.2.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** framer-motion
- **Icons:** lucide-react
- **Utilities:** clsx, tailwind-merge

## 프로젝트 구조

```
rootbricks/
├── src/
│   ├── app/
│   │   ├── page.tsx        # 메인 랜딩 페이지
│   │   ├── layout.tsx      # 루트 레이아웃
│   │   ├── globals.css     # 전역 스타일
│   │   └── favicon.ico
│   └── lib/
│       └── utils.ts        # 유틸리티 함수
├── public/                 # 정적 파일
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

## 디자인 시스템

### 컬러 테마
- **Background:** #ffffff (화이트)
- **Foreground:** #111111 (다크 그레이)
- **Primary:** #000000 (블랙)
- **Card:** #f5f5f5 (라이트 그레이)
- **Border:** #e5e5e5

### 폰트
- **Sans:** Inter (본문)
- **Mono:** Space Grotesk (코드/강조)

### 디자인 원칙
- Palantir 스타일의 클린 화이트 테마
- 미니멀리스트 디자인
- 부드러운 애니메이션 효과

## 주요 섹션

1. **Hero** - 타이핑 애니메이션이 있는 메인 배너
2. **Core Services** - AI Agent, RAG & Knowledge Graph, System Integration, Embedded & IoT
3. **AI Solutions** - GitHub 연동 프로젝트 목록
4. **Deployed Systems** - 실제 배포된 시스템 포트폴리오
5. **Operational History** - 경력 타임라인 (2001~현재)
6. **Footer** - 연락처 및 소셜 링크

## 개발 명령어

```bash
npm run dev      # 개발 서버 시작 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run lint     # ESLint 실행
npm test         # Playwright E2E 테스트 (11개 그룹 병렬)
npm run test:ui  # Playwright UI 모드
npm run test:report  # 마지막 테스트 리포트 열기
```

## 코딩 컨벤션

- 컴포넌트는 함수형 컴포넌트 사용
- "use client" 지시어로 클라이언트 컴포넌트 명시
- Tailwind CSS 클래스 사용 (인라인 스타일 지양)
- 한국어/영어 혼용 콘텐츠

## 연락처

- **Email:** jeromwolf@gmail.com
- **YouTube:** @ontology-hub
