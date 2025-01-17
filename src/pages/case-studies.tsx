import React from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BarChart,
  LineChart,
  Star,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - VOC AI</title>
        <meta name="description" content="Real success stories from businesses using VOC AI to transform customer feedback into actionable insights and growth." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              See How Companies{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Transform with VOC AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how businesses across different industries are using VOC AI to understand customer feedback, make data-driven decisions, and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Featured Story</Badge>
                <h2 className="text-3xl font-bold mb-4">EcoStyle: 47% Revenue Growth Through Customer Insights</h2>
                <p className="text-gray-600 mb-6">
                  Learn how EcoStyle, a sustainable fashion brand, used VOC AI to analyze customer feedback, identify key trends, and make data-driven decisions that led to significant growth.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">47%</p>
                    <p className="text-sm text-gray-600">Revenue Growth</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">85%</p>
                    <p className="text-sm text-gray-600">Customer Satisfaction</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">3.2x</p>
                    <p className="text-sm text-gray-600">ROI</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">12hrs</p>
                    <p className="text-sm text-gray-600">Saved Weekly</p>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-12 text-white">
                <blockquote className="text-xl italic mb-6">
                  "VOC AI transformed how we understand our customers. The insights we gained led directly to product improvements and marketing strategies that resonated with our audience."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-blue-200">CEO, EcoStyle</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "TechGear Pro",
                industry: "Electronics",
                metrics: {
                  growth: "32%",
                  metric: "Sales Increase"
                },
                description: "How TechGear Pro used customer sentiment analysis to optimize product features and marketing messaging.",
                quote: "The insights from VOC AI helped us identify exactly what features our customers valued most.",
                author: "Mike Johnson",
                role: "Product Manager"
              },
              {
                company: "Wellness Plus",
                industry: "Health & Fitness",
                metrics: {
                  growth: "65%",
                  metric: "Customer Retention"
                },
                description: "Wellness Plus leveraged VOC AI to improve their product recommendations and customer experience.",
                quote: "We saw a dramatic improvement in customer retention after implementing VOC AI's recommendations.",
                author: "Lisa Martinez",
                role: "Customer Success Director"
              },
              {
                company: "PetJoy",
                industry: "Pet Supplies",
                metrics: {
                  growth: "28%",
                  metric: "Review Score"
                },
                description: "How PetJoy used review analysis to improve product quality and customer satisfaction.",
                quote: "VOC AI helped us identify quality issues early and make improvements that our customers love.",
                author: "David Wilson",
                role: "Operations Manager"
              },
              {
                company: "HomeStyle",
                industry: "Home Decor",
                metrics: {
                  growth: "41%",
                  metric: "Revenue Growth"
                },
                description: "HomeStyle's journey to understanding customer preferences and optimizing their product line.",
                quote: "The market insights from VOC AI were instrumental in our expansion strategy.",
                author: "Emma Thompson",
                role: "Marketing Director"
              },
              {
                company: "FitFuel",
                industry: "Sports Nutrition",
                metrics: {
                  growth: "53%",
                  metric: "Market Share"
                },
                description: "How FitFuel used competitor analysis to identify market gaps and opportunities.",
                quote: "VOC AI's competitor analysis gave us the edge we needed in a crowded market.",
                author: "Ryan Cooper",
                role: "Strategy Lead"
              },
              {
                company: "BeautyGlow",
                industry: "Cosmetics",
                metrics: {
                  growth: "94%",
                  metric: "Positive Reviews"
                },
                description: "BeautyGlow's transformation of customer feedback into product innovation.",
                quote: "We completely transformed our product development process using VOC AI's insights.",
                author: "Sophie Chen",
                role: "Product Development"
              }
            ].map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">{study.industry}</Badge>
                      <CardTitle className="text-xl">{study.company}</CardTitle>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">{study.metrics.growth}</p>
                      <p className="text-sm text-gray-600">{study.metrics.metric}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <blockquote className="border-l-2 border-blue-200 pl-4 mb-4 italic">
                    "{study.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">{study.author}</p>
                      <p className="text-sm text-gray-600">{study.role}</p>
                    </div>
                  </div>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join these successful businesses and start transforming your customer feedback into growth opportunities.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Zap className="mr-2 h-5 w-5" /> Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700 hover:border-transparent">
              <LineChart className="mr-2 h-5 w-5" /> View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}