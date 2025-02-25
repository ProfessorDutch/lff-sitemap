import { Briefcase, Scale, Clock, Users, FileText, Award, Shield } from 'lucide-react';

export const services = [
  {
    icon: Scale,
    title: 'Affordable Legal Access',
    description: 'Gain access to skilled attorneys with financing options designed to fit your budget.'
  },
  {
    icon: Shield,
    title: 'Your Rights, Secured',
    description: 'Flexible payment plans empower you to protect your rights without financial strain.'
  },
  {
    icon: Clock,
    title: 'Faster Resolutions',
    description: 'Financing options help you start your case sooner, leading to timely outcomes.'
  },
  {
    icon: Users,
    title: 'Support Tailored to You',
    description: 'Payment plans that work for you ensure you stay focused on your case, not the costs.'
  },
  {
    icon: FileText,
    title: 'Simple, Clear Options',
    description: 'We simplify legal fees with financing solutions that are easy to understand and accept.'
  },
  {
    icon: Award,
    title: 'Life-Changing Results',
    description: 'Empower yourself to pursue justice with flexible payment plans that make it possible.'
  }
] as const;