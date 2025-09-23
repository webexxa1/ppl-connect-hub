import {
  Users,
  UserCircle,
  Sparkles,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Activity,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { usePersona, type PersonaKey } from '@/contexts/PersonaContext';

interface CustomerProfile {
  name: string;
  tier: string;
  location: string;
  usage: string;
  contact: {
    phone: string;
    email: string;
  };
  notes: string;
}

interface PersonaCustomerContent {
  segment: string;
  customers: CustomerProfile[];
  insights: string[];
}

const customerContent: Partial<Record<PersonaKey, PersonaCustomerContent>> = {
  agent: {
    segment: 'High-Touch Residential & Small Business Accounts',
    customers: [
      {
        name: 'Jamie Rivera',
        tier: 'Residential Plus',
        location: 'Allentown, PA',
        usage: 'Avg 847 kWh / month',
        contact: { phone: '(610) 555-0132', email: 'jamie.rivera@email.com' },
        notes: 'Enrollment in budget billing. Prefers SMS updates.',
      },
      {
        name: 'Riverview Bakery',
        tier: 'Small Business Priority',
        location: 'Harrisburg, PA',
        usage: 'Avg 3,200 kWh / month',
        contact: { phone: '(717) 555-0198', email: 'ops@riverviewbakery.com' },
        notes: 'Demand response pilot participant. Visit scheduled 3/12.',
      },
    ],
    insights: [
      '3 accounts flagged for proactive outreach based on seasonal usage spike.',
      '2 customers ready for energy efficiency coaching. Review next-best-action.',
    ],
  },
  supervisor: {
    segment: 'Priority Commercial & Program Accounts',
    customers: [
      {
        name: 'Green Valley Schools',
        tier: 'Key Account',
        location: 'Lehigh Valley, PA',
        usage: 'Campus load 18,900 kWh / month',
        contact: { phone: '(484) 555-0110', email: 'facilities@greenvalley.edu' },
        notes: 'Coordinating transformer upgrade. Weekly status cadence.',
      },
      {
        name: 'City of Lancaster',
        tier: 'Municipal Partner',
        location: 'Lancaster, PA',
        usage: 'Grid services program',
        contact: { phone: '(717) 555-0174', email: 'utilities@cityoflancaster.gov' },
        notes: 'Storm hardening collaboration. Quarterly executive review.',
      },
    ],
    insights: [
      'Customer experience NPS for managed accounts holding at 63 this quarter.',
      'Top 5 accounts identified for energy storage consultation.',
    ],
  },
};

const Customers = () => {
  const { persona } = usePersona();
  const content = customerContent[persona] ?? customerContent.agent!;

  return (
    <div className="ppl-container ppl-section space-y-8">
      <header>
        <Badge variant="secondary" className="mb-3">Relationship 360</Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">Customers</h1>
        <p className="text-muted-foreground">
          View customer profiles, recent activity, and coaching opportunities by persona segment.
        </p>
      </header>

      <Card className="ppl-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-primary" />
            <span>{content.segment}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {content.customers.map((customer) => (
            <div key={customer.name} className="p-4 border rounded-lg">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <UserCircle className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">{customer.name}</h3>
                    <Badge variant="secondary">{customer.tier}</Badge>
                  </div>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <span className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {customer.location}
                    </span>
                    <span className="flex items-center text-muted-foreground">
                      <Activity className="w-4 h-4 mr-1" />
                      {customer.usage}
                    </span>
                    <span className="flex items-center text-muted-foreground">
                      <Phone className="w-4 h-4 mr-1" />
                      {customer.contact.phone}
                    </span>
                    <span className="flex items-center text-muted-foreground">
                      <Mail className="w-4 h-4 mr-1" />
                      {customer.contact.email}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground lg:max-w-sm">
                  <p>{customer.notes}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="ppl-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span>Customer Insights</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {content.insights.map((insight) => (
            <div key={insight} className="p-4 border rounded-lg">
              <p className="font-semibold text-foreground">Opportunity</p>
              <Separator className="my-3" />
              <p className="text-muted-foreground">{insight}</p>
            </div>
          ))}
          <div className="p-4 border rounded-lg">
            <p className="font-semibold text-foreground">Trend</p>
            <Separator className="my-3" />
            <p className="text-muted-foreground">
              <TrendingUp className="inline w-5 h-5 mr-2 text-primary" />
              Sentiment trending positive after outage follow-up campaign.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Customers;
