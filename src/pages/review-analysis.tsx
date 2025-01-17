import React from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Download,
  FileText,
  LineChart,
  MessageSquare,
  Search,
  Star,
  TrendingUp,
  Zap
} from 'lucide-react';

export default function ReviewAnalysis() {
  return (
    <>
      <Head>
        <title>Review Analysis - VOC AI</title>
        <meta name="description" content="Powerful tools for downloading, analyzing, and gaining insights from customer reviews across multiple platforms." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Review Intelligence Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Reviews into{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Actionable Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Download and analyze customer reviews from multiple platforms. Get deep insights, track sentiment trends, and make data-driven decisions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Zap className="mr-2 h-5 w-5" /> Start Analyzing Reviews
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 text-blue-600">
                <LineChart className="mr-2 h-5 w-5" /> View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Review Analysis Tools</h2>
            <p className="text-xl text-gray-600">Everything you need to understand and act on customer reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Download className="h-8 w-8 text-blue-600" />,
                title: "Bulk Review Download",
                description: "Download reviews from multiple platforms including Amazon, Shopify, and more. Consolidate feedback in one place.",
                features: [
                  "Multi-platform support",
                  "Automated scheduling",
                  "Historical data access"
                ]
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-green-600" />,
                title: "Sentiment Analysis",
                description: "Understand customer emotions and opinions with advanced AI-powered sentiment analysis.",
                features: [
                  "Emotion detection",
                  "Aspect-based analysis",
                  "Trend tracking"
                ]
              },
              {
                icon: <Search className="h-8 w-8 text-purple-600" />,
                title: "Topic Discovery",
                description: "Automatically identify key themes and topics from your reviews using advanced NLP.",
                features: [
                  "Auto-categorization",
                  "Theme extraction",
                  "Priority flagging"
                ]
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
                title: "Trend Analysis",
                description: "Track review trends over time and identify patterns in customer feedback.",
                features: [
                  "Time-series analysis",
                  "Seasonal patterns",
                  "Anomaly detection"
                ]
              },
              {
                icon: <BarChart className="h-8 w-8 text-red-600" />,
                title: "Competitive Analysis",
                description: "Compare your reviews against competitors to identify areas for improvement.",
                features: [
                  "Competitor tracking",
                  "Market positioning",
                  "Gap analysis"
                ]
              },
              {
                icon: <FileText className="h-8 w-8 text-indigo-600" />,
                title: "Custom Reports",
                description: "Generate detailed reports with visualizations and insights tailored to your needs.",
                features: [
                  "Custom templates",
                  "Multiple formats",
                  "Scheduled reports"
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

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to unlock insights from your reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Connect Platforms",
                description: "Connect your e-commerce platforms and review sources with our simple integration process."
              },
              {
                step: "2",
                title: "Download Reviews",
                description: "Automatically download and consolidate reviews from all connected platforms."
              },
              {
                step: "3",
                title: "Analyze Data",
                description: "Our AI analyzes the reviews for sentiment, topics, and trends."
              },
              {
                step: "4",
                title: "Get Insights",
                description: "Access detailed reports and actionable insights through our dashboard."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Review Analysis?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already using VOC AI to gain valuable insights from their customer reviews.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Zap className="mr-2 h-5 w-5" /> Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              <MessageSquare className="mr-2 h-5 w-5" /> Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}