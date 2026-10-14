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
import fDesktop from '@/assets/sites/f.jpg'
import fTablet from '@/assets/sites/f-tablet.jpg'
import fMobile from '@/assets/sites/f-mobile.jpg'
import gDesktop from '@/assets/sites/g.jpg'
import gTablet from '@/assets/sites/g-tablet.jpg'
import gMobile from '@/assets/sites/g-mobile.jpg'

export type CaseId = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g'

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
  // ── F · MOVA 오토리스 ─────────────────────────────────
  {
    id: 'f',
    num: '06',
    name: 'MOVA 오토리스',
    kicker: '수입차 리스 · 장기렌트 견적',
    tagline: '인디고 블루 한 가지 포인트로 신뢰감을 잡은 수입차 오토리스 · 장기렌트 랜딩페이지. 가격 계산기, 색상 스왑, 견적 폼까지 전환 흐름을 한 화면에 담았습니다.',
    accent: '#3D3FD8',
    accent2: '#2E30B8',
    meta: [
      { label: 'Type', value: '오토리스 · 장기렌트 견적 랜딩페이지' },
      { label: 'Role', value: 'Figma 디자인 · 퍼블리싱 · 인터랙션' },
      { label: 'Breakpoints', value: '1099px · 599px' },
      { label: 'Stack', value: 'HTML · CSS · JS → React 변환' },
    ],
    fonts: ['Montserrat 600 · 700', 'Noto Sans KR 400 · 500 · 700 · 900'],
    fontLink: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Noto+Sans+KR:wght@400;500;700;900&display=swap',
    concept: {
      title: 'Trust in indigo · Conversion first · Motion that explains',
      body: [
        '자동차 금융 상품은 숫자와 조건이 먼저 읽혀야 합니다. 흰 바탕과 연한 그레이(#F4F6FB) 위에 인디고 블루(#3D3FD8) 한 가지만 포인트로 써서, 버튼 · 가격 · 활성 상태가 어디서나 같은 색으로 눈에 들어오도록 했습니다. 숫자는 Montserrat, 본문은 Noto Sans KR로 나눠 가격표의 가독성을 높였습니다.',
        '히어로 사진이 가운데에서 양옆으로 열리고 헤드라인에 빛이 흐르며 시작합니다. 특징 아이콘은 선이 그려지듯 나타나고, 실적 숫자는 카운트업과 컨페티로 강조합니다. 계약기간 · 선수금 · 주행거리를 바꾸면 월 대여료가 오도미터처럼 굴러가고, 견적 폼은 완성도 게이지가 채워지며 제출까지 안내합니다.',
      ],
      keywords: ['Auto Lease', 'Indigo Blue', 'Price Calculator', 'Conversion', 'Form UX'],
      layout: [
        '최대 폭 1080px(--W)의 중앙 정렬 컨테이너(wrap)와 풀블리드 다크 · 인디고 섹션의 교차',
        'Hero → Features → Lease → Stats → Trims → Price → Quote → Footer 순서의 전환 퍼널',
        '고정 헤더(76px → 스크롤 시 64px 글래스), 모바일 하단 CTA 바, 자동차 TOP 버튼',
        '[data-up] 공통 리빌(perspective 기울임)과 --d 변수로 등장 순서 제어',
      ],
    },
    colors: [
      { name: 'Indigo', value: '#3D3FD8', role: '포인트 · 버튼 · 활성 상태' },
      { name: 'Indigo Dark', value: '#2E30B8', role: '버튼 호버' },
      { name: 'Indigo Light', value: '#EEF0FF', role: '전화 배지 · 체크 원', light: true },
      { name: 'Dark', value: '#1E1F26', role: '리스 소개 섹션 배경' },
      { name: 'Ink', value: '#16171C', role: '본문 · 가격 숫자' },
      { name: 'Muted', value: '#7A7D88', role: '보조 텍스트 · 라벨' },
      { name: 'BG', value: '#F4F6FB', role: '가격표 배경 · 아이콘 원', light: true },
      { name: 'Line', value: '#E2E5EE', role: '구분선', light: true },
      { name: 'Footer', value: '#121318', role: '푸터 배경' },
    ],
    type: [
      { name: 'Logo · Montserrat 700', sample: 'MOVA', family: 'Montserrat', size: 32, weight: 700, letterSpacing: '0.06em' },
      { name: 'Hero · Noto Sans KR 900', sample: '2026 프리미엄 SUV 오토리스 · 장기렌트', family: "'Noto Sans KR'", size: 36, weight: 900, letterSpacing: '-0.03em' },
      { name: 'Heading · Noto Sans KR 700', sample: '오토리스 · 장기렌트 가격표', family: "'Noto Sans KR'", size: 28, weight: 700, letterSpacing: '-0.02em' },
      { name: 'Number · Montserrat 700', sample: '774,000', family: 'Montserrat', size: 30, weight: 700 },
      { name: 'Body · Noto Sans KR 14', sample: '차량 가격비교부터 맞춤견적까지 한 번에', family: "'Noto Sans KR'", size: 14, weight: 400 },
    ],
    components: [
      { name: 'Header & Indicator', desc: '스크롤 시 흰 글래스로 바뀌는 고정 헤더. 메뉴 아래 인디고 바(ind)가 호버 · 현재 섹션을 따라 이동합니다.', usage: '상단 내비게이션' },
      { name: 'Drawer', desc: '오른쪽에서 밀려 나오는 모바일 메뉴. ESC · 바깥 클릭으로 닫힙니다.', usage: '1099px 이하' },
      { name: 'Button', desc: 'btn-ind(인디고) · btn-ol(아웃라인) 두 변형. 호버 시 왼쪽에서 채워지는 ::before 효과.', usage: 'Hero CTA, 견적 신청' },
      { name: 'Line-draw Icon', desc: 'stroke-dashoffset 으로 선이 그려지는 아이콘. 호버하면 원이 퍼지는 리플.', usage: 'Features 3개' },
      { name: 'Marker', desc: '문장 속 핵심 구절 아래 인디고 형광펜이 순서대로 그어지는 강조(mk).', usage: '자동차 리스란?' },
      { name: 'Stats', desc: '화면에 들어오면 숫자가 카운트업되고 캔버스 컨페티가 터지는 실적 블록.', usage: '누적 견적 · 출고 · 재계약률' },
      { name: 'Color Swap', desc: '스와치를 누르면 차량 이미지가 옆으로 밀려나며 새 색상으로 교체되는 트림 카드.', usage: '신차가격표' },
      { name: 'Segment & Range', desc: '알약 인디케이터가 미끄러지는 세그먼트와 선수금 슬라이더로 조건을 바꾸는 계산기.', usage: '계약기간 · 선수금 · 연 주행' },
      { name: 'Odometer', desc: '자릿수별로 숫자가 굴러가는 월 대여료 표시(odo).', usage: '가격 카드' },
      { name: 'Quote Form', desc: '플로팅 라벨, 전화번호 자동 하이픈, 완성도 게이지, 흔들림 에러, 완료 모달.', usage: '맞춤견적신청' },
      { name: 'Mobile Bar & TOP', desc: '스크롤 후 나타나는 하단 전화 · 견적 바와, 누르면 자동차가 위로 달려가는 TOP 버튼.', usage: '모바일 · 전역' },
    ],
    sections: ['Hero', 'Features', 'Lease', 'Stats', 'Trims', 'Price', 'Quote', 'Footer'],
    responsive: {
      intro: '1080px 컨테이너를 기준으로 2단계 분기점에서 열 수를 줄이고, 모바일에서는 헤더 메뉴 대신 드로어와 하단 CTA 바로 전환 동선을 유지했습니다.',
      breakpoints: [
        { label: 'Desktop', width: 1440, image: fDesktop, notes: ['헤더 76px, 메뉴 인디케이터', '특징 3열 · 가격 카드 3열', '견적 폼 셀렉트 5열'] },
        { label: 'Tablet', width: 834, image: fTablet, notes: ['헤더 64px, 메뉴 → 버거 버튼', '섹션 패딩 100 → 64px', '셀렉트 3열, 통계 간격 축소'] },
        { label: 'Mobile', width: 390, image: fMobile, notes: ['특징 · 트림 · 가격 카드 1열', '리스 소개 사진이 아래로', '하단 전화 · 견적 바 고정'] },
      ],
      rules: [
        '컨테이너 폭 min(1080px, 100% - 40px)로 좌우 여백 자동 확보',
        '히어로 제목은 clamp(32px, 3.7vw, 54px)로 유동 축소',
        '모바일에서 --bar 변수로 하단 바 높이만큼 푸터 · TOP 버튼 위치 보정',
        'prefers-reduced-motion 설정 시 모든 모션 · 컨페티 · 오도미터 생략',
      ],
    },
  },
  // ── G · LUMEN MEDIA ───────────────────────────────────
  {
    id: 'g',
    num: '07',
    name: 'LUMEN MEDIA',
    kicker: '영상 · 브랜딩 에이전시',
    tagline: '블루와 바이올렛 빛이 흐르는 미디어 에이전시 랜딩페이지. 쇼릴 슬라이드, 단어 플리퍼, 카드 덱 후기 등 움직임으로 브랜드의 에너지를 전합니다.',
    accent: '#1F5BFF',
    accent2: '#7B5CFF',
    meta: [
      { label: 'Type', value: '미디어 에이전시 소개 랜딩페이지' },
      { label: 'Role', value: 'Figma 디자인 · 퍼블리싱 · 인터랙션' },
      { label: 'Breakpoints', value: '1099px · 599px' },
      { label: 'Stack', value: 'HTML · CSS · JS → React 변환' },
    ],
    fonts: ['Poppins 500 · 600 · 700', 'Noto Sans KR 400 · 500 · 700 · 900'],
    fontLink: 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Noto+Sans+KR:wght@400;500;700;900&display=swap',
    concept: {
      title: 'Light in motion · Blue to violet · Living layout',
      body: [
        '"브랜드를 빛내는 파트너"라는 메시지에 맞춰, 흰 바탕 위에 블루(#1F5BFF)에서 바이올렛(#7B5CFF)으로 이어지는 빛을 포인트로 썼습니다. 히어로 뒤에서는 블러 처리된 블롭이 천천히 떠다니고 포인터를 따라 움직이며, 푸터의 큰 영어 타이포는 마우스 위치를 따라 빛이 비칩니다.',
        '정적인 섹션이 하나도 없도록 설계했습니다. 헤드라인의 핵심 단어가 3D로 뒤집히고, 쇼릴은 스크롤에 따라 커지며 슬라이드가 자동 재생됩니다. 프로세스 라인은 스크롤로 그려지고, 서비스 탭은 대각선 와이프로 사진을 바꾸며, 후기 카드는 끌어서 넘기는 덱으로 쌓았습니다.',
      ],
      keywords: ['Media Agency', 'Blue & Violet', 'Showreel', 'Card Deck', 'Micro-interaction'],
      layout: [
        '최대 폭 1120px(--W) 컨테이너와 풀블리드 밴드 · 인사이트 · 푸터 섹션의 교차',
        'Hero(쇼릴) → Process → CTA Band → Services → Insights → Reviews → Footer 순서',
        '스크롤 60px 이후 헤더가 떠 있는 알약(pill) 글래스로 변형',
        '[data-rv] 공통 리빌(skewY 상승)과 --d 변수로 등장 순서 제어',
      ],
    },
    colors: [
      { name: 'Blue', value: '#1F5BFF', role: '포인트 · 버튼 · 푸터 배경' },
      { name: 'Blue Dark', value: '#1546D6', role: '버튼 호버' },
      { name: 'Violet', value: '#7B5CFF', role: '로고 그라데이션 · 스포트라이트' },
      { name: 'Ink', value: '#14162B', role: '본문 · 제목' },
      { name: 'Muted', value: '#6E7191', role: '보조 텍스트' },
      { name: 'BG', value: '#F5F7FF', role: '인사이트 배경', light: true },
      { name: 'Band', value: '#E8EEFF', role: 'CTA 밴드 배경', light: true },
      { name: 'Hero', value: '#F3F4FF', role: '히어로 배경', light: true },
      { name: 'Line', value: '#E4E7F2', role: '구분선 · 트랙', light: true },
    ],
    type: [
      { name: 'Logo · Poppins 600', sample: 'LUMEN media', family: 'Poppins', size: 28, weight: 600, letterSpacing: '0.02em' },
      { name: 'Hero · Noto Sans KR 700', sample: '브랜드를 빛내는 영상 파트너', family: "'Noto Sans KR'", size: 36, weight: 700, letterSpacing: '-0.035em' },
      { name: 'Heading · Noto Sans KR 700', sample: '3단계로 완성하는 작업 방식', family: "'Noto Sans KR'", size: 28, weight: 700, letterSpacing: '-0.025em' },
      { name: 'Footer · Poppins 700', sample: "Let's create together.", family: 'Poppins', size: 44, weight: 700, letterSpacing: '-0.03em' },
      { name: 'Body · Noto Sans KR 14', sample: '기획부터 촬영, 디자인, 마케팅까지 한 팀에서.', family: "'Noto Sans KR'", size: 14, weight: 400 },
    ],
    components: [
      { name: 'Pill Header', desc: '스크롤하면 폭이 줄어들며 떠 있는 알약 모양 글래스 헤더로 변형됩니다.', usage: '상단 내비게이션' },
      { name: 'Sheet Menu', desc: '위에서 spring 이징으로 내려오는 모바일 메뉴 시트.', usage: '1099px 이하' },
      { name: 'Word Flipper', desc: '헤드라인 속 단어가 X축으로 뒤집히며 영상 · 브랜딩 · 콘텐츠 · 캠페인으로 바뀝니다.', usage: 'Hero' },
      { name: 'Blobs', desc: '블러된 세 개의 색 원이 떠다니고 포인터를 따라 움직이는 배경.', usage: 'Hero' },
      { name: 'Showreel', desc: '스크롤에 따라 확대되고, 진행 점(pdots)과 함께 자동 전환되는 슬라이드. 호버 시 일시정지.', usage: 'Hero' },
      { name: 'Player Modal', desc: '켄번즈 효과, 이퀄라이저, 진행 바와 재생 · 일시정지가 있는 가짜 비디오 플레이어.', usage: '쇼릴 보기' },
      { name: 'Process Track', desc: '스크롤 양에 따라 그라데이션 선이 그려지고 단계 아이콘이 순서대로 켜집니다.', usage: '작업 프로세스' },
      { name: 'Decode Text', desc: '화면에 들어오면 글자가 무작위 문자에서 원래 문장으로 해독되는 강조.', usage: 'CTA 밴드' },
      { name: 'Auto Tabs', desc: '세로 진행 바가 채워지며 자동으로 넘어가고, 사진은 대각선 클립으로 교체되는 서비스 탭.', usage: '우리가 하는 일' },
      { name: 'FLIP Filter', desc: '카테고리를 누르면 카드가 이전 위치에서 새 위치로 자연스럽게 이동하는 필터.', usage: '인사이트' },
      { name: 'Card Deck', desc: '쌓인 후기 카드를 끌거나 버튼으로 날려 보내는 덱. 앞 카드에만 별이 순서대로 켜집니다.', usage: '고객사의 이야기' },
      { name: 'Liquid TOP', desc: '스크롤 진행률만큼 물이 차오르고, 누르면 빠져나가는 TOP 버튼.', usage: '전역' },
    ],
    sections: ['Hero', 'Process', 'CTA Band', 'Services', 'Insights', 'Reviews', 'Footer'],
    responsive: {
      intro: '1120px 컨테이너를 기준으로 열 수를 줄이고, 모바일에서는 프로세스 라인을 세로로, 쇼릴을 세로 비율로 바꿔 모션을 그대로 유지했습니다.',
      breakpoints: [
        { label: 'Desktop', width: 1440, image: gDesktop, notes: ['헤더 72px → 알약 헤더 58px', '프로세스 3열 · 인사이트 4열', '서비스 사진 620px + 탭'] },
        { label: 'Tablet', width: 834, image: gTablet, notes: ['메뉴 → 버거 버튼 · 시트', '인사이트 2열', '섹션 패딩 110 → 64px'] },
        { label: 'Mobile', width: 390, image: gMobile, notes: ['쇼릴 350:420 세로 비율', '프로세스 라인 세로 전환', '인사이트 2열 축소 · 덱 높이 380px'] },
      ],
      rules: [
        '컨테이너 폭 min(1120px, 100% - 40px)로 좌우 여백 자동 확보',
        '히어로 제목 clamp(32px, 3.7vw, 54px), 푸터 타이포 clamp(40px, 7vw, 96px)',
        '포인터 추적 효과(블롭 · 스포트라이트 · 푸터 빛)는 fine pointer 에서만 동작',
        'prefers-reduced-motion 설정 시 자동 재생 · 플리퍼 · 디코드 생략',
      ],
    },
  },
]

export const CASE_EASE = EASE

export function getCase(id: CaseId) {
  return CASES.find((c) => c.id === id)!
}
