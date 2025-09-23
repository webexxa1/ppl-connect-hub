import {
  Megaphone,
  Send,
  CalendarClock,
  Users,
  Sparkles,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { usePersona, type PersonaKey } from '@/contexts/PersonaContext';

interface BroadcastCampaign {
  id: string;
  name: string;
  audience: string;
  schedule: string;
  status: 'Draft' | 'Scheduled' | 'Sending';
  performance: string;
}

interface PersonaBroadcastContent {
  campaigns: BroadcastCampaign[];
  recommendations: string[];
}

const broadcastContent: Partial<Record<PersonaKey, PersonaBroadcastContent>> = {
  agent: {
    campaigns: [
      {
        id: 'BC-2201',
        name: 'Storm Readiness Checklist',
        audience: 'Customers in 17011 & 17015',
        schedule: 'Sending now',
        status: 'Sending',
        performance: 'Open rate 48% • Clicks 19%',
      },
      {
        id: 'BC-2197',
        name: 'Budget Billing Reminder',
        audience: 'Residential budget plan customers',
        schedule: 'Mar 12 • 9:00 AM',
        status: 'Scheduled',
        performance: 'Projected adoption +8%',
      },
    ],
    recommendations: [
      'Consider adding outage tracker link to current storm readiness campaign.',
      'Follow up with live agents for customers who clicked payment arrangement link.',
    ],
  },
  supervisor: {
    campaigns: [
      {
        id: 'BC-2204',
        name: 'Demand Response Enrollment',
        audience: 'Commercial accounts > 2,000 kWh',
        schedule: 'Mar 14 • 3:00 PM',
        status: 'Scheduled',
        performance: 'Forecast enrollments +42 accounts',
      },
      {
        id: 'BC-2199',
        name: 'Customer Experience Follow-up',
        audience: 'Post-outage survey recipients',
        schedule: 'Mar 11 • 5:30 PM',
        status: 'Draft',
        performance: 'Pending QA review',
      },
    ],
    recommendations: [
      'Align demand response campaign with field operations schedule.',
      'QA flagged tone for follow-up survey draft — review empathy guidelines.',
    ],
  },
};

const statusStyles: Record<BroadcastCampaign['status'], string> = {
  Draft: 'bg-slate-100 text-slate-700',
  Scheduled: 'bg-blue-100 text-blue-700',
  Sending: 'bg-emerald-100 text-emerald-700',
};

const Broadcasts = () => {
  const { persona } = usePersona();
  const content = broadcastContent[persona] ?? broadcastContent.agent!;

  return (
    <div className="ppl-container ppl-section space-y-8">
      <header>
        <Badge variant="secondary" className="mb-3">Outbound Campaigns</Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">Broadcasts</h1>
        <p className="text-muted-foreground">
          Launch omni-channel messaging, track campaign health, and coordinate next actions.
        </p>
      </header>

      <Card className="ppl-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Megaphone className="w-5 h-5 text-primary" />
            <span>Active Campaigns</span>
          </CardTitle>
          <Button size="sm" className="btn-ppl-primary flex items-center space-x-2">
            <Send className="w-4 h-4" />
            <span>New Broadcast</span>
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {content.campaigns.map((campaign) => (
            <div key={campaign.id} className="p-4 border rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Badge variant="outline">{campaign.id}</Badge>
                    <span>{campaign.audience}</span>
                  </div>
                  <h3 className="mt-2 font-semibold">{campaign.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <CalendarClock className="w-4 h-4 mr-1" />
                    {campaign.schedule}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end space-y-2 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[campaign.status]}`}>
                    {campaign.status}
                  </span>
                  <span className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    {campaign.performance}
                  </span>
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
            <span>Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {content.recommendations.map((recommendation) => (
            <div key={recommendation} className="p-4 border rounded-lg">
              <p className="text-muted-foreground">{recommendation}</p>
            </div>
          ))}
          <div className="p-4 border rounded-lg bg-amber-50 text-amber-900 flex items-start space-x-3">
            <AlertTriangle className="w-4 h-4 mt-1" />
            <p>Monitor SMS throughput — carrier acknowledged minor delays in 17015.</p>
          </div>
          <div className="p-4 border rounded-lg text-emerald-700 bg-emerald-50 flex items-start space-x-3">
            <CheckCircle className="w-4 h-4 mt-1" />
            <p>Outage restoration broadcast achieved 91% open rate in the last hour.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Broadcasts;
