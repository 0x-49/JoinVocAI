import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HelpCenter() {
  const faqs = [
    {
      question: "What is VOC AI?",
      answer: "VOC AI is an AI-powered customer insights platform that helps businesses transform customer feedback into actionable insights. Our platform uses advanced analytics and AI to analyze customer sentiment, market trends, and competitive data."
    },
    {
      question: "How do I get started with VOC AI?",
      answer: "Getting started is easy! Simply sign up for a free trial, and you'll get immediate access to our platform. Our onboarding process will guide you through setting up your first project and using our key features."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer multiple levels of support including email support, live chat during business hours, and priority support for enterprise customers. Our documentation and help center are available 24/7."
    },
    {
      question: "Can I integrate VOC AI with my existing tools?",
      answer: "Yes! VOC AI offers API integration capabilities that allow you to connect with your existing tools and systems. Check our API documentation for detailed integration guides."
    }
  ];

  const categories = [
    {
      title: "Account & Billing",
      description: "Manage your account settings and billing information",
      icon: "💳"
    },
    {
      title: "Platform Features",
      description: "Learn about our tools and features",
      icon: "🛠️"
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues",
      icon: "🔧"
    },
    {
      title: "API & Integration",
      description: "Documentation and integration guides",
      icon: "🔌"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">Help Center</h1>
        <div className="relative">
          <Input
            type="search"
            placeholder="Search for help..."
            className="w-full pl-4 pr-12 py-3 text-lg"
          />
          <Button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            size="sm"
          >
            Search
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {categories.map((category) => (
          <Card key={category.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>{category.icon}</span>
                {category.title}
              </CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">Still need help?</p>
        <Button size="lg">Contact Support</Button>
      </div>
    </div>
  );
}