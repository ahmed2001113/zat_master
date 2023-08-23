 
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
 const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
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
console.log(currentUser)
  const quentity = useSelector(totalCart);
  const dispatch= useDispatch()
  const openCart = ()=>dispatch(CartActions.setCartOpen(true))
   const [open, setOpen] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  
  
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
});
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
          <div className="flex px-4 pb-2 pt-5">
            <button
              type="button"
              className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
             </button>
          </div>

          {/* Links */}
          <Tab.Group as="div" className="mt-2">
            <div className="border-b border-gray-200">
              <Tab.List className="-mb-px flex space-x-8 px-4">
                {navigation.categories.map((category) => (
                  <Tab
                    key={category.name}
                    className={({ selected }) =>
                      classNames(
                        selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                        'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                      )
                    }
                  >
                    {category.name}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <Tab.Panels as={Fragment}>
              {navigation.categories.map((category) => (
                <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                  <div className="grid grid-cols-2 gap-x-4">
                    {category.featured.map((item) => (
                      <div key={item.name} className="group relative text-sm">
                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                          <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                        </div>
                        <a href={item.href} className="mt-6 block font-medium text-gray-900">
                          <span className="absolute inset-0 z-10" aria-hidden="true" />
                          {item.name}
                        </a>
                        <p aria-hidden="true" className="mt-1">
                          Shop now
                        </p>
                      </div>
                    ))}
                  </div>
                  {category.sections.map((section) => (
                    <div key={section.name}>
                      <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                        {section.name}
                      </p>
                      <ul
                        role="list"
                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                        className="mt-6 flex flex-col space-y-6"
                      >
                        {section.items.map((item) => (
                          <li key={item.name} className="flow-root">
                            <a href={item.href} className="-m-2 block p-2 text-gray-500">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          <div className="space-y-6 border-t border-gray-200 px-4 py-6 mr-auto ">
            {navigation.pages.map((page) => (
              <div key={page.name} className="flow-root">
                <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                  {page.name}
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Sign in
              </a>
            </div>
            <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Create account
              </a>
            </div>
          </div>

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
          className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
          onClick={() => setOpen(true)}
        >
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
src={siteLogoUrl} />
           
           {/* logo */}
          </Link>
          <Popover.Group className="hidden lg:block lg:self-stretch">
          <div className={`  flex h-full space-x-8 ${styles.menu}`}>
            {categoriesLinks&&categoriesLinks.map((category) => (
              <Popover key={category.name} className="flex">
                {({ open }) => (
                  <>
                    <div className="relative flex">
                      <Popover.Button
                        className={classNames(
                          open
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800',
                          'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                        )}
                      >
                        {category.name}
                      </Popover.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {/* {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                      <span className="absolute inset-0 z-10" aria-hidden="true" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))} */}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.subcategories.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.featureProducts.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ))}

            {navigation.pages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
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
            
             <Image src={Love} alt='wishlist' width={'20px' } height={'20px'}/>

               <span className="sr-only">items in cart, view bag</span>
              WishList
           </div>
          <div className={`ml-4 flow-root lg:ml-6 flex  ${styles.cart}`} onClick={openCart}>
            
             <Image src={searchIcon} alt='search' width={'20px' } height={'20px'}/>

               <span className="sr-only">items in cart, view bag</span>
              Seach
           </div>
          <div className={`ml-4 flow-root lg:ml-6 flex  ${styles.cart}`} onClick={openCart}>
            
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{quentity}</span>
             <Image src={cartSvg} alt='cart' width={'30px' }   height={'30px'}/>

              <span className="sr-only">items in cart, view bag</span>
              Bag
           </div>
        </div>
      </div>
    </div>
  </nav>
</header>
</div>
</> )
}
</>

  )
}
