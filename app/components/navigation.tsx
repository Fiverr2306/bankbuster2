
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Menu, X, Home, BookOpen, DollarSign, Lock, Heart, AlertTriangle, Upload, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const educationLinks = [
    {
      title: 'Mortgage Fees',
      href: '/mortgage-fees',
      description: 'Learn how to understand, negotiate, and save on closing costs',
      icon: DollarSign
    },
    {
      title: 'Interest Rate Locks',
      href: '/rate-locks',
      description: 'Master the timing and strategy of locking your mortgage rate',
      icon: Lock
    },
    {
      title: 'Credit Repair Help',
      href: '/credit-repair',
      description: 'Protect your credit and privacy during the mortgage process',
      icon: Heart
    },
    {
      title: 'Turned Down?',
      href: '/turned-down',
      description: 'Roadmap from denial to approval for your next application',
      icon: AlertTriangle
    }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-bb-deep-blue flex items-center justify-center">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold font-poppins text-bb-deep-blue">BankBuster.net</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Education</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {educationLinks.map((link) => (
                      <ListItem
                        key={link.href}
                        title={link.title}
                        href={link.href}
                        icon={link.icon}
                      >
                        {link.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About/Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Primary CTA */}
          <div className="hidden md:flex">
            <Link href="/payment">
              <Button className="bg-bb-bright-blue hover:bg-bb-deep-blue text-white font-semibold px-6 py-2 shadow-professional hover:shadow-professional-hover transition-all duration-200">
                Get Expert Review ($20)
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-4 py-2">
                <div className="text-sm font-medium text-gray-900 mb-2">Education</div>
                <div className="space-y-1 ml-4">
                  {educationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-1 text-sm text-gray-600 hover:text-bb-bright-blue"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="block px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                About/Contact
              </Link>
              
              <div className="px-4 pt-4">
                <Link href="/payment" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-bb-bright-blue hover:bg-bb-deep-blue text-white">
                    Get Expert Review ($20)
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

const ListItem = ({ className, title, children, icon: Icon, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-4 w-4 text-bb-bright-blue" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
