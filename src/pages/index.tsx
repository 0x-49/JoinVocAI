import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, MessageSquare, Users, Globe, Sparkles, Zap, LineChart,
  CheckCircle2, Clock, Shield, PlayCircle, BarChart2, TrendingUp,
  DollarSign, ArrowRight, ShieldCheck
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// ... rest of imports and component code ...

{[
  {
    question: "How does VOC AI's pricing work?",
    answer: "We offer flexible pricing plans based on your needs. Start with our free trial to explore all features. Our plans start at $99/month for growing businesses, with custom enterprise solutions available.",
    icon: <DollarSign className="w-5 h-5 mr-3 text-blue-600" />,
    ariaLabel: "Pricing information"
  },
  {
    question: "How long does it take to set up?",
    answer: "Most customers are up and running in less than 30 minutes. Our integration wizards and API documentation make it easy to connect VOC AI with your existing tools.",
    icon: <Clock className="w-5 h-5 mr-3 text-green-600" />,
    ariaLabel: "Setup time"
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 email support for all customers, with priority phone and video support for enterprise plans. Our knowledge base and community forum are also available.",
    icon: <MessageSquare className="w-5 h-5 mr-3 text-purple-600" />,
    ariaLabel: "Support information"
  },
  {
    question: "Can I export the data?",
    answer: "Yes! All data can be exported in multiple formats (CSV, JSON, Excel). We also offer real-time API access for custom integrations.",
    icon: <ArrowRight className="w-5 h-5 mr-3 text-orange-600" />,
    ariaLabel: "Data export capabilities"
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We're SOC 2 Type II certified and use enterprise-grade encryption. Your data is stored in secure AWS data centers with regular security audits.",
    icon: <ShieldCheck className="w-5 h-5 mr-3 text-red-600" />,
    ariaLabel: "Security measures"
  },
  {
    question: "What industries does VOC AI support?",
    answer: "Our platform is versatile and supports a wide range of industries including e-commerce, SaaS, healthcare, finance, and more. We adapt to your specific business needs.",
    icon: <Globe className="w-5 h-5 mr-3 text-indigo-600" />,
    ariaLabel: "Industry support"
  },
  {
    question: "Can I try before I buy?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required.",
    icon: <CheckCircle2 className="w-5 h-5 mr-3 text-green-600" />,
    ariaLabel: "Free trial information"
  },
  {
    question: "How does VOC AI handle different languages?",
    answer: "Our platform supports over 100 languages with native-level accuracy. We use advanced NLP models trained specifically for each language.",
    icon: <Globe className="w-5 h-5 mr-3 text-blue-600" />,
    ariaLabel: "Language support"
  },
  {
    question: "What integrations are available?",
    answer: "We offer native integrations with popular platforms like Salesforce, Zendesk, Shopify, and more. Our API also allows for custom integrations.",
    icon: <Zap className="w-5 h-5 mr-3 text-purple-600" />,
    ariaLabel: "Integration options"
  },
  {
    question: "Can I use VOC AI for competitor analysis?",
    answer: "Yes! Our platform includes powerful competitor analysis tools that help you benchmark your performance and identify market opportunities.",
    icon: <BarChart2 className="w-5 h-5 mr-3 text-blue-600" />,
    ariaLabel: "Competitor analysis features"
  }
].map((faq, index) => (
  <AccordionItem key={index} value={`item-${index}`}>
    <AccordionTrigger className="text-left text-lg font-semibold">
      <div className="flex items-center">
        {faq.icon}
        <span>{faq.question}</span>
      </div>
    </AccordionTrigger>
    <AccordionContent className="text-gray-600" aria-label={faq.ariaLabel}>
      {faq.answer}
    </AccordionContent>
  </AccordionItem>
))}

// Social proof section with accessibility
<Image 
  src="/images/Vox-AI-Logo.png.webp" 
  alt="Vox AI" 
  width={140} 
  height={48} 
  className="mx-auto h-12 w-auto object-contain"
  aria-label="Vox AI company logo"
/>
