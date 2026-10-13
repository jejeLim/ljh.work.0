// ─────────────────────────────────────────────────────────
// 랜딩페이지 케이스 스터디 데이터
// 근거: 피그마(W7oK9dneOtJfgEcciSeDWD — Foundations & Components, Desktop 1440 / Tablet 834 / Mobile 390)와
//       각 페이지 원본 CSS의 :root 변수·컴포넌트 클래스·미디어쿼리
// ─────────────────────────────────────────────────────────
import aDesktop from '@/assets/sites/a.jpg'
import aTablet from '@/assets/sites/a-tablet.jpg'
import aMobile from '@/assets/sites/a-mobile.jpg'
import bDesktop from '@/assets/sites/b.jpg'
import bTablet from '@/assets/sites/b-tablet.jpg'
import bMobile from '@/assets/sites/b-mobile.jpg'
import cDesktop from '@/assets/sites/c.jpg'
import cTablet from '@/assets/sites/c-tablet.jpg'
import cMobile from '@/assets/sites/c-mobile.jpg'
import dDesktop from '@/assets/sites/d.jpg'
import dTablet from '@/assets/sites/d-tablet.jpg'
import dMobile from '@/assets/sites/d-mobile.jpg'
import eDesktop from '@/assets/sites/e.jpg'
import eTablet from '@/assets/sites/e-tablet.jpg'
import eMobile from '@/assets/sites/e-mobile.jpg'

export type CaseId = 'a' | 'b' | 'c' | 'd' | 'e'

export interface ColorToken {
  name: string
  value: string
  role: string
  /** 밝은 색이면 true (스와치 글자색 결정) */
  light?: boolean
  gradient?: boolean
}

export interface TypeToken {
  name: string
  sample: string
  family: string
  size: number
  weight: number
  italic?: boolean
  letterSpacing?: string
}

export interface ComponentItem {
  name: string
  desc: string
  usage: string
}

export interface Breakpoint {
  label: string
  width: number
  image: string
  notes: string[]
}

export interface CaseStudyInfo {
  id: CaseId
  num: string
  name: string
  kicker: string
  tagline: string
  /** 케이스 페이지의 강조색(배경 글로우 등) */
  accent: string
  accent2: string
  dark?: boolean
  meta: { label: string; value: string }[]
  fonts: string[]
  fontLink: string
  concept: {
    title: string
    body: string[]
    keywords: string[]
    layout: string[]
  }
  colors: ColorToken[]
  type: TypeToken[]
  components: ComponentItem[]
  sections: string[]
  responsive: {
    intro: string
    breakpoints: Breakpoint[]
    rules: string[]
  }
}

const EASE = 'cubic-bezier(.2,.7,.2,1)'

export const CASES: CaseStudyInfo[] = [
  // ── A · Corazon ───────────────────────────────────────
  {
    id: 'a',
    num: '01',
    name: 'Corazon',
    kicker: 'Landing Page Sample',
    tagline: '다크 글래스 위에 흐르는 프리즘 라이트. 리스팅·가이드·후기·저널 등 랜딩페이지에 필요한 섹션과 인터랙션을 한 벌로 담은 페이지 샘플.',
    accent: '#A78BFA',
    accent2: '#67E8F9',
    dark: true,
    meta: [
      { label: 'Type', value: '랜딩페이지 샘플 (템플릿)' },
      { label: 'Role', value: 'Figma 디자인 · 퍼블리싱 · 인터랙션' },
      { label: 'Breakpoints', value: 'Desktop 1440 · Tablet 834 · Mobile 390' },
      { label: 'Stack', value: 'HTML · CSS · JS → React 변환' },
    ],
    fonts: ['Inter 300 · 400 · 500 · 600'],
    fontLink: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap',
    concept: {
      title: 'Dark glass · Iridescent prism light · Clean grotesk type',
      body: [
        '피그마 Foundations에 적어 둔 컨셉 그대로입니다. 깊은 다크 배경 위에 반투명 유리 패널을 띄우고, 그 사이로 무지갯빛 프리즘 광선이 지나가게 했습니다. 사진 대신 이 프리즘 비주얼이 리스팅 카드, 후기, 저널, 뉴스레터까지 반복되는 이미지 언어가 됩니다. 실제 서비스가 아닌 페이지 샘플이라, 어떤 업종의 콘텐츠를 넣어도 어울리도록 비주얼을 추상적으로 유지했습니다.',
        '프리즘은 피그마의 벡터 구성(글로우 원 + 세 개의 광선 + 두 장의 유리)을 CSS만으로 다시 만들었습니다. 컨테이너 쿼리 단위(cqmin)로 크기를 잡아 어떤 카드에 넣어도 비율이 유지되고, hue-rotate 값만 바꾸면 카드마다 다른 색감이 나옵니다.',
      ],
      keywords: ['Dark Glass', 'Prism Light', 'Iridescent', 'Grotesk', 'Motion'],
      layout: [
        '1200px 컬럼 위에 다크 글래스 밴드와 라이트 밴드를 번갈아 배치',
        '섹션 간격 120px, 거터 120px을 기준으로 리듬을 통일',
        '히어로 프리즘은 화면 끝까지 광선이 이어지도록 마스크로 페이드 처리',
        '스크롤 리빌, 카운트업, 타임라인 자동 진행 등 모션은 reduce-motion 설정을 존중',
      ],
    },
    colors: [
      { name: 'Dark', value: '#07080B', role: '페이지 배경' },
      { name: 'Surface', value: '#0F1115', role: '카드 · 뉴스레터 표면' },
      { name: 'Ink', value: '#0B0C10', role: '라이트 밴드의 본문 · 버튼' },
      { name: 'Muted', value: '#5F6470', role: '보조 텍스트', light: false },
      { name: 'Light', value: '#F3F4F6', role: '라이트 밴드 배경', light: true },
      { name: 'White', value: '#FFFFFF', role: '카드 · 기본 버튼', light: true },
      { name: 'Iridescent', value: 'linear-gradient(90deg,#8EC5FC,#A78BFA,#F0ABFC,#FDE68A,#67E8F9)', role: '프리즘 광선 · 포인트 그라디언트', gradient: true, light: true },
    ],
    type: [
      { name: 'Display 76', sample: 'Find Your Dream Home', family: 'Inter', size: 56, weight: 500, letterSpacing: '-0.04em' },
      { name: 'Heading 52', sample: 'Homes curated for the way you live', family: 'Inter', size: 36, weight: 500, letterSpacing: '-0.04em' },
      { name: 'Title 22', sample: 'Massive Royal Mansion', family: 'Inter', size: 22, weight: 600 },
      { name: 'Body 16 / 150%', sample: 'Discover top listings, explore virtual tours, and connect with trusted agents.', family: 'Inter', size: 16, weight: 400 },
      { name: 'Caption 12 · UPPER', sample: 'WELCOME TO CORAZON', family: 'Inter', size: 12, weight: 500, letterSpacing: '0.08em' },
    ],
    components: [
      { name: 'Button', desc: 'light · dark · glass · ghost 4가지 변형, lg · sm 사이즈. 호버 시 아이콘이 미끄러지고 글로우가 켜집니다.', usage: '히어로 CTA, 카드 View, 뉴스레터 구독' },
      { name: 'Eyebrow', desc: '무지개 점 + 대문자 11px 라벨. 섹션의 시작을 알리는 작은 캡션.', usage: '모든 섹션 헤더' },
      { name: 'Prism Visual', desc: '피그마의 프리즘을 CSS로 재구성한 비주얼. data-v 값으로 색상(hue)과 방향이 바뀝니다.', usage: '히어로, 리스팅·저널 카드, 후기, 스토리, 뉴스레터' },
      { name: 'Property Card', desc: '피그마 컴포넌트(symbol). 프리즘 미디어 + 태그 + 즐겨찾기, 제목·설명·메타·가격·View 버튼.', usage: 'Featured Listings 탭 캐러셀, 상세 다이얼로그' },
      { name: 'Blog Card', desc: '피그마 컴포넌트(symbol). 미디어 · 날짜 · 제목 · 요약 · Read article.', usage: 'Journal 캐러셀' },
      { name: 'Tabs + Carousel', desc: '슬라이딩 인디케이터 탭, 드래그·화살표·도트가 있는 스크롤 스냅 캐러셀.', usage: '리스팅 분류 탭(Apartment · Office · Warehouse), 저널' },
      { name: 'Guide Step', desc: '점·선 레일이 채워지며 자동 진행되는 4단계 타임라인.', usage: 'User Guide' },
      { name: 'Quote Card', desc: '글래스 카드 위의 후기. 7초 프로그레스 바, 스와이프, 사진 스택 셔플.', usage: 'Testimonials' },
      { name: 'Service Card', desc: '포인터를 따라 무지개 배경이 켜지는 3열 카드.', usage: 'Services' },
      { name: 'Nav & Mobile Menu', desc: '스크롤 시 블러 배경, 스크롤 다운 시 숨김, 스크롤스파이 인디케이터, 전체화면 모바일 메뉴.', usage: '헤더' },
      { name: 'Dialog & Toast', desc: '리스팅 상세 다이얼로그와 즐겨찾기 토스트.', usage: '리스팅 카드 상호작용' },
    ],
    sections: ['Announcement Bar', 'Hero', 'Featured Listings', 'User Guide', 'Testimonials', 'Stats & Story', 'Journal', 'Services', 'Newsletter & Footer'],
    responsive: {
      intro: '피그마에서 Desktop 1440 · Tablet 834 · Mobile 390 세 프레임을 먼저 그린 뒤, CSS에서는 1100px과 640px 두 분기점으로 구현했습니다.',
      breakpoints: [
        { label: 'Desktop', width: 1440, image: aDesktop, notes: ['1200px 컬럼, 거터 120px', '리스팅 카드 3열 캐러셀', '타임라인 4열 가로 레일'] },
        { label: 'Tablet', width: 834, image: aTablet, notes: ['거터 40px, 섹션 간격 96px', '내비게이션 링크 → 메뉴 버튼', '카드 340px 고정폭 스크롤', '타임라인 세로 레일'] },
        { label: 'Mobile', width: 390, image: aMobile, notes: ['거터 20px, 섹션 간격 72px', '리스팅 카드 세로 스택 + See all', '스토리·서비스 1열', '푸터 컬럼 세로 정렬'] },
      ],
      rules: [
        '거터·섹션 간격을 CSS 변수(--gutter, --sec)로 두고 분기점마다 값만 교체',
        '프리즘 비주얼은 컨테이너 쿼리 단위로 그려 카드 크기와 무관하게 비율 유지',
        '공지 문구는 full · mid · short 세 버전을 두고 폭에 맞춰 교체',
        '모바일에서는 캐러셀 대신 세로 목록 + 더보기, 데코 요소는 숨김',
      ],
    },
  },

  // ── B · TREAD9 ────────────────────────────────────────
  {
    id: 'b',
    num: '02',
    name: 'TREAD9',
    kicker: '타이어 교체 서비스',
    tagline: '블랙과 화이트 밴드를 구름 모양 경계로 잇고, 굵은 한글 헤드라인에 시안 하이라이트를 얹은 타이어 교체 서비스 랜딩페이지.',
    accent: '#33C5F3',
    accent2: '#0A86B5',
    dark: true,
    meta: [
      { label: 'Type', value: '서비스 랜딩페이지' },
      { label: 'Role', value: 'Figma 디자인 · 퍼블리싱 · 인터랙션' },
      { label: 'Breakpoints', value: '1100px · 640px' },
      { label: 'Stack', value: 'HTML · CSS · JS → React 변환' },
    ],
    fonts: ['Noto Sans KR 400 · 500 · 700 · 900', 'Manrope 700 · 800'],
    fontLink: 'https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&family=Noto+Sans+KR:wght@400;500;700;900&display=swap',
    concept: {
      title: 'Black / White bands · Cloud edges · Cyan highlight',
      body: [
        '"타이어 교체, 30분이면 끝"이라는 메시지를 가장 크게, 가장 빨리 읽히게 하는 것이 목표였습니다. 블랙 섹션과 화이트 섹션을 번갈아 두고, 그 경계를 직선 대신 구름 모양으로 처리해 딱딱한 정비 서비스에 부드러운 인상을 더했습니다.',
        '헤드라인은 Noto Sans KR 900으로 중앙 정렬하고, 핵심 단어에만 시안(#33C5F3) 하이라이트 박스를 얹어 시선을 고정합니다. 숫자와 영문은 Manrope로 바꿔 가격·시간 정보가 또렷하게 보입니다.',
      ],
      keywords: ['Bold Headline', 'Cloud Edge', 'Cyan Highlight', 'Dark / Light', 'Conversion'],
      layout: [
        '1200px 컬럼, 거터 120px, 섹션 간격 120px',
        '다크 ↔ 라이트 밴드 사이에 구름 경계(--cloud-h 56px)를 반복',
        '중앙 정렬 헤드라인 + 아이콘 카드 3열 그리드',
        '상담 폼, 요금 카드, 예약 시간표로 이어지는 전환 흐름',
      ],
    },
    colors: [
      { name: 'Black', value: '#0A0B0D', role: '다크 밴드 배경 · 잉크' },
      { name: 'Black 2', value: '#15181C', role: '요금 카드 · 폼 표면' },
      { name: 'Grey', value: '#F1F3F4', role: '라이트 밴드 배경', light: true },
      { name: 'Muted', value: '#5E636B', role: '보조 텍스트' },
      { name: 'Muted 2', value: '#A3A8B0', role: '캡션 · 비활성' },
      { name: 'Cyan', value: '#33C5F3', role: '하이라이트 박스 · 주요 버튼', light: true },
      { name: 'Cyan Dark', value: '#0A86B5', role: '호버 · 라인' },
      { name: 'Red', value: '#FF3B3B', role: '배지 · 강조 포인트' },
    ],
    type: [
      { name: 'Headline 52 / 900', sample: '타이어 교체, 30분이면 끝', family: "'Noto Sans KR'", size: 40, weight: 900, letterSpacing: '-0.04em' },
      { name: 'Eyebrow · Manrope 14', sample: 'WHY TREAD9', family: 'Manrope', size: 14, weight: 700, letterSpacing: '0.12em' },
      { name: 'Price · Manrope', sample: '₩79,000', family: 'Manrope', size: 32, weight: 800, letterSpacing: '-0.02em' },
      { name: 'Body 16', sample: '무료 점검을 예약하고 30분 안에 새 타이어로 출발하세요.', family: "'Noto Sans KR'", size: 16, weight: 400 },
    ],
    components: [
      { name: 'Cloud Edge', desc: '섹션 상·하단에 반복되는 구름 실루엣(SVG 배경). 분기점마다 높이가 56 → 46 → 36px로 줄어듭니다.', usage: '모든 밴드 경계' },
      { name: 'Highlight (hl)', desc: '900 굵기 중앙 헤드라인과 핵심 단어의 시안 박스(cy).', usage: '모든 섹션 타이틀' },
      { name: 'Button', desc: 'btn-cy(시안) · btn-k(블랙) · btn-full(전체폭) · ic-btn(아이콘 원형).', usage: '히어로 CTA, 상담, 예약' },
      { name: 'Eyebrow (eye)', desc: 'Manrope 700, 자간 0.12em의 영문 라벨.', usage: '섹션 헤더' },
      { name: 'Icon Card', desc: '아이콘 + 제목 + 설명의 3열 카드. 호버 시 살짝 떠오릅니다.', usage: 'Why TREAD9, Benefits' },
      { name: 'Class Carousel', desc: '사진 카드(vis)를 가로 스크롤하는 캐러셀과 화살표.', usage: '타이어 종류 소개' },
      { name: 'Consult Form', desc: '다크 카드 위의 입력 필드(field)와 전체폭 버튼. 제출 시 토스트.', usage: '상담 신청' },
      { name: 'Pricing Card', desc: 'pc · pc-top · pc-price 구조. 추천 플랜은 시안 테두리로 강조.', usage: '요금 안내' },
      { name: 'Schedule Row', desc: '시간 · 메뉴 · 잔여석 · 예약 버튼이 한 줄인 시간표 행.', usage: '예약 시간표' },
      { name: 'Strip', desc: '시안 배경의 가로 띠(strip-cy)에 키워드를 반복.', usage: '밴드 사이 강조 문구' },
    ],
    sections: ['Hero', 'About', 'Why TREAD9', 'Benefits', 'Classes', 'Consult', 'Belief (Venn)', 'Pricing', 'Schedule', 'CTA & Footer'],
    responsive: {
      intro: '1100px 아래에서는 거터를 40px로, 640px 아래에서는 20px로 줄이고 구름 경계 높이와 섹션 간격도 함께 줄였습니다.',
      breakpoints: [
        { label: 'Desktop', width: 1440, image: bDesktop, notes: ['거터 120px, 구름 56px', '아이콘 카드 3열', '요금 카드 3열'] },
        { label: 'Tablet', width: 834, image: bTablet, notes: ['거터 40px, 구름 46px', '헤더 링크 → 메뉴 버튼', '카드 2열 또는 가로 스크롤'] },
        { label: 'Mobile', width: 390, image: bMobile, notes: ['거터 20px, 구름 36px', '카드 1열, 버튼 전체폭', '헤드라인 32px'] },
      ],
      rules: [
        '--gutter · --sec · --cloud-h 세 변수만 분기점에서 교체',
        '헤드라인은 clamp(32px, 3.6vw, 52px)로 폭에 따라 자연스럽게 축소',
        '시간표는 모바일에서 세로 카드 형태로 재배치',
        '캐러셀은 터치 스크롤, 데스크톱은 화살표 + 드래그',
      ],
    },
  },

  // ── C · 느린숲 펜션 ────────────────────────────────────
  {
    id: 'c',
    num: '03',
    name: '느린숲 펜션',
    kicker: '숲속 펜션 예약',
    tagline: '종이 베이지와 에스프레소 밴드를 찢어진 종이 경계로 잇고, 세리프 제목과 로즈골드 월계수 숫자로 느린 휴식을 표현한 펜션 랜딩페이지.',
    accent: '#C8958A',
    accent2: '#5A4636',
    meta: [
      { label: 'Type', value: '숙박 예약 랜딩페이지' },
      { label: 'Role', value: 'Figma 디자인 · 퍼블리싱 · 인터랙션' },
      { label: 'Breakpoints', value: '1100px · 640px' },
      { label: 'Stack', value: 'HTML · CSS · JS → React 변환' },
    ],
    fonts: ['Hahmlet 400 · 500 · 600', 'Gothic A1 300 – 800', 'Cormorant Garamond Italic'],
    fontLink: 'https://fonts.googleapis.com/css2?family=Hahmlet:wght@400;500;600&family=Gothic+A1:wght@300;400;500;700;800&family=Cormorant+Garamond:ital,wght@1,400;1,500&display=swap',
    concept: {
      title: 'Paper & Espresso · Torn edges · Serif & laurel',
      body: [
        '"숲에서 보내는 느린 하루"라는 한 문장에서 출발했습니다. 종이 질감의 베이지 바탕과 에스프레소색 밴드를 번갈아 쌓고, 그 사이를 찢어진 종이 모양으로 이어 손으로 만든 안내 책자 같은 인상을 줍니다.',
        '제목은 한글 세리프 Hahmlet, 본문은 Gothic A1, 영문 포인트는 Cormorant Garamond 이탤릭으로 나눠 썼습니다. 숙박 숫자(12,000명 · 4.9/5)는 로즈골드 월계수로 감싸 신뢰 지표가 장식처럼 읽히게 했습니다.',
      ],
      keywords: ['Paper Texture', 'Torn Edge', 'Serif', 'Rose Gold', 'Warm Stay'],
      layout: [
        '1200px 컬럼, 거터 120px, 섹션 간격 104px',
        '종이(paper · paper2 · cream)와 에스프레소 밴드가 교대로 반복',
        '갤러리 링, 객실 카드, 요금표, 후기, FAQ, 오시는 길까지 예약 흐름 순서로 배치',
        '노이즈 텍스처(--noise)를 배경에 얹어 종이 질감 표현',
      ],
    },
    colors: [
      { name: 'Espresso', value: '#241C17', role: '다크 밴드 배경' },
      { name: 'Bark', value: '#3D3027', role: '다크 카드 표면' },
      { name: 'Wood', value: '#5A4636', role: '버튼 · 라인' },
      { name: 'Ink', value: '#2B221C', role: '본문 텍스트' },
      { name: 'Paper', value: '#ECE6DD', role: '기본 배경', light: true },
      { name: 'Paper 2', value: '#E2D9CC', role: '보조 배경', light: true },
      { name: 'Cream', value: '#F6F1EA', role: '카드 표면', light: true },
      { name: 'Rose', value: '#C8958A', role: '월계수 · 포인트', light: true },
      { name: 'Rose Light', value: '#EBC1B3', role: '하이라이트', light: true },
      { name: 'Rose Dark', value: '#9E6B5F', role: '호버 · 강조' },
    ],
    type: [
      { name: 'Heading · Hahmlet', sample: '숲에서 보내는 느린 하루', family: 'Hahmlet', size: 36, weight: 500 },
      { name: 'Accent · Cormorant Italic', sample: 'Slow Forest · Gapyeong', family: "'Cormorant Garamond'", size: 24, weight: 500, italic: true },
      { name: 'Body · Gothic A1', sample: '체크인 15:00, 체크아웃 11:00. 숲 한가운데서 가장 느린 하루를 보내세요.', family: "'Gothic A1'", size: 15, weight: 400 },
      { name: 'Number · Hahmlet', sample: '12,000명', family: 'Hahmlet', size: 32, weight: 600 },
    ],
    components: [
      { name: 'Torn Edge', desc: '밴드 사이의 찢어진 종이 경계(--torn SVG). 위·아래 색을 변수로 받아 어느 조합에도 붙습니다.', usage: '모든 밴드 경계' },
      { name: 'Laurel Number', desc: '로즈골드 월계수(lau)로 감싼 숫자와 캡션.', usage: '숙박 지표(Numbers)' },
      { name: 'Button', desc: 'btn-ol(아웃라인 필) · btn-cream · btn-sm / lg.', usage: '예약하기, 객실 보기, 문의' },
      { name: 'Gallery Ring', desc: '가운데 사진이 크고 양옆이 작아지는 링 갤러리(ring · ph)와 썸네일.', usage: '공간 둘러보기' },
      { name: 'Room Card', desc: '크림 카드 + 사진 + 캡션 + 가격(room · room-ph · room-b · room-f).', usage: '머물 곳 고르기' },
      { name: 'Step Circle', desc: '아이콘 원(circ)과 제목·설명의 예약 단계.', usage: '예약은 이렇게 진행돼요' },
      { name: 'Price Table', desc: '객실 × 시즌 요금표와 모바일용 카드 전환.', usage: '이용요금 안내' },
      { name: 'Review Card', desc: '별점(stars) · 사진 · 후기 텍스트가 있는 다크 카드.', usage: '다녀간 분들의 이야기' },
      { name: 'FAQ Accordion', desc: '질문을 누르면 답(ans)이 펼쳐지고 아이콘이 뒤집히는(flip) 아코디언.', usage: '자주 묻는 질문' },
      { name: 'Form Field', desc: '종이 톤의 입력 필드(fld)와 지도 영역.', usage: '예약 문의 · 오시는 길' },
    ],
    sections: ['Hero', 'Gallery', 'Numbers', 'Gift', 'Rooms', 'Story', 'Steps', 'Price', 'Reviews', 'FAQ', 'Guide', 'Contact', 'Footer'],
    responsive: {
      intro: '종이 질감과 찢어진 경계는 그대로 두고, 갤러리 링·객실 카드·요금표가 폭에 맞춰 형태를 바꿉니다.',
      breakpoints: [
        { label: 'Desktop', width: 1440, image: cDesktop, notes: ['거터 120px', '갤러리 5장 링', '객실 카드 4열, 요금표 전체'] },
        { label: 'Tablet', width: 834, image: cTablet, notes: ['거터 40px', '헤더 링크 → 메뉴 버튼', '객실 카드 2열'] },
        { label: 'Mobile', width: 390, image: cMobile, notes: ['거터 20px', '갤러리 3장, 객실 1열', '요금표 → 카드형'] },
      ],
      rules: [
        '--gutter · --sec 변수로 간격 통일, 분기점에서 값만 교체',
        '월계수 숫자는 aspect-ratio로 비율을 고정해 어느 폭에서도 찌그러지지 않음',
        '요금표는 모바일에서 행을 카드로 재구성',
        '히어로 사진은 object-position으로 초점 유지',
      ],
    },
  },

  // ── D · ONDO Roasters ─────────────────────────────────
  {
    id: 'd',
    num: '04',
    name: 'ONDO Roasters',
    kicker: '커피 로스터리 쇼핑',
    tagline: '따뜻한 종이색 바탕에 가는 선으로 칸을 나누고, 제품 사진과 세리프 이탤릭을 여백 속에 놓은 에디토리얼 쇼핑 랜딩페이지.',
    accent: '#9A5B3C',
    accent2: '#B4432E',
    meta: [
      { label: 'Type', value: '쇼핑 랜딩페이지' },
      { label: 'Role', value: 'Figma 디자인 · 퍼블리싱 · 인터랙션' },
      { label: 'Breakpoints', value: '1099px · 599px' },
      { label: 'Stack', value: 'HTML · CSS · JS → React 변환' },
    ],
    fonts: ['Hanken Grotesk 400 · 500 · 600', 'Instrument Serif Italic', 'Noto Sans KR 400 · 500 · 700'],
    fontLink: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Noto+Sans+KR:wght@400;500;700&display=swap',
    concept: {
      title: 'Editorial split · Hairline grid · Serif italic accents',
      body: [
        '"오늘 아침 볶은 커피를 알맞은 온도로"라는 브랜드 약속을 잡지 지면처럼 보여주고 싶었습니다. 화면을 반으로 나누는 split 레이아웃과 가는 선(hairline)으로 칸을 나눈 그리드가 기본 구조이고, 제품 사진은 각 칸(cell) 안에 정돈되어 놓입니다.',
        '서체는 Hanken Grotesk의 대문자 라벨과 Instrument Serif 이탤릭의 대비로 리듬을 만들고, 테라코타(#9A5B3C)와 레드(#B4432E)만 아주 적게 써서 종이와 커피 색 사이에서 포인트가 되게 했습니다.',
      ],
      keywords: ['Editorial', 'Hairline Grid', 'Split Layout', 'Serif Italic', 'Minimal'],
      layout: [
        '전체폭 split(1fr 1fr) 섹션과 4열 제품 그리드의 반복',
        '패딩 변수(--P 40px)와 헤더 높이(--hd 64px)로 간격 통일',
        '가로 마퀴(mq)로 브랜드 문구를 흘려 섹션을 구분',
        '주간 원두(weekly) 상세 패널에서 용량·분쇄·수량 선택 인터랙션',
      ],
    },
    colors: [
      { name: 'Background', value: '#F6F2EA', role: '페이지 배경', light: true },
      { name: 'Paper', value: '#FBF9F4', role: '패널 · 카드', light: true },
      { name: 'Cell', value: '#F1ECE3', role: '사진 칸 배경', light: true },
      { name: 'Grey', value: '#E8E5E0', role: '보조 배경', light: true },
      { name: 'Line', value: '#BDB4A8', role: '헤어라인 그리드', light: true },
      { name: 'Ink', value: '#1E1A16', role: '본문 · 라벨' },
      { name: 'Muted', value: '#6E665C', role: '보조 텍스트' },
      { name: 'Terra', value: '#9A5B3C', role: '포인트 · 가격' },
      { name: 'Red', value: '#B4432E', role: '좋아요 · 강조' },
    ],
    type: [
      { name: 'Display · Hanken 500', sample: 'ROASTED THIS MORNING; SERVED AT THE RIGHT TEMPERATURE', family: "'Hanken Grotesk'", size: 28, weight: 500, letterSpacing: '-0.01em' },
      { name: 'Accent · Instrument Serif Italic', sample: 'Ethiopia Guji Hambela', family: "'Instrument Serif'", size: 30, weight: 400, italic: true },
      { name: 'Label 11 · UPPER', sample: 'SINGLE ORIGIN DAILY', family: "'Hanken Grotesk'", size: 11, weight: 500, letterSpacing: '0.06em' },
      { name: 'Body · Noto Sans KR', sample: '매일 아침 망원동 로스터리에서 소량씩 직접 볶습니다.', family: "'Noto Sans KR'", size: 14, weight: 400 },
    ],
    components: [
      { name: 'Split Section', desc: '화면을 1:1로 나누는 그리드. 한쪽은 사진, 한쪽은 카피.', usage: 'Hero, Roastery, Hand, Order' },
      { name: 'Oval Button', desc: '140×56 타원 아웃라인 버튼. 10px 대문자 라벨.', usage: 'ALL PRODUCTS, SHOP ALL, ORDER' },
      { name: 'Label (lb)', desc: '11px 대문자 라벨, 자간 0.06em.', usage: '섹션 · 제품 캡션' },
      { name: 'Photo Cell (ph)', desc: 'cell 배경 위에 사진을 cover로 채우는 칸. 변수로 사진과 초점을 바꿉니다.', usage: '모든 이미지 영역' },
      { name: 'Product Grid', desc: '헤어라인으로 나뉜 4열 제품 칸(grid · cnt)과 좋아요 버튼.', usage: 'Shop, Beans' },
      { name: 'Category List', desc: '큰 제목 + 소분류 + 타원 버튼의 카테고리 목록(cat · cat-list).', usage: 'Roastery' },
      { name: 'Marquee', desc: '브랜드 문구가 흐르는 가로 띠(mq · mq-track · mq-item).', usage: '히어로 아래' },
      { name: 'Detail Panel', desc: '용량 라디오, 분쇄 칩(chip), 수량 스테퍼, 담기 버튼.', usage: "This Week's Roast" },
      { name: 'Like Carousel', desc: '화살표(arw)로 넘기는 추천 제품 캐러셀.', usage: 'You May Like' },
      { name: 'Header & Mobile Menu', desc: '세 구역 헤더(hd)와 전체화면 메뉴(mm).', usage: '헤더' },
    ],
    sections: ['Hero', 'Marquee', 'Shop', 'Roastery', 'Beans', "This Week's Roast", 'Hand', 'You May Like', 'Order', 'Footer'],
    responsive: {
      intro: '헤어라인 그리드가 핵심이라 열 수를 4 → 2 → 1로 줄이되 선은 그대로 유지해 어느 폭에서도 같은 인상을 줍니다.',
      breakpoints: [
        { label: 'Desktop', width: 1440, image: dDesktop, notes: ['패딩 40px, 헤더 64px', 'split 1:1, 제품 4열', '마퀴 전체폭'] },
        { label: 'Tablet', width: 834, image: dTablet, notes: ['패딩 28px, 헤더 56px', '제품 2열', '메뉴 버튼 전환'] },
        { label: 'Mobile', width: 390, image: dMobile, notes: ['패딩 20px', 'split → 세로 스택', '제품 2열, d-only 요소 숨김'] },
      ],
      rules: [
        '--P · --hd 변수로 패딩과 헤더 높이를 분기점마다 교체',
        'split 섹션은 모바일에서 사진 → 카피 순서로 세로 배치',
        '데스크톱 전용 장식(d-only)은 모바일에서 숨김',
        '마퀴와 캐러셀은 터치에서도 자연스럽게 흐르도록 overflow 처리',
      ],
    },
  },

  // ── E · olea Skincare ─────────────────────────────────
  {
    id: 'e',
    num: '05',
    name: 'olea Skincare',
    kicker: '스킨케어 브랜드 쇼핑',
    tagline: '올리브에서 시작한 클린 스킨케어. 세이지 그린과 종이 톤의 둥근 카드 위에서 제품과 브랜드 철학이 천천히 드러나는 쇼핑 랜딩페이지.',
    accent: '#8C977C',
    accent2: '#2E3424',
    meta: [
      { label: 'Type', value: '스킨케어 쇼핑 랜딩페이지' },
      { label: 'Role', value: 'Figma 디자인 · 퍼블리싱 · 인터랙션' },
      { label: 'Breakpoints', value: '1099px · 599px' },
      { label: 'Stack', value: 'HTML · CSS · JS → React 변환' },
    ],
    fonts: ['Playfair Display 400 · 500 · Italic', 'Raleway 400 · 500', 'Inter 400 · 500', 'Noto Sans KR 400 · 500'],
    fontLink: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Raleway:wght@400;500&family=Inter:wght@400;500&family=Noto+Sans+KR:wght@400;500&display=swap',
    concept: {
      title: 'Calm skin & hair · Sage green · Rounded cards',
      body: [
        '"New philosophy of self-care: calm skin & hair"라는 브랜드 문장에 맞춰, 화면 전체를 차분한 종이색(#E7E2DC) 바탕과 세이지 그린 포인트로만 구성했습니다. 모든 콘텐츠는 모서리가 둥근 카드(--R 28px) 안에 담기고, 카드 사이 간격(--G 24px)이 레이아웃의 유일한 리듬이 됩니다.',
        '첫 진입 시 잉크색 프리로더가 열리며 로고가 드러나고, 헤드라인은 글자 단위로 올라옵니다. 카테고리 타일은 호버하면 옆으로 펼쳐지고, 제품 카드는 마우스를 따라 기울어집니다. 모션은 모두 spring 이징으로 부드럽게 맞췄습니다.',
      ],
      keywords: ['Clean Beauty', 'Sage Green', 'Rounded Cards', 'Preloader', 'Spring Motion'],
      layout: [
        '종이색 바탕 위에 카드(--card)를 쌓는 베이지 카드 그리드',
        '카드 반지름 --R 28px, 간격 --G 24px, 패딩 --P 72px을 변수로 통일',
        'Hero → Philosophy → Catalog → Care → New → Product → Footer 순서의 쇼핑 흐름',
        '프리로더, 글자 등장, 타일 펼침, 틸트, 세일 배지 회전 등 모션은 spring 이징으로 통일',
      ],
    },
    colors: [
      { name: 'Out', value: '#E7E2DC', role: '페이지 배경', light: true },
      { name: 'Card', value: '#F2EFEA', role: '카드 표면', light: true },
      { name: 'White', value: '#FFFFFF', role: '제품 카드 · 버튼', light: true },
      { name: 'Ink', value: '#2E3424', role: '본문 · 프리로더 · 다크 카드' },
      { name: 'Sage', value: '#8C977C', role: '포인트 · 세이지 필 버튼', light: true },
      { name: 'Sage Light', value: '#A9B29B', role: '호버 · 보조 포인트', light: true },
      { name: 'Black', value: '#141414', role: '타일 라벨 · 가격' },
      { name: 'Muted', value: '#6B6B63', role: '보조 텍스트' },
      { name: 'Line', value: '#D9D4CC', role: '태그 · 구분선', light: true },
    ],
    type: [
      { name: 'Logo · Playfair Display', sample: 'olea', family: "'Playfair Display'", size: 44, weight: 500 },
      { name: 'Heading · Raleway 500', sample: 'New philosophy of self-care: calm skin & hair', family: 'Raleway', size: 30, weight: 500, letterSpacing: '-0.01em' },
      { name: 'Accent · Playfair Italic', sample: 'Pure care by nature', family: "'Playfair Display'", size: 26, weight: 400, italic: true },
      { name: 'Body · Inter 14', sample: '올리브에서 시작한 클린 스킨케어. 매일의 피부에 차분한 균형을.', family: 'Inter', size: 14, weight: 400 },
      { name: 'Label 14 · ( body )', sample: '( body )  ( face )  ( hair )', family: 'Inter', size: 14, weight: 500 },
    ],
    components: [
      { name: 'Preloader', desc: '잉크색 전체 화면이 clip-path로 열리며 로고를 드러내는 진입 연출(pre · pre-in).', usage: '첫 진입' },
      { name: 'Card', desc: '--R 반지름의 둥근 컨테이너. 사진 카드(ph), 텍스트 카드, 다크 카드가 같은 규칙을 공유합니다.', usage: '모든 섹션' },
      { name: 'Pill Button', desc: 'pill · pill-line(아웃라인) · pill-sage(세이지) 세 변형의 알약 버튼.', usage: 'Add to bag, More about olea, Learn more, Buy now' },
      { name: 'Category Tile', desc: '호버하면 flex-grow로 옆으로 펼쳐지며 설명(more)이 나타나는 타일.', usage: 'Catalog ( body · face · hair · other )' },
      { name: 'Sale Badge', desc: '3D 회전(perspective)하는 세일 -15% 배지와 가격 전후 표시.', usage: 'Hero 제품 카드' },
      { name: 'Tilt Card', desc: '포인터 위치에 따라 기울어지는 제품 카드(tilt · tilt-in).', usage: 'Philosophy, Product' },
      { name: 'Char Reveal', desc: '글자(ch)를 하나씩 감싸 순서대로 올라오게 하는 헤드라인 등장.', usage: 'Hero 헤드라인' },
      { name: 'Tag', desc: '반투명 흰 배경의 작은 필 태그.', usage: '제품 속성(Products · Aesthetics · Comfort)' },
      { name: 'Bag', desc: '담기 수량 배지(n)와 토스트 메시지(bag-msg)가 있는 장바구니 버튼.', usage: '헤더, Add to bag' },
      { name: 'Nav & Mobile Menu', desc: '스크롤 프로그레스(prog), 메뉴 버튼, 전체화면 모바일 메뉴(mnav).', usage: '헤더' },
    ],
    sections: ['Preloader', 'Hero', 'Philosophy', 'Catalog', 'Care', 'New', 'Product', 'Footer'],
    responsive: {
      intro: '카드 그리드가 기본 구조라 분기점마다 간격·반지름·패딩 변수만 줄이고, 카드 열 수를 3 → 2 → 1로 바꿨습니다.',
      breakpoints: [
        { label: 'Desktop', width: 1440, image: eDesktop, notes: ['패딩 72px, 간격 24px, 반지름 28px', '히어로 2열 카드 + 세일 배지', '카테고리 타일 4개 가로 펼침'] },
        { label: 'Tablet', width: 834, image: eTablet, notes: ['패딩 40px, 간격 16px, 반지름 22px', '헤더 링크 → 메뉴 버튼', '카드 2열'] },
        { label: 'Mobile', width: 390, image: eMobile, notes: ['패딩 20px, 간격 10px, 반지름 20px', '카드 1열 세로 스택', '타일은 세로로 쌓임'] },
      ],
      rules: [
        '--G · --R · --P 세 변수만 분기점에서 교체해 카드 리듬 유지',
        '헤드라인은 clamp(30px, 3.2vw, 46px)로 유동 축소',
        '호버 기반 모션(타일 펼침, 틸트)은 터치 기기에서 기본 상태로 표시',
        '프리로더와 글자 등장은 reduce-motion 설정 시 생략',
      ],
    },
  },
]

export const CASE_EASE = EASE

export function getCase(id: CaseId) {
  return CASES.find((c) => c.id === id)!
}
