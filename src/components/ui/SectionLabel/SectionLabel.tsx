import s from './SectionLabel.module.scss'

interface Props {
  children: string
  light?: boolean
  className?: string
}

export function SectionLabel({ children, light, className }: Props) {
  return (
    <span className={[s.label, light && s.light, className].filter(Boolean).join(' ')}>
      <i className={s.dot} aria-hidden="true" />
      {children}
    </span>
  )
}
