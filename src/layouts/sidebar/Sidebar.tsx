import SidebarHeader from './SidebarHeader'
import SidebarContent from './SidebarContent'
import logo from '../../assets/images/orange.png'
import SidebarFooter from './SidebarFooter'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='bg-nav-main text-nav-main fixed top-0 left-0 h-screen w-[240px]'>
      <SidebarHeader title='Sidebar Header' logo={logo}/>
      <SidebarContent />
      <SidebarFooter />
    </div>
  )
}

export default Sidebar