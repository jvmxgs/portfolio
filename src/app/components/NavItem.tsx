export default function NavItem({
  children
}: {
  children: string
}) {
  return (
    <li>
      <a href="#" className="text-nobel hover:text-yellow-green text-md uppercase font-medium">
        {children}
      </a>
    </li>
  )
}