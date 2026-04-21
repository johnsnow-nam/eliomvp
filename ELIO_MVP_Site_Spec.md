# ELIO Board — MVP Website Development Spec
> Claude Code + Designer 협업용 개발 명세서  
> Last updated: 2026-04-21

---

## 0. 프로젝트 목표

ELIO Board의 글로벌 B2C 런칭을 위한 MVP 랜딩 페이지.  
**타겟:** 전 세계 메이커, STEAM 교육자, AI/IoT 개발자  
**핵심 액션:** Tindie 구매 + GitHub Star + Instructables 팔로우  
**언어:** 영문 (글로벌 우선)

---

## 1. 디자인 방향 (Designer에게)

### 1.1 무드 & 톤
- **키워드:** Clean Tech / Maker Spirit / AI-Native / Open Source
- **레퍼런스 사이트:** Arduino.cc, Particle.io, Adafruit.com, Seeed Studio
- **느낌:** 전문적이지만 접근하기 쉬운. 기술적이지만 따뜻한.

### 1.2 컬러 팔레트
```
Primary:    #1D4ED8  (ELIO Blue - 신뢰, 기술)
Secondary:  #10B981  (Emerald - AI, 가능성)
Accent:     #F59E0B  (Amber - 에너지, 하드웨어)
Dark:       #0F172A  (Near Black - 배경, 텍스트)
Light:      #F8FAFC  (Off White - 섹션 배경)
```

### 1.3 타이포그래피
```
Heading:    Inter Bold / Geist Bold  (또는 유사 tech sans-serif)
Body:       Inter Regular
Code:       JetBrains Mono / Fira Code
```

### 1.4 디자인 원칙
- **Hero:** 다크 배경 + 보드 실물 사진 or 3D 렌더링 중앙 배치
- **섹션 구분:** 화이트 ↔ 라이트그레이 교차
- **아이콘:** Lucide Icons or Heroicons (일관성)
- **코드 예시:** 신택스 하이라이팅 다크 테마 블록
- **모바일 우선** 반응형

---

## 2. 사이트 구조 (7개 섹션)

```
[1] Hero               — 첫인상, 핵심 메시지, CTA
[2] What is ELIO       — 제품 개요 + 핵심 스펙
[3] How It Works       — BLE/Serial 연결 흐름 다이어그램
[4] Code Your Way      — 6개 코딩 플랫폼 지원
[5] AI-Native          — Claude MCP / Gemma / Teachable Machine
[6] Use Cases          — 5가지 활용 사례 카드
[7] Get Started        — 구매/다운로드/커뮤니티 링크 CTA
[Footer]               — 링크 모음 + 소셜
```

---

## 3. 섹션별 상세 스펙

---

### [1] HERO SECTION

**레이아웃:** 풀스크린 다크 배경, 중앙 정렬

**헤드라인:**
```
Build your AI.
Move your world.
```

**서브 카피:**
```
ELIO is the open hardware platform that connects
any AI to any motor — from a classroom desk to a 20km field.
```

**CTA 버튼 2개:**
```
[Buy on Tindie →]          (Primary, Blue)
[View on GitHub ↗]         (Secondary, Ghost)
```

**배지 4개 (헤드라인 아래):**
```
● Nordic nRF52    ● BLE + LoRa    ● AI-Ready    ● Open Platform
```

**배경 요소:**
- 실제 ELIO 보드 사진 (오른쪽 or 중앙, 살짝 기울어진 각도)
- 또는: SVG 회로 패턴 + 파란 글로우 효과

**필요 에셋:**
- `elio-board-hero.png` (투명 배경, 고해상도)
- 없을 경우: CSS/SVG로 보드 실루엣 대체 가능

---

### [2] WHAT IS ELIO

**레이아웃:** 화이트 배경, 좌: 설명 / 우: 스펙 카드

**타이틀:** `One Board. Every Connection.`

**본문:**
```
ELIO is a Nordic nRF52-based physical computing platform
designed for makers, educators, and AI developers.
Connect motors, sensors, and cameras — then control everything
from blocks, Python, Arduino, or an AI agent.
```

**스펙 테이블 (오른쪽 카드):**
| | |
|---|---|
| MCU | Nordic nRF52 (BLE built-in) |
| DC Motors | ×2 (PWM speed control) |
| Servo Motors | ×2 (PWM, -90°~+90°) |
| I/O Ports | ×4 (LED / sensor) |
| Power Output | 3.3V / 5V |
| Communication | BLE / LoRa / USB Serial |
| Battery | 3V – 9V |
| Coding | Blocks / Python / Arduino / App |

---

### [3] HOW IT WORKS

**레이아웃:** 라이트그레이 배경, 연결 흐름 다이어그램 중앙

**타이틀:** `Connect in 3 Steps`

**다이어그램 (SVG or CSS):**
```
[Your Device]  →  [Bluetooth / USB / WiFi]  →  [ELIO Board]  →  [Motors / Sensors / LEDs]

스마트폰 앱      BLE (~30m)              nRF52 MCU          DC Motor x2
PC (Scratch)    USB Serial                                   Servo x2
Python          WiFi (ESP32-CAM)                             IO Ports x4
Claude AI       LoRa (2-20km)                                Camera
```

**3단계 설명 카드:**
1. **Download the App or open Scratch**  
   Available on iOS, Android, and web browser. No driver needed on Mac.

2. **Power on ELIO & Connect**  
   Press the power button. Blue LED blinks → solid when connected.

3. **Start Coding**  
   Drag blocks, write Python, or say it in natural language to Claude AI.

---

### [4] CODE YOUR WAY

**레이아웃:** 다크 배경, 6개 플랫폼 그리드 (3×2)

**타이틀:** `6 Ways to Code ELIO`

**플랫폼 카드 6개:**

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  🧩 Scratch 3.0 │  │  📦 mBlock      │  │  📗 Entry       │
│  Web-based      │  │  190+ countries │  │  Korea #1       │
│  Drag & Drop    │  │  Drag & Drop    │  │  Drag & Drop    │
│  [Try Now →]    │  │  [Download →]   │  │  [Download →]   │
└─────────────────┘  └─────────────────┘  └─────────────────┘

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  🐍 Python      │  │  ⚡ Arduino C++ │  │  📱 Mobile App  │
│ pip install elio│  │  Arduino Library│  │  iOS + Android  │
│  Full Control   │  │  Low-level      │  │  BLE Controller │
│  [PyPI →]       │  │  [GitHub →]     │  │  [App Store →]  │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

**코드 스니펫 (탭 전환):**

**Python 탭:**
```python
from elio import Elio

board = Elio()
board.connect()           # Bluetooth connect
board.dc(1, speed=80)     # DC Motor 1 → 80% forward
board.servo(1, angle=45)  # Servo 1 → 45 degrees
board.io(1, value=100)    # IO Port 1 → LED full bright
```

**Arduino 탭:**
```cpp
#include <Elio.h>

Elio elio;

void setup() {
  elio.begin();
}

void loop() {
  elio.dc(1, 80);      // DC Motor 1: 80% speed
  elio.servo(1, 45);   // Servo 1: 45 degrees
  delay(1000);
  elio.stop();
}
```

**Claude AI 탭:**
```bash
# Install buddy-mcp
pip install buddy-mcp

# In Claude Desktop settings, add:
{
  "mcpServers": {
    "elio": {
      "command": "python",
      "args": ["-m", "buddy_mcp"]
    }
  }
}

# Now tell Claude:
# "Move the left motor forward at 70% for 2 seconds, then stop"
```

---

### [5] AI-NATIVE

**레이아웃:** 화이트 배경, 왼쪽: 텍스트 / 오른쪽: 3개 AI 카드

**타이틀:** `The First Maker Board Built for AI Agents`

**본문:**
```
ELIO isn't just AI-compatible — it's AI-native.
With buddy-mcp, Claude AI directly controls your robot
through natural language. No code required.
```

**AI 카드 3개:**

**Card 1 — Claude AI (Anthropic)**
```
[Anthropic Logo]
Claude + ELIO via MCP
"Tell Claude to drive your robot with natural language.
 buddy-mcp is listed on the official Anthropic MCP Registry."
[View on MCP Registry ↗]
```

**Card 2 — Gemma4 + Ollama**
```
[Gemma Logo]  
Local AI — No Internet Required
"Run Gemma4 on your GPU with Ollama.
 Full robot control, completely offline."
[GitHub →]
```

**Card 3 — Teachable Machine**
```
[Google Logo]
Custom AI Vision Model
"Train your own image classifier with
 Google Teachable Machine + ESP32-CAM."
[Tutorial →]
```

**강조 배지:**
```
✓ Listed on Anthropic MCP Registry
✓ Works with Claude Desktop App
✓ Local AI (no cloud needed)
```

---

### [6] USE CASES

**레이아웃:** 라이트그레이 배경, 5개 카드 가로 스크롤 or 그리드

**타이틀:** `What Will You Build?`

**카드 5개:**

```
[1] AI Robot              [2] Drone Control         [3] Smart Farm
ELIO + Claude MCP         ELIO + Pixhawk            ELIO + LoRa
"Ask your robot to        "Custom flight            "Monitor soil, water,
 navigate, avoid           controllers with          temperature up to
 obstacles, and            ELIO as payload           20km away — no WiFi
 respond to your           computer."                needed."
 voice."

[4] STEAM Education       [5] RC Upcycling
ELIO + Scratch/Entry      ELIO + Old RC Car
"From block coding to     "Bring old toys back
 Python — one board        to life. Add BLE,
 grows with your           motors, and LEDs.
 students."                Weekend project."
```

---

### [7] GET STARTED

**레이아웃:** 다크 배경, 3개 큰 CTA 카드

**타이틀:** `Ready to Build?`

**CTA 카드 3개:**

```
┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
│     🛒 Buy ELIO      │  │    📖 Learn First    │  │   👾 Join Community  │
│                      │  │                      │  │                      │
│  Available on Tindie │  │  Step-by-step guides │  │  Makers building     │
│  Ships worldwide     │  │  on Instructables    │  │  with ELIO           │
│                      │  │                      │  │                      │
│  [Buy on Tindie →]   │  │  [View Guides →]     │  │  [YouTube @boxfighter│
│                      │  │                      │  │   GitHub →]          │
└──────────────────────┘  └──────────────────────┘  └──────────────────────┘
```

**Key Links:**
- Tindie: `https://tindie.com/stores/mobilian/` (미정, 셋업 후 업데이트)
- Instructables: `https://instructables.com/member/elio-robotics/` (미정)
- GitHub: `https://github.com/johnsnow-nam`
- YouTube: `https://youtube.com/@boxfighter`

---

### [Footer]

**컬럼 4개:**
```
[ELIO]                   [Code]              [Learn]            [Connect]
AI-Native Maker Board    Python (PyPI)       Instructables      GitHub
by Mobilian              Arduino Library     YouTube            MCP Registry
                         Scratch Extension   FAQ                info@mobilian.biz
                         Mobile App
```

**하단 바:**
```
© 2026 Mobilian Co., Ltd.  |  MIT License  |  mobilian.biz
```

---

## 4. 기술 스택 (Claude Code에게)

### 4.1 추천 스택
```
Framework:    Next.js 14 (App Router) + TypeScript
Styling:      Tailwind CSS v3
Icons:        Lucide React
Syntax HL:    Prism.js or Shiki
Animation:    Framer Motion (Hero section만)
Font:         next/font (Inter + JetBrains Mono)
Deploy:       Vercel (무료 플랜 가능) or GitHub Pages
```

### 4.2 대안 (더 빠른 MVP)
```
Framework:    Vanilla HTML + CSS + JS (단일 파일)
Styling:      Tailwind CSS CDN
Icons:        Heroicons SVG inline
Deploy:       GitHub Pages (johnsnow-nam.github.io/elio)
```

> **MVP 추천:** 빠른 배포를 위해 **단일 HTML 파일** 먼저.  
> 검증 후 Next.js로 마이그레이션.

---

## 5. 파일 구조 (Next.js 기준)

```
elio-website/
├── app/
│   ├── page.tsx              # 메인 랜딩 페이지
│   ├── layout.tsx            # 루트 레이아웃 (SEO 메타)
│   └── globals.css           # 글로벌 스타일
├── components/
│   ├── Hero.tsx
│   ├── WhatIsElio.tsx
│   ├── HowItWorks.tsx
│   ├── CodeYourWay.tsx       # 코드 탭 컴포넌트
│   ├── AINative.tsx
│   ├── UseCases.tsx
│   ├── GetStarted.tsx
│   └── Footer.tsx
├── public/
│   ├── elio-board.png        # 보드 실물 사진
│   ├── elio-logo.svg
│   └── og-image.png          # SNS 공유 이미지 (1200×630)
└── package.json
```

---

## 6. SEO / 메타데이터

```html
<title>ELIO Board — AI-Native Physical Computing Platform</title>
<meta name="description" content="Open hardware platform that connects 
any AI to any motor. Control robots with Claude AI, Python, Scratch, 
or your smartphone. BLE + LoRa + Arduino.">

<!-- OG Tags -->
<meta property="og:title" content="ELIO Board — Build your AI. Move your world.">
<meta property="og:image" content="/og-image.png">
<meta property="og:url" content="https://eliotobot.com">

<!-- Keywords -->
<meta name="keywords" content="ELIO board, maker board, Arduino alternative, 
BLE robot, LoRa IoT, Claude AI MCP, Scratch robot, physical computing, 
STEAM education, Nordic nRF52">
```

---

## 7. 필요 에셋 체크리스트

### 디자이너가 만들어야 할 것
- [ ] `elio-board-hero.png` — 보드 고화질 사진 or 3D 렌더 (투명 배경)
- [ ] `og-image.png` — SNS 공유 이미지 1200×630
- [ ] `elio-logo.svg` — 로고 벡터 (이미 scratch-gui에 있음 참고)
- [ ] 섹션별 아이콘 세트 (Lucide 사용 가능하면 스킵)
- [ ] Use Case 섹션용 일러스트 or 사진 5개

### Claude Code가 생성할 것
- [ ] 전체 HTML/CSS/JS (또는 Next.js 컴포넌트)
- [ ] 코드 신택스 하이라이팅
- [ ] How It Works 연결 다이어그램 (SVG)
- [ ] 반응형 레이아웃
- [ ] 스크롤 애니메이션

### 콘텐츠 (대표님이 확인/수정)
- [ ] Tindie 스토어 URL 확정
- [ ] Instructables 계정 URL 확정
- [ ] 보드 실물 판매 가격 ($)
- [ ] 공식 도메인 확정 (eliotobot.com? elioboard.com?)

---

## 8. 개발 우선순위 (MVP → V2)

### Phase 1 — MVP (1주일)
```
✅ 단일 HTML 파일로 7개 섹션 구현
✅ 모바일 반응형
✅ 코드 탭 (Python / Arduino / Claude AI)
✅ GitHub Pages 배포
```

### Phase 2 — V2 (2주일)
```
⬜ Next.js 마이그레이션
⬜ Scratch Editor 임베드 (johnsnow-nam.github.io/scratch-gui iframe)
⬜ 다국어 (영문 + 한국어)
⬜ 애니메이션 개선
⬜ Analytics (GA4)
```

### Phase 3 — V3 (1개월)
```
⬜ 인터랙티브 데모 (브라우저에서 Scratch 바로 실행)
⬜ 프로젝트 갤러리 (Instructables 연동)
⬜ 커뮤니티 쇼케이스
```

---

## 9. Claude Code 프롬프트 예시

아래 프롬프트를 Claude Code에 그대로 붙여넣어서 시작하세요:

```
이 스펙 파일(ELIO_MVP_Site_Spec.md)을 기반으로 
ELIO Board MVP 랜딩 페이지를 단일 HTML 파일로 만들어줘.

기술 조건:
- Tailwind CSS CDN 사용
- Inter 폰트 (Google Fonts)
- Lucide Icons (CDN)
- 코드 탭은 vanilla JS로 구현
- 모바일 반응형 필수

디자인 조건:
- 다크 Hero 섹션 (#0F172A 배경)
- Primary 컬러 #1D4ED8 (ELIO Blue)
- 7개 섹션 모두 구현
- 실제 ELIO 보드 이미지는 placeholder로 대체

콘텐츠는 스펙 파일의 내용을 그대로 사용하되,
영어로 작성해줘.
```

---

## 10. 참고 자료

| 항목 | 링크 |
|------|------|
| Scratch GUI (live) | https://johnsnow-nam.github.io/scratch-gui/ |
| GitHub | https://github.com/johnsnow-nam |
| PyPI | https://pypi.org/project/elio/ |
| YouTube | https://youtube.com/@boxfighter |
| 현재 사이트 | https://mobilian.biz |
| MCP Registry | buddy-mcp (Anthropic 공식 등록) |

---

> **이 파일을 디자이너와 Claude Code에게 공유하면 바로 작업 시작 가능합니다.**  
> 섹션 순서, 카피, 링크는 작업하면서 자유롭게 수정해주세요.
