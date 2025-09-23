import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
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
  Phone,
  Briefcase,
  Users,
  Layers,
  CalendarClock,
  HardHat,
  ListChecks,
  Inbox,
  FolderKanban,
  Megaphone,
  BookOpen,
  ChartLine,
  Settings,
  UserCog,
  Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { personaOptions, usePersona, type PersonaKey } from '@/contexts/PersonaContext';

interface LayoutProps {
  children: ReactNode;
}

type NavItem = {
  path: string;
  label: string;
  icon: LucideIcon;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { persona, setPersona } = usePersona();
  
  const isActive = (path: string) => location.pathname === path;
  
  const personaNavItems: Record<PersonaKey, NavItem[]> = {
    residential: [
      { path: '/', label: 'Dashboard', icon: Home },
      { path: '/billing', label: 'Billing & Payments', icon: CreditCard },
      { path: '/outages', label: 'Outages', icon: Zap },
      { path: '/service', label: 'Start/Stop/Move', icon: FileText },
      { path: '/messages', label: 'Messages', icon: MessageCircle },
      { path: '/support', label: 'Support & FAQs', icon: HelpCircle },
    ],
    smallBusiness: [
      { path: '/', label: 'Business Dashboard', icon: Briefcase },
      { path: '/billing', label: 'Billing & Usage', icon: CreditCard },
      { path: '/outages', label: 'Outages', icon: Zap },
      { path: '/service', label: 'Service Requests', icon: FileText },
      { path: '/messages', label: 'Communications', icon: MessageCircle },
      { path: '/support', label: 'Support & FAQs', icon: HelpCircle },
      { path: '/appointments-fieldwork', label: 'Appointments & Fieldwork', icon: CalendarClock },
    ],
    agent: [
      { path: '/', label: 'Agent Workspace', icon: Users },
      { path: '/queues', label: 'Queues', icon: ListChecks },
      { path: '/unified-inbox', label: 'Unified Inbox', icon: Inbox },
      { path: '/cases', label: 'Cases', icon: FolderKanban },
      { path: '/customers', label: 'Customers', icon: Users },
      { path: '/broadcasts', label: 'Broadcasts', icon: Megaphone },
      { path: '/knowledge', label: 'Knowledge', icon: BookOpen },
      { path: '/analytics', label: 'Analytics', icon: ChartLine },
      { path: '/admin', label: 'Admin', icon: Settings },
    ],
    supervisor: [
      { path: '/', label: 'Supervisor Console', icon: Layers },
      { path: '/queues', label: 'Queues', icon: ListChecks },
      { path: '/unified-inbox', label: 'Unified Inbox', icon: Inbox },
      { path: '/cases', label: 'Cases', icon: FolderKanban },
      { path: '/customers', label: 'Customers', icon: Users },
      { path: '/broadcasts', label: 'Broadcasts', icon: Megaphone },
      { path: '/analytics', label: 'Analytics', icon: ChartLine },
      { path: '/workforce', label: 'Workforce', icon: UserCog },
      { path: '/admin', label: 'Admin', icon: Settings },
    ],
  };

  const navItems = personaNavItems[persona] ?? personaNavItems.residential;

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
              <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity" aria-label="PPL Electric home">
                <img
                  src="https://www.pplelectric.com/site/-/jssmedia/ppl-jss-app/data/media/logo/logo-color-desktop.ashx?h=67&iar=0&w=87&hash=6E055CAC864BFA63631DBEADBA864043"
                  alt="PPL Electric logo"
                  className="h-12 w-auto"
                />
                <div className="text-left">
                  <h1 className="text-xl font-semibold text-foreground">PPL Electric</h1>
                  <p className="text-sm text-muted-foreground">Customer Portal</p>
                </div>
              </Link>
            </div>

            {/* Search */}
            <div className="hidden md:flex items-center flex-1 max-w-3xl mx-8 space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search customers, help articles, billing, outages..." 
                  className="pl-10"
                />
              </div>
              <Select defaultValue="en">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent align="end">
                  <SelectItem value="en">English (US)</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="relative">
                <Mail className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-semibold text-destructive-foreground">
                  3
                </span>
              </Button>
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

          <div className="pb-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-t border-border pt-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Experience Mode</p>
                <p className="text-sm text-muted-foreground">Switch between Residential, Small Business, Agent, and Supervisor journeys.</p>
              </div>
              <Tabs value={persona} onValueChange={(value) => setPersona(value as PersonaKey)}>
                <TabsList className="flex flex-wrap bg-accent/40">
                  {personaOptions.map((option) => (
                    <TabsTrigger key={option.value} value={option.value} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <span className="text-sm font-medium">{option.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
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
