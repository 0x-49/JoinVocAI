import React from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Hash,
  Sparkles,
  TrendingUp,
  Target,
  BarChart2,
  Search,
  Clock,
  Zap
} from 'lucide-react';

export default function InstagramHashtagGenerator() {
  return (
    <>
      <Head>
        <title>Instagram Hashtag Generator | Boost Your Social Media Reach | VOC AI</title>
        <meta name="description" content="Generate highly relevant and trending Instagram hashtags to increase your post visibility and engagement. AI-powered hashtag suggestions based on your content." />
        <meta name="keywords" content="instagram hashtag generator, social media optimization, instagram marketing, AI hashtag tool, trending hashtags" />
        <meta property="og:title" content="Instagram Hashtag Generator | VOC AI" />
        <meta property="og:description" content="Generate highly relevant and trending Instagram hashtags to increase your post visibility and engagement." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Instagram Hashtag Generator | VOC AI" />
        <meta name="twitter:description" content="Generate highly relevant and trending Instagram hashtags to increase your post visibility and engagement." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Hash className="w-4 h-4 mr-2 text-purple-600" />
              AI-Powered Hashtag Generation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Supercharge Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Instagram Reach
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Generate highly relevant, trending hashtags that boost your post visibility and engagement. Our AI analyzes millions of posts to suggest the most effective hashtags for your content.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Sparkles className="mr-2 h-5 w-5" /> Generate Hashtags Now
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
                <TrendingUp className="mr-2 h-5 w-5" /> View Trending Tags
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Hashtag Generation Features</h2>
            <p className="text-xl text-gray-600">Discover the perfect hashtags for maximum reach and engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-purple-600" />,
                title: "Niche-Specific Tags",
                description: "Get hashtag suggestions tailored to your specific industry, content type, and target audience.",
                features: [
                  "Industry analysis",
                  "Content matching",
                  "Audience targeting"
                ]
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-pink-600" />,
                title: "Trend Analysis",
                description: "Stay ahead with real-time trending hashtag insights and popularity predictions.",
                features: [
                  "Real-time trends",
                  "Growth prediction",
                  "Engagement metrics"
                ]
              },
              {
                icon: <BarChart2 className="h-8 w-8 text-blue-600" />,
                title: "Performance Tracking",
                description: "Monitor hashtag performance and optimize your strategy with detailed analytics.",
                features: [
                  "Reach analysis",
                  "Engagement tracking",
                  "Success metrics"
                ]
              },
              {
                icon: <Search className="h-8 w-8 text-green-600" />,
                title: "Smart Discovery",
                description: "Find related and complementary hashtags to expand your content's reach.",
                features: [
                  "Related tags",
                  "Popularity scores",
                  "Competition level"
                ]
              },
              {
                icon: <Clock className="h-8 w-8 text-orange-600" />,
                title: "Optimal Timing",
                description: "Get recommendations for the best times to post with specific hashtags.",
                features: [
                  "Peak activity times",
                  "Timezone analysis",
                  "Posting schedule"
                ]
              },
              {
                icon: <Hash className="h-8 w-8 text-indigo-600" />,
                title: "Custom Collections",
                description: "Save and organize hashtag sets for different content types and campaigns.",
                features: [
                  "Tag grouping",
                  "Quick access",
                  "Performance history"
                ]
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-purple-100 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Drive Real Results</h2>
            <p className="text-xl text-gray-600">Proven impact on your Instagram growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                metric: "300%",
                label: "Reach Increase",
                description: "Average improvement in post reach"
              },
              {
                metric: "10M+",
                label: "Hashtags Analyzed",
                description: "Data-driven recommendations"
              },
              {
                metric: "5x",
                label: "Engagement Boost",
                description: "More likes, comments & saves"
              },
              {
                metric: "24/7",
                label: "Trend Monitoring",
                description: "Always up-to-date suggestions"
              }
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-purple-600 mb-2">{stat.metric}</p>
                  <p className="font-semibold text-gray-900 mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Boost Your Instagram Presence?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of creators and businesses using VOC AI to optimize their Instagram hashtag strategy.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
              <Zap className="mr-2 h-5 w-5" /> Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-700 hover:border-transparent">
              <TrendingUp className="mr-2 h-5 w-5" /> View Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}