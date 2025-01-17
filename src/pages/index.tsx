import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  Brain, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  Users, 
  Sparkles, 
  Zap, 
  LineChart,
  CheckCircle2, 
  DollarSign, 
  Clock, 
  Shield,
  PlayCircle,
  BarChart2
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <Head>
        <title>VOC AI - Voice of Customer Intelligence Platform</title>
        <meta name="description" content="Transform your business with AI-powered customer insights, sentiment analysis, and automated customer service. Join 900+ businesses already leveraging VOC AI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center">
                <Badge variant="secondary" className="py-2 px-4 mb-6 inline-flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-blue-900">Trusted by 900+ Businesses</span>
                </Badge>
                
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900">
                Revolutionize Your Business with AI-Powered Customer Intelligence
                </h1>
                
                <div className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-gray-600">
                <div className="mb-4">
                  Unlock the true potential of customer feedback with VOC AI's cutting-edge platform. Harness the power of advanced AI to:
                </div>
                <ul className="list-disc list-inside mt-4 space-y-2 text-left">
                  <li>🔍 Gain deep, actionable insights from customer voices</li>
                  <li>🚀 Automate and optimize customer interactions</li>
                  <li>📈 Drive measurable business growth and revenue</li>
                  <li>💡 Make smarter, data-driven decisions faster</li>
                </ul>
                <div className="mt-4">
                  Join the revolution in customer experience management today.
                </div>
                </div>
                
                <div className="flex gap-4 justify-center mb-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25">
                  <Zap className="mr-2 h-5 w-5" /> Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
                </Button>
                </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">No Credit Card Required</h3>
                    <p className="text-gray-600">Start your 14-day free trial instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Setup in Minutes</h3>
                    <p className="text-gray-600">Quick integration with your tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-purple-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Enterprise Security</h3>
                    <p className="text-gray-600">SOC 2 Type II certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
                {/* Add company logos here */}
                <Image src="/images/company1.png" alt="Company 1" width={120} height={40} className="mx-auto" />
                <Image src="/images/company2.png" alt="Company 2" width={120} height={40} className="mx-auto" />
                <Image src="/images/company3.png" alt="Company 3" width={120} height={40} className="mx-auto" />
                <Image src="/images/company4.png" alt="Company 4" width={120} height={40} className="mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Understand Your Customers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive tools to collect, analyze, and act on customer feedback at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-blue-600" />,
                  title: "AI-Powered Analysis",
                  description: "Harness cutting-edge machine learning to uncover hidden patterns in customer feedback. Our AI delivers precise sentiment analysis, trend identification, and actionable recommendations.",
                  benefits: [
                    "🎯 95%+ sentiment accuracy",
                    "🌍 Supports 100+ languages",
                    "⏱️ Real-time processing"
                  ]
                },
                {
                  icon: <MessageSquare className="w-8 h-8 text-green-600" />,
                  title: "Smart Response System",
                  description: "Automate and optimize customer interactions with AI-driven response suggestions. Maintain consistent, high-quality communication across all channels.",
                  benefits: [
                    "🤖 AI-generated response templates",
                    "📊 Performance tracking",
                    "🔄 Continuous learning"
                  ]
                },
                {
                  icon: <BarChart2 className="w-8 h-8 text-purple-600" />,
                  title: "Real-time Analytics",
                  description: "Stay ahead with instant insights into customer sentiment trends. Receive proactive alerts for critical feedback and emerging issues.",
                  benefits: [
                    "📈 Live sentiment dashboards",
                    "🔔 Customizable alerts",
                    "📅 Historical trend analysis"
                  ]
                },
                {
                  icon: <Users className="w-8 h-8 text-orange-600" />,
                  title: "Team Collaboration",
                  description: "Streamline your workflow with built-in team management features. Assign tasks, track progress, and maintain accountability across your organization.",
                  benefits: [
                    "👥 Role-based access control",
                    "📝 Shared notes & comments",
                    "✅ Task tracking & reminders"
                  ]
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-red-600" />,
                  title: "Competitive Analysis",
                  description: "Gain strategic advantage by benchmarking your performance against competitors. Identify market opportunities and stay ahead of industry trends.",
                  benefits: [
                    "📊 Competitor benchmarking",
                    "🔍 Market gap analysis",
                    "📈 Share of voice tracking"
                  ]
                },
                {
                  icon: <LineChart className="w-8 h-8 text-indigo-600" />,
                  title: "Custom Reports",
                  description: "Create tailored reports and dashboards that align with your business objectives. Export data in multiple formats for seamless integration.",
                  benefits: [
                    "📑 Customizable templates",
                    "📤 Multiple export formats",
                    "📊 Interactive visualizations"
                  ]
                }
              ].map((feature, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-blue-100 transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How VOC AI Compares</h2>
              <p className="text-xl text-gray-600">See why businesses choose VOC AI over traditional solutions</p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Features</TableHead>
                  <TableHead className="text-center">Traditional Tools</TableHead>
                  <TableHead className="text-center bg-blue-50">VOC AI Platform</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              {[
                {
                  feature: "Analysis Speed",
                  traditional: "Hours to Days",
                  vocai: "Real-time Analysis",
                  icon: "⏱️"
                },
                {
                  feature: "Sentiment Accuracy",
                  traditional: "60-70%",
                  vocai: "95%+ Accuracy",
                  icon: "🎯"
                },
                {
                  feature: "Language Support",
                  traditional: "Limited Languages",
                  vocai: "100+ Languages",
                  icon: "🌍"
                },
                {
                  feature: "Integration Capability",
                  traditional: "Manual Export/Import",
                  vocai: "API & Native Integrations",
                  icon: "🔌"
                },
                {
                  feature: "Scalability",
                  traditional: "Limited by Manual Processing",
                  vocai: "Unlimited Scale",
                  icon: "🚀"
                },
                {
                  feature: "Data Security",
                  traditional: "Basic Encryption",
                  vocai: "Enterprise-Grade Security",
                  icon: "🔒"
                },
                {
                  feature: "Insight Depth",
                  traditional: "Surface-Level Analysis",
                  vocai: "Granular Insights",
                  icon: "🔍"
                },
                {
                  feature: "Customization",
                  traditional: "Fixed Templates",
                  vocai: "Fully Customizable",
                  icon: "🎨"
                },
                {
                  feature: "Support",
                  traditional: "Business Hours",
                  vocai: "24/7 Premium Support",
                  icon: "🛎️"
                }
                ].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell className="text-center text-gray-500">{row.traditional}</TableCell>
                    <TableCell className="text-center font-semibold text-blue-600 bg-blue-50">{row.vocai}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about VOC AI</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How does VOC AI's pricing work?",
                  answer: "We offer flexible pricing plans based on your needs. Start with our free trial to explore all features. Our plans start at $99/month for growing businesses, with custom enterprise solutions available.",
                  icon: "💳"
                },
                {
                  question: "How long does it take to set up?",
                  answer: "Most customers are up and running in less than 30 minutes. Our integration wizards and API documentation make it easy to connect VOC AI with your existing tools.",
                  icon: "⏱️"
                },
                {
                  question: "What kind of support do you offer?",
                  answer: "We provide 24/7 email support for all customers, with priority phone and video support for enterprise plans. Our knowledge base and community forum are also available.",
                  icon: "🛎️"
                },
                {
                  question: "Can I export the data?",
                  answer: "Yes! All data can be exported in multiple formats (CSV, JSON, Excel). We also offer real-time API access for custom integrations.",
                  icon: "📤"
                },
                {
                  question: "Is my data secure?",
                  answer: "Absolutely. We're SOC 2 Type II certified and use enterprise-grade encryption. Your data is stored in secure AWS data centers with regular security audits.",
                  icon: "🔒"
                },
                {
                  question: "What industries does VOC AI support?",
                  answer: "Our platform is versatile and supports a wide range of industries including e-commerce, SaaS, healthcare, finance, and more. We adapt to your specific business needs.",
                  icon: "🏢"
                },
                {
                  question: "Can I try before I buy?",
                  answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required.",
                  icon: "🆓"
                },
                {
                  question: "How does VOC AI handle different languages?",
                  answer: "Our platform supports over 100 languages with native-level accuracy. We use advanced NLP models trained specifically for each language.",
                  icon: "🌍"
                },
                {
                  question: "What integrations are available?",
                  answer: "We offer native integrations with popular platforms like Salesforce, Zendesk, Shopify, and more. Our API also allows for custom integrations.",
                  icon: "🔗"
                },
                {
                  question: "Can I use VOC AI for competitor analysis?",
                  answer: "Yes! Our platform includes powerful competitor analysis tools that help you benchmark your performance and identify market opportunities.",
                  icon: "📊"
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Customer Feedback?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join 900+ businesses already using VOC AI to drive growth through customer insights.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                <Zap className="mr-2 h-5 w-5" /> Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 hover:border-transparent">
                <MessageSquare className="mr-2 h-5 w-5" /> Talk to Sales
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
