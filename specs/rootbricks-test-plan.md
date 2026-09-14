# ROOT BRICKS Website - Comprehensive Test Plan

## Application Overview

ROOT BRICKS is an AI Solutions and Knowledge Graph specialized company website built with Next.js 16, React 19, and Tailwind CSS 4. The website features a single-page landing page with multiple sections including Hero with typing animation, Core Services, AI Solutions, Deployed Systems, Operational History timeline, and Footer with contact links. The site uses Framer Motion for animations and Lucide React for icons. Key functionality includes smooth scrolling navigation, external GitHub project links, social media links (Email, YouTube), and responsive design for mobile and desktop viewports.

## Test Scenarios

### 1. Page Loading and Initial Render

**Seed:** `seed.spec.ts`

#### 1.1. Page loads successfully and displays all main sections

**File:** `tests/page-loading-and-initial-render/page-loads-successfully.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Wait for the page to fully load
  3. Verify the page title is 'ROOT BRICKS | Connecting Data, Designing Knowledge'
  4. Verify the page meta description contains 'AI Solutions, Knowledge Graphs, and Business Intelligence'
  5. Check that the main element is visible on the page

**Expected Results:**
  - Page loads without errors
  - Page title matches expected value
  - Meta description is present and correct
  - Main content area is visible
  - No console errors are present

#### 1.2. Header renders correctly with logo and navigation

**File:** `tests/page-loading-and-initial-render/header-renders-correctly.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Locate the header element with class containing 'fixed'
  3. Verify the ROOT BRICKS logo is visible
  4. Verify the logo contains a black circular icon
  5. Check for navigation menu on desktop (md breakpoint and above)
  6. Verify navigation links are present: 'AI Solutions', 'Deployed Systems', 'History'

**Expected Results:**
  - Header is fixed at the top of the page
  - Header has backdrop blur and border styling
  - ROOT BRICKS logo text is displayed
  - Black circular icon is visible next to logo
  - Navigation menu is visible on desktop viewports
  - All three navigation links are present and visible on desktop

#### 1.3. All sections are present and visible

**File:** `tests/page-loading-and-initial-render/all-sections-visible.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll through the entire page
  3. Verify Hero section is present
  4. Verify Core Services section is present
  5. Verify AI Solutions section with id 'activity' is present
  6. Verify Deployed Systems section with id 'projects' is present
  7. Verify Operational History section with id 'history' is present
  8. Verify Footer section is present

**Expected Results:**
  - All six main sections are rendered on the page
  - Each section has appropriate spacing and styling
  - Sections are stacked vertically in correct order
  - No missing or broken sections
  - Page layout appears complete and structured

### 2. Hero Section - Typing Animation

**Seed:** `seed.spec.ts`

#### 2.1. Typing animation displays text progressively

**File:** `tests/hero-section-typing-animation/typing-animation-progressive.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Locate the h1 heading in the Hero section
  3. Wait for 500ms
  4. Verify that some characters of 'AI 기반 운영 및 의사결정을 실행하세요.' are visible
  5. Wait for 3000ms
  6. Verify that more characters are visible
  7. Wait until the full text 'AI 기반 운영 및 의사결정을 실행하세요.' is displayed

**Expected Results:**
  - Text appears character by character
  - Animation delay is approximately 80ms per character
  - Full Korean text is eventually displayed
  - Typing effect is smooth and natural
  - No text jumping or layout shifts occur

#### 2.2. Cursor blink animation functions correctly

**File:** `tests/hero-section-typing-animation/cursor-blink-animation.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Locate the cursor element (inline-block span with black background)
  3. Observe the cursor for 2 seconds
  4. Verify the cursor has opacity animation
  5. Check that animation repeats infinitely
  6. Verify cursor dimensions are appropriate (w-4, h-16 on mobile, h-24 on desktop)

**Expected Results:**
  - Cursor element is visible
  - Cursor blinks with fade in/out effect
  - Animation duration is approximately 0.8 seconds
  - Animation loops continuously
  - Cursor is positioned after the typed text
  - Cursor size is responsive to viewport

#### 2.3. Hero section subtitle and decorative elements display correctly

**File:** `tests/hero-section-typing-animation/hero-subtitle-and-elements.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Locate the decorative black bar above the heading (w-12 h-1)
  3. Verify the decorative bar is visible
  4. Locate the subtitle paragraph with text '데이터를 연결하고 지식을 설계하여'
  5. Verify subtitle text is visible
  6. Check subtitle styling (text-xl md:text-2xl, text-gray-500)
  7. Verify subtitle includes line break on desktop (hidden md:block)

**Expected Results:**
  - Decorative bar appears above the main heading
  - Decorative bar is black and 1px height
  - Subtitle text is fully visible
  - Subtitle has gray color and lighter font weight
  - Text is properly sized for different viewports
  - Line break in subtitle appears correctly on desktop

#### 2.4. Hero section animations on page load

**File:** `tests/hero-section-typing-animation/hero-load-animations.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Observe the initial state of Hero section content
  3. Verify the motion.div container has fade-in animation
  4. Check that content starts with opacity 0 and y offset of 20
  5. Wait for animation to complete (0.8s duration)
  6. Verify content is fully visible with opacity 1 and y offset of 0

**Expected Results:**
  - Hero content fades in smoothly on page load
  - Animation starts from slightly lower position (y: 20)
  - Animation completes within 0.8 seconds
  - Final state shows full opacity and correct positioning
  - Animation feels smooth and professional
  - No jarring or abrupt transitions

### 3. Core Services Section

**Seed:** `seed.spec.ts`

#### 3.1. Core Services displays three service cards

**File:** `tests/core-services-section/three-service-cards.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to the Core Services section
  3. Count the number of service cards displayed
  4. Verify there are exactly 3 cards
  5. Verify cards are displayed in a grid layout
  6. Check grid is responsive (1 column on mobile, 3 columns on desktop)

**Expected Results:**
  - Exactly 3 service cards are visible
  - Cards are evenly spaced in grid layout
  - Grid shows 1 column on mobile viewports
  - Grid shows 3 columns on desktop viewports (md breakpoint)
  - All cards have consistent styling
  - Section has white background and border styling

#### 3.2. AI Agent Development card content and icon

**File:** `tests/core-services-section/ai-agent-card.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Core Services section
  3. Locate the first service card
  4. Verify the Brain icon is visible in a black rounded square
  5. Verify the heading 'AI Agent Development' is present
  6. Verify the description mentions 'Palantir 스타일의 온톨로지'
  7. Verify the description mentions 'A2A(Agent-to-Agent) 시스템'
  8. Check that bold text highlights key terms

**Expected Results:**
  - Brain icon is displayed in 12x12 black rounded container
  - Icon is white color on black background
  - Heading is bold and properly sized (text-xl)
  - Description text is gray-500 color
  - Key terms are bold within the description
  - Content is clear and readable
  - Card layout is clean and well-structured

#### 3.3. RAG & Knowledge Graph card content and icon

**File:** `tests/core-services-section/rag-knowledge-graph-card.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Core Services section
  3. Locate the second service card
  4. Verify the Database icon is visible in a black rounded square
  5. Verify the heading 'RAG & Knowledge Graph' is present
  6. Verify description mentions '지식 그래프(Knowledge Graph)'
  7. Verify description mentions 'RAG(검색 증강 생성)'
  8. Check that technical terms are properly highlighted

**Expected Results:**
  - Database icon is displayed in black rounded container
  - Heading matches expected text exactly
  - Description explains knowledge graph concept
  - RAG technology is mentioned and explained
  - Bold styling emphasizes important concepts
  - Text is properly formatted and spaced

#### 3.4. System Integration card content and icon

**File:** `tests/core-services-section/system-integration-card.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Core Services section
  3. Locate the third service card
  4. Verify the Layers icon is visible in a black rounded square
  5. Verify the heading 'System Integration' is present
  6. Verify description mentions '20년 이상의'
  7. Verify description mentions '임베디드 및 대규모 서버 개발 경험'
  8. Check emphasis on integration capability

**Expected Results:**
  - Layers icon is displayed correctly
  - Heading is clear and properly formatted
  - Description highlights 20+ years of experience
  - Embedded and server development expertise is mentioned
  - Integration capability is emphasized
  - Card maintains consistent styling with other cards

### 4. AI Solutions Section - GitHub Projects

**Seed:** `seed.spec.ts`

#### 4.1. AI Solutions section displays header and sync indicator

**File:** `tests/ai-solutions-github-projects/section-header.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to the section with id 'activity'
  3. Verify the section heading 'AI SOLUTIONS' is present
  4. Verify heading is uppercase with tracking-widest
  5. Verify 'SYNCED WITH GITHUB' text is visible on the right side
  6. Check that sync text uses monospace font

**Expected Results:**
  - Section has correct id attribute 'activity'
  - Heading is uppercase and gray-400 color
  - Heading has wide letter spacing
  - GitHub sync indicator is visible
  - Sync text is small, monospace, and gray
  - Header layout is flexbox with space-between

#### 4.2. Six AI solution projects are displayed in grid

**File:** `tests/ai-solutions-github-projects/six-projects-grid.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to AI Solutions section
  3. Count the number of project cards
  4. Verify there are exactly 6 projects
  5. Check grid layout is responsive (1 column mobile, 3 columns desktop)
  6. Verify even spacing between cards

**Expected Results:**
  - Exactly 6 project cards are visible
  - Grid displays 1 column on mobile
  - Grid displays 3 columns on desktop (md breakpoint)
  - Gap spacing is consistent (gap-12)
  - All cards are properly aligned
  - Section has appropriate padding

#### 4.3. Flux Ontology Platform project card and WIP indicator

**File:** `tests/ai-solutions-github-projects/flux-ontology-project.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to AI Solutions section
  3. Locate 'Flux Ontology Platform' project card
  4. Verify project title is visible
  5. Verify description mentions 'SME-focused Ontology Palantir Solution'
  6. Verify 'Work in Progress' badge is present with amber color
  7. Verify badge has pulse animation
  8. Verify tech stat shows 'Ontology / Palantir'
  9. Check hover effect on card

**Expected Results:**
  - Project title is displayed prominently
  - Description text is clear and readable
  - WIP badge is amber-600 color with bold font
  - Badge has animate-pulse class
  - Black dot bullet (●) precedes WIP text
  - Tech stat badge has gray background
  - Card shows hover effects (border darkens, title slides)
  - Card is clickable/cursor pointer

#### 4.4. Open WebUI RAG System project card

**File:** `tests/ai-solutions-github-projects/open-webui-rag-project.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to AI Solutions section
  3. Locate 'Open WebUI RAG System' project card
  4. Verify title matches exactly
  5. Verify description mentions 'sLLM based RAG System using GPT-OSS:20B model'
  6. Verify tech stat shows 'sLLM / RAG'
  7. Test hover interaction on the card

**Expected Results:**
  - Title text is correct
  - Description mentions GPT-OSS:20B specifically
  - Tech stat badge is properly styled
  - Hover effect changes border from gray to black
  - Title translates 2px on X axis on hover
  - Transition is smooth

#### 4.5. A2A Sentiment Analysis project card

**File:** `tests/ai-solutions-github-projects/a2a-sentiment-project.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to AI Solutions section
  3. Locate 'A2A Sentiment Analysis' project card
  4. Verify description mentions 'AI-powered stock investment solution'
  5. Verify description mentions 'Multi-agent system'
  6. Verify tech stat shows 'Stock / Finance'

**Expected Results:**
  - Project focuses on stock investment
  - Multi-agent system is mentioned
  - Tech category is finance-related
  - Card maintains consistent styling with others
  - All interactive elements work correctly

#### 4.6. NRC ADAMS Search MCP project card

**File:** `tests/ai-solutions-github-projects/nrc-adams-mcp-project.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to AI Solutions section
  3. Locate 'NRC ADAMS Search MCP' project card
  4. Verify description mentions 'NRC ADAMS document search & analysis server'
  5. Verify description mentions 'Claude Desktop'
  6. Verify tech stat shows 'MCP Server'

**Expected Results:**
  - Title correctly identifies NRC ADAMS
  - Claude Desktop integration is mentioned
  - MCP Server category is displayed
  - Description is clear about functionality

#### 4.7. FDE Curriculum project card with WIP indicator

**File:** `tests/ai-solutions-github-projects/fde-curriculum-project.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to AI Solutions section
  3. Locate 'FDE Curriculum' project card
  4. Verify description mentions 'Federal curriculum design and planning'
  5. Verify 'Work in Progress' badge is present with pulse animation
  6. Verify tech stat shows 'Education'

**Expected Results:**
  - Federal curriculum is mentioned
  - WIP badge is visible and animated
  - Education category is displayed
  - Card styling is consistent

#### 4.8. AI Education Simulator project card

**File:** `tests/ai-solutions-github-projects/ai-education-simulator-project.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to AI Solutions section
  3. Locate 'AI Education Simulator' project card
  4. Verify description mentions 'Ontology-based AI education simulation platform'
  5. Verify tech stat shows 'Simulation'

**Expected Results:**
  - Ontology-based approach is mentioned
  - Simulation platform purpose is clear
  - Tech category is appropriate
  - Card renders completely

### 5. Deployed Systems Section

**Seed:** `seed.spec.ts`

#### 5.1. Deployed Systems section header and intro

**File:** `tests/deployed-systems-section/section-header.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to the section with id 'projects'
  3. Verify the section heading 'Deployed Systems' is visible
  4. Verify subtitle text 'Enterprise-grade solutions delivered.' is present
  5. Check section background is gray-50
  6. Verify heading is large (text-4xl) and medium weight

**Expected Results:**
  - Section id is 'projects'
  - Main heading is prominent and clear
  - Subtitle provides context
  - Background color is light gray
  - Heading typography is appropriate
  - Section has proper spacing

#### 5.2. Six deployed system cards in grid layout

**File:** `tests/deployed-systems-section/six-system-cards.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Deployed Systems section
  3. Count the number of system cards
  4. Verify there are exactly 6 cards
  5. Check grid layout: 1 column mobile, 2 columns tablet, 3 columns desktop
  6. Verify consistent spacing between cards

**Expected Results:**
  - Exactly 6 system cards are displayed
  - Mobile shows 1 column grid
  - Tablet (md) shows 2 columns
  - Desktop (lg) shows 3 columns
  - Horizontal gap is gap-x-8
  - Vertical gap is gap-y-16

#### 5.3. KB Kookmin Card AI Chatbot system card

**File:** `tests/deployed-systems-section/kb-kookmin-card.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Deployed Systems section
  3. Locate 'KB Kookmin Card AI Chatbot' card
  4. Verify Brain icon is present and animates on hover
  5. Verify title is displayed
  6. Verify description mentions '23M users'
  7. Verify tech stack includes 'Java Spring', 'Oracle', 'MyBatis'
  8. Test icon scale animation on hover

**Expected Results:**
  - Brain icon is visible
  - Icon scales to 110% on hover
  - 23 million users is mentioned
  - Enterprise AI conversational agent is described
  - All three tech stack badges are visible
  - Tech badges have uppercase text and borders
  - Hover animation is smooth with 300ms duration

#### 5.4. VoCom Voice Framework system card

**File:** `tests/deployed-systems-section/vocom-voice-framework.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Deployed Systems section
  3. Locate 'VoCom Voice Framework' card
  4. Verify Activity icon is present
  5. Verify description mentions 'distributed voice recognition framework'
  6. Verify tech stack includes 'C++', 'Windows', 'Voice Rec'

**Expected Results:**
  - Activity icon displays correctly
  - High-performance aspect is mentioned
  - Call center optimization is described
  - C++ technology is highlighted
  - All tech badges are properly formatted

#### 5.5. Mobility Platform system card

**File:** `tests/deployed-systems-section/mobility-platform.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Deployed Systems section
  3. Locate 'Mobility Platform' card
  4. Verify Smartphone icon is present
  5. Verify description mentions 'GPS tracking' and 'payment gateway'
  6. Verify tech stack includes 'PHP', 'MySQL', 'Firebase'

**Expected Results:**
  - Smartphone icon is visible
  - Real-time GPS tracking is mentioned
  - Payment integration is described
  - PHP, MySQL, Firebase badges are present
  - Next-generation mobility concept is clear

#### 5.6. Olive Healthcare system card

**File:** `tests/deployed-systems-section/olive-healthcare.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Deployed Systems section
  3. Locate 'Olive Healthcare' card
  4. Verify Activity icon is present
  5. Verify description mentions 'Cross-border e-commerce'
  6. Verify description mentions 'PayPal integration'
  7. Verify tech stack includes 'PHP', 'MySQL', 'PayPal'

**Expected Results:**
  - Healthcare e-commerce focus is clear
  - Cross-border capability is mentioned
  - PayPal integration is highlighted
  - Global logistics tracking is described
  - Tech stack is appropriate for e-commerce

#### 5.7. Smart Monitoring system card

**File:** `tests/deployed-systems-section/smart-monitoring.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Deployed Systems section
  3. Locate 'Smart Monitoring' card
  4. Verify Zap icon is present
  5. Verify description mentions 'FFT frequency analysis'
  6. Verify description mentions 'computer vision'
  7. Verify tech stack includes 'OpenCV', 'Bluetooth', 'FFT'

**Expected Results:**
  - Zap icon represents monitoring/energy
  - Industrial monitoring purpose is clear
  - FFT analysis technology is mentioned
  - Computer vision capability is described
  - Real-time anomaly detection is highlighted

#### 5.8. Radar Computer system card

**File:** `tests/deployed-systems-section/radar-computer.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Deployed Systems section
  3. Locate 'Radar Computer' card
  4. Verify Radio icon is present
  5. Verify description mentions 'Mission-critical'
  6. Verify description mentions 'TCP/IP streams'
  7. Verify tech stack includes 'C++', 'TCP/IP', 'Real-time'

**Expected Results:**
  - Radio icon is appropriate for radar
  - Mission-critical nature is emphasized
  - High-throughput processing is mentioned
  - Real-time visualization is described
  - C++ and networking tech are highlighted

### 6. Operational History Timeline

**Seed:** `seed.spec.ts`

#### 6.1. Operational History section header

**File:** `tests/operational-history-timeline/section-header.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to the section with id 'history'
  3. Verify section heading 'OPERATIONAL HISTORY' is visible
  4. Verify heading is uppercase with wide tracking
  5. Verify heading is centered
  6. Check heading is small text with gray-400 color

**Expected Results:**
  - Section id is 'history'
  - Heading text is uppercase
  - Letter spacing is wide (tracking-widest)
  - Text is center-aligned
  - Color is gray-400
  - Font size is small (text-sm)

#### 6.2. Six timeline entries are displayed

**File:** `tests/operational-history-timeline/six-timeline-entries.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Operational History section
  3. Count the number of timeline entries
  4. Verify there are exactly 6 entries
  5. Verify entries are in chronological order (latest first)
  6. Check vertical spacing between entries

**Expected Results:**
  - Exactly 6 timeline entries are visible
  - Entries are ordered from 2024 to 2001
  - Each entry has consistent spacing (space-y-12)
  - Layout is clear and readable
  - Maximum width is constrained (max-w-4xl)

#### 6.3. Timeline entry 2024-PRESENT AI Agent & RAG Architecture

**File:** `tests/operational-history-timeline/timeline-2024-present.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Operational History section
  3. Locate the first timeline entry
  4. Verify period shows '2024 — PRESENT'
  5. Verify role is 'AI Agent & RAG Architecture'
  6. Verify description mentions 'Large Language Models (LLM)'
  7. Verify description mentions 'Retrieval-Augmented Generation (RAG)'
  8. Verify description mentions 'Palantir's ontology-based operating systems'
  9. Check entry has bottom border

**Expected Results:**
  - Period is displayed in monospace font
  - Period text is gray-400
  - Role heading is text-2xl and medium weight
  - Description is detailed and comprehensive
  - LLM, RAG, and Palantir are mentioned
  - Bottom border separates entries
  - Layout is responsive (flex-col on mobile, flex-row on desktop)

#### 6.4. Timeline entry 2017-2023 CEO Root Bricks

**File:** `tests/operational-history-timeline/timeline-2017-2023.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Operational History section
  3. Locate the timeline entry for 2017-2023
  4. Verify period shows '2017 — 2023'
  5. Verify role is 'CEO, Root Bricks'
  6. Verify description mentions 'KB Kookmin Card AI Chatbot'
  7. Verify description mentions '23 million users'
  8. Verify description mentions 'Root Bricks knowledge graph platform'

**Expected Results:**
  - CEO role is clearly stated
  - Company founding is mentioned
  - Major achievement (KB chatbot) is highlighted
  - User scale (23M) is specified
  - Knowledge graph platform is mentioned
  - Border separates from next entry

#### 6.5. Timeline entry 2015-2016 Platform Architect

**File:** `tests/operational-history-timeline/timeline-2015-2016.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Operational History section
  3. Locate the timeline entry for 2015-2016
  4. Verify period shows '2015 — 2016'
  5. Verify role is 'Platform Architect'
  6. Verify description mentions 'scalable mobility platforms'
  7. Verify description mentions 'O2O services'

**Expected Results:**
  - Platform Architect role is clear
  - Mobility platforms are mentioned
  - O2O services are described
  - Payment gateway integration is noted
  - GPS tracking is mentioned

#### 6.6. Timeline entry 2011-2014 Lead Voice Framework Division

**File:** `tests/operational-history-timeline/timeline-2011-2014.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Operational History section
  3. Locate the timeline entry for 2011-2014
  4. Verify period shows '2011 — 2014'
  5. Verify role is 'Lead, Voice Framework Division'
  6. Verify description mentions 'VoCom'
  7. Verify description mentions 'C++ engines'

**Expected Results:**
  - Leadership role is specified
  - VoCom project is mentioned
  - Voice recognition framework is described
  - C++ optimization is highlighted
  - Windows-based systems are noted

#### 6.7. Timeline entry 2005-2010 Embedded System Specialist

**File:** `tests/operational-history-timeline/timeline-2005-2010.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Operational History section
  3. Locate the timeline entry for 2005-2010
  4. Verify period shows '2005 — 2010'
  5. Verify role is 'Embedded System Specialist'
  6. Verify description mentions 'Windows CE devices'
  7. Verify description mentions 'VoIP phones'
  8. Verify description mentions 'industrial PDAs'

**Expected Results:**
  - Embedded systems focus is clear
  - Windows CE is mentioned
  - VoIP phone development is noted
  - Industrial PDA work is described
  - Low-level hardware control is mentioned

#### 6.8. Timeline entry 2001-2005 KT Telematics R&D

**File:** `tests/operational-history-timeline/timeline-2001-2005.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to Operational History section
  3. Locate the last timeline entry
  4. Verify period shows '2001 — 2005'
  5. Verify role is 'KT Telematics R&D'
  6. Verify description mentions 'Location Based Services (LBS)'
  7. Verify description mentions 'KTMap'
  8. Verify description mentions 'VoiceXML-based telematics'
  9. Verify this entry has no bottom border (last entry)

**Expected Results:**
  - KT company is mentioned
  - Pioneer role in LBS is highlighted
  - KTMap project is named
  - VoiceXML technology is mentioned
  - Entry has no bottom border (group-last:border-0)
  - Timeline ends with earliest career period

### 7. Navigation and Scrolling

**Seed:** `seed.spec.ts`

#### 7.1. Logo click scrolls to top of page

**File:** `tests/navigation-and-scrolling/logo-click-scroll-top.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll down to the middle of the page
  3. Click on the ROOT BRICKS logo in the header
  4. Observe the scrolling behavior

**Expected Results:**
  - Page scrolls smoothly to the top
  - Scroll behavior is set to 'smooth'
  - Final scroll position is at y=0
  - Logo has cursor-pointer styling
  - Scroll animation is fluid

#### 7.2. Navigation link to AI Solutions section

**File:** `tests/navigation-and-scrolling/nav-link-ai-solutions.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Ensure viewport is desktop size (md breakpoint or larger)
  3. Verify 'AI Solutions' navigation link is visible in header
  4. Click on the 'AI Solutions' navigation link
  5. Verify page scrolls to section with id 'activity'

**Expected Results:**
  - Navigation link is visible on desktop
  - Link text is gray-500 initially
  - Link changes to black on hover
  - Page scrolls to AI Solutions section
  - Anchor link navigation works correctly
  - Target section is positioned appropriately

#### 7.3. Navigation link to Deployed Systems section

**File:** `tests/navigation-and-scrolling/nav-link-deployed-systems.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Ensure viewport is desktop size
  3. Click on the 'Deployed Systems' navigation link in header
  4. Verify page scrolls to section with id 'projects'

**Expected Results:**
  - Link is clickable and visible
  - Page scrolls to correct section
  - Deployed Systems section becomes visible
  - Scroll position is accurate
  - Transition is smooth

#### 7.4. Navigation link to History section

**File:** `tests/navigation-and-scrolling/nav-link-history.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Ensure viewport is desktop size
  3. Click on the 'History' navigation link in header
  4. Verify page scrolls to section with id 'history'

**Expected Results:**
  - Link functions correctly
  - Operational History section scrolls into view
  - Anchor navigation is reliable
  - Section content is properly displayed

#### 7.5. Smooth scrolling behavior throughout page

**File:** `tests/navigation-and-scrolling/smooth-scroll-behavior.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Test scrolling with mouse wheel
  3. Test scrolling with trackpad gestures
  4. Test scrolling with keyboard (Page Down, Space)
  5. Verify all sections come into view smoothly

**Expected Results:**
  - Page scrolls smoothly without jumping
  - All scroll methods work correctly
  - No layout shifts during scroll
  - Content remains stable
  - Performance is good during scroll

### 8. External Links

**Seed:** `seed.spec.ts`

#### 8.1. AI Solutions project links open GitHub repositories

**File:** `tests/external-links/github-project-links.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to AI Solutions section
  3. Click on 'Flux Ontology Platform' card
  4. Verify new tab opens with URL 'https://github.com/jeromwolf/flux-ontology'
  5. Go back to main page
  6. Click on 'Open WebUI RAG System' card
  7. Verify new tab opens with URL 'https://github.com/jeromwolf/open-webui-rag'
  8. Test remaining project links similarly

**Expected Results:**
  - All project cards are clickable
  - Links open in new tabs (_blank)
  - GitHub URLs are correct for each project
  - External links include proper href attributes
  - Cards have cursor-pointer styling
  - Click events trigger window.open correctly

#### 8.2. FDE Curriculum external website link

**File:** `tests/external-links/fde-curriculum-link.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to AI Solutions section
  3. Locate 'FDE Curriculum' project card
  4. Click on the card
  5. Verify new tab opens with URL 'https://fde-academy.ai.kr/'

**Expected Results:**
  - External website link works
  - Link opens in new tab
  - URL is correct (fde-academy.ai.kr)
  - No navigation errors occur

#### 8.3. AI Education Simulator external website link

**File:** `tests/external-links/ai-education-simulator-link.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to AI Solutions section
  3. Locate 'AI Education Simulator' project card
  4. Click on the card
  5. Verify new tab opens with URL 'https://ontology.kss.ai.kr/'

**Expected Results:**
  - Link opens correctly
  - New tab navigation works
  - Target URL is accurate
  - External site loads (if accessible)

#### 8.4. Email link in footer

**File:** `tests/external-links/email-link.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to the footer section
  3. Locate the email link 'jeromwolf@gmail.com'
  4. Verify the link has href 'mailto:jeromwolf@gmail.com'
  5. Click on the email link
  6. Verify email client opens (if configured)

**Expected Results:**
  - Email link is visible and styled correctly
  - Link has gray-500 color initially
  - Link changes to black on hover
  - Mailto protocol is properly formatted
  - Email address is correct
  - Click triggers email client

#### 8.5. YouTube channel link in footer

**File:** `tests/external-links/youtube-link.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to the footer section
  3. Locate the YouTube link with text 'Ontology Hub'
  4. Verify YouTube icon is visible next to text
  5. Verify link has href 'https://www.youtube.com/@ontology-hub'
  6. Verify link has target='_blank' and rel='noopener noreferrer'
  7. Click on the YouTube link
  8. Verify new tab opens with YouTube channel

**Expected Results:**
  - YouTube link is properly styled
  - YouTube icon (from lucide-react) is displayed
  - Icon is 4x4 size (w-4 h-4)
  - Link color is gray-500 initially
  - Link changes to red-600 on hover
  - Link opens in new tab
  - Security attributes (noopener noreferrer) are present
  - Channel URL is correct (@ontology-hub)

### 9. Responsive Design - Mobile

**Seed:** `seed.spec.ts`

#### 9.1. Mobile viewport layout and navigation menu

**File:** `tests/responsive-design-mobile/mobile-layout-navigation.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to mobile size (e.g., 375x667 - iPhone SE)
  3. Verify the page renders correctly on mobile
  4. Check that navigation menu is hidden (hidden md:flex class)
  5. Verify header still shows ROOT BRICKS logo
  6. Verify header is fixed at top

**Expected Results:**
  - Page layout adapts to mobile viewport
  - Navigation menu is hidden on mobile
  - Logo remains visible and clickable
  - Header maintains fixed positioning
  - Content is readable without horizontal scroll
  - No layout overflow issues

#### 9.2. Hero section typography on mobile

**File:** `tests/responsive-design-mobile/hero-mobile-typography.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to mobile size
  3. Locate the Hero section h1 heading
  4. Verify heading uses mobile text size (text-5xl)
  5. Verify cursor height is h-16 on mobile
  6. Verify subtitle is text-xl on mobile
  7. Check that line break in subtitle is hidden on mobile

**Expected Results:**
  - Heading text is appropriately sized for mobile (text-5xl)
  - Cursor height is 16 units on mobile
  - Subtitle text is xl size
  - Line break in subtitle is hidden (hidden md:block)
  - Text is readable and not too large
  - Typography hierarchy is maintained

#### 9.3. Core Services grid on mobile

**File:** `tests/responsive-design-mobile/core-services-mobile-grid.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to mobile size
  3. Scroll to Core Services section
  4. Verify grid displays as single column (grid-cols-1)
  5. Verify all three service cards are stacked vertically
  6. Check spacing between cards

**Expected Results:**
  - Grid collapses to single column
  - Cards are stacked vertically
  - All three cards are fully visible
  - Spacing is consistent
  - Icons and text are properly sized
  - Content is readable

#### 9.4. AI Solutions grid on mobile

**File:** `tests/responsive-design-mobile/ai-solutions-mobile-grid.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to mobile size
  3. Scroll to AI Solutions section
  4. Verify grid displays as single column
  5. Verify all six project cards are stacked
  6. Test card interactions on mobile

**Expected Results:**
  - Grid shows one column on mobile
  - Six cards stack vertically
  - Cards are tappable/clickable
  - Hover effects work on touch
  - Text truncation is appropriate
  - No horizontal overflow

#### 9.5. Deployed Systems grid on mobile

**File:** `tests/responsive-design-mobile/deployed-systems-mobile-grid.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to mobile size
  3. Scroll to Deployed Systems section
  4. Verify grid shows single column
  5. Verify all six system cards are visible
  6. Check icon animations work on mobile

**Expected Results:**
  - Grid uses one column layout
  - All cards display properly
  - Icons are visible and appropriately sized
  - Tech stack badges are readable
  - Vertical spacing is adequate
  - Section heading is properly sized

#### 9.6. Timeline layout on mobile

**File:** `tests/responsive-design-mobile/timeline-mobile-layout.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to mobile size
  3. Scroll to Operational History section
  4. Verify timeline entries use flex-col layout
  5. Verify period dates are displayed above role titles
  6. Check text readability

**Expected Results:**
  - Timeline uses vertical flex layout (flex-col)
  - Period shows above role on mobile
  - Content is not cramped
  - All six entries are readable
  - Borders separate entries clearly
  - Maximum width constraint works

#### 9.7. Footer layout on mobile

**File:** `tests/responsive-design-mobile/footer-mobile-layout.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to mobile size
  3. Scroll to footer
  4. Verify email and YouTube links are visible
  5. Verify vertical divider is visible between links
  6. Verify copyright text is readable

**Expected Results:**
  - Footer content is centered
  - Links are tappable with adequate touch targets
  - Divider line is visible
  - Copyright text is appropriately sized
  - All footer elements are accessible
  - No layout issues

### 10. Responsive Design - Desktop

**Seed:** `seed.spec.ts`

#### 10.1. Desktop viewport layout and navigation

**File:** `tests/responsive-design-desktop/desktop-layout-navigation.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to desktop size (e.g., 1920x1080)
  3. Verify navigation menu is visible (md:flex)
  4. Verify all three nav links are horizontal
  5. Verify header layout with logo on left, nav on right
  6. Check maximum width constraint (max-w-7xl)

**Expected Results:**
  - Navigation menu is visible on desktop
  - Nav links display horizontally with gap-8
  - Header uses flexbox with space-between
  - Content is centered with max-w-7xl
  - Logo and nav are properly aligned
  - Header backdrop blur is visible

#### 10.2. Hero section typography on desktop

**File:** `tests/responsive-design-desktop/hero-desktop-typography.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to desktop size
  3. Verify heading uses large text size (text-7xl or text-8xl)
  4. Verify cursor height is h-24 on desktop
  5. Verify subtitle is text-2xl
  6. Verify line break in subtitle is visible

**Expected Results:**
  - Heading scales to text-7xl on md, text-8xl on lg
  - Cursor height is 24 units on desktop
  - Subtitle is text-2xl size
  - Line break is visible (hidden md:block)
  - Typography is impactful and clear
  - Spacing is generous

#### 10.3. Core Services three-column grid on desktop

**File:** `tests/responsive-design-desktop/core-services-desktop-grid.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to desktop size
  3. Scroll to Core Services section
  4. Verify grid displays three columns (md:grid-cols-3)
  5. Verify cards are evenly distributed
  6. Check gap spacing is gap-12

**Expected Results:**
  - Grid shows 3 columns side by side
  - Cards have equal width
  - Gap between cards is 12 units
  - All content is visible without scrolling
  - Layout is balanced and professional
  - Icons align properly

#### 10.4. AI Solutions three-column grid on desktop

**File:** `tests/responsive-design-desktop/ai-solutions-desktop-grid.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to desktop size
  3. Scroll to AI Solutions section
  4. Verify grid displays three columns
  5. Verify all six cards fit in 2 rows
  6. Test hover effects on desktop

**Expected Results:**
  - Grid uses 3 columns
  - Six cards arranged in 2 rows of 3
  - Hover effects work smoothly
  - Border color changes on hover
  - Title slides on hover (translateX)
  - Transitions are smooth

#### 10.5. Deployed Systems three-column grid on desktop

**File:** `tests/responsive-design-desktop/deployed-systems-desktop-grid.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to large desktop size
  3. Scroll to Deployed Systems section
  4. Verify grid uses lg:grid-cols-3
  5. Verify six cards in 2 rows of 3
  6. Test icon scale hover effects

**Expected Results:**
  - Grid shows 3 columns on large screens
  - Cards are evenly spaced
  - Icons scale to 110% on hover
  - Scale animation has 300ms duration
  - Transform origin is left
  - All cards maintain consistent height

#### 10.6. Timeline horizontal layout on desktop

**File:** `tests/responsive-design-desktop/timeline-desktop-layout.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to desktop size
  3. Scroll to Operational History section
  4. Verify timeline entries use md:flex-row layout
  5. Verify period dates are on the left (md:w-48)
  6. Verify role and description are on the right

**Expected Results:**
  - Timeline uses horizontal flex layout (md:flex-row)
  - Period column is fixed width (w-48)
  - Content column is flexible (flex-1)
  - Period and content are aligned horizontally
  - Gap between columns is 12 units
  - Layout is clean and scannable

#### 10.7. Wide screen layout and max-width constraints

**File:** `tests/responsive-design-desktop/wide-screen-max-width.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to very wide size (e.g., 2560x1440)
  3. Verify Hero content uses max-w-4xl constraint
  4. Verify main sections use max-w-7xl constraint
  5. Verify Timeline uses max-w-4xl constraint
  6. Verify content is centered with mx-auto

**Expected Results:**
  - Hero content maxes out at max-w-4xl
  - Main sections max out at max-w-7xl
  - Timeline maxes out at max-w-4xl
  - All content is horizontally centered
  - Large screens don't show excessive whitespace
  - Reading width is comfortable

### 11. Accessibility

**Seed:** `seed.spec.ts`

#### 11.1. Page has proper HTML language attribute

**File:** `tests/accessibility/html-lang-attribute.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Inspect the HTML element
  3. Verify lang attribute is set to 'ko'

**Expected Results:**
  - HTML element has lang='ko' attribute
  - Language is correctly identified as Korean
  - Screen readers will use Korean pronunciation

#### 11.2. Page title and meta description for SEO

**File:** `tests/accessibility/page-title-meta.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Check the document title
  3. Check meta description tag
  4. Verify title is descriptive and meaningful

**Expected Results:**
  - Title is 'ROOT BRICKS | Connecting Data, Designing Knowledge'
  - Meta description is 'AI Solutions, Knowledge Graphs, and Business Intelligence.'
  - Title is concise and descriptive
  - Description provides context about the site

#### 11.3. Heading hierarchy is semantic and logical

**File:** `tests/accessibility/heading-hierarchy.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Inspect all heading elements (h1, h2, h3)
  3. Verify there is one h1 element (Hero heading)
  4. Verify h2 elements are used for section headings
  5. Verify h3 elements are used for card titles
  6. Check that heading levels are not skipped

**Expected Results:**
  - Exactly one h1 exists on the page
  - h1 is the main Hero heading
  - h2 elements mark major sections
  - h3 elements mark subsections/cards
  - Heading hierarchy is logical and not skipped
  - Screen readers can navigate by headings

#### 11.4. Links have accessible text and context

**File:** `tests/accessibility/link-accessibility.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Inspect all anchor links on the page
  3. Verify navigation links have descriptive text
  4. Verify email link has clear text (email address)
  5. Verify YouTube link has text 'Ontology Hub' and icon
  6. Check external links have proper attributes (target, rel)

**Expected Results:**
  - All links have descriptive text content
  - No links rely solely on icons without text
  - External links have target='_blank'
  - External links have rel='noopener noreferrer'
  - Link purpose is clear from text alone
  - Screen readers can understand link destinations

#### 11.5. Color contrast meets WCAG standards

**File:** `tests/accessibility/color-contrast.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Check contrast ratio of main text (black on white)
  3. Check contrast ratio of gray text (text-gray-500) on white
  4. Check contrast ratio of gray text (text-gray-400) on white
  5. Verify navigation link contrast
  6. Verify footer text contrast

**Expected Results:**
  - Black text (#111111) on white has high contrast (>15:1)
  - Gray-500 text has at least 4.5:1 contrast for body text
  - Gray-400 text meets contrast for larger text
  - All text is readable
  - No color contrast issues for WCAG AA compliance
  - Users with low vision can read content

#### 11.6. Interactive elements have visible focus states

**File:** `tests/accessibility/focus-states.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Use Tab key to navigate through interactive elements
  3. Verify logo has focus state
  4. Verify navigation links have focus states
  5. Verify project cards have focus indication
  6. Verify footer links have focus states
  7. Check focus outline is visible

**Expected Results:**
  - All interactive elements are keyboard accessible
  - Tab order is logical (top to bottom, left to right)
  - Focus indicators are visible
  - Focus outline is not removed with outline:none
  - Users can navigate entire page with keyboard
  - Focus states meet accessibility requirements

#### 11.7. Images and icons have appropriate alternatives

**File:** `tests/accessibility/image-icon-alternatives.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Inspect all icon elements from lucide-react
  3. Verify icons are decorative or have semantic meaning from context
  4. Check that icons are rendered as SVG elements
  5. Verify icon sizing is appropriate

**Expected Results:**
  - Icons are used alongside descriptive text
  - Icons serve decorative purpose and don't convey unique info
  - All icons have parent context that describes their purpose
  - No critical information is conveyed by icons alone
  - SVG icons are accessible
  - Screen readers can understand content without seeing icons

#### 11.8. Text selection is enabled and styled

**File:** `tests/accessibility/text-selection.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Select text in Hero section
  3. Verify selection background is black
  4. Verify selection text color is white
  5. Try selecting text in different sections
  6. Verify all text is selectable

**Expected Results:**
  - Text selection is enabled throughout the page
  - Selection styling uses black background and white text
  - Selection is clearly visible
  - All body text can be selected
  - Selection styling is consistent
  - Users can copy text content

#### 11.9. Page is navigable with keyboard only

**File:** `tests/accessibility/keyboard-navigation.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Use only keyboard to navigate the page
  3. Press Tab to move through interactive elements
  4. Press Enter on navigation links
  5. Press Enter on project cards
  6. Press Enter on footer links
  7. Verify all functionality is accessible

**Expected Results:**
  - All interactive elements can be reached with Tab
  - Enter key activates links and buttons
  - Tab order follows visual layout
  - No keyboard traps exist
  - Skip links or logical tab order present
  - Page is fully functional without mouse

#### 11.10. Animations respect prefers-reduced-motion

**File:** `tests/accessibility/reduced-motion.spec.ts`

**Steps:**
  1. Set system preference to prefers-reduced-motion: reduce
  2. Navigate to http://localhost:3000
  3. Observe typing animation behavior
  4. Observe cursor blink animation
  5. Observe hover transitions
  6. Check if motion-sensitive users would be affected

**Expected Results:**
  - Animations should respect reduced motion preferences (if implemented)
  - Essential animations may remain but should be subtle
  - No rapid flashing or strobing
  - Transitions are smooth and not jarring
  - Motion sickness triggers are avoided
  - Page remains functional with reduced motion

### 12. Performance and Loading

**Seed:** `seed.spec.ts`

#### 12.1. Page loads within acceptable time

**File:** `tests/performance-and-loading/page-load-time.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Measure time from navigation start to load complete
  3. Verify page becomes interactive quickly
  4. Check Time to First Byte (TTFB)
  5. Check First Contentful Paint (FCP)
  6. Check Largest Contentful Paint (LCP)

**Expected Results:**
  - Page loads within 3 seconds on fast connection
  - TTFB is under 600ms
  - FCP is under 1.8s
  - LCP is under 2.5s for good performance
  - Page is interactive before fully loaded
  - Loading experience is smooth

#### 12.2. No JavaScript errors in console

**File:** `tests/performance-and-loading/no-console-errors.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Open browser console
  3. Monitor for errors during page load
  4. Interact with various page elements
  5. Check for runtime errors
  6. Verify no React errors or warnings

**Expected Results:**
  - No JavaScript errors appear in console
  - No React hydration errors
  - No network request failures
  - No 404 errors for resources
  - Console is clean of warnings (or minimal)
  - Application runs without errors

#### 12.3. Fonts load properly without FOUT

**File:** `tests/performance-and-loading/font-loading.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Observe text rendering during initial load
  3. Verify Inter font loads for body text
  4. Verify Space Grotesk font loads for monospace
  5. Check for Flash of Unstyled Text (FOUT)
  6. Verify font display strategy

**Expected Results:**
  - Google Fonts (Inter, Space Grotesk) load successfully
  - Fonts are applied via CSS variables
  - Minimal or no FOUT occurs
  - Text is readable during font loading
  - Font fallbacks are appropriate
  - Typography appears as designed

#### 12.4. CSS and styles load correctly

**File:** `tests/performance-and-loading/css-loading.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Verify Tailwind CSS styles are applied
  3. Check that custom global styles load
  4. Verify no unstyled content flash
  5. Check responsive breakpoint styles
  6. Verify color theme is applied

**Expected Results:**
  - Tailwind CSS classes are applied correctly
  - Global styles from globals.css are active
  - No Flash of Unstyled Content (FOUC)
  - All sections have proper styling
  - Colors match design system
  - Layout is styled from first paint

#### 12.5. Images and icons load efficiently

**File:** `tests/performance-and-loading/image-icon-loading.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Monitor network requests for images/icons
  3. Verify Lucide React icons render inline as SVG
  4. Check that no external image requests fail
  5. Verify favicon loads correctly
  6. Check SVG rendering performance

**Expected Results:**
  - All icons render as inline SVG
  - No broken image placeholders
  - Favicon loads and displays in browser tab
  - SVG icons are lightweight
  - No unnecessary image downloads
  - Icons appear immediately without loading delay

#### 12.6. Framer Motion animations perform smoothly

**File:** `tests/performance-and-loading/animation-performance.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Observe Hero section fade-in animation
  3. Monitor frame rate during animations
  4. Test cursor blink animation smoothness
  5. Test hover animations on cards
  6. Check for any janky or stuttering animations

**Expected Results:**
  - Animations run at 60fps or higher
  - No frame drops during transitions
  - GPU acceleration is utilized for transforms
  - Animations feel smooth and professional
  - No layout recalculations during animation
  - Framer Motion library loads efficiently

#### 12.7. Network requests are optimized

**File:** `tests/performance-and-loading/network-optimization.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Open Network panel in DevTools
  3. Count total number of network requests
  4. Measure total page weight
  5. Check for any blocking resources
  6. Verify resource compression

**Expected Results:**
  - Total requests are reasonable (<50 for SPA)
  - JavaScript bundles are optimized and code-split
  - CSS is minimized
  - Resources are cached appropriately
  - No unnecessary duplicate requests
  - Page weight is under 2MB

### 13. Edge Cases and Error Handling

**Seed:** `seed.spec.ts`

#### 13.1. Page handles very narrow viewport

**File:** `tests/edge-cases-error-handling/very-narrow-viewport.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to very narrow size (320x568 - iPhone SE width)
  3. Scroll through entire page
  4. Verify no horizontal scrolling is required
  5. Check that all content is readable
  6. Verify no content is cut off

**Expected Results:**
  - Page adapts to 320px width
  - No horizontal overflow
  - Text wraps appropriately
  - All sections are accessible
  - Buttons and links are tappable
  - Layout remains functional

#### 13.2. Page handles very tall viewport

**File:** `tests/edge-cases-error-handling/very-tall-viewport.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Set viewport to very tall size (1920x3000)
  3. Verify Hero section height is appropriate (80vh)
  4. Check that sections don't have excessive whitespace
  5. Verify content distribution looks balanced

**Expected Results:**
  - Hero section uses vh units and scales appropriately
  - No excessive empty space in sections
  - Footer remains at bottom
  - Content is well-distributed
  - Page looks balanced on tall screens

#### 13.3. Typing animation completes fully

**File:** `tests/edge-cases-error-handling/typing-animation-completion.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Wait for typing animation to complete (at least 3 seconds)
  3. Verify full text 'AI 기반 운영 및 의사결정을 실행하세요.' is displayed
  4. Verify no characters are missing
  5. Check that animation doesn't restart
  6. Verify cursor continues blinking after text completion

**Expected Results:**
  - Full Korean text is typed out completely
  - No missing or duplicate characters
  - Animation runs once and stops
  - Cursor continues to blink after completion
  - Text remains visible and stable
  - No animation loop issues

#### 13.4. External links handle unavailable targets gracefully

**File:** `tests/edge-cases-error-handling/external-link-failures.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Click on an external GitHub link
  3. Observe behavior if GitHub is slow or unavailable
  4. Verify main page is not affected
  5. Check that link opens in new tab (not disrupting main page)

**Expected Results:**
  - External links open in new tab (_blank)
  - Main page remains unaffected by external site issues
  - No errors appear on main page
  - User can close new tab and continue using site
  - Proper error handling in browser for external sites

#### 13.5. Page handles rapid scrolling

**File:** `tests/edge-cases-error-handling/rapid-scrolling.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Rapidly scroll up and down the page multiple times
  3. Use mouse wheel, trackpad, and keyboard scrolling
  4. Verify no layout issues occur
  5. Check that animations don't break
  6. Verify header remains fixed

**Expected Results:**
  - Page handles rapid scrolling smoothly
  - No content jumping or shifting
  - Header stays fixed during scroll
  - Animations remain stable
  - No performance degradation
  - Scroll position is accurate

#### 13.6. Page handles multiple rapid clicks on cards

**File:** `tests/edge-cases-error-handling/rapid-card-clicks.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Scroll to AI Solutions section
  3. Rapidly click on multiple project cards
  4. Verify each click attempts to open new tab
  5. Check that no errors occur
  6. Verify hover effects don't get stuck

**Expected Results:**
  - Multiple tabs open as expected
  - No JavaScript errors from rapid clicks
  - Click handlers remain responsive
  - Hover states reset correctly
  - No UI freezing or stuttering
  - Browser handles multiple window.open calls

#### 13.7. Page handles navigation interruption

**File:** `tests/edge-cases-error-handling/navigation-interruption.spec.ts`

**Steps:**
  1. Start navigation to http://localhost:3000
  2. Immediately click browser stop button
  3. Refresh the page
  4. Navigate to the page again
  5. Verify page loads correctly after interruption

**Expected Results:**
  - Page handles interrupted loads gracefully
  - Refresh recovers from partial load
  - No persistent errors from interruption
  - Page loads correctly on retry
  - React hydration works properly
  - No corrupted state

#### 13.8. Long continuous page usage without memory leaks

**File:** `tests/edge-cases-error-handling/memory-leak-check.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Interact with page for extended period
  3. Scroll multiple times
  4. Hover over multiple cards repeatedly
  5. Click navigation links multiple times
  6. Monitor browser memory usage

**Expected Results:**
  - Memory usage remains stable
  - No gradual memory increase (leak)
  - Animations don't accumulate listeners
  - Event handlers are properly cleaned up
  - React components unmount correctly
  - Page remains performant over time

#### 13.9. Browser back/forward navigation

**File:** `tests/edge-cases-error-handling/browser-navigation.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3000
  2. Click on an anchor link (e.g., AI Solutions)
  3. Use browser back button
  4. Use browser forward button
  5. Verify page state is preserved
  6. Check that scroll position is maintained or reset appropriately

**Expected Results:**
  - Back button works correctly
  - Forward button works correctly
  - Page doesn't break with browser navigation
  - Hash navigation (#activity, #projects) works with back/forward
  - No errors from navigation events
  - User experience is smooth
