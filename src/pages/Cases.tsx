import {
  FolderKanban,
  ClipboardList,
  ShieldCheck,
  TimerReset,
  UserSquare2,
  ExternalLink,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { usePersona, type PersonaKey } from '@/contexts/PersonaContext';

interface CaseRecord {
  id: string;
  subject: string;
  owner: string;
  due: string;
  status: 'Active' | 'Pending' | 'Escalated';
  channel: 'Phone' | 'Email' | 'Portal';
}

interface PersonaCaseContent {
  summary: {
    open: number;
    escalated: number;
    dueToday: number;
    avgAge: string;
  };
  records: CaseRecord[];
  playbooks: Array<{ title: string; description: string; linkLabel: string }>;
}

const caseContent: Partial<Record<PersonaKey, PersonaCaseContent>> = {
  agent: {
    summary: {
      open: 12,
      escalated: 3,
      dueToday: 4,
      avgAge: '18h',
    },
    records: [
      {
        id: 'CASE-9031',
        subject: 'Billing investigation for multi-site account',
        owner: 'You',
        due: 'Today • 5 PM',
        status: 'Active',
        channel: 'Phone',
      },
      {
        id: 'CASE-9019',
        subject: 'Transformer inspection follow-up',
        owner: 'Team Grid Ops',
        due: 'Tomorrow • 10 AM',
        status: 'Escalated',
        channel: 'Portal',
      },
      {
        id: 'CASE-8994',
        subject: 'Payment assistance renewal',
        owner: 'You',
        due: 'Friday • 2 PM',
        status: 'Pending',
        channel: 'Email',
      },
    ],
    playbooks: [
      {
        title: 'Proactive outage follow-up',
        description: 'Ensure customers receive restoration updates within 30 minutes of new ETA.',
        linkLabel: 'Review workflow',
      },
      {
        title: 'High usage coaching call',
        description: 'Use the energy insights script to review demand response options.',
        linkLabel: 'Open script',
      },
    ],
  },
  supervisor: {
    summary: {
      open: 47,
      escalated: 11,
      dueToday: 16,
      avgAge: '26h',
    },
    records: [
      {
        id: 'CASE-9102',
        subject: 'Large commercial outage coordination',
        owner: 'Grid Response Team',
        due: 'Ongoing',
        status: 'Escalated',
        channel: 'Phone',
      },
      {
        id: 'CASE-9088',
        subject: 'Meter access compliance review',
        owner: 'Supervisor Queue',
        due: 'Today • 6 PM',
        status: 'Active',
        channel: 'Portal',
      },
      {
        id: 'CASE-9045',
        subject: 'Customer experience audit',
        owner: 'Quality Assurance',
        due: 'Thursday • 1 PM',
        status: 'Pending',
        channel: 'Email',
      },
    ],
    playbooks: [
      {
        title: 'Escalation triage',
        description: 'Reassign cases exceeding SLA to senior specialists.',
        linkLabel: 'Open triage view',
      },
      {
        title: 'Coaching opportunities',
        description: 'Review call recordings tagged for empathy coaching this week.',
        linkLabel: 'Schedule review',
      },
    ],
  },
};

const statusStyles: Record<CaseRecord['status'], string> = {
  Active: 'bg-blue-100 text-blue-700',
  Pending: 'bg-slate-100 text-slate-700',
  Escalated: 'bg-rose-100 text-rose-700',
};

const Cases = () => {
  const { persona } = usePersona();
  const content = caseContent[persona] ?? caseContent.agent!;

  return (
    <div className="ppl-container ppl-section space-y-8">
      <header>
        <Badge variant="secondary" className="mb-3">Case Management</Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">Cases</h1>
        <p className="text-muted-foreground">
          Track resolution progress, surface escalations, and activate the right playbooks.
        </p>
      </header>

      <Card className="ppl-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FolderKanban className="w-5 h-5 text-primary" />
            <span>Case Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Open Cases</p>
            <p className="text-3xl font-semibold">{content.summary.open}</p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Escalated</p>
            <p className="text-3xl font-semibold">{content.summary.escalated}</p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Due Today</p>
            <p className="text-3xl font-semibold">{content.summary.dueToday}</p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Average Age</p>
            <p className="text-3xl font-semibold">{content.summary.avgAge}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="ppl-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <ClipboardList className="w-5 h-5 text-primary" />
            <span>My Work</span>
          </CardTitle>
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <TimerReset className="w-4 h-4" />
            <span>Refresh</span>
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {content.records.map((record) => (
            <div key={record.id} className="p-4 border rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Badge variant="outline">{record.channel}</Badge>
                    <span>{record.id}</span>
                  </div>
                  <h3 className="mt-2 font-semibold">{record.subject}</h3>
                  <p className="text-sm text-muted-foreground">Owner: {record.owner}</p>
                </div>
                <div className="flex flex-col items-start md:items-end space-y-2 text-sm">
                  <span className="flex items-center text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 mr-1" /> {record.due}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[record.status]}`}>
                    {record.status}
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
            <UserSquare2 className="w-5 h-5 text-primary" />
            <span>Playbooks</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {content.playbooks.map((playbook) => (
            <div key={playbook.title} className="p-4 border rounded-lg">
              <h3 className="font-semibold text-foreground">{playbook.title}</h3>
              <p className="text-muted-foreground mt-2">{playbook.description}</p>
              <Separator className="my-3" />
              <Button variant="ghost" size="sm" className="px-0 flex items-center space-x-2 text-primary">
                <ExternalLink className="w-4 h-4" />
                <span>{playbook.linkLabel}</span>
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Cases;
