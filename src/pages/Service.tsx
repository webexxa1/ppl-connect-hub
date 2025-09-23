import { 
  FileText, 
  Home, 
  Calendar, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Users,
  CreditCard,
  MapPin
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Service = () => {
  return (
    <div className="ppl-container ppl-section">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Start, Stop, or Move Service
        </h1>
        <p className="text-muted-foreground">
          Manage your electric service for new homes, moves, or service changes
        </p>
      </div>

      {/* Service Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Start Service */}
        <Card className="ppl-card-hero group cursor-pointer">
          <CardContent className="p-0">
            <div className="text-center">
              <Home className="w-12 h-12 text-white/90 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Start Service</h3>
              <p className="text-white/90 mb-4">New home or apartment?</p>
              <p className="text-sm text-white/80">Connect electricity to your new address</p>
            </div>
          </CardContent>
        </Card>

        {/* Stop Service */}
        <Card className="bg-gradient-to-br from-warning to-orange-500 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <CardContent className="p-0">
            <div className="text-center">
              <Clock className="w-12 h-12 text-white/90 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Stop Service</h3>
              <p className="text-white/90 mb-4">Moving out?</p>
              <p className="text-sm text-white/80">Disconnect service at your current address</p>
            </div>
          </CardContent>
        </Card>

        {/* Move Service */}
        <Card className="bg-gradient-to-br from-success to-green-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <CardContent className="p-0">
            <div className="text-center">
              <FileText className="w-12 h-12 text-white/90 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Move Service</h3>
              <p className="text-white/90 mb-4">Relocating?</p>
              <p className="text-sm text-white/80">Transfer service to your new address</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Service Requests */}
      <Card className="ppl-card mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-primary" />
            <span>Your Service Requests</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium">Move Service Request</p>
                  <p className="text-sm text-muted-foreground">
                    From: 123 Main St → To: 456 Oak Ave, Allentown, PA
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Scheduled: March 20, 2024
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="border-warning text-warning">
                <Clock className="w-3 h-3 mr-1" />
                In Progress
              </Badge>
            </div>

            <div className="text-center py-8 text-muted-foreground">
              <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No other pending service requests</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>What You Need to Know</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Service Timeline</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Submit request online or by phone</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Schedule service date (2-5 business days)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Service connection completed</span>
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">Required Information</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Service address and contact information</li>
                <li>• Preferred service date</li>
                <li>• Valid photo ID</li>
                <li>• Social Security Number or Tax ID</li>
                <li>• Deposit (if required based on credit check)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-primary" />
              <span>Deposits & Fees</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Service Deposits</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Residential:</span>
                  <span>$0 - $300*</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Small Business:</span>
                  <span>$100 - $500*</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  *Based on credit check and payment history
                </p>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">Connection Fees</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Standard Connection:</span>
                  <span>$35</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Same-Day Service:</span>
                  <span>$125</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">After Hours:</span>
                  <span>$175</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="outline" className="w-full">
                View Complete Fee Schedule
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service Areas */}
      <Card className="ppl-card mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Service Areas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Allentown', 'Bethlehem', 'Easton', 'Reading', 'Pottstown', 'Norristown',
              'Scranton', 'Wilkes-Barre', 'Hazleton', 'Lancaster', 'York', 'Harrisburg'
            ].map((city, index) => (
              <div key={index} className="flex items-center space-x-2 p-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm">{city}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              PPL Electric serves 29 counties across central and eastern Pennsylvania.
            </p>
            <Button variant="outline" size="sm" className="mt-2">
              Check Service Availability
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="ppl-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-primary" />
            <span>Need Help?</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Customer Service</h4>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Phone:</strong> 1-800-342-5775
                </p>
                <p className="text-sm">
                  <strong>Hours:</strong> Mon-Fri 7 AM - 6 PM
                </p>
                <p className="text-sm">
                  <strong>Emergency:</strong> 24/7 outage reporting
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Online Services</h4>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start p-0">
                  Chat with Customer Service
                </Button>
                <Button variant="ghost" className="w-full justify-start p-0">
                  Email Support
                </Button>
                <Button variant="ghost" className="w-full justify-start p-0">
                  Schedule Callback
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Service;