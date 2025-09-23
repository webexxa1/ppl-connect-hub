import {
  CalendarClock,
  MapPin,
  Wrench,
  Clock,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { usePersona } from '@/contexts/PersonaContext';

const upcomingAppointments = [
  {
    id: 'WO-48213',
    customer: 'Riverview Bakery — Front Street',
    type: 'Meter Upgrade',
    scheduledFor: 'Mar 12 • 9:00 – 10:30 AM',
    crew: 'Crew 5B',
    status: 'Confirmed',
  },
  {
    id: 'WO-48227',
    customer: 'Riverview Bakery — Riverside',
    type: 'Service Reliability Audit',
    scheduledFor: 'Mar 14 • 1:00 – 3:00 PM',
    crew: 'Crew 2A',
    status: 'Technician En Route',
  },
  {
    id: 'WO-48241',
    customer: 'Riverview Bakery — Warehouse',
    type: 'Demand Response Assessment',
    scheduledFor: 'Mar 18 • 8:00 – 11:00 AM',
    crew: 'Crew 7C',
    status: 'Awaiting Confirmation',
  },
];

const crewReadiness = [
  {
    name: 'Crew 5B',
    focus: 'Meter Work',
    staging: 'North Operations Center',
    nextJob: 'WO-48213',
    travelEta: '28 min',
    status: 'On Site',
  },
  {
    name: 'Crew 2A',
    focus: 'Reliability',
    staging: 'Riverside Hub',
    nextJob: 'WO-48227',
    travelEta: '45 min',
    status: 'En Route',
  },
  {
    name: 'Crew 7C',
    focus: 'Demand Response',
    staging: 'West Yard',
    nextJob: 'WO-48241',
    travelEta: '—',
    status: 'Standby',
  },
];

const AppointmentsFieldwork = () => {
  const { persona } = usePersona();
  const isSmallBusiness = persona === 'smallBusiness';

  return (
    <div className="ppl-container ppl-section space-y-8">
      <header>
        <Badge variant="secondary" className="mb-3">Field Operations</Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">Appointments & Fieldwork</h1>
        <p className="text-muted-foreground">
          Coordinate scheduled work, track crews in the field, and confirm access for each location.
        </p>
      </header>

      {!isSmallBusiness && (
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="py-4 flex items-center space-x-3 text-amber-900">
            <AlertTriangle className="w-5 h-5" />
            <p className="text-sm">
              Viewing the small business appointments workspace. Switch to the Small Business persona for the full experience.
            </p>
          </CardContent>
        </Card>
      )}

      <Card className="ppl-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <CalendarClock className="w-5 h-5 text-primary" />
            <span>Upcoming Appointments</span>
          </CardTitle>
          <Button variant="outline" size="sm">Manage Schedule</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="p-4 border rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{appointment.id}</Badge>
                    <Badge variant="secondary">{appointment.type}</Badge>
                  </div>
                  <h3 className="mt-2 font-semibold text-foreground">{appointment.customer}</h3>
                  <p className="text-sm text-muted-foreground">{appointment.scheduledFor}</p>
                </div>
                <div className="flex flex-col items-start md:items-end space-y-2 text-sm">
                  <span className="flex items-center text-muted-foreground">
                    <Wrench className="w-4 h-4 mr-1" /> Crew {appointment.crew}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'Confirmed'
                        ? 'bg-emerald-100 text-emerald-700'
                        : appointment.status === 'Technician En Route'
                        ? 'bg-sky-100 text-sky-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="ppl-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Field Crew Status</span>
            </CardTitle>
            <Badge variant="outline" className="text-sky-700 border-sky-200">Live</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {crewReadiness.map((crew) => (
              <div key={crew.name} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{crew.name}</p>
                    <p className="text-sm text-muted-foreground">{crew.focus}</p>
                  </div>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      crew.status === 'On Site'
                        ? 'bg-emerald-100 text-emerald-700'
                        : crew.status === 'En Route'
                        ? 'bg-sky-100 text-sky-700'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {crew.status}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Staging</p>
                    <p className="font-medium">{crew.staging}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Next Job</p>
                    <p className="font-medium">{crew.nextJob}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Travel ETA</p>
                    <p className="font-medium">{crew.travelEta}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Today&apos;s Checklist</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-4 h-4 text-success mt-1" />
              <div>
                <p className="font-medium">Access Confirmed</p>
                <p className="text-muted-foreground">Door and meter room codes verified for all morning appointments.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-4 h-4 text-success mt-1" />
              <div>
                <p className="font-medium">Safety Briefing</p>
                <p className="text-muted-foreground">Crew 2A reviewed confined space procedures for the Riverside site.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-4 h-4 text-amber-500 mt-1" />
              <div>
                <p className="font-medium">Weather Watch</p>
                <p className="text-muted-foreground">High winds expected after 4 PM. Consider rescheduling roof access work.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppointmentsFieldwork;
