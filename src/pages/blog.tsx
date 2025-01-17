import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Calendar,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

// Sample blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Amazon Product Research",
    excerpt: "Discover how artificial intelligence is transforming the way sellers conduct product research on Amazon...",
    category: "Amazon FBA",
    author: "Sarah Johnson",
    date: "January 10, 2025",
    readTime: "5 min read",
    image: "/blog/ai-product-research.jpg"
  },
  {
    id: 2,
    title: "10 Tips for Optimizing Your Product Listings with VOC Data",
    excerpt: "Learn how to leverage customer feedback and Voice of Customer data to create compelling product listings...",
    category: "Product Optimization",
    author: "Michael Chen",
    date: "January 8, 2025",
    readTime: "7 min read",
    image: "/blog/listing-optimization.jpg"
  },
  {
    id: 3,
    title: "Understanding Customer Sentiment: A Deep Dive into AI Analysis",
    excerpt: "Explore how advanced AI algorithms can help you understand and act on customer sentiment...",
    category: "AI Technology",
    author: "Emily Rodriguez",
    date: "January 5, 2025",
    readTime: "6 min read",
    image: "/blog/sentiment-analysis.jpg"
  },
  {
    id: 4,
    title: "The Future of E-commerce: AI-Driven Decision Making",
    excerpt: "See how AI is shaping the future of e-commerce and helping sellers make data-driven decisions...",
    category: "Industry Trends",
    author: "David Kim",
    date: "January 3, 2025",
    readTime: "8 min read",
    image: "/blog/ecommerce-future.jpg"
  },
  {
    id: 5,
    title: "Maximizing ROI with Smart Product Selection",
    excerpt: "Learn strategies for selecting profitable products using AI-powered market analysis...",
    category: "Business Strategy",
    author: "Rachel Thompson",
    date: "December 30, 2024",
    readTime: "5 min read",
    image: "/blog/product-selection.jpg"
  },
  {
    id: 6,
    title: "Building Customer Trust Through Better Product Descriptions",
    excerpt: "Discover how to create product descriptions that build trust and drive conversions...",
    category: "Content Strategy",
    author: "Alex Martinez",
    date: "December 28, 2024",
    readTime: "6 min read",
    image: "/blog/product-descriptions.jpg"
  }
];

const categories = [
  "All",
  "Amazon FBA",
  "Product Optimization",
  "AI Technology",
  "Industry Trends",
  "Business Strategy",
  "Content Strategy"
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - VOC AI</title>
        <meta name="description" content="Latest insights, tips, and strategies for e-commerce success with AI-powered tools." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
              VOC AI Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Insights for{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                E-commerce Success
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert tips, strategies, and insights to help you grow your e-commerce business with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2 items-center">
              <Filter className="text-gray-400 h-5 w-5" />
              <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 h-[400px]">
                {/* Featured Image Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200"></div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="mb-4 w-fit">{blogPosts[0].category}</Badge>
                <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                </div>
                <Button className="w-fit">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gray-100">
                  {/* Image Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Latest Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for weekly tips, trends, and strategies.
          </p>
          <div className="max-w-lg mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}