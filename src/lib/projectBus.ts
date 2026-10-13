/**
 * Works 카드 → Projects 상세 섹션으로 선택을 전달하는 아주 작은 이벤트 버스.
 * 전역 상태 라이브러리 없이 두 섹션을 느슨하게 연결한다.
 */
const EVENT = 'portfolio:select-project'

export function selectProject(id: string) {
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: id }))
}

export function onSelectProject(handler: (id: string) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<string>).detail)
  window.addEventListener(EVENT, listener)
  return () => window.removeEventListener(EVENT, listener)
}
