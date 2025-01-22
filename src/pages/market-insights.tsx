import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from "@/components/Header";
import { usePerformanceTracking } from '@/hooks/usePerformanceTracking';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  TrendingUp,
  BarChart2,
  LineChart,
  PieChart,
  Target,
  Search,
  Zap,
  Star,
  Globe,
  Users,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function MarketInsights() {
  const { trackNetworkRequest } = usePerformanceTracking('MarketInsights');

  useEffect(() => {
    const startTime = performance.now();
    // Simulate API call
    setTimeout(() => {
      trackNetworkRequest('/api/market-insights', startTime);
    }, 1000);
  }, [trackNetworkRequest]);

  return (
    <>
      <Head>
        <title>Market Insights - VOC AI</title>
        <meta name="description" content="Get actionable market insights with AI-powered analytics and competitor research." />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <ThemeToggle />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Badge variant="secondary" className="mb-4 cursor-pointer">
                <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
                Market Intelligence
              </Badge>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div>
                  <h4 className="text-sm font-semibold">AI-Powered Market Analysis</h4>
                  <p className="text-sm">Get real-time insights and competitive analysis powered by advanced AI algorithms.</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Optimize Your Business with AI-Powered Market Intelligence Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Make informed business decisions with AI-powered market analysis and competitor research.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white group" onClick={() => window.location.href = 'https://join.shulex.com/175.html'}>
              <span>Start Free Trial</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/50" onClick={() => window.location.href = 'https://join.shulex.com/175.html'}>
              <Search className="mr-2 h-4 w-4" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section with Tabs */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Market Analysis</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Powerful tools to understand your market and competition</p>
          </div>

          <Tabs defaultValue="market" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="market">Market Analysis</TabsTrigger>
              <TabsTrigger value="competitor">Competitor Research</TabsTrigger>
              <TabsTrigger value="trends">Trend Tracking</TabsTrigger>
            </TabsList>
            
            <TabsContent value="market">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <BarChart2 className="h-8 w-8 text-blue-600" />,
                    title: "Market Size Analysis",
                    description: "Calculate total addressable market and growth potential",
                  },
                  {
                    icon: <Target className="h-8 w-8 text-blue-600" />,
                    title: "Demand Forecasting",
                    description: "Predict future market demand with AI algorithms",
                  },
                  {
                    icon: <Globe className="h-8 w-8 text-blue-600" />,
                    title: "Geographic Insights",
                    description: "Analyze market performance across regions",
                  }
                ].map((feature, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="mb-4 p-3 rounded-lg bg-blue-50 w-fit group-hover:bg-blue-100 transition-colors">
                        {feature.icon}
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="competitor">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Users className="h-8 w-8 text-purple-600" />,
                    title: "Competitor Tracking",
                    description: "Monitor competitor activities and strategies",
                  },
                  {
                    icon: <LineChart className="h-8 w-8 text-purple-600" />,
                    title: "Price Analysis",
                    description: "Track and analyze competitor pricing strategies",
                  },
                  {
                    icon: <PieChart className="h-8 w-8 text-purple-600" />,
                    title: "Market Share",
                    description: "Measure and track market share distribution",
                  }
                ].map((feature, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="mb-4 p-3 rounded-lg bg-purple-50 w-fit group-hover:bg-purple-100 transition-colors">
                        {feature.icon}
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="trends">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <TrendingUp className="h-8 w-8 text-green-600" />,
                    title: "Trend Detection",
                    description: "Identify emerging market trends early",
                  },
                  {
                    icon: <BarChart2 className="h-8 w-8 text-green-600" />,
                    title: "Growth Analysis",
                    description: "Track growth rates and market dynamics",
                  },
                  {
                    icon: <Search className="h-8 w-8 text-green-600" />,
                    title: "Consumer Insights",
                    description: "Analyze changing consumer preferences",
                  }
                ].map((feature, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="mb-4 p-3 rounded-lg bg-green-50 w-fit group-hover:bg-green-100 transition-colors">
                        {feature.icon}
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Interactive Analytics Dashboard</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Visualize market data and extract actionable insights</p>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 p-8">
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="bg-white/10 rounded-lg backdrop-blur-sm"></div>
                <div className="bg-white/10 rounded-lg backdrop-blur-sm"></div>
                <div className="bg-white/10 rounded-lg backdrop-blur-sm"></div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Section with Scroll Area */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Drive Growth with Market Intelligence</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Make data-driven decisions for your business</p>
          </div>

          <ScrollArea className="h-[400px] w-full rounded-md border p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
              {[
                {
                  metric: "2x",
                  label: "Faster Research",
                  description: "Cut research time in half with AI-powered analysis"
                },
                {
                  metric: "30%",
                  label: "Better ROI",
                  description: "Improve investment returns with data-driven insights"
                },
                {
                  metric: "95%",
                  label: "Data Accuracy",
                  description: "Get reliable market insights with our advanced algorithms"
                },
                {
                  metric: "24/7",
                  label: "Monitoring",
                  description: "Real-time market updates and alerts"
                },
                {
                  metric: "50+",
                  label: "Data Sources",
                  description: "Comprehensive data from multiple reliable sources"
                },
                {
                  metric: "1M+",
                  label: "Data Points",
                  description: "Rich dataset for accurate market analysis"
                }
              ].map((stat, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl font-bold text-blue-600">{stat.metric}</div>
                      <div>
                        <CardTitle className="text-xl mb-2">{stat.label}</CardTitle>
                        <CardDescription>{stat.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Market Research?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join successful businesses using VOC AI for data-driven market insights.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 group" onClick={() => window.location.href = 'https://join.shulex.com/175.html'}>
              <Zap className="mr-2 h-4 w-4" />
              <span>Start Free Trial</span>
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700 hover:border-transparent group" onClick={() => window.location.href = 'https://join.shulex.com/175.html'}>
              <Star className="mr-2 h-4 w-4" />
              <span>View Pricing</span>
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}