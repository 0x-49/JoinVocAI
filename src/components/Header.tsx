import React, { forwardRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href?: string;
  subItems?: NavItem[];
  description?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    title: 'Products',
    subItems: [
      { title: 'VOC AI Platform', href: '/' },
      { title: 'AI Chatbot', href: '/ai-chatbot' },
      { title: 'Sentiment Analysis', href: '/sentiment-analysis' },
      { title: 'Market Insights', href: '/market-insights' },
    ],
  },
  {
    title: 'Tools',
    subItems: [
      { title: 'AI Listing Generator', href: '/ai-listing' },
      { title: 'FBA Calculator', href: '/fba-calculator' },
      { title: 'Keyword Research', href: '/keyword-research' },
      { title: 'Product Research', href: '/product-research' },
    ],
  },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Blog', href: '/blog' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-800 focus:text-white focus:rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>

      <header className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg" role="banner">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 xl:px-8 max-w-8xl mx-auto md:py-6 relative">
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-8">
              <Link href="/" className="cursor-pointer" aria-label="VOC AI Home">
                <Logo />
              </Link>
              
              <NavigationMenu aria-label="Main Navigation">
                <NavigationMenuList>
                  {NAV_ITEMS.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.subItems ? (
                        <>
                          <NavigationMenuTrigger className="text-neutral-700 hover:text-primary-600">
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                              {item.subItems.map((subItem) => (
                                <ListItem 
                                  key={subItem.title}
                                  href={subItem.href || '#'}
                                  title={subItem.title}
                                >
                                  {subItem.description}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link href={item.href || '#'} legacyBehavior passHref>
                          <NavigationMenuLink className="text-neutral-700 hover:text-primary-600">
                            {item.title}
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/login" passHref>
                <Button variant="ghost" aria-label="Login to your account">
                  Login
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button aria-label="Get started with VOC AI">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    href: string;
  }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li role="none">
      <NavigationMenuLink asChild>
        <Link
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href}
          role="menuitem"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default Header;
