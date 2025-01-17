import React, { useState } from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Hash,
  MessageSquare,
  Sparkles,
  Star,
  Type,
  Zap
} from 'lucide-react';

export default function SocialTools() {
  const [hashtagInput, setHashtagInput] = useState('');
  const [captionInput, setCaptionInput] = useState('');
  const [generatedHashtags, setGeneratedHashtags] = useState<string[]>([]);
  const [generatedCaption, setGeneratedCaption] = useState('');

  const generateHashtags = () => {
    // Simulated hashtag generation
    const hashtags = [
      '#ecommerce', '#amazonFBA', '#shopify', '#onlinebusiness',
      '#entrepreneurship', '#digitalmarketing', '#smallbusiness',
      '#startup', '#business', '#success', '#growth', '#marketing'
    ];
    setGeneratedHashtags(hashtags);
  };

  const generateCaption = () => {
    // Simulated caption generation
    setGeneratedCaption(
      "📈 Transform your customer feedback into actionable insights with VOC AI!\n\n" +
      "🔍 Discover what your customers really want\n" +
      "📊 Make data-driven decisions\n" +
      "🚀 Drive business growth\n\n" +
      "Ready to take your business to the next level? Start your free trial today! 💫\n\n" +
      "#ecommerce #amazonFBA #shopify #businessgrowth"
    );
  };

  return (
    <>
      <Head>
        <title>Social Media Tools - VOC AI</title>
        <meta name="description" content="Generate engaging social media content with our AI-powered hashtag and caption generators." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
              Social Media Tools
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Create Engaging{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Social Content
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Generate attention-grabbing captions and relevant hashtags for your social media posts with our AI-powered tools.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="hashtags" className="space-y-8">
            <TabsList className="grid grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="hashtags" className="flex items-center gap-2">
                <Hash className="h-4 w-4" /> Hashtag Generator
              </TabsTrigger>
              <TabsTrigger value="captions" className="flex items-center gap-2">
                <Type className="h-4 w-4" /> Caption Generator
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hashtags">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hash className="h-5 w-5 text-blue-600" />
                    Instagram Hashtag Generator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Input
                      placeholder="Enter keywords related to your post (e.g., ecommerce, amazon fba, business)"
                      value={hashtagInput}
                      onChange={(e) => setHashtagInput(e.target.value)}
                    />
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={generateHashtags}
                  >
                    <Sparkles className="mr-2 h-4 w-4" /> Generate Hashtags
                  </Button>
                  {generatedHashtags.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-3">Generated Hashtags</h3>
                      <div className="flex flex-wrap gap-2">
                        {generatedHashtags.map((hashtag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-blue-600 bg-blue-50 hover:bg-blue-100 cursor-pointer"
                          >
                            {hashtag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="captions">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Type className="h-5 w-5 text-blue-600" />
                    Social Media Caption Generator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Textarea
                      placeholder="Enter details about your post (e.g., key features, benefits, target audience)"
                      value={captionInput}
                      onChange={(e) => setCaptionInput(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={generateCaption}
                  >
                    <Sparkles className="mr-2 h-4 w-4" /> Generate Caption
                  </Button>
                  {generatedCaption && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-3">Generated Caption</h3>
                      <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-line">
                        {generatedCaption}
                      </div>
                      <Button variant="outline" className="mt-4 w-full">
                        <MessageSquare className="mr-2 h-4 w-4" /> Copy Caption
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Use Our Social Tools?</h2>
            <p className="text-xl text-gray-600">Create engaging content that resonates with your audience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-blue-600" />,
                title: "AI-Powered Generation",
                description: "Our advanced AI analyzes trending content to generate relevant hashtags and engaging captions."
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-green-600" />,
                title: "Platform Optimized",
                description: "Content is optimized for different social media platforms to maximize engagement."
              },
              {
                icon: <Zap className="h-8 w-8 text-purple-600" />,
                title: "Time-Saving",
                description: "Generate weeks worth of social media content in minutes, not hours."
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

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Engaging Social Content?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Start generating attention-grabbing captions and hashtags that drive engagement.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Zap className="mr-2 h-5 w-5" /> Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700 hover:border-transparent">
              <MessageSquare className="mr-2 h-5 w-5" /> View Examples
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
