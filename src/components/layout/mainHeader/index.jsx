 
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
// import {  , MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import styles from './mainHeader.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { SelectCategoriesLinks } from '@/src/store/categories/category.selector';
import cartSvg from '../../../../public/svgs/cart.svg';
import searchIcon from '../../../../public/svgs/search.svg'
import Love from '../../../../public/svgs/love.svg'
import { totalCart } from '@/src/store/cart/cart.selector';
import { CartActions } from '@/src/store/cart/cart.reducer';
import { userSelectMemo } from '@/src/store/user/user.selector';
import { DropDownUser } from './dropdownUser';
import { wishlistActions } from '@/src/store/wishlist/wishlistslice';

import MenuSvg from '../../../../public/svgs/menubar.svg'
import SearchDrrawer from '../../searchDrawer/searchDrawer';
 const navigation = {
 
  pages: [
    { name: 'shop', href: 'shop' },
    { name: 'about us', href: 'about'},
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MainHeader({header}) {
  const currentUser = useSelector(userSelectMemo);
  const dispatch= useDispatch()
   const quentity = useSelector(totalCart);
  const openCart = ()=>dispatch(CartActions.setCartOpen(true))
   const [open, setOpen] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [searchShow,SetSearchShow]= useState(false)
  
  const [scroll, setScroll] = useState(false);
   const {headerMenuItems,siteDescription,siteLogoUrl,siteTitle} = header
const categoriesLinks = useSelector(SelectCategoriesLinks);
 function Scroll() {
  const scrolls = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
  
  setScroll(scrolls)
}
const handleShowClose = () => dispatch(wishlistActions.setWishlistOpen());

useEffect(() => {
  function handleScroll() { return Scroll() };
  document.body.addEventListener("scroll", handleScroll);
  setDomLoaded(true)
  return () => {
    document.body.removeEventListener("scroll", handleScroll);
  }
},[]);
   return (
    <>
{domLoaded && ( <>
<div className={scroll ? "fixed-class" : "ddd "}id='main_navigation'>
{/* Mobile menu */}
<Transition.Root show={open} as={Fragment}>
  <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
    <Transition.Child
      as={Fragment}
      enter="transiti
      on-opacity ease-linear duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-black bg-opacity-25" />
    </Transition.Child>

    <div className="fixed inset-0 z-40 flex">
      <Transition.Child
        as={Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
          <div className="flex px-3 pb-3 pt-2">
            <button
              type="button"
              className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              onClick={() => setOpen(false)}
            >
              <span  >x</span>
             </button>
          </div>

          <h6 className='pt-2 px-3'>
  Categories
</h6>
          <ul>    {/* Links */}
   {
   
             categoriesLinks&&categoriesLinks.map(cate=>{

           return   <li key={cate.id}>
                <Link className={`${styles.li}`} href={`/shop/${cate.slug}`} onClick={() => setOpen(false)}>
                  {cate.name}
                </Link>
              </li>

             })


   }
      </ul>

          <div className="space-y-6 border-t border-gray-200 px-4 py-6 mr-auto ">
            {navigation.pages.map((page) => (
              <div key={page.name} className="flow-root">
                <Link href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                  {page.name}
                </Link>
              </div>
            ))}
          </div>

          
{
  currentUser?<>
  <Link className="space-y-6 border-t border-gray-200 px-4 py-6" href={'/account'} style={{color:'black'}} >
account
    </Link>
  </>:
  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
  <div className="flow-root">
    <Link href="/auth/signin" className="-m-2 block p-2 font-medium text-gray-900">
      Sign in
    </Link>
  </div>
  <div className="flow-root">
    <Link href="/auth/signup" className="-m-2 block p-2 font-medium
     text-gray-900">
      Create account
    </Link>
  </div>
</div>
}
        

          <div className="border-t border-gray-200 px-4 py-6">
            <a href="#" className="-m-2 flex items-center p-2">
              <img
                src="https://tailwindui.com/img/flags/flag-canada.svg"
                alt=""
                className="block h-auto w-5 flex-shrink-0"
              />
              <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
              <span className="sr-only">, change currency</span>
            </a>
          </div>
        </Dialog.Panel>
      </Transition.Child>
    </div>
  </Dialog>
</Transition.Root>

<header className="relative ">
  {/* <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
    Get free delivery on orders over $100
  </p> */}

  <nav aria-label="Top" className={`mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 ${styles.nav_top}`}>
    
    <div className=" ">
      
      <div className="flex h-16 items-center">
        <button
          type="button"
          className="rounded-md  p-2 text-gray-400 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Image src={MenuSvg} width={80} alt='menu' height={80}/>
          <span className="sr-only">Open menu</span>
         </button>
    <div className="mr-auto">
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      {currentUser?<>
      <DropDownUser user={currentUser}/>
      </>:
      <div>
                <Link href="/auth/signin" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Sign in
            </Link>
            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            {/* <Link href="/auth/signup" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Create account
            </Link> */}
      </div>
      
      
      }
    
          </div>

    </div>
        {/* Logo */}
        <div className={`${styles.ml_auto}`}>
          <Link href="/" className='flex '
           style={{flexDirection:'column-reverse',alignItems:'center'}}>
<Image  width={215} height={215}
alt='siteTitle'
src={siteLogoUrl}
 />
           
           {/* logo */}
          </Link>
          <Popover.Group className="hidden lg:block lg:self-stretch">
          <div className={`  flex h-full space-x-8 ${styles.menu}`}>
           {
            categoriesLinks&&categoriesLinks.map(category => (
           
               
                <div className="relative flex" key={category.id}>
                  <Link 
                  className={`${styles.li}`}
                  href={`/shop/${category.slug}`}
                  >
                    {category.name}
                  </Link >
                </div>

           

            ))
           }
            

                        
                        
          

            {navigation.pages.map((page) => (
              <Link
                key={page.name}
                href={`./${page.href}`}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </Popover.Group>
        </div>

        {/* Flyout menus */}

     
        <div className="  flex items-center ml-auto">
     
      

          {/* Search */}
          {/* <div className="flex lg:ml-6">
            <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
              user
             </a>
             <Image src={user} alt='cart' width={'30px' } height={'30px'}/>

          </div> */}

          {/* Cart */}
          <div className={`ml-4 flow-root lg:ml-6 flex  ${styles.cart}`} onClick={handleShowClose}>
            
             <Image src={Love} alt='wishlist' width={30 }  className='mr-2  ic '
       height={30}/>

                <span className='only_big'>

              WishList
              </span>
           </div>
          <div className={`ml-4 flow-root lg:ml-6 flex  ${styles.cart}`} onClick={()=>SetSearchShow(true)}>
            
             <Image src={searchIcon} alt='search'width={30 } className='ic' height={30}/>

               <span className="sr-only">items in cart, view bag</span>
              
              <span className='only_big'>
              search
              </span>
              
           </div>
          <div className={`ml-4 flow-root lg:ml-6 flex  ${styles.cart}`} onClick={openCart}>
            
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{quentity}</span>
             <Image src={cartSvg} alt='cart' width={30}   className='ic'   height={30}/>

             <span className='only_big'>

              Bag

              </span>
           </div>
        </div>
      </div>
    </div>
  </nav>
  <SearchDrrawer show={searchShow} setShow={SetSearchShow} categories={categoriesLinks}/>
</header>
</div>
</> )
}
</>

  )
}
