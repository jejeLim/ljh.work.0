// ─────────────────────────────────────────────────────────
// 포트폴리오 데이터 (출처: 임지혜_포트폴리오.pdf)
// 텍스트와 이미지는 모두 PDF에 있는 내용만 사용한다.
// ─────────────────────────────────────────────────────────
import web01 from '@/assets/works/web-01.jpg'
import web02 from '@/assets/works/web-02.jpg'
import app01 from '@/assets/works/app-01.jpg'
import app02 from '@/assets/works/app-02.jpg'
import brand01 from '@/assets/works/brand-01.jpg'
import brand02 from '@/assets/works/brand-02.jpg'
import sns01 from '@/assets/works/sns-01.jpg'
import sns02 from '@/assets/works/sns-02.jpg'
import pptNpoCover from '@/assets/works/ppt-npo-cover.jpg'
import pptOmCover from '@/assets/works/ppt-om-cover.jpg'
import pptAiCover from '@/assets/works/ppt-ai-cover.jpg'
import pptNpo01 from '@/assets/works/ppt-npo-01.jpg'
import pptOm01 from '@/assets/works/ppt-om-01.jpg'
import pptAi01 from '@/assets/works/ppt-ai-01.jpg'
import print01 from '@/assets/works/print-01.jpg'
import print02 from '@/assets/works/print-02.jpg'
import detail01 from '@/assets/works/detail-01.jpg'
import detail02 from '@/assets/works/detail-02.jpg'
import siteA from '@/assets/sites/a.jpg'
import siteB from '@/assets/sites/b.jpg'
import siteC from '@/assets/sites/c.jpg'
import siteD from '@/assets/sites/d.jpg'
import siteE from '@/assets/sites/e.jpg'

// ── 기본 정보 ─────────────────────────────────────────────
export const PROFILE = {
  nameEn: 'LIM JIHYE',
  nameKo: '임지혜',
  role: 'UX/UI Designer & Web Publisher',
  years: 12,
  since: 2014,
  ownership: '본인 진행 100%',
} as const

export const CONTACT = {
  email: 'ljh.work.0@gmail.com',
  mobile: '010 3021 4612',
  kakao: 'jeje.b',
  /**
   * 카카오톡 친구추가 링크.
   * 카카오톡 앱 > 친구 탭 > 친구 추가 > QR코드 > "링크 복사" 로 받은 주소(https://qr.kakao.com/talk/…)를 넣으면
   * Contact 버튼이 이 링크로 바로 연결된다. 비워 두면 ID 안내 창이 열린다.
   */
  kakaoAddUrl: '',
} as const

export const CONTACT_EMAIL = CONTACT.email

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Works', href: '#works' },
  { label: 'Websites', href: '#websites' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const

// ── Websites (피그마 시안 → 직접 코딩한 랜딩페이지, React로 변환) ──
export interface WebsiteInfo {
  id: 'a' | 'b' | 'c' | 'd' | 'e'
  name: string
  kicker: string
  desc: string
  tags: string[]
  /** 실제 랜딩페이지 */
  href: string
  /** 케이스 스터디 서브페이지 */
  caseHref: string
  image: string
  /** 대표(강조) 사이트 여부 */
  featured?: boolean
}

export const WEBSITES: WebsiteInfo[] = [
  {
    id: 'a',
    name: 'Corazon',
    kicker: 'Landing Page Sample',
    desc: '프리즘 라이트와 다크 글래스를 이미지 언어로 삼은 랜딩페이지 샘플. 리스팅 탭·캐러셀, 타임라인, 후기 슬라이더, 서비스 카드까지 인터랙션을 직접 구현했습니다.',
    tags: ['Desktop 1440', 'Tablet 834', 'Mobile 390', 'Dark Glass', 'Prism Light'],
    href: './sites/a/',
    caseHref: './case/a/',
    image: siteA,
    featured: true,
  },
  {
    id: 'b',
    name: 'TREAD9',
    kicker: '타이어 교체 서비스',
    desc: '30분 타이어 교체를 내세운 서비스 랜딩페이지. 상담 폼과 예약 시간표, 요금 비교로 전환에 집중했습니다.',
    tags: ['Service', 'Bold Type', 'Blue Accent'],
    href: './sites/b/',
    caseHref: './case/b/',
    image: siteB,
  },
  {
    id: 'c',
    name: '느린숲 펜션',
    kicker: '숲속 펜션 예약',
    desc: '갤러리, 객실, 요금표, 후기, FAQ, 오시는 길까지 숙박 예약에 필요한 흐름을 따뜻한 톤으로 구성했습니다.',
    tags: ['Booking', 'Warm Paper', 'Serif'],
    href: './sites/c/',
    caseHref: './case/c/',
    image: siteC,
  },
  {
    id: 'd',
    name: 'ONDO Roasters',
    kicker: '커피 로스터리 쇼핑',
    desc: '캔 커피와 원두를 판매하는 로스터리 쇼핑 랜딩페이지. 여백 중심의 에디토리얼 레이아웃으로 제품을 돋보이게 했습니다.',
    tags: ['Shop', 'Editorial', 'Minimal'],
    href: './sites/d/',
    caseHref: './case/d/',
    image: siteD,
  },
  {
    id: 'e',
    name: 'olea Skincare',
    kicker: '스킨케어 브랜드 쇼핑',
    desc: '세이지 그린과 종이 톤 위에 둥근 카드를 쌓은 스킨케어 쇼핑 랜딩페이지. 프리로더, 글자 단위 등장, 펼쳐지는 카테고리 타일, 틸트 카드 등 부드러운 모션을 더했습니다.',
    tags: ['Shop', 'Sage Green', 'Rounded Cards', 'Motion'],
    href: './sites/e/',
    caseHref: './case/e/',
    image: siteE,
  },
]

export const MARQUEE_ITEMS = ['WEB DESIGN', 'UI · UX', 'BRANDING', 'PUBLISHING', 'PRINT'] as const

// ── 키워드 (12년 디자인 & 퍼블리싱) ──────────────────────
export const KEYWORDS = [
  { ko: '디자인 감각', en: 'Design Sense' },
  { ko: '빠른 속도', en: 'Speed' },
  { ko: '정확한 니즈 파악', en: 'Insight' },
  { ko: '업그레이드', en: 'Upgrade' },
] as const

// ── About 탭 ──────────────────────────────────────────────
export const ABOUT_TABS = [
  {
    id: 'profile',
    label: 'PROFILE',
    num: '01',
    title: 'ABOUT ME',
    body: ['12년 디자인 & 퍼블리싱의 경험과 노하우.', '디자인 감각과 빠른 속도, 정확한 니즈 파악으로', '결과물을 끊임없이 업그레이드합니다.'],
  },
  {
    id: 'skills',
    label: 'SKILLS',
    num: '02',
    title: 'SKILLS',
    body: ['Photoshop · Illustrator · Figma', 'Miro · Notion · VS Code · Sourcetree', 'Slack · Claude'],
  },
  {
    id: 'scope',
    label: 'SCOPE',
    num: '03',
    title: 'SCOPE',
    body: ['웹·앱 UX/UI, 브랜딩, SNS 콘텐츠,', 'PPT, 인쇄물, 상세페이지까지', '기획부터 퍼블리싱까지 본인 진행 100%'],
  },
] as const

// ── Skills ────────────────────────────────────────────────
export interface SkillItem {
  id: string
  name: string
  tool: string
  icon?: 'uiux' | 'branding' | 'motion' | 'web'
  stat?: { value: number; suffix: string }
}

export const SKILLS: SkillItem[] = [
  { id: 'uiux', name: 'UI/UX 디자인', tool: 'Figma · Photoshop', icon: 'uiux' },
  { id: 'branding', name: '브랜딩 & 로고', tool: 'Illustrator · Photoshop', icon: 'branding' },
  { id: 'planning', name: '기획 & 협업', tool: 'Miro · Notion · Slack · Claude', icon: 'motion' },
  { id: 'years', name: '디자인 & 퍼블리싱 경력', tool: 'Since 2014', stat: { value: PROFILE.years, suffix: 'yrs' } },
  { id: 'web', name: '웹 퍼블리싱', tool: 'HTML · CSS · JS · VS Code', icon: 'web' },
]

export const TOOLS = ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Miro', 'Notion', 'VS Code', 'Sourcetree', 'Slack', 'Claude'] as const

// ── Projects (PDF 섹션 01 ~ 07) ───────────────────────────
export type Category = 'Web' | 'App' | 'Branding' | 'Content' | 'PPT' | 'Print' | 'Detail'

export interface ProjectItem {
  title: string
  sub?: string
  group?: string
}

export interface ProjectInfo {
  id: string
  num: string
  category: Category
  label: string
  labelEn: string
  title: [string, string]
  role: string
  items: ProjectItem[]
  image: string
  thumbs: string[]
  /** 메이슨리 카드 높이 (데스크톱) */
  cardHeight: number
}

export const PROJECTS: ProjectInfo[] = [
  {
    id: 'web',
    num: '01',
    category: 'Web',
    label: '웹 디자인 & 퍼블리싱',
    labelEn: 'WEB DESIGN & PUBLISHING',
    title: ['WEB DESIGN', '& PUBLISHING'],
    role: 'UX/UI 디자인 · 웹 퍼블리싱',
    items: [
      { title: '바니마니 반응형 웹앱 홈페이지' },
      { title: '엠랩(Mlab) 반응형 웹앱 홈페이지' },
      { title: '케이사인 반응형 웹앱 홈페이지' },
      { title: '외교부 행정전자서명인증센터 반응형 웹앱 홈페이지' },
      { title: '반응형 웹앱 홈페이지' },
    ],
    image: web01,
    thumbs: [web02],
    cardHeight: 520,
  },
  {
    id: 'app',
    num: '02',
    category: 'App',
    label: '앱 기획 & 디자인',
    labelEn: 'APP PLANNING & DESIGN',
    title: ['APP PLANNING', '& DESIGN'],
    role: '앱 기획 · UX/UI 디자인',
    items: [{ title: '바니마니 – 인사급여관리앱 기획, 디자인' }, { title: '그라운드케이 출퇴근 셔틀버스 앱 디자인' }],
    image: app01,
    thumbs: [app02],
    cardHeight: 420,
  },
  {
    id: 'branding',
    num: '03',
    category: 'Branding',
    label: '브랜딩 기획 & 디자인',
    labelEn: 'BRANDING & LOGO DESIGN',
    title: ['BRANDING', '& LOGO DESIGN'],
    role: '브랜드 기획 · 로고 디자인',
    items: [
      { title: '바니마니 – 인사급여 알바관리 서비스 로고 제작 & 브랜드 기획, 디자인' },
      { title: '(주)모드니코퍼레이션 로고 제작 & 브랜드 기획, 디자인' },
    ],
    image: brand01,
    thumbs: [brand02],
    cardHeight: 380,
  },
  {
    id: 'content',
    num: '04',
    category: 'Content',
    label: 'SNS 콘텐츠 기획 & 디자인',
    labelEn: 'SNS CONTENT DESIGN',
    title: ['SNS CONTENT', 'DESIGN'],
    role: '콘텐츠 기획 · 디자인',
    items: [{ title: '바니마니 – 인사급여 알바관리 서비스' }, { title: '(주)모드니코퍼레이션' }, { title: 'SNS 광고 콘텐츠' }],
    image: sns01,
    thumbs: [sns02],
    cardHeight: 480,
  },
  {
    id: 'ppt',
    num: '05',
    category: 'PPT',
    label: 'PPT 디자인',
    labelEn: 'PRESENTATION DESIGN',
    title: ['PRESENTATION', 'DESIGN'],
    role: '제안서 · 보고서 디자인',
    items: [
      {
        title: 'NPO 기반 Cloud 운영 혁신 AX 제안',
        sub: '제안 발표 자료 · 16:9 · 13p — AI Incident Assistant 기반 장애 대응 혁신 제안. 다크 커버와 화이트 본문의 대비, 레드 포인트로 문제와 성과 지표를 선명하게 전달합니다.',
      },
      {
        title: 'IT 운영유지보수(O&M) 효율화 전략',
        sub: '전략 보고서 · 16:9 · 6p — 멀티 벤더 서비스와 AIOps를 통한 운영 혁신 전략 보고서. 여백 중심의 레이아웃으로 현황·방향·전략을 간결하게 정리했습니다.',
      },
      {
        title: 'IT 업계의 AI 활용과 하네스 엔지니어링',
        sub: '기획 보고서 · 16:9 · 23p — IT 업계의 AI 활용 방식을 하네스 엔지니어링에 적용하는 방안을 담은 보고서. 텍스트가 많은 내용을 체크리스트·비교 카드로 구조화했습니다.',
      },
    ],
    image: pptNpoCover,
    thumbs: [pptOmCover, pptAiCover, pptNpo01, pptOm01, pptAi01],
    cardHeight: 300,
  },
  {
    id: 'print',
    num: '06',
    category: 'Print',
    label: 'POP(인쇄물) 디자인',
    labelEn: 'PRINT DESIGN',
    title: ['PRINT', 'DESIGN'],
    role: '리플렛 · 브로셔 · 배너 · 포스터',
    items: [
      { title: 'MBC 드라마 – 지금 거신 전화는', group: '리플렛 / 브로셔' },
      { title: '(주)모드니코퍼레이션 회사소개 리플렛', group: '리플렛 / 브로셔' },
      { title: '2024 가을 고양가구 박람회', group: '리플렛 / 브로셔' },
      { title: '바니마니 – 앱 소개 브로셔', group: '리플렛 / 브로셔' },
      { title: '금산군 활활 페스타 축제 포스터', group: '배너 / 포스터' },
      { title: 'PIWU 중화요리 스탠드 배너', group: '배너 / 포스터' },
      { title: '동죽칼국수 배너', group: '배너 / 포스터' },
      { title: '바니마니 X 배너', group: '배너 / 포스터' },
    ],
    image: print01,
    thumbs: [print02],
    cardHeight: 460,
  },
  {
    id: 'detail',
    num: '07',
    category: 'Detail',
    label: '상세페이지 디자인',
    labelEn: 'DETAIL PAGE DESIGN',
    title: ['DETAIL PAGE', 'DESIGN'],
    role: '상세페이지 기획 · 디자인',
    items: [{ title: '쇼핑몰 상품 상세페이지' }, { title: '모바일 최적화 레이아웃' }],
    image: detail01,
    thumbs: [detail02],
    cardHeight: 520,
  },
]

export const WORK_FILTERS = ['All', 'Web', 'App', 'Branding', 'Content', 'PPT', 'Print', 'Detail'] as const
export type WorkFilter = (typeof WORK_FILTERS)[number]

export const CATEGORY_LABEL: Record<Category, string> = {
  Web: 'Web',
  App: 'App',
  Branding: 'Branding',
  Content: 'SNS Content',
  PPT: 'Presentation',
  Print: 'Print',
  Detail: 'Detail Page',
}

/** 대표 작업 슬라이더 (PDF 섹션 중 4개) */
export const FEATURED_IDS = ['web', 'app', 'branding', 'ppt'] as const
