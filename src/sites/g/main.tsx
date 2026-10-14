import { createRoot } from 'react-dom/client'
import { SiteG } from './SiteG'

// 원본 스크립트가 DOM을 직접 다루므로 StrictMode(이펙트 2회 실행)는 쓰지 않는다
createRoot(document.getElementById('root')!).render(<SiteG />)
