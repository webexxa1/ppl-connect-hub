import { 
  Zap, 
  MapPin, 
  Clock, 
  Users, 
  AlertTriangle,
  CheckCircle,
  Bell,
  Phone,
  Search
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Outages = () => {
  return (
    <div className="ppl-container ppl-section">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Outages & Service Status
        </h1>
        <p className="text-muted-foreground">
          Report outages, check restoration status, and view outage maps
        </p>
      </div>

      {/* Emergency Alert */}
      <Alert className="mb-6 border-destructive bg-destructive/10">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        <AlertDescription className="text-destructive font-medium">
          <div className="flex items-center justify-between">
            <span>SAFETY FIRST: Never approach downed power lines. Stay at least 35 feet away.</span>
            <Button variant="destructive" size="sm" className="ml-4">
              <Phone className="w-4 h-4 mr-1" />
              Call 1-800-342-5775
            </Button>
          </div>
        </AlertDescription>
      </Alert>

      {/* Your Service Status */}
      <Card className="ppl-card mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Your Service Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex items-center justify-center p-6 bg-success/10 rounded-lg">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-success mb-2">Power On</h3>
                <p className="text-muted-foreground">123 Main Street, Allentown, PA 18101</p>
                <p className="text-sm text-muted-foreground mt-2">Last checked: Just now</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Report an Outage</h4>
                <p className="text-muted-foreground mb-4">
                  No power at your location? Report it quickly so we can restore service.
                </p>
                <Button className="btn-ppl-primary w-full">
                  <Zap className="w-4 h-4 mr-2" />
                  Report Outage Now
                </Button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Get Outage Alerts</h4>
                <p className="text-muted-foreground mb-4">
                  Subscribe to notifications about outages in your area.
                </p>
                <Button variant="outline" className="w-full">
                  <Bell className="w-4 h-4 mr-2" />
                  Manage Notifications
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Outage Map & Search */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2 ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Outage Map</span>
              </div>
              <div className="flex items-center space-x-2">
                <Input placeholder="Search address..." className="w-48" />
                <Button size="sm">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">Interactive Outage Map</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Real-time outage information for Pennsylvania service area
                </p>
                <Button variant="outline" className="mt-4">
                  View Full Screen Map
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Current Outages</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-3" />
                <p className="font-medium text-success">No Major Outages</p>
                <p className="text-sm text-muted-foreground">
                  All systems operating normally in your area
                </p>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-3">System Stats</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Customers Served:</span>
                    <span className="font-medium">1.4M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service Territory:</span>
                    <span className="font-medium">29 Counties</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reliability:</span>
                    <Badge variant="outline" className="border-success text-success">99.95%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Outage History */}
      <Card className="ppl-card mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>Your Outage History</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                date: 'January 28, 2024',
                duration: '2 hours 15 minutes',
                cause: 'Equipment failure',
                customers: '1,247',
                status: 'Restored'
              },
              {
                date: 'December 15, 2023',
                duration: '45 minutes',
                cause: 'Planned maintenance',
                customers: '856',
                status: 'Scheduled'
              },
              {
                date: 'November 3, 2023',
                duration: '3 hours 30 minutes',
                cause: 'Storm damage',
                customers: '2,134',
                status: 'Restored'
              }
            ].map((outage, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{outage.date}</p>
                  <p className="text-sm text-muted-foreground">
                    {outage.cause} • {outage.duration} • {outage.customers} customers affected
                  </p>
                </div>
                <Badge 
                  variant={outage.status === 'Restored' ? 'outline' : 'secondary'}
                  className={outage.status === 'Restored' ? 'border-success text-success' : ''}
                >
                  {outage.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Storm Preparedness */}
      <Card className="ppl-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            <span>Storm Preparedness</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-medium mb-2">Emergency Kit</h4>
              <p className="text-sm text-muted-foreground">
                Keep flashlights, batteries, and water ready
              </p>
            </div>
            <div className="text-center p-4">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-medium mb-2">Save Our Number</h4>
              <p className="text-sm text-muted-foreground">
                1-800-342-5775 for outage reporting
              </p>
            </div>
            <div className="text-center p-4">
              <Bell className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-medium mb-2">Stay Informed</h4>
              <p className="text-sm text-muted-foreground">
                Sign up for outage alerts and updates
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Outages;