import type { LucideIcon } from 'lucide-react';
import { MessageCircle, CheckCircle2, Clock, AlertCircle, MailIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const messageThreads = [
  {
    id: 'MSG-1042',
    subject: 'Payment Confirmation for AutoPay',
    preview: 'Hi Jamie, this is a confirmation that your AutoPay draft for $128.42 will process on March 22.',
    status: 'Unread',
    lastUpdated: '2 hours ago',
    category: 'Billing',
    channel: 'Secure Message',
    tags: ['AutoPay', 'Billing'],
    messages: [
      {
        author: 'PPL Customer Care',
        role: 'Support Team',
        timestamp: 'Today • 9:05 AM',
        content:
          'Hi Jamie, this is a confirmation that your AutoPay draft for $128.42 will process on March 22. You do not need to take any action. If you need to make changes to your AutoPay settings, you can update them from the Billing & Payments tab.',
      },
      {
        author: 'PPL Customer Care',
        role: 'Support Team',
        timestamp: 'Today • 9:07 AM',
        content:
          'Tip: You can enroll in billing alerts to be notified before and after each AutoPay withdrawal.',
      },
    ],
  },
  {
    id: 'MSG-1037',
    subject: 'Storm Preparation Checklist',
    preview: 'We noticed severe weather in your area this weekend. Here are quick tips to stay prepared and safe.',
    status: 'Read',
    lastUpdated: 'Yesterday',
    category: 'Outages',
    channel: 'Email Copy',
    tags: ['Outages'],
    messages: [],
  },
  {
    id: 'MSG-1029',
    subject: 'Service Request #229814 received',
    preview: 'Thanks for letting us know about your upcoming move. Your service transfer request is in review.',
    status: 'Responded',
    lastUpdated: 'Mar 14',
    category: 'Service',
    channel: 'Secure Message',
    tags: ['Move Service'],
    messages: [],
  },
  {
    id: 'MSG-1018',
    subject: 'Follow-up: Budget billing option',
    preview: 'Just checking in to see if you had any questions about enrolling in budget billing before your next cycle.',
    status: 'Awaiting Reply',
    lastUpdated: 'Mar 10',
    category: 'Billing',
    channel: 'Secure Message',
    tags: ['Budget Billing'],
    messages: [],
  },
];

const statusVariants: Record<string, { label: string; Icon: LucideIcon; className: string }> = {
  Unread: {
    label: 'Unread',
    Icon: AlertCircle,
    className: 'bg-primary/10 text-primary border-primary/20',
  },
  Responded: {
    label: 'Responded',
    Icon: CheckCircle2,
    className: 'bg-success/10 text-success border-success/20',
  },
  Read: {
    label: 'Read',
    Icon: MessageCircle,
    className: 'bg-muted text-muted-foreground border-transparent',
  },
  'Awaiting Reply': {
    label: 'Awaiting Reply',
    Icon: Clock,
    className: 'bg-warning/10 text-warning border-warning/20',
  },
};

const Messages = () => {
  const activeThread = messageThreads[0];

  return (
    <div className="ppl-container ppl-section">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Messages</h1>
          <p className="text-muted-foreground">
            Stay up to date on secure notices, service updates, and billing alerts from PPL.
          </p>
        </div>
        <Button className="btn-ppl-primary" size="sm">
          <MailIcon className="w-4 h-4 mr-2" />
          New Message
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-4 ppl-card">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">Inbox</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="pt-4 p-0">
            <ScrollArea className="h-[520px]">
              <div className="divide-y divide-border">
                {messageThreads.map((thread) => {
                  const variant = statusVariants[thread.status] ?? statusVariants.Read;
                  const { Icon, label, className } = variant;

                  return (
                    <button
                      key={thread.id}
                      className={`w-full text-left px-4 py-4 transition-colors hover:bg-accent/50 ${
                        thread.id === activeThread.id ? 'bg-accent/50' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback>{thread.category.slice(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="text-sm font-semibold text-foreground leading-tight">
                                {thread.subject}
                              </h3>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 leading-snug line-clamp-2">
                              {thread.preview}
                            </p>
                            <div className="flex items-center flex-wrap gap-2 mt-3">
                              <Badge className={`${className} border`}>
                                <span className="flex items-center space-x-1">
                                  <Icon className="w-3 h-3" />
                                  <span>{label}</span>
                                </span>
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {thread.category}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{thread.lastUpdated}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="lg:col-span-8 ppl-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold">{activeThread.subject}</CardTitle>
              <Badge variant="outline">{activeThread.id}</Badge>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
              <span>{activeThread.channel}</span>
              <span>•</span>
              <span>Last updated {activeThread.lastUpdated}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {activeThread.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-6 space-y-6">
            {activeThread.messages.map((message, index) => (
              <div key={`${message.author}-${index}`} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback>{message.author.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{message.author}</p>
                      <p className="text-xs text-muted-foreground">{message.role}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground bg-muted/40 border border-border rounded-md p-4">
                  {message.content}
                </p>
              </div>
            ))}

            <div className="rounded-lg border border-dashed border-border p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Need to follow up? Select Reply to send a secure message to our support team.
              </p>
              <Button className="btn-ppl-primary mt-4" size="sm">
                Reply
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
