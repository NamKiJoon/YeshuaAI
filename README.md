# ✝️ Yeshua Bible Tools

**Yeshua Bible Tools**는 [Next.js](https://nextjs.org)를 기반으로 제작된 성경 웹 애플리케이션입니다.  
사용자가 구절을 빠르게 검색하고, 필사하며, 말씀을 묵상할 수 있도록 돕는 **신앙 중심 도구**입니다.

> 🙏 기도하는 마음으로 만들었습니다.

---

## 주요 기능

- 📖 **성경 구절 검색** — URL 경로 기반으로 구절을 바로 확인
- ✍️ **말씀 필사 도우미** — 한 절씩 보여주며 필사를 유도 _(개발 중)_
- 🧠 **AI 기반 말씀 추천** _(개발 예정)_
- 💬 **예수님과의 대화 기능** _(개발 예정)_

---

## 사용 기술

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS + shadcn/ui
- **배포 환경**: AWS Lightsail + PM2
- **패키지 매니저**: Yarn

---

## 개발 환경

- Node.js: `v20.17.0`
- Yarn: `v1.x`

---

## 로컬 개발 방법

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev
```

# 프로덕션 빌드

yarn build

# PM2로 앱 실행 (항상 켜짐)

pm2 start "yarn start" --name next-app

# 서버 재시작 시 자동 실행 설정

pm2 save
pm2 startup

# 폴더 구조

src/
├── app/
│ ├── page.tsx # 메인 페이지 (기능 선택 화면)
│ ├── handwriting/page.tsx # 말씀 필사 도우미
│ └── bible/[book]/[chapter]/[verse]/ # 성경 구절별 페이지
├── components/
│ ├── common/ # Header, Footer 등 공통 UI 컴포넌트
│ └── handwriting/HandwritingHelper.tsx # 필사 UI 구성 컴포넌트
├── data/
│ └── bible.json # 성경 전체 구절 데이터 (key-value 형식)
└── styles/, public/ 등

개발자: jerry

📧 이메일: swms456@gmail.com

🔗 GitHub: https://github.com/NamKiJoon/YeshuaAI.git

# 사용한 오픈소스

Next.js

Tailwind CSS

shadcn/ui

Korean Bible JSON (성경 구절 데이터)
