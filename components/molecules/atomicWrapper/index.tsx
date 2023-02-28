import AtomicProvider from '@occmundial/atomic/components/Provider'
import { FC, ReactNode } from 'react'

const iconsUrl: string = 'https://cdn-icons.occ.com.mx/atomic-icons-1.5.0.svg'

interface AtomicWrapperProps {
  children: ReactNode
}

const AtomicWrapper: FC<AtomicWrapperProps> = ({ children }) => {
  return (
    <AtomicProvider data={{ iconsUrl }}>
      {children}
    </AtomicProvider>
  )
}

export default AtomicWrapper