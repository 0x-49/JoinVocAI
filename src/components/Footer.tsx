import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/market-insights" className="text-muted-foreground hover:text-foreground">Market Insights</Link></li>
              <li><Link href="/sentiment-analysis" className="text-muted-foreground hover:text-foreground">Sentiment Analysis</Link></li>
              <li><Link href="/ai-chatbot" className="text-muted-foreground hover:text-foreground">AI Chatbot</Link></li>
              <li><Link href="/review-analysis" className="text-muted-foreground hover:text-foreground">Review Analysis</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/fba-calculator" className="text-muted-foreground hover:text-foreground">FBA Calculator</Link></li>
              <li><Link href="/ai-listing" className="text-muted-foreground hover:text-foreground">AI Listing</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-foreground">Case Studies</Link></li>
              <li><Link href="/documentation" className="text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link href="/help-center" className="text-muted-foreground hover:text-foreground">Help Center</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} VOC AI. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Some links on this site may be affiliate links. VOC AI may earn a commission when you make a purchase through these links.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">Privacy Policy</Button>
              <Button variant="ghost" size="sm">Terms of Service</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;