import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  CreditCard, 
  Zap, 
  Home, 
  FileText, 
  MessageCircle, 
  HelpCircle,
  User,
  Bell,
  Search,
  Menu,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/billing', label: 'Billing & Payments', icon: CreditCard },
    { path: '/outages', label: 'Outages', icon: Zap },
    { path: '/service', label: 'Start/Stop/Move', icon: FileText },
    { path: '/messages', label: 'Messages', icon: MessageCircle },
    { path: '/support', label: 'Support & FAQs', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Emergency Banner */}
      <div className="bg-destructive text-destructive-foreground px-4 py-2 text-center text-sm font-medium">
        <Phone className="inline w-4 h-4 mr-2" />
        EMERGENCY? Downed power lines or electrical emergencies: Call 1-800-342-5775 immediately
      </div>

      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="ppl-container">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">PPL</span>
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">PPL Electric</h1>
                  <p className="text-sm text-muted-foreground">Customer Portal</p>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search help articles, billing, outages..." 
                  className="pl-10"
                />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
                <span className="hidden md:inline ml-2">My Account</span>
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="hidden md:flex flex-col w-64 bg-card border-r border-border min-h-screen">
          <div className="p-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 p-4 border-t border-border">
            <h3 className="text-sm font-medium text-foreground mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <CreditCard className="w-4 h-4 mr-2" />
                Pay Bill
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Zap className="w-4 h-4 mr-2" />
                Report Outage
              </Button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;