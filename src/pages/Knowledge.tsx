import {
  BookOpen,
  Search,
  GraduationCap,
  FileText,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { usePersona } from '@/contexts/PersonaContext';

const knowledgeArticles = [
  {
    id: 'KB-1420',
    title: 'Outage restoration empathy script',
    description: 'Guidance for supporting customers during extended restoration windows.',
    updated: 'Updated 2 days ago',
    tags: ['Script', 'Outages'],
  },
  {
    id: 'KB-0984',
    title: 'Budget billing coaching guide',
    description: 'How to walk customers through budget plan enrollment and expectations.',
    updated: 'Updated 1 week ago',
    tags: ['Billing', 'Coach'],
  },
  {
    id: 'KB-0771',
    title: 'Field appointment preparation checklist',
    description: 'Confirm access codes, safety notes, and job scope with customers ahead of site visits.',
    updated: 'Updated 3 weeks ago',
    tags: ['Field', 'Checklist'],
  },
];

const enablements = [
  {
    title: 'New hire onboarding — energy insights',
    description: '60 minute session on using the analytics view to recommend demand response.',
    type: 'Live Session',
  },
  {
    title: 'Micro-learning: empathy statements',
    description: '5 minute refresher on de-escalation and reflective listening techniques.',
    type: 'Micro-learning',
  },
];

const Knowledge = () => {
  const { persona } = usePersona();

  return (
    <div className="ppl-container ppl-section space-y-8">
      <header>
        <Badge variant="secondary" className="mb-3">Enablement</Badge>
        <h1 className="text-3xl font-bold text-foreground mb-2">Knowledge</h1>
        <p className="text-muted-foreground">
          Access scripts, playbooks, and learning resources tailored for frontline agents.
        </p>
      </header>

      {persona !== 'agent' && (
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="py-4 text-sm text-amber-900">
            Knowledge articles are optimized for the Agent workspace. Switch personas to preview the experience your agents see.
          </CardContent>
        </Card>
      )}

      <Card className="ppl-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-primary" />
            <span>Search Knowledge Base</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search scripts, troubleshooting, or playbooks" className="pl-10" />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="ppl-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span>Featured Articles</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {knowledgeArticles.map((article) => (
              <div key={article.id} className="p-4 border rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Badge variant="outline">{article.id}</Badge>
                      <span>{article.updated}</span>
                    </div>
                    <h3 className="mt-2 font-semibold">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">{article.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-primary">
                    <ExternalLink className="w-4 h-4" />
                    <span>Open</span>
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="ppl-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span>Enablement</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            {enablements.map((item) => (
              <div key={item.title} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <Badge variant="outline">{item.type}</Badge>
                </div>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
            <div className="p-4 border rounded-lg bg-accent/40 text-muted-foreground flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>AI suggestions highlight relevant knowledge articles based on active conversation context.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Knowledge;
