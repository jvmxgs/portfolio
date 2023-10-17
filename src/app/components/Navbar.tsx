import NavItem from './NavItem'

export default function Navbar () {
  return (
    <nav>
      <ul className='flex gap-4 py-2 justify-center'>
        <NavItem>About me</NavItem>
        <NavItem>Projects</NavItem>
      </ul>
    </nav>
  )
}
