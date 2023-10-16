export default function NavItem({
  children
}: {
  children: string
}) {
  return (
    <li>
      <a href="#" className="text-gray1 hover:text-my-green text-md uppercase font-medium">
        {children}
      </a>
    </li>
  )
}