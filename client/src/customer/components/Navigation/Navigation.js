import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel, // updated v2
  Popover,
  PopoverButton,
  PopoverPanel,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import logo from '../../pages/ProductsPage/images/logo.png'
import P1 from '../../pages/ProductsPage/images/a1.avif'
import P2 from '../../pages/ProductsPage/images/a2.avif'
import Register from './Register.js'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: `${P1}`,
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: `${P2}`,
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { id: 'tops', name: 'Tops', href: '#' },
            { id: 'dresses', name: 'Dresses', href: '#' },
            { id: 'pants', name: 'Pants', href: '#' },
            { id: 'denims', name: 'Denims', href: '#' },
            { id: 'sweaters', name: 'Sweaters', href: '#' },
            { id: 't-shirts', name: 'T-Shirts', href: '#' },
            { id: 'jackets', name: 'Jackets', href: '#' },
            { id: 'activewear', name: 'Activewear', href: '#' },
            { id: 'browse-all', name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { id: 'watches', name: 'Watches', href: '#' },
            { id: 'wallets', name: 'Wallets', href: '#' },
            { id: 'bags', name: 'Bags', href: '#' },
            { id: 'sunglasses', name: 'Sunglasses', href: '#' },
            { id: 'hats', name: 'Hats', href: '#' },
            { id: 'belts', name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { id: 'full-nelson', name: 'Full Nelson', href: '#' },
            { id: 'my-way', name: 'My Way', href: '#' },
            { id: 're-arranged', name: 'Re-Arranged', href: '#' },
            { id: 'counterfeit', name: 'Counterfeit', href: '#' },
            { id: 'significant-other', name: 'Significant Other', href: '#' },
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
          imageSrc: `${P1}`,
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: `${P2}`,
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { id: 'tops', name: 'Tops', href: '#' },
            { id: 'pants', name: 'Pants', href: '#' },
            { id: 'sweaters', name: 'Sweaters', href: '#' },
            { id: 't-shirts', name: 'T-Shirts', href: '#' },
            { id: 'jackets', name: 'Jackets', href: '#' },
            { id: 'activewear', name: 'Activewear', href: '#' },
            { id: 'browse-all', name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { id: 'watches', name: 'Watches', href: '#' },
            { id: 'wallets', name: 'Wallets', href: '#' },
            { id: 'bags', name: 'Bags', href: '#' },
            { id: 'sunglasses', name: 'Sunglasses', href: '#' },
            { id: 'hats', name: 'Hats', href: '#' },
            { id: 'belts', name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { id: 're-arranged', name: 'Re-Arranged', href: '#' },
            { id: 'counterfeit', name: 'Counterfeit', href: '#' },
            { id: 'full-nelson', name: 'Full Nelson', href: '#' },
            { id: 'my-way', name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
};

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const handleCategoryClick = (category, section, item) => {
    navigate(`/${category.id}/${section.id}/${item.name.toLowerCase()}`)
    setMobileOpen(false)
  }

  return (
    <header className="bg-white">
      <nav className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#"><img src={logo} alt="Logo" className="h-8 mr-10" /></a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {navigation.categories.map((cat) => (
            <Popover key={cat.id} className="categories1 relative">
              <PopoverButton className="text-gray-700 font-medium hover:text-gray-900">
                {cat.name}
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                transition
                className="absolute z-20 mt-3 w-screen max-w-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-6 grid grid-cols-2 gap-6"
              >
                <div className="categoryBox col-span-1 grid gap-4 bg-green-500">
                  {cat.sections.map((sec) => (
                    <div className="category-sections1" key={sec.id}>
                      <p className="font-semibold text-gray-900">{sec.name}</p>
                      <ul className="mt-2 space-y-1">
                        {sec.items.map((item) => (
                          <li
                            key={item.id}
                            className="section-items1 cursor-pointer hover:text-indigo-600"
                            onClick={() => handleCategoryClick(cat, sec, item)}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="col-span-1 grid gap-4">
                  {cat?.featured?.map((feat) => (
                    <a key={feat.name} href={feat.href} className="block group">
                      <img
                        src={feat.imageSrc}
                        alt={feat.imageAlt}
                        className="w-full h-32 object-cover rounded group-hover:opacity-75"
                      />
                      <p className="mt-2 text-gray-900 font-medium">{feat.name}</p>
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          ))}
          {navigation?.pages?.map(page => (
            <a
              key={page.name}
              href={page.href}
              className="text-gray-700 font-medium hover:text-gray-900"
            >
              {page.name}
            </a>
          ))}
        </div>

        <Register />

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 text-gray-700"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <Dialog
        open={mobileOpen}
        onClose={setMobileOpen}
        transition
        className="fixed inset-0 z-30 bg-white p-4 overflow-y-auto"
      >
        <DialogPanel className="relative max-w-sm w-full mx-auto">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <TabGroup>
            <TabList className="flex space-x-4 mb-6">
              {navigation?.categories?.map(cat => (
                <Tab
                  key={cat.id}
                  className="py-2 px-3 font-medium text-gray-700 data-[selected]:border-b data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                >
                  {cat.name}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {navigation.categories.map(cat => (
                <TabPanel className="flex" key={cat.id}>
                  {cat.sections.map(sec => (
                    <div key={sec.id} className="mb-4">
                      <p className="font-semibold text-gray-900">{sec.name}</p>
                      <ul className="mt-2 space-y-2">
                        {sec.items.map(item => (  
                          <li
                            key={item.id}
                            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
                            onClick={() => handleCategoryClick(cat, sec, item)}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
