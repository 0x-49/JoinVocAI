import React from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart2,
  Heart,
  TrendingUp,
  MessageSquare,
  Star,
  Zap,
  LineChart,
  PieChart,
  Target,
  Users
} from 'lucide-react';

export default function SentimentAnalysis() {
  return (
    <>
      <Head>
        <title>Sentiment Analysis - VOC AI</title>
        <meta name="description" content="Advanced sentiment analysis powered by AI to understand customer emotions and feedback at scale." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2 text-red-500" />
              Sentiment Analysis
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Understand Customer{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Emotions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform customer feedback into actionable insights with our advanced AI-powered sentiment analysis platform.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Zap className="mr-2 h-5 w-5" /> Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50">
                <MessageSquare className="mr-2 h-5 w-5" /> View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Sentiment Analysis Features</h2>
            <p className="text-xl text-gray-600">Powerful tools to understand and act on customer feedback</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8 text-red-600" />,
                title: "Emotion Detection",
                description: "Identify customer emotions with 95% accuracy across joy, frustration, satisfaction, and more.",
                features: [
                  "Multi-language support",
                  "Context awareness",
                  "Emotion intensity scoring"
                ]
              },
              {
                icon: <Target className="h-8 w-8 text-green-600" />,
                title: "Topic Analysis",
                description: "Automatically categorize feedback by product features, service aspects, or custom topics.",
                features: [
                  "Auto-categorization",
                  "Keyword extraction",
                  "Theme clustering"
                ]
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
                title: "Trend Analysis",
                description: "Track sentiment trends over time and identify patterns in customer feedback.",
                features: [
                  "Real-time monitoring",
                  "Historical analysis",
                  "Predictive insights"
                ]
              },
              {
                icon: <PieChart className="h-8 w-8 text-purple-600" />,
                title: "Aspect-Based Analysis",
                description: "Break down sentiment by specific aspects of your products or services.",
                features: [
                  "Feature-level analysis",
                  "Competitive benchmarking",
                  "Priority scoring"
                ]
              },
              {
                icon: <LineChart className="h-8 w-8 text-orange-600" />,
                title: "Custom Dashboards",
                description: "Create personalized dashboards with the metrics that matter most to your business.",
                features: [
                  "Customizable widgets",
                  "Export capabilities",
                  "Automated reporting"
                ]
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: "Team Collaboration",
                description: "Share insights and collaborate on customer feedback analysis across teams.",
                features: [
                  "Role-based access",
                  "Comment threads",
                  "Action assignments"
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
            <p className="text-xl text-gray-600">Simple steps to powerful customer insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Data Collection",
                description: "Connect your data sources or import customer feedback from multiple channels."
              },
              {
                step: "2",
                title: "AI Analysis",
                description: "Our AI processes the data to identify sentiments, emotions, and key topics."
              },
              {
                step: "3",
                title: "Insight Generation",
                description: "Get detailed reports and actionable insights from your customer feedback."
              },
              {
                step: "4",
                title: "Take Action",
                description: "Implement changes based on data-driven customer insights."
              }
            ].map((item, index) => (
              <Card key={index} className="relative">
                <div className="absolute -top-4 left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <CardContent className="pt-8">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <p className="text-xl text-gray-600">How businesses leverage our sentiment analysis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Product Development",
                description: "Understand customer needs and pain points to guide product improvements and new features."
              },
              {
                title: "Customer Support",
                description: "Monitor support interactions to improve service quality and identify training opportunities."
              },
              {
                title: "Brand Monitoring",
                description: "Track brand sentiment across social media and review platforms to protect reputation."
              },
              {
                title: "Market Research",
                description: "Analyze competitor reviews and market trends to identify opportunities and threats."
              },
              {
                title: "Quality Assurance",
                description: "Monitor product quality feedback to maintain high standards and address issues quickly."
              },
              {
                title: "Campaign Analysis",
                description: "Measure the emotional impact and effectiveness of marketing campaigns."
              }
            ].map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Understand Your Customers Better?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading brands using VOC AI's sentiment analysis to drive customer-centric decisions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Zap className="mr-2 h-5 w-5" /> Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700 hover:border-transparent">
              <Star className="mr-2 h-5 w-5" /> View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}