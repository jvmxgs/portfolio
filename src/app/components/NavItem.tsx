export default function NavItem({
  children,
  url
}: {
  children: string
  url: string
}) {
  return (
    <li>
      <a href={url} className="text-nobel hover:text-yellow-green text-md uppercase font-medium">
        {children}
      </a>
    </li>
  )
}
