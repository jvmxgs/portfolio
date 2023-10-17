import NavItem from './NavItem'

export default function Navbar () {
  return (
    <nav>
      <ul className='flex gap-4 py-2 justify-center'>
        <NavItem url='#projects'>Projects</NavItem>
        <NavItem url='#experience'>Experience</NavItem>
      </ul>
    </nav>
  )
}
