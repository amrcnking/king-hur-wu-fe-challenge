import Image from "next/image"

const NavBar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Image src="/icons/menu.svg" alt="menu" width={20} height={20}/>
        <Image src="/icons/videoshops.svg" alt="videoshops" width={300} height={40}/>
        <div>
            <Image src="icons/favorite.svg" alt="favorite" width={20} height={20}/>
            <Image src="icons/shop.svg" alt="shop" width={20} height={20}/>
        </div>
    </div>
  )
}

export default NavBar