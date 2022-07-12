import react from 'react'

type Props = {
  title: string;
  logo: string;
}

const SidebarHeader = (props: Props) => {
  return (
    <header className="flex items-center gap-x-2 p-4 text-xl font-bold border-b border-nav-main">
      <img className='h-10' src={props.logo} alt="" />
      {props.title}
    </header>
  )
}

export default SidebarHeader