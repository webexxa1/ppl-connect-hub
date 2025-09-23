import {
  Inbox,
  MessageCircle,
  PhoneCall,
  Mail,
  Filter,
  Clock3,
  UserCircle2,
  AlertCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { usePersona, type PersonaKey } from '@/contexts/PersonaContext';

interface InboxConversation {
  id: string;
  customer: string;
  channel: 'SMS' | 'Email' | 'Voice';
  subject: string;
  received: string;
  priority: 'High' | 'Normal';
}

interface PersonaInboxContent {
  filters: string[];
  conversations: InboxConversation[];
  highlights: string[];
}

const inboxContent: Partial<Record<PersonaKey, PersonaInboxContent>> = {
  agent: {
    filters: ['My Queue', 'Needs Response', 'Scheduled Follow-up', 'Pinned'],
    conversations: [
      {
        id: 'CON-8124',
        customer: 'Jamie Rivera',
        channel: 'SMS',
        subject: 'Payment arrangement confirmation',
        received: '2 min ago',
        priority: 'High',
      },
      {
        id: 'CON-8121',
        customer: 'Alex Chen',
        channel: 'Email',
        subject: 'Meter reading not updating',
        received: '14 min ago',
        priority: 'Normal',
      },
      {
        id: 'CON-8118',
        customer: 'Taylor Smith',
        channel: 'Voice',
        subject: 'Call back scheduled for 4 PM',
        received: '29 min ago',
        priority: 'Normal',
      },
    ],
    highlights: [
      'Agent assist suggests sending outage tracker link to 2 customers.',
      '2 conversations waiting on customer response remind after 24 hours.',
    ],
  },
  supervisor: {
    filters: ['All Conversations', 'Needs Assignment', 'Escalated', 'Quality Review'],
    conversations: [
      {
        id: 'ESC-4420',
        customer: 'Green Valley Schools',
        channel: 'Email',
        subject: 'Escalation: transformer inspection',
        received: '5 min ago',
        priority: 'High',
      },
      {
        id: 'QC-7781',
        customer: 'Call Review',
        channel: 'Voice',
        subject: 'Random QA selection for billing call',
        received: '11 min ago',
        priority: 'Normal',
      },
      {
        id: 'ASSIGN-9914',
        customer: 'Low Income Outreach',
        channel: 'SMS',
        subject: 'Campaign response backlog',
        received: '22 min ago',
        priority: 'High',
      },
    ],
    highlights: [
      'Escalated transformer inspection requires engineering assignment.',
      'Unified inbox volume up 18% compared to same time yesterday.',
    ],
  },
};

const channelIcon = (channel: InboxConversation['channel']) => {
  switch (channel) {
    case 'SMS':
      return <MessageCircle className="w-4 h-4 text-primary" />;
    case 'Email':
      return <Mail className="w-4 h-4 text-primary" />;
    default:
      return <PhoneCall className="w-4 h-4 text-primary" />;
  }
};

const UnifiedInbox = () => {
  const { persona } = usePersona();
  const content = inboxContent[persona] ?? inboxContent.agent!;

  return (
    <div className="ppl-container ppl-section space-y-8">
      <header>
        <Badge variant="secondary" className="mb-3">Omnichannel</Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">Unified Inbox</h1>
        <p className="text-muted-foreground">
          Review and respond to conversations across SMS, email, and voice in a single workspace.
        </p>
      </header>

      <Card className="ppl-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Inbox className="w-5 h-5 text-primary" />
            <span>Smart Filters</span>
          </CardTitle>
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Customize</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {content.filters.map((filter) => (
              <Badge key={filter} variant="outline" className="px-3 py-1">
                {filter}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="ppl-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span>Active Conversations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {content.conversations.map((conversation) => (
              <div key={conversation.id} className="p-4 border rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      {channelIcon(conversation.channel)}
                      <Badge variant="outline">{conversation.channel}</Badge>
                      <span className="text-sm text-muted-foreground">{conversation.id}</span>
                    </div>
                    <h3 className="mt-2 font-semibold">{conversation.customer}</h3>
                    <p className="text-sm text-muted-foreground">{conversation.subject}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end space-y-2 text-sm">
                    <span className="flex items-center text-muted-foreground">
                      <Clock3 className="w-4 h-4 mr-1" /> {conversation.received}
                    </span>
                    <Badge
                      variant={conversation.priority === 'High' ? 'destructive' : 'secondary'}
                      className="uppercase tracking-wide"
                    >
                      {conversation.priority}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserCircle2 className="w-5 h-5 text-primary" />
              <span>Highlights</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            {content.highlights.map((highlight) => (
              <div key={highlight} className="p-3 border rounded-lg bg-accent/40 text-muted-foreground">
                {highlight}
              </div>
            ))}
            <div className="p-3 border rounded-lg text-amber-800 bg-amber-50 flex items-start space-x-3">
              <AlertCircle className="w-4 h-4 mt-1" />
              <p>
                Automated sentiment flag triggered on 3 conversations — review before closing.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UnifiedInbox;
