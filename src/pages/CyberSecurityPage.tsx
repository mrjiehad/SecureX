
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  Zap,
  Eye,
  TrendingUp,
  Monitor,
  Lock,
  Search,
  GraduationCap,
  AlertTriangle,
  Server,
  Smartphone,
  PlayCircle,
  FileText,
  Download,
  ArrowRight,
  ChevronRight,
  Clock,
  Target,
  Users,
  Globe,
  CheckCircle,
  Building,
  Heart,
  Cog,
  Cpu,
  Briefcase,
  BookOpen,
  Award,
  Linkedin,
  Youtube,
  Twitter,
  Phone,
  Mail,
  MapPin } from
'lucide-react';

const CyberSecurityPage = () => {
  const [activeTab, setActiveTab] = useState('threats');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    endpoints: '',
    message: ''
  });

  // Mock data for SOC demo
  const mockData = {
    threats: [
    { id: 'T001', severity: 'Critical', srcIP: '192.168.1.100', rule: 'Malware Detection', time: '2 mins ago' },
    { id: 'T002', severity: 'High', srcIP: '10.0.0.45', rule: 'Suspicious Activity', time: '5 mins ago' },
    { id: 'T003', severity: 'Medium', srcIP: '172.16.0.23', rule: 'Policy Violation', time: '8 mins ago' },
    { id: 'T004', severity: 'Info', srcIP: '192.168.0.12', rule: 'Login Success', time: '12 mins ago' },
    { id: 'T005', severity: 'Critical', srcIP: '203.0.113.5', rule: 'Data Exfiltration', time: '15 mins ago' },
    { id: 'T006', severity: 'High', srcIP: '198.51.100.8', rule: 'Privilege Escalation', time: '18 mins ago' },
    { id: 'T007', severity: 'Medium', srcIP: '172.16.1.67', rule: 'Configuration Change', time: '22 mins ago' },
    { id: 'T008', severity: 'Info', srcIP: '10.0.1.34', rule: 'System Update', time: '25 mins ago' }],

    assets: [
    { type: 'Endpoint', count: 1247, status: 'Protected' },
    { type: 'Cloud Workload', count: 89, status: 'Monitored' },
    { type: 'IoT Device', count: 156, status: 'Secured' },
    { type: 'Mobile Device', count: 423, status: 'Compliant' }],

    playbooks: [
    {
      name: 'Phishing Response',
      steps: ['Isolate affected endpoint', 'Block malicious domains', 'Reset user credentials', 'Update security policies']
    },
    {
      name: 'Ransomware Containment',
      steps: ['Disconnect network access', 'Identify encryption scope', 'Activate backup systems', 'Begin recovery process']
    },
    {
      name: 'Privilege Misuse',
      steps: ['Suspend user account', 'Review access logs', 'Escalate to security team', 'Implement additional controls']
    }]

  };

  // Animated counters
  const [counters, setCounters] = useState({ noise: 0, mttr: 0, coverage: 0 });

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounters({
          noise: Math.round(70 * progress),
          mttr: Math.round(2.3 * progress * 10) / 10,
          coverage: Math.round(94.7 * progress * 10) / 10
        });

        if (step >= steps) clearInterval(timer);
      }, interval);
    };

    animateCounters();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center cyber-bg overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8">

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-space font-bold leading-tight">
                  Zero-Trust <br />
                  <span className="text-primary-blue">Cyber Defense.</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-space font-medium text-text-heading">
                  Built for Enterprise Scale.
                </h2>
                <p className="text-xl text-text-body max-w-2xl">
                  Cut noise, reduce MTTR, and unify defense across cloud, endpoints, and users.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary-blue hover:bg-primary-blue/90 glow-blue hover-lift">
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to Security Expert
                </Button>
                <Button size="lg" variant="outline" className="border-secondary-red text-secondary-red hover:bg-secondary-red hover:text-white hover-lift">
                  Request Proposal
                </Button>
                <Button size="lg" variant="ghost" className="text-text-body hover:text-primary-blue hover-lift">
                  See Our Ecosystem
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Partner Logos */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Trusted by Enterprise Partners</p>
                <div className="grid grid-cols-4 lg:grid-cols-8 gap-6 items-center">
                  {['Microsoft', 'Cisco', 'Palo Alto', 'AWS', 'Fortinet', 'Google Cloud', 'Splunk', 'IBM'].map((partner) =>
                  <div key={partner} className="partner-logo hover-lift">
                      <div className="bg-white/10 rounded-lg p-3 h-12 flex items-center justify-center">
                        <span className="text-xs font-medium">{partner}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Cyber Background with Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative">

              <div className="relative bg-gradient-to-br from-primary-blue/20 to-secondary-red/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 to-secondary-red/10 rounded-2xl animate-pulse-slow"></div>
                
                {/* Mini SOC Metrics */}
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-space font-semibold mb-6">Live SOC Metrics</h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="bg-black/30 border-green-500/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">↓70%</div>
                        <div className="text-sm text-muted-foreground">Noise</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-black/30 border-primary-blue/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary-blue">2.3m</div>
                        <div className="text-sm text-muted-foreground">MTTR</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-black/30 border-yellow-500/50">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-400">94.7%</div>
                        <div className="text-sm text-muted-foreground">Coverage</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Animated particles effect */}
                  <div className="mt-8 h-32 relative overflow-hidden rounded-lg bg-black/20">
                    {[...Array(12)].map((_, i) =>
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-primary-blue rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }} />

                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* R.A.V.E. Framework */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl font-space font-bold mb-4">
              The <span className="text-primary-blue">R.A.V.E.</span> Framework
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Our comprehensive approach to cybersecurity excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              icon: Zap,
              title: 'Ready',
              description: 'Rapid onboarding and deployment across your infrastructure',
              color: 'text-primary-blue'
            },
            {
              icon: TrendingUp,
              title: 'Agile',
              description: 'Adaptive playbooks that evolve with emerging threats',
              color: 'text-green-400'
            },
            {
              icon: Eye,
              title: 'Vigilant',
              description: 'Continuous monitoring and real-time threat detection',
              color: 'text-yellow-400'
            },
            {
              icon: Shield,
              title: 'Evolving',
              description: 'Scales with your risks and business growth',
              color: 'text-secondary-red'
            }].
            map((item, index) =>
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}>

                <Card className="hover-lift h-full bg-card border-white/10 hover:border-primary-blue/50 transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`inline-flex p-4 rounded-full bg-black/30 ${item.color}`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-space font-bold">{item.title}</h3>
                    <p className="text-text-body">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Unified Security Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl font-space font-bold mb-4">
              Unified Security <span className="text-primary-blue">Solutions</span>
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Four pillars of comprehensive cybersecurity defense
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
            {
              icon: Monitor,
              title: 'monitor-X',
              subtitle: 'SOC/MDR',
              points: ['SIEM integration and correlation', 'UEBA behavioral analytics', 'Incident response consolidation'],
              gradient: 'from-primary-blue/20 to-primary-blue/5'
            },
            {
              icon: Lock,
              title: 'govern-X',
              subtitle: 'Zero-Trust Architecture',
              points: ['NGFW and IPS protection', 'Zero-Trust network access', 'IoT device controls'],
              gradient: 'from-green-500/20 to-green-500/5'
            },
            {
              icon: Search,
              title: 'protect-X',
              subtitle: 'Vulnerability Management',
              points: ['Vulnerability discovery', 'Risk-based prioritization', 'Automated remediation'],
              gradient: 'from-yellow-500/20 to-yellow-500/5'
            },
            {
              icon: GraduationCap,
              title: 'upskill-X',
              subtitle: 'Security Training',
              points: ['Security awareness programs', 'Phishing simulation', 'Compliance training'],
              gradient: 'from-secondary-red/20 to-secondary-red/5'
            }].
            map((solution, index) =>
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}>

                <Card className={`hover-lift h-full bg-gradient-to-br ${solution.gradient} border-white/10 hover:border-primary-blue/50 transition-all duration-300`}>
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-black/30">
                        <solution.icon className="w-8 h-8 text-primary-blue" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-space font-bold">{solution.title}</h3>
                        <p className="text-text-body">{solution.subtitle}</p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {solution.points.map((point, i) =>
                    <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-text-body">{point}</span>
                        </li>
                    )}
                    </ul>

                    <Button className="w-full bg-primary-blue/10 text-primary-blue border border-primary-blue/30 hover:bg-primary-blue hover:text-white">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* SOC Demo Panel */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl font-space font-bold mb-4">
              Interactive <span className="text-primary-blue">SOC Demo</span>
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Experience our security operations center in action
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto">

            <Card className="bg-black/40 border-white/10">
              <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                  <TabsList className="grid w-full grid-cols-3 bg-black/30">
                    <TabsTrigger value="threats" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Threats
                    </TabsTrigger>
                    <TabsTrigger value="assets" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
                      <Server className="w-4 h-4 mr-2" />
                      Assets
                    </TabsTrigger>
                    <TabsTrigger value="playbooks" className="data-[state=active]:bg-primary-blue data-[state=active]:text-white">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Playbooks
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="threats" className="space-y-4">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-3 px-4">ID</th>
                            <th className="text-left py-3 px-4">Severity</th>
                            <th className="text-left py-3 px-4">Source IP</th>
                            <th className="text-left py-3 px-4">Rule</th>
                            <th className="text-left py-3 px-4">Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockData.threats.map((threat) =>
                          <tr key={threat.id} className="border-b border-white/5 hover:bg-white/5">
                              <td className="py-3 px-4 font-mono text-sm">{threat.id}</td>
                              <td className="py-3 px-4">
                                <Badge variant={threat.severity === 'Critical' ? 'destructive' : threat.severity === 'Info' ? 'secondary' : 'default'}>
                                  {threat.severity}
                                </Badge>
                              </td>
                              <td className="py-3 px-4 font-mono text-sm">{threat.srcIP}</td>
                              <td className="py-3 px-4">{threat.rule}</td>
                              <td className="py-3 px-4 text-muted-foreground">{threat.time}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>

                  <TabsContent value="assets" className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      {mockData.assets.map((asset) =>
                      <Card key={asset.type} className="bg-black/20 border-white/10">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-lg font-semibold">{asset.type}</h4>
                              <Badge className="bg-green-500/20 text-green-400">{asset.status}</Badge>
                            </div>
                            <div className="text-3xl font-bold text-primary-blue">{asset.count}</div>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="playbooks" className="space-y-6">
                    {mockData.playbooks.map((playbook) =>
                    <Card key={playbook.name} className="bg-black/20 border-white/10">
                        <CardContent className="p-6">
                          <h4 className="text-xl font-semibold mb-4">{playbook.name}</h4>
                          <ol className="space-y-2">
                            {playbook.steps.map((step, index) =>
                          <li key={index} className="flex items-start space-x-3">
                                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold text-primary-blue bg-primary-blue/20 rounded-full">
                                  {index + 1}
                                </span>
                                <span className="text-text-body">{step}</span>
                              </li>
                          )}
                          </ol>
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Measurable Outcomes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl font-space font-bold mb-4">
              Measurable <span className="text-primary-blue">Outcomes</span>
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Quantifiable results that matter to your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center">

              <div className="text-6xl lg:text-8xl font-bold text-green-400 mb-4">
                ↓{counters.noise}%
              </div>
              <h3 className="text-2xl font-space font-semibold mb-2">Noise Reduction</h3>
              <p className="text-text-body">Eliminate false positives and focus on real threats</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center">

              <div className="text-6xl lg:text-8xl font-bold text-primary-blue mb-4">
                {counters.mttr}m
              </div>
              <h3 className="text-2xl font-space font-semibold mb-2">MTTR</h3>
              <p className="text-text-body">Mean time to response in minutes, not hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center">

              <div className="text-6xl lg:text-8xl font-bold text-yellow-400 mb-4">
                {counters.coverage}%
              </div>
              <h3 className="text-2xl font-space font-semibold mb-2">Unified Visibility</h3>
              <p className="text-text-body">Complete coverage across your attack surface</p>
            </motion.div>
          </div>

          {/* KPIs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8">

            <Card className="bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 border-primary-blue/30">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 text-primary-blue mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-blue mb-2">94.7%</div>
                <div className="text-lg font-semibold mb-1">Coverage</div>
                <p className="text-sm text-text-body">Infrastructure protected</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-green-500/30">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-400 mb-2">99.77%</div>
                <div className="text-lg font-semibold mb-1">Prevention</div>
                <p className="text-sm text-text-body">Threat prevention rate</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary-red/20 to-secondary-red/5 border-secondary-red/30">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-secondary-red mx-auto mb-4" />
                <div className="text-3xl font-bold text-secondary-red mb-2">2.3m</div>
                <div className="text-lg font-semibold mb-1">MTTR</div>
                <p className="text-sm text-text-body">Mean time to response</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl font-space font-bold mb-4">
              Industries We <span className="text-primary-blue">Serve</span>
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Specialized security solutions for critical sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              icon: Building,
              title: 'Finance',
              description: 'Regulatory compliance, fraud prevention, and customer data protection for financial institutions.',
              focus: 'PCI DSS, SOX compliance'
            },
            {
              icon: Heart,
              title: 'Healthcare',
              description: 'HIPAA compliance, patient data security, and medical device protection for healthcare providers.',
              focus: 'HIPAA, medical IoT security'
            },
            {
              icon: Cog,
              title: 'Manufacturing',
              description: 'OT security, supply chain protection, and industrial IoT defense for manufacturers.',
              focus: 'OT/IT convergence, IIoT'
            },
            {
              icon: Cpu,
              title: 'SaaS/Tech',
              description: 'Cloud security, DevSecOps integration, and scalable protection for technology companies.',
              focus: 'Cloud-native security'
            }].
            map((industry, index) =>
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}>

                <Card className="hover-lift h-full bg-card border-white/10 hover:border-primary-blue/50 transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex p-3 rounded-full bg-primary-blue/20">
                      <industry.icon className="w-6 h-6 text-primary-blue" />
                    </div>
                    <h3 className="text-xl font-space font-bold">{industry.title}</h3>
                    <p className="text-text-body text-sm leading-relaxed">{industry.description}</p>
                    <Badge variant="secondary" className="bg-primary-blue/20 text-primary-blue">
                      {industry.focus}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl font-space font-bold mb-4">
              Our Trusted Technology <span className="text-primary-blue">Ecosystem</span>
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Integrated partnerships delivering comprehensive security solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-12">

            {['Microsoft', 'Cisco', 'Palo Alto', 'AWS', 'Fortinet', 'Google Cloud', 'Splunk', 'IBM'].map((partner) =>
            <div key={partner} className="partner-logo hover-lift">
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary-blue/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 flex items-center justify-center">
                      <span className="text-sm font-medium">{partner}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </motion.div>

          <div className="text-center">
            <Button variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
              View All Partners
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Compliance & Assurance */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl font-space font-bold mb-4">
              Compliance & Assurance in <span className="text-primary-blue">APAC</span>
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Meeting regulatory requirements across the Asia-Pacific region
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
            { name: 'Malaysia Cyber Security Act 2024', icon: Award },
            { name: 'NCII', icon: Shield },
            { name: 'ISO 27001', icon: CheckCircle },
            { name: 'SOC 2', icon: Lock }].
            map((compliance, index) =>
            <motion.div
              key={compliance.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}>

                <Card className="hover-lift h-full bg-gradient-to-br from-primary-blue/10 to-transparent border-primary-blue/30">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex p-4 rounded-full bg-primary-blue/20">
                      <compliance.icon className="w-8 h-8 text-primary-blue" />
                    </div>
                    <h3 className="text-lg font-space font-semibold">{compliance.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center">

            <Card className="inline-block bg-yellow-500/10 border-yellow-500/30">
              <CardContent className="p-4">
                <p className="text-sm text-text-body">
                  <strong>Disclaimer:</strong> We provide advisory support for compliance frameworks. 
                  Final compliance validation should be conducted by certified auditors.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Insights & Intelligence */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl font-space font-bold mb-4">
              Insights & <span className="text-primary-blue">Intelligence</span>
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Stay ahead with expert analysis and threat intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
              type: 'Podcast',
              title: 'CISO Roundtable Podcast',
              description: 'Weekly discussions with security leaders across APAC enterprises.',
              tags: ['Weekly', 'Leadership'],
              cta: 'Listen Now',
              icon: PlayCircle
            },
            {
              type: 'Report',
              title: '2025 Threat Landscape Report',
              description: 'Comprehensive analysis of emerging threats and attack vectors.',
              tags: ['Annual', 'Threat Intel'],
              cta: 'Download Report',
              icon: FileText
            },
            {
              type: 'Whitepaper',
              title: 'IoT Security in Manufacturing',
              description: 'Best practices for securing industrial IoT deployments.',
              tags: ['Industry Focus', 'IoT'],
              cta: 'Read Whitepaper',
              icon: Download
            }].
            map((content, index) =>
            <motion.div
              key={content.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}>

                <Card className="hover-lift h-full bg-card border-white/10 hover:border-primary-blue/50 transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <content.icon className="w-6 h-6 text-primary-blue" />
                      <Badge variant="secondary" className="bg-primary-blue/20 text-primary-blue">
                        {content.type}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-space font-bold">{content.title}</h3>
                    <p className="text-text-body">{content.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {content.tags.map((tag) =>
                    <Badge key={tag} variant="outline" className="border-white/20 text-xs">
                          {tag}
                        </Badge>
                    )}
                    </div>
                    <Button className="w-full bg-primary-blue/10 text-primary-blue border border-primary-blue/30 hover:bg-primary-blue hover:text-white">
                      {content.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Enterprise Engagement */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl font-space font-bold mb-4">
              Enterprise <span className="text-primary-blue">Engagement</span>
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Tailored services for enterprise security transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
              title: 'Assessment & Roadmap',
              points: [
              'Security posture evaluation',
              'Gap analysis and recommendations',
              'Strategic implementation roadmap'],

              icon: Target
            },
            {
              title: 'Managed Defense (MDR)',
              points: [
              '24/7 security operations center',
              'Threat hunting and response',
              'Continuous monitoring and alerting'],

              icon: Shield
            },
            {
              title: 'Enablement & Training',
              points: [
              'Security team skill development',
              'Compliance training programs',
              'Incident response workshops'],

              icon: Users
            }].
            map((service, index) =>
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}>

                <Card className="hover-lift h-full bg-card border-white/10 hover:border-primary-blue/50 transition-all duration-300">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-primary-blue/20">
                        <service.icon className="w-8 h-8 text-primary-blue" />
                      </div>
                      <h3 className="text-2xl font-space font-bold">{service.title}</h3>
                    </div>

                    <ul className="space-y-3">
                      {service.points.map((point, i) =>
                    <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-text-body">{point}</span>
                        </li>
                    )}
                    </ul>

                    <Button className="w-full bg-primary-blue hover:bg-primary-blue/90 glow-blue">
                      Talk to Expert
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-space font-bold mb-6">
                Make Habitual Security <span className="text-primary-blue">Real</span>
              </h2>
              <p className="text-xl text-text-body max-w-3xl mx-auto">
                Transform your security posture with enterprise-grade cybersecurity solutions
              </p>
            </div>

            <Card className="bg-gradient-to-br from-primary-blue/10 to-secondary-red/5 border-white/10">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="bg-black/20 border-white/20" />

                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@company.com"
                        className="bg-black/20 border-white/20" />

                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company *</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                        className="bg-black/20 border-white/20" />

                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Endpoints</label>
                      <Input
                        value={formData.endpoints}
                        onChange={(e) => setFormData({ ...formData, endpoints: e.target.value })}
                        placeholder="Number of endpoints"
                        className="bg-black/20 border-white/20" />

                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your security challenges..."
                      rows={4}
                      className="bg-black/20 border-white/20" />

                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="bg-primary-blue hover:bg-primary-blue/90 glow-blue flex-1">
                      Book a Workshop
                    </Button>
                    <Button size="lg" variant="outline" className="border-secondary-red text-secondary-red hover:bg-secondary-red hover:text-white flex-1">
                      Request Proposal
                    </Button>
                  </div>

                  <div className="text-center pt-4">
                    <Button variant="ghost" className="text-text-body hover:text-primary-blue">
                      <Download className="w-4 h-4 mr-2" />
                      Download One-Pager
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-2xl font-space font-bold text-primary-blue">Secure-X</h3>
              <p className="text-text-body">
                Zero-Trust Cyber Defense built for Enterprise Scale
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="p-2 hover:text-primary-blue">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:text-primary-blue">
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:text-primary-blue">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Solutions</h4>
              <ul className="space-y-2 text-text-body">
                <li><a href="#" className="hover:text-primary-blue transition-colors">monitor-X</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">govern-X</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">protect-X</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">upskill-X</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-2 text-text-body">
                <li><a href="#" className="hover:text-primary-blue transition-colors">Assessment</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">Managed Defense</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">Compliance</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-3 text-text-body">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+60 3-xxxx xxxx</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@secure-x.my</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <p className="text-text-body text-sm">
              © 2024 Secure-X. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-text-body hover:text-primary-blue text-sm">Privacy Policy</a>
              <a href="#" className="text-text-body hover:text-primary-blue text-sm">Terms of Service</a>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="ghost" className="text-xs">EN</Button>
                <span className="text-white/20">|</span>
                <Button size="sm" variant="ghost" className="text-xs">MY</Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>);

};

export default CyberSecurityPage;