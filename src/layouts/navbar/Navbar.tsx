import avatar from '../../assets/images/ejberon.jpeg'

type Props = {
}

const Navbar = (props: Props) => {
  return (
    <div className='flex flex-row-reverse bg-white shadow-sm fixed right-0 w-[calc(100%-240px)] h-[72px]'>
      <button className='flex items-center gap-x-2 mr-6 p-2 hover:bg-nav-hover hover:text-white'>
        <img className='h-12 rounded-full flex-end' src={avatar} alt="Avatar" />
        EJ Beron
      </button>
    </div>
  )
}

export default Navbar