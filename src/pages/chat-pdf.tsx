import React from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Search,
  MessageSquare,
  Zap,
  Brain,
  BookOpen,
  Clock,
  Lock,
  Share2,
  FileQuestion
} from 'lucide-react';

export default function ChatPDF() {
  return (
    <>
      <Head>
        <title>ChatPDF | AI-Powered PDF Analysis & Interaction | VOC AI</title>
        <meta name="description" content="Extract insights, answer questions, and interact with your PDF documents using advanced AI. Save hours of reading and analysis time." />
        <meta name="keywords" content="chatpdf, pdf analysis, document ai, pdf chat, ai document analysis, pdf question answering" />
        <meta property="og:title" content="ChatPDF | AI-Powered PDF Analysis | VOC AI" />
        <meta property="og:description" content="Extract insights, answer questions, and interact with your PDF documents using advanced AI." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ChatPDF | AI-Powered PDF Analysis | VOC AI" />
        <meta name="twitter:description" content="Extract insights, answer questions, and interact with your PDF documents using advanced AI." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <FileText className="w-4 h-4 mr-2 text-indigo-600" />
              AI-Powered Document Analysis
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Chat with Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                PDF Documents
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform the way you interact with PDFs. Ask questions, extract insights, and analyze documents instantly using advanced AI technology.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <FileQuestion className="mr-2 h-5 w-5" /> Try ChatPDF Now
              </Button>
              <Button size="lg" variant="outline" className="border-indigo-200 hover:bg-indigo-50">
                <Share2 className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced PDF Analysis Features</h2>
            <p className="text-xl text-gray-600">Unlock the power of your documents with AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-indigo-600" />,
                title: "Intelligent Understanding",
                description: "Our AI comprehends context, relationships, and complex information within your documents.",
                features: [
                  "Natural language processing",
                  "Context awareness",
                  "Semantic understanding"
                ]
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-violet-600" />,
                title: "Interactive Q&A",
                description: "Ask questions in natural language and get accurate, contextual answers from your PDFs.",
                features: [
                  "Natural conversations",
                  "Multiple document support",
                  "Follow-up questions"
                ]
              },
              {
                icon: <Search className="h-8 w-8 text-blue-600" />,
                title: "Smart Search",
                description: "Find exactly what you're looking for with semantic search capabilities.",
                features: [
                  "Semantic search",
                  "Quick navigation",
                  "Related content"
                ]
              },
              {
                icon: <BookOpen className="h-8 w-8 text-green-600" />,
                title: "Document Analysis",
                description: "Get summaries, key points, and insights automatically extracted from your documents.",
                features: [
                  "Auto-summarization",
                  "Key point extraction",
                  "Topic analysis"
                ]
              },
              {
                icon: <Lock className="h-8 w-8 text-red-600" />,
                title: "Secure Processing",
                description: "Your documents are processed securely with enterprise-grade encryption.",
                features: [
                  "End-to-end encryption",
                  "Secure storage",
                  "Privacy controls"
                ]
              },
              {
                icon: <Clock className="h-8 w-8 text-orange-600" />,
                title: "Time-Saving Tools",
                description: "Process multiple documents simultaneously and get instant insights.",
                features: [
                  "Batch processing",
                  "Quick analysis",
                  "Instant answers"
                ]
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-indigo-100 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2"></div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Document Analysis</h2>
            <p className="text-xl text-gray-600">Save time and gain deeper insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                metric: "90%",
                label: "Time Saved",
                description: "Faster document analysis"
              },
              {
                metric: "1M+",
                label: "Pages Processed",
                description: "Trusted by professionals"
              },
              {
                metric: "99%",
                label: "Accuracy Rate",
                description: "Reliable information extraction"
              },
              {
                metric: "24/7",
                label: "Availability",
                description: "Always ready to assist"
              }
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-indigo-600 mb-2">{stat.metric}</p>
                  <p className="font-semibold text-gray-900 mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Document Analysis?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals using VOC AI's ChatPDF to unlock insights from their documents.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-indigo-50">
              <Zap className="mr-2 h-5 w-5" /> Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-indigo-700 hover:border-transparent">
              <FileText className="mr-2 h-5 w-5" /> View Sample Analysis
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}