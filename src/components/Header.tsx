import React, { forwardRef } from 'react';
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

const Header = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-blue-600"
      >
        Skip to main content
      </a>
      <div className="w-full border-b bg-white" role="banner">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
            <Link href="/" className="cursor-pointer" aria-label="VOC AI Home">
            <Logo />
            </Link>
            <NavigationMenu aria-label="Main Navigation">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-neutral-700 hover:text-primary-600" aria-label="Products Menu">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]" role="menu">
                  <li className="row-span-3" role="none">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Logo />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            VOC AI Platform
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Comprehensive AI tools for Amazon sellers
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/ai-chatbot" title="AI Chatbot">
                      Intelligent chatbot for customer service automation
                    </ListItem>
                    <ListItem href="/sentiment-analysis" title="Sentiment Analysis">
                      Analyze customer feedback and reviews
                    </ListItem>
                    <ListItem href="/market-insights" title="Market Insights">
                      Data-driven market research and competitor analysis
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-neutral-700 hover:text-primary-600">Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/ai-listing" title="AI Listing Generator">
                      Generate optimized product listings
                    </ListItem>
                    <ListItem href="/fba-calculator" title="FBA Calculator">
                      Calculate Amazon FBA fees and profitability
                    </ListItem>
                    <ListItem href="/keyword-research" title="Keyword Research">
                      Find high-performing keywords
                    </ListItem>
                    <ListItem href="/product-research" title="Product Research">
                      Discover profitable product opportunities
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="text-neutral-700 hover:text-primary-600">
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="text-neutral-700 hover:text-primary-600">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
            <Link href="/login" passHref>
            <Button variant="ghost" aria-label="Login to your account">Login</Button>
            </Link>
            <Link href="/signup" passHref>
            <Button aria-label="Get started with VOC AI">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;