import React from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Anchor,
  Aperture,
  Archive,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  AtSign,
  Award,
  BarChart2,
  Bell,
  BellOff,
  Bluetooth,
  Book,
  BookOpen,
  Bookmark,
  Bold,
  Box,
  Briefcase,
  Brush,
  CalendarIcon,
  Camera,
  CameraOff,
  Cast,
  Check,
  CheckCircle,
  CheckSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  Clipboard,
  Clock,
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudOff,
  CloudRain,
  CloudSnow,
  Code,
  Codepen,
  Codesandbox,
  Coffee,
  Columns,
  CommandIcon,
  Compass,
  Copy,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreditCard,
  Crop,
  Crosshair,
  Database,
  Delete,
  Disc,
  Divide,
  DollarSign,
  Download,
  Droplet,
  Edit,
  Edit2,
  Edit3,
  ExternalLink,
  Eye,
  EyeOff,
  Facebook,
  FastForward,
  Feather,
  Figma,
  File,
  FileMinus,
  FilePlus,
  FileText,
  Film,
  Filter,
  Flag,
  Folder,
  FolderMinus,
  FolderPlus,
  Framer,
  Frown,
  Gift,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Github,
  Gitlab,
  Globe,
  Grid,
  HardDrive,
  Hash,
  Headphones,
  Heart,
  HelpCircle,
  Hexagon,
  Home,
  Image,
  Inbox,
  Info,
  Instagram,
  Italic,
  Key,
  Layers,
  Layout,
  LifeBuoy,
  Link,
  Link2,
  Linkedin,
  List,
  Loader,
  Lock,
  LogIn,
  LogOut,
  Mail,
  Map,
  MapPin,
  Maximize,
  Maximize2,
  Meh,
  Menu,
  MessageCircle,
  MessageSquare,
  Mic,
  MicOff,
  Minimize,
  Minimize2,
  Minus,
  MinusCircle,
  MinusSquare,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Mouse,
  MousePointer,
  Move,
  Music,
  Navigation,
  Navigation2,
  Octagon,
  Package,
  Paperclip,
  Pause,
  PauseCircle,
  PenTool,
  Percent,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  PieChart,
  Play,
  PlayCircle,
  Plus,
  PlusCircle,
  PlusSquare,
  Pocket,
  Power,
  Printer,
  Radio,
  RefreshCw,
  Repeat,
  Rewind,
  RotateCcw,
  RotateCw,
  Rss,
  Save,
  Scissors,
  Search,
  Send,
  Server,
  Settings,
  Share,
  Share2,
  Shield,
  ShieldOff,
  ShoppingBag,
  ShoppingCart,
  Shuffle,
  Sidebar,
  SkipBack,
  SkipForward,
  Slack,
  Slash,
  Sliders,
  Smartphone,
  Smile,
  Speaker,
  Square,
  Star,
  StopCircle,
  Sun,
  Sunrise,
  Sunset,
  Tablet,
  Tag,
  Target,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  ToggleLeft,
  ToggleRight,
  Trash,
  Trash2,
  Trello,
  TrendingDown,
  TrendingUp,
  Triangle,
  Truck,
  Tv,
  Twitch,
  Twitter,
  Type,
  Umbrella,
  Underline,
  Unlock,
  Upload,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Users,
  Video,
  VideoOff,
  Voicemail,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Watch,
  Wifi,
  WifiOff,
  Wind,
  X,
  XCircle,
  XOctagon,
  XSquare,
  Youtube,
  Zap,
  ZapOff,
  ZoomIn,
  ZoomOut,
  LineChart
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Command as CommandPrimitive, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DatePicker as DatePickerComponent } from "@/components/ui/date-picker";
import { TimePicker as TimePickerComponent } from "@/components/ui/time-picker";
import { Combobox as ComboboxComponent } from "@/components/ui/combobox";
import { MultiSelect as MultiSelectComponent } from "@/components/ui/multi-select";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

// Replace missing component imports with placeholders until components are created
const DatePicker = ({ ...props }) => <DatePickerComponent {...props} />;
const TimePicker = ({ ...props }) => <TimePickerComponent {...props} />;
const Combobox = ({ ...props }) => <ComboboxComponent options={[{ label: "Option 1", value: "option1" }]} {...props} />;
const MultiSelect = ({ ...props }) => (
  <MultiSelectComponent
    options={[{ label: "Option 1", value: "option1" }]}
    selected={[]}
    onChange={(values) => console.log(values)}
    {...props}
  />
);

interface AnalysisData {
  sentiment: string;
  score: number;
}

export default function SentimentAnalysis() {
  const { toast } = useToast();

  const formSchema = z.object({
    text: z.string().min(10, "Please enter at least 10 characters.")
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: ""
    }
  });

  const onSubmit = (data: AnalysisData) => {
    toast({
      title: "Analysis Complete!",
      description: "Your text has been analyzed successfully.",
      variant: "default"
    });
  };

  return (
    <>
      <Head>
        <title>Sentiment Analysis - VOC AI</title>
        <meta name="description" content="Optimise your business with AI-Powered Customer Sentiment Analysis Solutions." />
      </Head>

      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            Sentiment Analysis
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-blue-600 dark:text-blue-400">Unlock the Power</span> of Customer Insights with AI
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            **Understand what your customers truly feel and make data-driven decisions.** Our AI-powered sentiment analysis goes beyond simple keywords to reveal the genuine emotions behind customer feedback.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="default" size="lg">
              <Zap className="mr-2 h-5 w-5" /> Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg">
              <MessageSquare className="mr-2 h-5 w-5" /> View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
          <Tabs defaultValue="analysis" className="w-full">
            <TabsList className="flex justify-center space-x-4">
              <TabsTrigger value="analysis">Sentiment Analysis</TabsTrigger>
              <TabsTrigger value="topic">Topic Analysis</TabsTrigger>
              <TabsTrigger value="trend">Trend Analysis</TabsTrigger>
              <TabsTrigger value="aspect">Aspect-Based Analysis</TabsTrigger>
            </TabsList>
            <TabsContent value="analysis">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="mr-2 h-5 w-5 text-red-500" /> Sentiment Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      **Dive deep into the emotional undertones of customer feedback.** Understand whether customers are delighted, frustrated, or neutral with your products or services.
                    </p>
                    <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
                      <li>**Fine-grained emotion detection:** Identify nuanced sentiment, from pure joy to subtle dissatisfaction.</li>
                      <li>**Real-time processing:** Analyse feedback instantly as it arrives across multiple channels.</li>
                      <li>**Multi-language support:** Understand customer sentiment regardless of their language.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5 text-blue-500" /> Feedback Categorisation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      **Automatically categorize feedback by product features, service aspects, or custom topics.** Focus your attention on the areas that matter most to your customers.
                    </p>
                    <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
                      <li>**Auto-categorization:** Intelligent classification of feedback using AI.</li>
                      <li>**Keyword extraction:** Pinpoint frequently used terms and topics within customer reviews.</li>
                      <li>**Theme clustering:** Group similar feedback to identify recurring themes.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-green-500" /> Trend Identification
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      **Track sentiment trends over time and identify patterns in customer feedback.** Proactively address issues before they escalate, and double down on what's working.
                    </p>
                    <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
                      <li>**Real-time monitoring:** Track sentiment fluctuations as they occur.</li>
                      <li>**Historical analysis:** Review past trends to identify seasonal patterns or the impacts of changes.</li>
                      <li>**Predictive insights:** Anticipate future trends to optimise your strategy.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="topic">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5 text-yellow-500" /> Topic Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    **Automatically categorise feedback by product features, service aspects, or custom topics.**
                  </p>
                  <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
                    <li>**Auto-categorization**</li>
                    <li>**Keyword extraction**</li>
                    <li>**Theme clustering**</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trend">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LineChart className="mr-2 h-5 w-5 text-purple-500" /> Trend Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    **Track sentiment trends over time and identify patterns in customer feedback.**
                  </p>
                  <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
                    <li>**Real-time monitoring**</li>
                    <li>**Historical analysis**</li>
                    <li>**Predictive insights**</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="aspect">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="mr-2 h-5 w-5 text-orange-500" /> Aspect-Based Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    **Break down sentiment by specific aspects of your products or services.**
                  </p>
                  <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
                    <li>**Granular insights**</li>
                    <li>**Actionable recommendations**</li>
                    <li>**Customizable aspects**</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">How It Works</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                  <span className="font-medium">Data Collection</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 dark:text-gray-300">
                  **Our system gathers feedback from various sources:**, such as customer reviews, social media comments, and survey responses. We support data from platforms like Amazon, Shopify, and more, ensuring a comprehensive view of your customer sentiment.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <span className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-blue-500" />
                  <span className="font-medium">AI-Powered Analysis</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 dark:text-gray-300">
                  **Our cutting-edge AI algorithms analyse the data to understand the emotional tone** and intention behind each piece of feedback. We use a combination of natural language processing (NLP) and machine learning to accurately classify sentiment.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <span className="flex items-center">
                  <BarChart2 className="mr-2 h-5 w-5 text-green-500" />
                  <span className="font-medium">Insightful Reporting</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 dark:text-gray-300">
                  **We provide you with clear, actionable reports and visualisations** that highlight the key areas of customer sentiment, including overall trends, key topics and specific aspects. We translate raw data into easily digestible insights that you can use to improve your products and services.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5 text-yellow-500" /> Product Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  **Identify unmet customer needs and pain points** to create more relevant and innovative products. Understand the features that truly delight your customers and the aspects that need improvement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-blue-500" /> Marketing Optimisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  **Refine your marketing messages to resonate more effectively with your target audience.** Use sentiment analysis to gauge how your campaigns are being received and make data-driven changes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-green-500" /> Customer Service Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  **Monitor customer feedback and identify areas for improving your service delivery.** Proactively address pain points and enhance the overall customer experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-orange-500" /> Brand Reputation Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  **Track public sentiment about your brand to protect and strengthen your reputation.** Identify negative feedback early to address issues and show customers you care.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-purple-500" /> Competitor Benchmarking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  **Analyse competitor's reviews to understand their strengths and weaknesses** and identify opportunities for differentiation. Gain a competitive edge with informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-red-500" /> Personalised Experiences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  **Use sentiment data to provide tailored experiences that resonate with individual customers.** Create more relevant offers and messaging to boost engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">What Our Customers Say</h2>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <Card className="mx-4">
                  <CardContent>
                    <div className="text-center">
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        "VOC AI has transformed how we understand our customers. The sentiment analysis is incredibly accurate and has helped us improve our product significantly."
                      </p>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Lois, Owner</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card className="mx-4">
                  <CardContent>
                    <div className="text-center">
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        "Offering free trial was very useful when I put it on my website. It automatically answered half of the questions"
                      </p>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Frank, Product Manager</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card className="mx-4">
                  <CardContent>
                    <div className="text-center">
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        "What sets it apart is that it can take my website and documents and turn them into learning points. It's very convenient to maintain.”
                      </p>
                      <p className="font-medium text-gray-900 dark:text-gray-100">DaDa, Marketing Manager</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Experience It Live</h2>
          <div className="flex flex-col items-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">
              **Try our sentiment analysis tool yourself.** Simply paste in some text below and see the results in real time.
            </p>
            <div className="w-full max-w-md flex flex-col space-y-4">
              <Label htmlFor="sentiment-input">Enter Text Below:</Label>
              <Textarea id="sentiment-input" placeholder="Paste your text here..."></Textarea>
              <Button 
                variant="default"
                size="lg"
                className="w-full"
                onClick={() => {
                  // Add your sentiment analysis logic here
                }}
              >
                Analyse Text
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-24 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Start your free trial today and experience the power of AI-driven sentiment analysis.
          </p>
          <Button variant="secondary" size="lg">Get Started Now</Button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; 2025 VOC AI Inc. All rights reserved.</p>
      </footer>
    </>
  );
}