import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      description: "Learn the basics of VOC AI platform",
      items: [
        { title: "Quick Start Guide", link: "#quick-start" },
        { title: "Platform Overview", link: "#platform-overview" },
        { title: "Key Features", link: "#key-features" },
      ]
    },
    {
      title: "API Documentation",
      description: "Integrate VOC AI with your systems",
      items: [
        { title: "Authentication", link: "#authentication" },
        { title: "Endpoints", link: "#endpoints" },
        { title: "Rate Limits", link: "#rate-limits" },
      ]
    },
    {
      title: "Tools Guide",
      description: "Detailed documentation for each tool",
      items: [
        { title: "Market Insights", link: "#market-insights" },
        { title: "Sentiment Analysis", link: "#sentiment-analysis" },
        { title: "Review Analysis", link: "#review-analysis" },
      ]
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.link}
                      className="text-blue-500 hover:text-blue-700 hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}