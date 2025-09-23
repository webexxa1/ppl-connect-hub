import {
  ChartLine,
  GaugeCircle,
  Sparkles,
  UsersRound,
  Headphones,
  BarChart3,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { usePersona, type PersonaKey } from '@/contexts/PersonaContext';

interface MetricCard {
  label: string;
  value: string;
  delta: string;
  tone: 'positive' | 'neutral' | 'negative';
}

interface PersonaAnalyticsContent {
  hero: MetricCard[];
  breakdown: Array<{ title: string; description: string }>;
  highlights: string[];
}

const analyticsContent: Partial<Record<PersonaKey, PersonaAnalyticsContent>> = {
  agent: {
    hero: [
      { label: 'Today\'s CSAT', value: '94%', delta: '+4.2 pts vs. yesterday', tone: 'positive' },
      { label: 'Average Handle Time', value: '6m 12s', delta: '-0:35 vs. target', tone: 'positive' },
      { label: 'First Contact Resolution', value: '87%', delta: '+2.1 pts', tone: 'neutral' },
    ],
    breakdown: [
      {
        title: 'Conversation sentiment',
        description: 'Positive sentiment trending upward during outage updates with scripted empathy prompts.',
      },
      {
        title: 'Assist engagement',
        description: 'AI assist cards accepted on 62% of interactions in the last 4 hours.',
      },
    ],
    highlights: [
      'Consider reviewing billing empathy script for new hires — variance observed during QA spot-check.',
      'Two opportunities identified for cross-sell of efficiency audits based on customer profile matches.',
    ],
  },
  supervisor: {
    hero: [
      { label: 'Service Level', value: '86%', delta: '-3.0 pts vs. goal', tone: 'negative' },
      { label: 'Workforce Utilization', value: '79%', delta: '+5 pts vs. last week', tone: 'positive' },
      { label: 'Quality Score', value: '91%', delta: '+1.4 pts', tone: 'positive' },
    ],
    breakdown: [
      {
        title: 'Queue mix',
        description: 'Critical Outages driving longest handle time. Recommend reinforcing advanced scripting knowledge.',
      },
      {
        title: 'Channel shift',
        description: 'Digital deflection at 38%. Push guided outage workflow in SMS broadcast to raise adoption.',
      },
    ],
    highlights: [
      'Agent assist acceptance correlates with 9 point CSAT lift — share insights in team huddle.',
      'Escalation backlog trending down after weekend staffing. Maintain staffing rotation.',
    ],
  },
};

const toneStyles: Record<MetricCard['tone'], string> = {
  positive: 'text-emerald-600',
  neutral: 'text-slate-600',
  negative: 'text-rose-600',
};

const Analytics = () => {
  const { persona } = usePersona();
  const content = analyticsContent[persona] ?? analyticsContent.agent!;

  return (
    <div className="ppl-container ppl-section space-y-8">
      <header>
        <Badge variant="secondary" className="mb-3">Insights</Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
        <p className="text-muted-foreground">
          Operational metrics and coaching insights tailored to your workspace.
        </p>
      </header>

      <Card className="ppl-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ChartLine className="w-5 h-5 text-primary" />
            <span>Performance Snapshot</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.hero.map((metric) => (
            <div key={metric.label} className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-3xl font-semibold">{metric.value}</p>
              <p className={`text-xs mt-2 font-medium ${toneStyles[metric.tone]}`}>{metric.delta}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="ppl-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>Key Drivers</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {content.breakdown.map((item) => (
              <div key={item.title} className="p-4 border rounded-lg">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <Separator className="my-3" />
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GaugeCircle className="w-5 h-5 text-primary" />
              <span>Highlights</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            {content.highlights.map((highlight) => (
              <div key={highlight} className="p-4 border rounded-lg flex items-start space-x-3 text-muted-foreground">
                <Sparkles className="w-4 h-4 mt-1 text-primary" />
                <span>{highlight}</span>
              </div>
            ))}
            <div className="p-4 border rounded-lg bg-accent/40 text-sm text-muted-foreground flex items-start space-x-3">
              <Headphones className="w-4 h-4 mt-1 text-primary" />
              <span>
                Share this dashboard in your next standup — export CSV or schedule a recurring email summary.
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
