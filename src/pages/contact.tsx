import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Contact Us - Get in Touch with VOC AI for AI-Powered Customer Support</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our team
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[150px]"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">support@vocai.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}