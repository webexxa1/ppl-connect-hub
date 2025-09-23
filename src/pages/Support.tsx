import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Search, 
  Book, 
  AlertTriangle,
  CreditCard,
  Zap,
  FileText,
  Users,
  Clock,
  Star
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Support = () => {
  const popularTopics = [
    { icon: CreditCard, title: 'How to Pay My Bill', category: 'Billing' },
    { icon: Zap, title: 'Report a Power Outage', category: 'Outages' },
    { icon: FileText, title: 'Start New Service', category: 'Service' },
    { icon: AlertTriangle, title: 'Electrical Safety Tips', category: 'Safety' },
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Call Us',
      description: '1-800-342-5775',
      availability: '24/7 for outages, Mon-Fri 7 AM - 6 PM for other services',
      action: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with a customer service representative',
      availability: 'Mon-Fri 8 AM - 5 PM',
      action: 'Start Chat'
    },
    {
      icon: FileText,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours',
      action: 'Send Email'
    }
  ];

  return (
    <div className="ppl-container ppl-section">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Support & Help Center
        </h1>
        <p className="text-muted-foreground">
          Find answers to common questions or get in touch with our customer service team
        </p>
      </div>

      {/* Search */}
      <Card className="ppl-card mb-8">
        <CardContent className="pt-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search for help with billing, outages, service, safety..." 
              className="pl-12 pr-4 py-3 text-lg"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {supportChannels.map((channel, index) => {
          const Icon = channel.icon;
          return (
            <Card key={index} className="ppl-card hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{channel.title}</h3>
                <p className="font-medium mb-2">{channel.description}</p>
                <p className="text-sm text-muted-foreground mb-4">{channel.availability}</p>
                <Button className="btn-ppl-primary w-full">
                  {channel.action}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Popular Topics */}
      <Card className="ppl-card mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-primary" />
            <span>Popular Help Topics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">{topic.title}</p>
                    <Badge variant="secondary" className="text-xs">{topic.category}</Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* FAQ Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-primary" />
              <span>Billing & Payments</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start p-0 h-auto">
              <div className="text-left">
                <p className="font-medium">How do I pay my bill online?</p>
                <p className="text-sm text-muted-foreground">Set up online payments and AutoPay</p>
              </div>
            </Button>
            <Button variant="ghost" className="w-full justify-start p-0 h-auto">
              <div className="text-left">
                <p className="font-medium">Understanding my PPL bill</p>
                <p className="text-sm text-muted-foreground">Learn about charges, fees, and usage</p>
              </div>
            </Button>
            <Button variant="ghost" className="w-full justify-start p-0 h-auto">
              <div className="text-left">
                <p className="font-medium">Payment assistance programs</p>
                <p className="text-sm text-muted-foreground">OnTrack, LIHEAP, and budget plans</p>
              </div>
            </Button>
          </CardContent>
        </Card>

        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Outages & Service</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start p-0 h-auto">
              <div className="text-left">
                <p className="font-medium">How to report a power outage</p>
                <p className="text-sm text-muted-foreground">Report outages online, by phone, or text</p>
              </div>
            </Button>
            <Button variant="ghost" className="w-full justify-start p-0 h-auto">
              <div className="text-left">
                <p className="font-medium">Preparing for storms</p>
                <p className="text-sm text-muted-foreground">Emergency preparedness tips</p>
              </div>
            </Button>
            <Button variant="ghost" className="w-full justify-start p-0 h-auto">
              <div className="text-left">
                <p className="font-medium">Tree trimming near power lines</p>
                <p className="text-sm text-muted-foreground">Vegetation management and safety</p>
              </div>
            </Button>
          </CardContent>
        </Card>

        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>Account & Service</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start p-0 h-auto">
              <div className="text-left">
                <p className="font-medium">Starting new electric service</p>
                <p className="text-sm text-muted-foreground">New home or business connections</p>
              </div>
            </Button>
            <Button variant="ghost" className="w-full justify-start p-0 h-auto">
              <div className="text-left">
                <p className="font-medium">Moving your service</p>
                <p className="text-sm text-muted-foreground">Transfer service to a new address</p>
              </div>
            </Button>
            <Button variant="ghost" className="w-full justify-start p-0 h-auto">
              <div className="text-left">
                <p className="font-medium">Managing your account online</p>
                <p className="text-sm text-muted-foreground">Account settings and preferences</p>
              </div>
            </Button>
          </CardContent>
        </Card>

        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              <span>Safety & Emergencies</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="ghost" className="w-full justify-start p-0 h-auto">
              <div className="text-left">
                <p className="font-medium">Downed power line safety</p>
                <p className="text-sm text-muted-foreground">What to do in an electrical emergency</p>
              </div>
            </Button>
            <Button variant="ghost" className="w-full justify-start p-0 h-auto">
              <div className="text-left">
                <p className="font-medium">Electrical safety at home</p>
                <p className="text-sm text-muted-foreground">Preventing electrical hazards</p>
              </div>
            </Button>
            <Button variant="ghost" className="w-full justify-start p-0 h-auto">
              <div className="text-left">
                <p className="font-medium">Digging near utilities</p>
                <p className="text-sm text-muted-foreground">Call 811 before you dig</p>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Information */}
      <Card className="ppl-card border-destructive">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-destructive">
            <AlertTriangle className="w-5 h-5" />
            <span>Emergency Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Electrical Emergencies</h4>
              <ul className="space-y-2 text-sm">
                <li>• Downed or damaged power lines</li>
                <li>• Electrical equipment sparking or smoking</li>
                <li>• Power lines in contact with trees or buildings</li>
                <li>• Gas leak near electrical equipment</li>
              </ul>
              <Button variant="destructive" className="mt-4">
                <Phone className="w-4 h-4 mr-2" />
                Call 1-800-342-5775
              </Button>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Safety Reminders</h4>
              <ul className="space-y-2 text-sm">
                <li>• Stay at least 35 feet away from downed lines</li>
                <li>• Never touch or move downed power lines</li>
                <li>• Assume all downed lines are energized</li>
                <li>• Call 911 for immediate life-threatening situations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Support;