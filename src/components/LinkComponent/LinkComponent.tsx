import Link from "next/link"

interface ILinkComponentProps {
    children: React.ReactNode
    link: string
    underline?: boolean
}
export const LinkComponent = ({children, link, underline}:ILinkComponentProps) => {
  return (
    <Link href={link} className={`text-neutral-900 text-sm font-bold ${underline ? 'underline' : ''}`}>{children}</Link>
  )
}
