import {
  UserCog,
  Users,
  CalendarClock,
  Clock8,
  AlertTriangle,
  Sparkles,
  LineChart,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { usePersona } from '@/contexts/PersonaContext';

const scheduleShifts = [
  {
    team: 'Member Services',
    onShift: 24,
    scheduled: 28,
    coverage: '86%',
    nextEvent: 'Break rotation @ 3:15 PM',
  },
  {
    team: 'Outage Response',
    onShift: 12,
    scheduled: 14,
    coverage: '92%',
    nextEvent: 'Overtime hold @ 5:00 PM',
  },
  {
    team: 'Digital Care',
    onShift: 8,
    scheduled: 10,
    coverage: '80%',
    nextEvent: 'Shift change @ 4:30 PM',
  },
];

const exceptions = [
  {
    agent: 'Alex Morgan',
    reason: 'Extended break',
    duration: '12 min',
    action: 'Check-in completed',
  },
  {
    agent: 'Priya Patel',
    reason: 'Unexpected absence',
    duration: 'All day',
    action: 'Escalated to team lead',
  },
  {
    agent: 'Marcus Lee',
    reason: 'Schedule swap request',
    duration: 'Pending',
    action: 'Approve before 4 PM',
  },
];

const Workforce = () => {
  const { persona } = usePersona();
  const isSupervisor = persona === 'supervisor';

  return (
    <div className="ppl-container ppl-section space-y-8">
      <header>
        <Badge variant="secondary" className="mb-3">Workforce</Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">Workforce</h1>
        <p className="text-muted-foreground">
          Monitor staffing, balance coverage with demand, and resolve scheduling exceptions in real time.
        </p>
      </header>

      {!isSupervisor && (
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="py-4 text-sm text-amber-900">
            Workforce controls are optimized for Supervisors. Switch personas to view staffing tools used by leadership.
          </CardContent>
        </Card>
      )}

      <Card className="ppl-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-primary" />
            <span>Shift Coverage</span>
          </CardTitle>
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <CalendarClock className="w-4 h-4" />
            <span>Open Schedule</span>
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scheduleShifts.map((shift) => (
            <div key={shift.team} className="p-4 border rounded-lg">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{shift.team}</p>
              <p className="text-3xl font-semibold mt-2">{shift.coverage}</p>
              <p className="text-sm text-muted-foreground mt-2">On shift {shift.onShift} / {shift.scheduled} scheduled</p>
              <p className="text-sm text-muted-foreground mt-2">{shift.nextEvent}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="ppl-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserCog className="w-5 h-5 text-primary" />
              <span>Exceptions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {exceptions.map((exception) => (
              <div key={exception.agent} className="p-4 border rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{exception.agent}</h3>
                    <p className="text-sm text-muted-foreground">{exception.reason}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p className="flex items-center">
                      <Clock8 className="w-4 h-4 mr-1" /> {exception.duration}
                    </p>
                    <Badge variant="outline" className="mt-2">{exception.action}</Badge>
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
              <span>Forecast</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="p-4 border rounded-lg bg-accent/40 text-muted-foreground">
              <LineChart className="w-4 h-4 inline mr-2 text-primary" />
              Demand spike expected 5-7 PM after maintenance notifications.
            </div>
            <div className="p-4 border rounded-lg bg-amber-50 text-amber-900 flex items-start space-x-3">
              <AlertTriangle className="w-4 h-4 mt-1" />
              <span>Two outage specialists on OT yesterday. Monitor fatigue and adjust call rotations.</span>
            </div>
            <div className="p-4 border rounded-lg text-muted-foreground">
              Cross-train 4 agents on commercial workflows before next Wednesday&apos;s campaign.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Workforce;
