import {
  ListChecks,
  Headphones,
  Timer,
  AlertTriangle,
  TrendingUp,
  UsersRound,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { usePersona, type PersonaKey } from '@/contexts/PersonaContext';

interface QueueMetric {
  name: string;
  waiting: number;
  sla: string;
  trend: 'up' | 'down' | 'steady';
}

interface PersonaQueueContent {
  summary: {
    activeQueues: number;
    contactsWaiting: number;
    agentsAvailable: number;
    longestWait: string;
  };
  focusQueues: QueueMetric[];
  alerts: Array<{ label: string; description: string; type: 'warning' | 'info' }>;
}

const queueContent: Partial<Record<PersonaKey, PersonaQueueContent>> = {
  agent: {
    summary: {
      activeQueues: 4,
      contactsWaiting: 8,
      agentsAvailable: 12,
      longestWait: '00:03:12',
    },
    focusQueues: [
      { name: 'High Usage Outreach', waiting: 3, sla: '00:01:45', trend: 'up' },
      { name: 'Outage Follow-up', waiting: 2, sla: '00:00:40', trend: 'steady' },
      { name: 'Billing Assistance', waiting: 1, sla: '00:02:20', trend: 'down' },
    ],
    alerts: [
      {
        label: 'Priority Customer Waiting',
        description: 'Gold tier customer in High Usage Outreach queue for 3 minutes.',
        type: 'warning',
      },
      {
        label: 'Next Best Action',
        description: 'Review outage follow-up script before taking the next call.',
        type: 'info',
      },
    ],
  },
  supervisor: {
    summary: {
      activeQueues: 9,
      contactsWaiting: 27,
      agentsAvailable: 46,
      longestWait: '00:06:48',
    },
    focusQueues: [
      { name: 'Critical Outages', waiting: 6, sla: '00:02:15', trend: 'up' },
      { name: 'Billing Escalations', waiting: 4, sla: '00:03:10', trend: 'steady' },
      { name: 'Start/Stop Service', waiting: 5, sla: '00:02:55', trend: 'up' },
    ],
    alerts: [
      {
        label: 'Staffing Alert',
        description: 'Recommend moving 3 agents from Start/Stop Service to Critical Outages.',
        type: 'warning',
      },
      {
        label: 'SLA Monitor',
        description: 'Billing escalations queue is at 78% of SLA threshold.',
        type: 'info',
      },
    ],
  },
};

const trendBadge = (trend: QueueMetric['trend']) => {
  switch (trend) {
    case 'up':
      return <Badge variant="destructive">Rising</Badge>;
    case 'down':
      return <Badge variant="outline" className="border-emerald-200 text-emerald-700">Improving</Badge>;
    default:
      return <Badge variant="secondary">Stable</Badge>;
  }
};

const Queues = () => {
  const { persona } = usePersona();
  const content = queueContent[persona] ?? queueContent.agent!;

  return (
    <div className="ppl-container ppl-section space-y-8">
      <header>
        <Badge variant="secondary" className="mb-3">Contact Center</Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">Queues</h1>
        <p className="text-muted-foreground">
          Monitor queue health, redistribute staffing, and stay ahead of SLA commitments.
        </p>
      </header>

      <Card className="ppl-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Headphones className="w-5 h-5 text-primary" />
            <span>Live Queue Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Active Queues</p>
            <p className="text-3xl font-semibold">{content.summary.activeQueues}</p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Contacts Waiting</p>
            <p className="text-3xl font-semibold">{content.summary.contactsWaiting}</p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Agents Available</p>
            <p className="text-3xl font-semibold">{content.summary.agentsAvailable}</p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Longest Wait</p>
            <p className="text-3xl font-semibold">{content.summary.longestWait}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="ppl-card lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <ListChecks className="w-5 h-5 text-primary" />
              <span>Queue Performance</span>
            </CardTitle>
            <Badge variant="outline" className="border-primary text-primary">
              Priority Focus
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {content.focusQueues.map((queue) => (
              <div key={queue.name} className="p-4 border rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{queue.name}</h3>
                    <div className="mt-2 flex items-center space-x-4 text-sm">
                      <span className="flex items-center text-muted-foreground">
                        <Timer className="w-4 h-4 mr-1" /> SLA {queue.sla}
                      </span>
                      <span className="flex items-center text-muted-foreground">
                        <UsersRound className="w-4 h-4 mr-1" /> Waiting {queue.waiting}
                      </span>
                    </div>
                  </div>
                  {trendBadge(queue.trend)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>Live Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            {content.alerts.map((alert) => (
              <div
                key={alert.label}
                className={`p-3 rounded-lg border ${
                  alert.type === 'warning' ? 'border-amber-200 bg-amber-50 text-amber-900' : 'border-blue-200 bg-blue-50 text-blue-900'
                }`}
              >
                <p className="font-medium">{alert.label}</p>
                <p>{alert.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="ppl-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span>Queue Health Signals</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold">Reassignment Opportunities</p>
              <Separator className="my-3" />
              <p className="text-muted-foreground">
                Shift low complexity billing inquiries to virtual assistant to preserve agent capacity for outages.
              </p>
            </div>
            <div>
              <p className="font-semibold">Forecast</p>
              <Separator className="my-3" />
              <p className="text-muted-foreground">
                Expected inbound volume spike at 5 PM due to planned maintenance notifications.
              </p>
            </div>
            <div>
              <p className="font-semibold">Coaching Moments</p>
              <Separator className="my-3" />
              <p className="text-muted-foreground">
                Follow-up on empathy scripting with new hires handling High Usage Outreach queue.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Queues;
