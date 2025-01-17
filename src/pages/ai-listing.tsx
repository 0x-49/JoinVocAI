import React from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  MessageSquare,
  Star,
  Zap,
  Image,
  Type,
  Search,
  Settings
} from 'lucide-react';

export default function AIListing() {
  return (
    <>
      <Head>
        <title>AI Listing Generator - VOC AI</title>
        <meta name="description" content="Create compelling product listings with our AI-powered generator. Optimize for marketplaces and boost sales." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <ShoppingBag className="w-4 h-4 mr-2 text-blue-600" />
              AI Listing Generator
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Create Converting{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Product Listings
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Generate SEO-optimized product listings that drive sales with our advanced AI technology.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Sparkles className="mr-2 h-5 w-5" /> Try It Free
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50">
                <MessageSquare className="mr-2 h-5 w-5" /> See Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Try Our AI Listing Generator</h2>
            <p className="text-xl text-gray-600">Create compelling product listings in seconds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Input Form */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <Input placeholder="e.g., Wireless Bluetooth Headphones" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Key Features</label>
                  <Textarea placeholder="List main features and benefits" className="min-h-[100px]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Target Market</label>
                  <Input placeholder="e.g., Music enthusiasts, commuters" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Sparkles className="mr-2 h-4 w-4" /> Generate Listing
                </Button>
              </CardContent>
            </Card>

            {/* Output Preview */}
            <Card className="p-6 bg-gray-50">
              <CardHeader>
                <CardTitle>Generated Listing Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600">
                  <p className="text-sm">Your AI-generated listing will appear here...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to create high-converting listings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-blue-600" />,
                title: "Marketplace Optimization",
                description: "Tailored content for Amazon, eBay, Etsy, and other major marketplaces."
              },
              {
                icon: <Search className="h-8 w-8 text-green-600" />,
                title: "SEO Enhancement",
                description: "Automatically includes relevant keywords for better search visibility."
              },
              {
                icon: <Type className="h-8 w-8 text-purple-600" />,
                title: "Compelling Copy",
                description: "Persuasive product descriptions that highlight key benefits and features."
              },
              {
                icon: <Image className="h-8 w-8 text-red-600" />,
                title: "Image Optimization",
                description: "Guidelines for product images that increase conversion rates."
              },
              {
                icon: <Settings className="h-8 w-8 text-orange-600" />,
                title: "Customization Options",
                description: "Adjust tone, style, and format to match your brand voice."
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
                title: "Performance Tracking",
                description: "Monitor listing performance and get optimization suggestions."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-blue-100 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Use Our AI Listing Generator?</h2>
            <p className="text-xl text-gray-600">Drive more sales with optimized product listings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                metric: "50%",
                label: "Time Saved",
                description: "Create listings in minutes, not hours"
              },
              {
                metric: "30%",
                label: "Higher CTR",
                description: "Improved click-through rates"
              },
              {
                metric: "25%",
                label: "More Sales",
                description: "Increase in conversion rates"
              },
              {
                metric: "100%",
                label: "Optimized",
                description: "SEO-friendly content"
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

      {/* Example Listings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Example Listings</h2>
            <p className="text-xl text-gray-600">See the difference our AI can make</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Before AI Optimization",
                content: "Basic wireless headphones with Bluetooth connectivity. Good sound quality and comfortable fit. Battery lasts long. Comes in black color."
              },
              {
                title: "After AI Optimization",
                content: "🎧 Premium Wireless Headphones with Advanced Bluetooth 5.0 | Crystal-Clear Sound Quality & Active Noise Cancellation | Ultra-Comfortable Memory Foam Ear Cups | 30-Hour Battery Life | Perfect for Music Lovers, Commuters & Remote Workers | Sleek Matte Black Design"
              }
            ].map((example, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{example.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{example.content}</p>
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
            Ready to Create Converting Product Listings?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sellers using VOC AI to boost their marketplace success.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Sparkles className="mr-2 h-5 w-5" /> Start Free Trial
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