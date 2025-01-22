import React from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Sparkles,
  TrendingUp,
  Target,
  BarChart2,
  Globe,
  Clock,
  Zap,
  Heart,
  Share2
} from 'lucide-react';

export default function SocialMediaCaptionGenerator() {
  return (
    <>
      <Head>
        <title>AI Social Media Caption Generator | Create Engaging Captions | VOC AI</title>
        <meta name="description" content="Generate engaging, conversion-focused social media captions with our AI-powered tool. Save time and increase engagement across all platforms." />
        <meta name="keywords" content="social media caption generator, AI caption writer, instagram captions, facebook posts, linkedin content, social media optimization" />
        <meta property="og:title" content="AI Social Media Caption Generator | VOC AI" />
        <meta property="og:description" content="Generate engaging, conversion-focused social media captions with our AI-powered tool." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Social Media Caption Generator | VOC AI" />
        <meta name="twitter:description" content="Generate engaging, conversion-focused social media captions with our AI-powered tool." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <MessageSquare className="w-4 h-4 mr-2 text-pink-600" />
              AI-Powered Caption Creation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Craft Perfect{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
                Social Media Captions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your social media presence with AI-generated captions that engage, convert, and save you hours of content creation time.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                <Sparkles className="mr-2 h-5 w-5" /> Generate Caption Now
              </Button>
              <Button size="lg" variant="outline" className="border-pink-200 hover:bg-pink-50">
                <Share2 className="mr-2 h-5 w-5" /> Try Sample Captions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Caption Generation Features</h2>
            <p className="text-xl text-gray-600">Create engaging captions that drive real results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-pink-600" />,
                title: "Platform Optimization",
                description: "Tailored captions for each social media platform's unique requirements and audience expectations.",
                features: [
                  "Instagram-optimized",
                  "LinkedIn professional",
                  "Twitter-friendly length"
                ]
              },
              {
                icon: <Globe className="h-8 w-8 text-rose-600" />,
                title: "Multi-Language Support",
                description: "Generate captions in multiple languages to reach a global audience effectively.",
                features: [
                  "30+ languages",
                  "Cultural adaptation",
                  "Local engagement"
                ]
              },
              {
                icon: <Heart className="h-8 w-8 text-red-600" />,
                title: "Engagement Optimization",
                description: "Create captions that drive likes, comments, and shares across all platforms.",
                features: [
                  "Call-to-action prompts",
                  "Question formats",
                  "Engagement triggers"
                ]
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
                title: "Trend Integration",
                description: "Stay relevant with captions that incorporate current trends and viral topics.",
                features: [
                  "Trend analysis",
                  "Viral content ideas",
                  "Timely references"
                ]
              },
              {
                icon: <BarChart2 className="h-8 w-8 text-yellow-600" />,
                title: "Performance Analytics",
                description: "Track which captions perform best and optimize your strategy accordingly.",
                features: [
                  "Engagement metrics",
                  "A/B testing",
                  "Success patterns"
                ]
              },
              {
                icon: <Clock className="h-8 w-8 text-green-600" />,
                title: "Time-Saving Tools",
                description: "Generate weeks worth of captions in minutes with our bulk creation tools.",
                features: [
                  "Bulk generation",
                  "Content calendar",
                  "Auto-scheduling"
                ]
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-pink-100 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-600 mr-2"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Social Media Strategy</h2>
            <p className="text-xl text-gray-600">Proven results that drive real engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                metric: "80%",
                label: "Time Saved",
                description: "Less time spent on caption writing"
              },
              {
                metric: "2.5x",
                label: "Engagement Rate",
                description: "Higher engagement than manual captions"
              },
              {
                metric: "1M+",
                label: "Captions Generated",
                description: "Trust by content creators worldwide"
              },
              {
                metric: "45%",
                label: "More Reach",
                description: "Increased post visibility"
              }
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-pink-600 mb-2">{stat.metric}</p>
                  <p className="font-semibold text-gray-900 mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Social Media Content?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Join thousands of content creators saving time and boosting engagement with VOC AI's caption generator.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-pink-50">
              <Zap className="mr-2 h-5 w-5" /> Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-pink-700 hover:border-transparent">
              <MessageSquare className="mr-2 h-5 w-5" /> View Examples
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}