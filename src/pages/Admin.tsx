import type { ReactNode } from 'react';
import {
  Settings,
  UserCog,
  ShieldCheck,
  ToggleLeft,
  ToggleRight,
  Activity,
  ClipboardCheck,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { usePersona, type PersonaKey } from '@/contexts/PersonaContext';

interface AdminControl {
  name: string;
  description: string;
  state: 'Enabled' | 'Disabled' | 'Review';
}

interface PersonaAdminContent {
  controls: AdminControl[];
  reviews: Array<{ title: string; owner: string; due: string; status: string }>;
}

const adminContent: Partial<Record<PersonaKey, PersonaAdminContent>> = {
  agent: {
    controls: [
      {
        name: 'Knowledge base beta access',
        description: 'Allow frontline agents to pilot AI suggested content.',
        state: 'Enabled',
      },
      {
        name: 'Escalation tagging',
        description: 'Require tagging for all cases handed to supervisors.',
        state: 'Enabled',
      },
      {
        name: 'Outbound SMS templates',
        description: 'Limit editing to approved broadcast templates.',
        state: 'Review',
      },
    ],
    reviews: [
      {
        title: 'Q2 Quality Assurance Checklist',
        owner: 'Operations',
        due: 'Mar 25',
        status: 'In Progress',
      },
      {
        title: 'Security training compliance',
        owner: 'People Ops',
        due: 'Mar 31',
        status: 'On Track',
      },
    ],
  },
  supervisor: {
    controls: [
      {
        name: 'Workforce schedule sync',
        description: 'Integrate Kronos schedule feed for real-time staffing.',
        state: 'Enabled',
      },
      {
        name: 'Supervisor approval for broadcasts',
        description: 'Require secondary review before campaign send.',
        state: 'Enabled',
      },
      {
        name: 'Advanced analytics export',
        description: 'Allow supervisors to download queue-level raw data.',
        state: 'Disabled',
      },
    ],
    reviews: [
      {
        title: 'Policy refresh: outage communications',
        owner: 'Customer Experience',
        due: 'Apr 5',
        status: 'Requires Update',
      },
      {
        title: 'Security training compliance',
        owner: 'People Ops',
        due: 'Mar 31',
        status: 'On Track',
      },
    ],
  },
};

const stateBadge: Record<AdminControl['state'], ReactNode> = {
  Enabled: (
    <Badge variant="outline" className="border-emerald-200 text-emerald-700 flex items-center space-x-2">
      <ToggleRight className="w-4 h-4" />
      <span>Enabled</span>
    </Badge>
  ),
  Disabled: (
    <Badge variant="outline" className="border-slate-200 text-slate-700 flex items-center space-x-2">
      <ToggleLeft className="w-4 h-4" />
      <span>Disabled</span>
    </Badge>
  ),
  Review: (
    <Badge variant="outline" className="border-amber-200 text-amber-700 flex items-center space-x-2">
      <Activity className="w-4 h-4" />
      <span>Review</span>
    </Badge>
  ),
};

const Admin = () => {
  const { persona } = usePersona();
  const content = adminContent[persona] ?? adminContent.agent!;

  return (
    <div className="ppl-container ppl-section space-y-8">
      <header>
        <Badge variant="secondary" className="mb-3">Workspace Controls</Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">Admin</h1>
        <p className="text-muted-foreground">
          Configure workspace controls, review policies, and keep your team aligned.
        </p>
      </header>

      <Card className="ppl-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-primary" />
            <span>Controls</span>
          </CardTitle>
          <Button variant="outline" size="sm">Edit Policies</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {content.controls.map((control) => (
            <div key={control.name} className="p-4 border rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{control.name}</h3>
                  <p className="text-sm text-muted-foreground">{control.description}</p>
                </div>
                {stateBadge[control.state]}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="ppl-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>Reviews & Compliance</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {content.reviews.map((review) => (
            <div key={review.title} className="p-4 border rounded-lg">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{review.owner}</p>
              <h3 className="mt-1 font-semibold text-foreground">{review.title}</h3>
              <Separator className="my-3" />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Due {review.due}</span>
                <Badge variant="outline">{review.status}</Badge>
              </div>
            </div>
          ))}
          <div className="p-4 border rounded-lg bg-accent/40 text-muted-foreground flex items-start space-x-3">
            <UserCog className="w-4 h-4 mt-1 text-primary" />
            <p>Invite additional admins to coordinate across departments.</p>
          </div>
          <div className="p-4 border rounded-lg flex items-start space-x-3 text-primary">
            <ClipboardCheck className="w-4 h-4 mt-1" />
            <p>Download the latest governance checklist for monthly review.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
