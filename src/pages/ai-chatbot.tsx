import React from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Bot,
  Zap,
  Globe,
  Clock,
  BarChart,
  Settings,
  Shield,
  Users
} from 'lucide-react';

export default function AIChatbot() {
  return (
    <>
      <Head>
        <title>AI Chatbot - VOC AI</title>
        <meta name="description" content="Transform your customer service with our AI-powered chatbot. Available 24/7, trained on your data for precise responses." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Bot className="w-4 h-4 mr-2 text-blue-600" />
              AI-Powered Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Enhance Your Customer Support with AI-Powered Chatbot Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Provide instant, accurate support 24/7 with our AI chatbot trained on your specific business data and customer interactions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Zap className="mr-2 h-5 w-5" /> Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50">
                <MessageSquare className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive AI Support Features</h2>
            <p className="text-xl text-gray-600">Everything you need for automated, intelligent customer service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="h-8 w-8 text-blue-600" />,
                title: "Natural Language Processing",
                description: "Advanced AI that understands context and nuance, providing human-like responses to customer inquiries.",
                features: [
                  "Context awareness",
                  "Sentiment analysis",
                  "Multi-turn conversations"
                ]
              },
              {
                icon: <Settings className="h-8 w-8 text-green-600" />,
                title: "Custom Training",
                description: "Train the chatbot on your specific products, services, and company policies for accurate responses.",
                features: [
                  "Document training",
                  "Custom responses",
                  "Continuous learning"
                ]
              },
              {
                icon: <Globe className="h-8 w-8 text-purple-600" />,
                title: "Multilingual Support",
                description: "Communicate with customers in their preferred language with automatic translation.",
                features: [
                  "100+ languages",
                  "Real-time translation",
                  "Cultural awareness"
                ]
              },
              {
                icon: <Shield className="h-8 w-8 text-orange-600" />,
                title: "Security & Compliance",
                description: "Enterprise-grade security with data encryption and compliance with privacy regulations.",
                features: [
                  "Data encryption",
                  "GDPR compliance",
                  "Access controls"
                ]
              },
              {
                icon: <BarChart className="h-8 w-8 text-red-600" />,
                title: "Analytics Dashboard",
                description: "Track performance metrics and gather insights to improve customer service.",
                features: [
                  "Real-time metrics",
                  "Customer satisfaction",
                  "Trend analysis"
                ]
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: "Human Handoff",
                description: "Seamlessly transfer complex conversations to human agents when needed.",
                features: [
                  "Smart routing",
                  "Context preservation",
                  "Priority handling"
                ]
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-blue-100 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Customer Service</h2>
            <p className="text-xl text-gray-600">Measurable improvements in efficiency and satisfaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                metric: "50%",
                label: "Cost Reduction",
                description: "Lower support costs through automation"
              },
              {
                metric: "24/7",
                label: "Availability",
                description: "Round-the-clock customer support"
              },
              {
                metric: "< 1s",
                label: "Response Time",
                description: "Instant answers to customer queries"
              },
              {
                metric: "95%",
                label: "Resolution Rate",
                description: "First-contact resolution for common issues"
              }
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</p>
                  <p className="font-semibold text-gray-900 mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seamless Integration</h2>
            <p className="text-xl text-gray-600">Connect with your existing tools and platforms</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Zendesk",
              "Salesforce",
              "Intercom",
              "Freshdesk",
              "HubSpot",
              "Shopify",
              "Slack",
              "Microsoft Teams"
            ].map((platform, index) => (
              <Card key={index} className="flex items-center justify-center p-6 hover:border-blue-200 transition-all">
                <p className="font-semibold text-gray-700">{platform}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already using VOC AI's chatbot to provide exceptional customer support.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Zap className="mr-2 h-5 w-5" /> Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700 hover:border-transparent">
              <MessageSquare className="mr-2 h-5 w-5" /> Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
