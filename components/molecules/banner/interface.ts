import { CSSProperties, ReactNode } from 'react'

export default interface BannerProps {
  id: string 
  style: CSSProperties
  className: string
  children: ReactNode 
  onClose: () => void
}