import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/global.scss'
import { CaseStudy } from './CaseStudy'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CaseStudy id="f" />
  </StrictMode>,
)
