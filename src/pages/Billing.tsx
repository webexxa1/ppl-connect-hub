import { 
  Download, 
  CreditCard, 
  Calendar, 
  TrendingUp, 
  Settings,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Billing = () => {
  return (
    <div className="ppl-container ppl-section">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Billing & Payments
        </h1>
        <p className="text-muted-foreground">
          View bills, make payments, and manage your account
        </p>
      </div>

      {/* Current Bill */}
      <Card className="ppl-card mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-primary" />
              <span>Current Bill</span>
            </CardTitle>
            <Badge variant="destructive">Due Soon</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="text-center lg:text-left mb-6">
                <p className="text-4xl font-bold text-foreground mb-2">$127.83</p>
                <p className="text-muted-foreground">Due March 15, 2024</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bill Date:</span>
                  <span>February 15, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service Period:</span>
                  <span>Jan 14 - Feb 14, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">kWh Used:</span>
                  <span>847 kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AutoPay Status:</span>
                  <Badge variant="outline" className="border-success text-success">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Enabled
                  </Badge>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button className="btn-ppl-primary flex-1">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay Now
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Bill Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Electric Supply:</span>
                  <span>$67.45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Distribution:</span>
                  <span>$43.22</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transmission:</span>
                  <span>$8.95</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes & Fees:</span>
                  <span>$8.21</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total Amount Due:</span>
                  <span>$127.83</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Options & Programs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-5 h-5 text-primary" />
              <span>Payment Options</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">AutoPay</p>
                <p className="text-sm text-muted-foreground">Automatic monthly payments</p>
              </div>
              <Badge variant="outline" className="border-success text-success">Active</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Paperless Billing</p>
                <p className="text-sm text-muted-foreground">Email bills instead of mail</p>
              </div>
              <Button variant="outline" size="sm">Enable</Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Budget Plan</p>
                <p className="text-sm text-muted-foreground">Even monthly payments</p>
              </div>
              <Button variant="outline" size="sm">Learn More</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Assistance Programs</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-accent/50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <p className="font-medium">OnTrack Payment Plan</p>
              </div>
              <p className="text-sm text-muted-foreground">You're enrolled in our payment assistance program</p>
            </div>

            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                <AlertCircle className="w-4 h-4 mr-2" />
                Apply for LIHEAP Assistance
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Set Up Payment Arrangement
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      <Card className="ppl-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>Recent Payments</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: 'Feb 14, 2024', amount: '$134.56', method: 'AutoPay (Bank)', status: 'Completed' },
              { date: 'Jan 15, 2024', amount: '$142.33', method: 'AutoPay (Bank)', status: 'Completed' },
              { date: 'Dec 14, 2023', amount: '$156.78', method: 'Online Payment', status: 'Completed' },
            ].map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{payment.amount}</p>
                  <p className="text-sm text-muted-foreground">{payment.date} • {payment.method}</p>
                </div>
                <Badge variant="outline" className="border-success text-success">
                  {payment.status}
                </Badge>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <Button variant="outline" className="w-full">
              View All Payment History
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Billing;