import {
  CreditCard,
  Zap,
  FileText,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Headset,
  BarChart2,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { usePersona, type PersonaKey } from '@/contexts/PersonaContext';

const personaCopy: Record<PersonaKey, { title: string; subtitle: string; badge: string }> = {
  residential: {
    title: 'Welcome back, Jamie',
    subtitle: 'Manage your household account, billing, and service updates',
    badge: 'Residential Experience',
  },
  smallBusiness: {
    title: 'Riverview Bakery Operations',
    subtitle: 'Track usage across locations, invoices, and energy programs',
    badge: 'Small Business Experience',
  },
  agent: {
    title: 'Agent Workspace Overview',
    subtitle: 'Stay aligned on customer cases, billing status, and proactive outreach',
    badge: 'Member Services Agent',
  },
  supervisor: {
    title: 'Supervisor Console',
    subtitle: 'Monitor team performance, escalations, and service KPIs',
    badge: 'Supervisor Experience',
  },
};

const heroCardContent: Record<PersonaKey, Array<{ title: string; headline: string; caption: string; icon: typeof CreditCard; variant: 'primary' | 'warning' | 'success' }>> = {
  residential: [
    { title: 'Pay Bill', headline: 'Current balance: $127.83', caption: 'Due: March 15, 2024', icon: CreditCard, variant: 'primary' },
    { title: 'Report Outage', headline: 'Power status: Normal', caption: 'Last checked: Just now', icon: Zap, variant: 'warning' },
    { title: 'Move Service', headline: 'Start, stop, or transfer', caption: 'Schedule service changes', icon: FileText, variant: 'success' },
  ],
  smallBusiness: [
    { title: 'Pay Invoice', headline: 'Outstanding: $3,420.19', caption: 'Multi-site billing summary', icon: CreditCard, variant: 'primary' },
    { title: 'Report Outage', headline: 'No disruptions detected', caption: 'Status across 3 locations', icon: Zap, variant: 'warning' },
    { title: 'Upgrade Service', headline: 'Efficiency programs', caption: 'Enroll in demand response', icon: FileText, variant: 'success' },
  ],
  agent: [
    { title: 'Customer Queue', headline: '8 waiting contacts', caption: 'Prioritize high-impact cases', icon: Headset, variant: 'primary' },
    { title: 'Outage Follow-ups', headline: '3 neighborhoods', caption: 'Customers expecting updates', icon: Zap, variant: 'warning' },
    { title: 'Pending Cases', headline: '12 open service tickets', caption: 'Review escalations', icon: FileText, variant: 'success' },
  ],
  supervisor: [
    { title: 'Team Performance', headline: 'CSAT 94%', caption: 'Rolling 7-day average', icon: BarChart2, variant: 'primary' },
    { title: 'Outage Events', headline: '2 active outages', caption: 'Monitor restoration ETAs', icon: Zap, variant: 'warning' },
    { title: 'Workforce Staffing', headline: 'On shift: 28 agents', caption: 'Coverage meets demand', icon: Headset, variant: 'success' },
  ],
};

const heroCardVariants: Record<'primary' | 'warning' | 'success', string> = {
  primary: 'ppl-card-hero group cursor-pointer',
  warning:
    'bg-gradient-to-br from-warning to-orange-500 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group',
  success:
    'bg-gradient-to-br from-success to-green-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group',
};

const Dashboard = () => {
  const { persona } = usePersona();
  const copy = personaCopy[persona];
  const cards = heroCardContent[persona];

  return (
    <div className="ppl-container ppl-section">
      {/* Welcome Section */}
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3">
          {copy.badge}
        </Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">{copy.title}</h1>
        <p className="text-muted-foreground">{copy.subtitle}</p>
      </div>

      {/* Hero Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {cards.map((card) => {
          const Icon = card.icon;
          const variantClass = heroCardVariants[card.variant];
          return (
            <Card key={card.title} className={variantClass}>
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-white/90 mb-4">{card.headline}</p>
                    <p className="text-sm text-white/80">{card.caption}</p>
                  </div>
                  <Icon className="w-12 h-12 text-white/90 group-hover:scale-110 transition-transform" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Account Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Account Summary */}
        <Card className="lg:col-span-2 ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <span>Account Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Current Bill</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount Due:</span>
                    <span className="font-semibold">$127.83</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Due Date:</span>
                    <span className="text-destructive font-medium">Mar 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AutoPay:</span>
                    <Badge variant="outline" className="text-success border-success">Enabled</Badge>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Usage This Month</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">kWh Used:</span>
                    <span className="font-semibold">847 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">vs Last Month:</span>
                    <span className="text-success font-medium flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      12% lower
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Budget Plan:</span>
                    <Badge variant="secondary">OnTrack</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-3">
              <Button className="btn-ppl-primary">
                View Full Bill
              </Button>
              <Button variant="outline">
                Payment History
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Service Status */}
        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Service Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-medium text-success">Power On</p>
                    <p className="text-sm text-muted-foreground">123 Main St</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-3">Recent Activity</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium">Payment Received</p>
                      <p className="text-xs text-muted-foreground">Feb 14, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1" />
                    <div>
                      <p className="text-sm font-medium">Outage Reported</p>
                      <p className="text-xs text-muted-foreground">Jan 28, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <Card className="ppl-card">
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="ghost" className="h-auto flex-col p-4 space-y-2">
              <FileText className="w-6 h-6 text-primary" />
              <span className="text-sm">Download Bills</span>
            </Button>
            <Button variant="ghost" className="h-auto flex-col p-4 space-y-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="text-sm">Usage History</span>
            </Button>
            <Button variant="ghost" className="h-auto flex-col p-4 space-y-2">
              <AlertTriangle className="w-6 h-6 text-primary" />
              <span className="text-sm">Safety Tips</span>
            </Button>
            <Button variant="ghost" className="h-auto flex-col p-4 space-y-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-sm">Programs</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
