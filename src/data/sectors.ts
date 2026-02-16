import { Code2, Building2, HeartPulse, Landmark, ShoppingCart, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Sector {
  slug: string;
  icon: LucideIcon;
  color: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
  stat1ValueKey: string;
  stat1LabelKey: string;
  stat2ValueKey: string;
  stat2LabelKey: string;
  pain1Key: string;
  pain2Key: string;
  pain3Key: string;
  solution1Key: string;
  solution2Key: string;
  solution3Key: string;
}

export const sectors: Sector[] = [
  {
    slug: 'saas',
    icon: Code2,
    color: '#007AFF',
    titleKey: 'sectors.saas.title',
    subtitleKey: 'sectors.saas.subtitle',
    descKey: 'sectors.saas.desc',
    stat1ValueKey: 'sectors.saas.stat1Value',
    stat1LabelKey: 'sectors.saas.stat1Label',
    stat2ValueKey: 'sectors.saas.stat2Value',
    stat2LabelKey: 'sectors.saas.stat2Label',
    pain1Key: 'sectors.saas.pain1',
    pain2Key: 'sectors.saas.pain2',
    pain3Key: 'sectors.saas.pain3',
    solution1Key: 'sectors.saas.solution1',
    solution2Key: 'sectors.saas.solution2',
    solution3Key: 'sectors.saas.solution3',
  },
  {
    slug: 'real-estate',
    icon: Building2,
    color: '#FF9500',
    titleKey: 'sectors.realEstate.title',
    subtitleKey: 'sectors.realEstate.subtitle',
    descKey: 'sectors.realEstate.desc',
    stat1ValueKey: 'sectors.realEstate.stat1Value',
    stat1LabelKey: 'sectors.realEstate.stat1Label',
    stat2ValueKey: 'sectors.realEstate.stat2Value',
    stat2LabelKey: 'sectors.realEstate.stat2Label',
    pain1Key: 'sectors.realEstate.pain1',
    pain2Key: 'sectors.realEstate.pain2',
    pain3Key: 'sectors.realEstate.pain3',
    solution1Key: 'sectors.realEstate.solution1',
    solution2Key: 'sectors.realEstate.solution2',
    solution3Key: 'sectors.realEstate.solution3',
  },
  {
    slug: 'healthcare',
    icon: HeartPulse,
    color: '#FF2D55',
    titleKey: 'sectors.healthcare.title',
    subtitleKey: 'sectors.healthcare.subtitle',
    descKey: 'sectors.healthcare.desc',
    stat1ValueKey: 'sectors.healthcare.stat1Value',
    stat1LabelKey: 'sectors.healthcare.stat1Label',
    stat2ValueKey: 'sectors.healthcare.stat2Value',
    stat2LabelKey: 'sectors.healthcare.stat2Label',
    pain1Key: 'sectors.healthcare.pain1',
    pain2Key: 'sectors.healthcare.pain2',
    pain3Key: 'sectors.healthcare.pain3',
    solution1Key: 'sectors.healthcare.solution1',
    solution2Key: 'sectors.healthcare.solution2',
    solution3Key: 'sectors.healthcare.solution3',
  },
  {
    slug: 'fintech',
    icon: Landmark,
    color: '#5856D6',
    titleKey: 'sectors.fintech.title',
    subtitleKey: 'sectors.fintech.subtitle',
    descKey: 'sectors.fintech.desc',
    stat1ValueKey: 'sectors.fintech.stat1Value',
    stat1LabelKey: 'sectors.fintech.stat1Label',
    stat2ValueKey: 'sectors.fintech.stat2Value',
    stat2LabelKey: 'sectors.fintech.stat2Label',
    pain1Key: 'sectors.fintech.pain1',
    pain2Key: 'sectors.fintech.pain2',
    pain3Key: 'sectors.fintech.pain3',
    solution1Key: 'sectors.fintech.solution1',
    solution2Key: 'sectors.fintech.solution2',
    solution3Key: 'sectors.fintech.solution3',
  },
  {
    slug: 'ecommerce',
    icon: ShoppingCart,
    color: '#34C759',
    titleKey: 'sectors.ecommerce.title',
    subtitleKey: 'sectors.ecommerce.subtitle',
    descKey: 'sectors.ecommerce.desc',
    stat1ValueKey: 'sectors.ecommerce.stat1Value',
    stat1LabelKey: 'sectors.ecommerce.stat1Label',
    stat2ValueKey: 'sectors.ecommerce.stat2Value',
    stat2LabelKey: 'sectors.ecommerce.stat2Label',
    pain1Key: 'sectors.ecommerce.pain1',
    pain2Key: 'sectors.ecommerce.pain2',
    pain3Key: 'sectors.ecommerce.pain3',
    solution1Key: 'sectors.ecommerce.solution1',
    solution2Key: 'sectors.ecommerce.solution2',
    solution3Key: 'sectors.ecommerce.solution3',
  },
  {
    slug: 'consulting',
    icon: Briefcase,
    color: '#AF52DE',
    titleKey: 'sectors.consulting.title',
    subtitleKey: 'sectors.consulting.subtitle',
    descKey: 'sectors.consulting.desc',
    stat1ValueKey: 'sectors.consulting.stat1Value',
    stat1LabelKey: 'sectors.consulting.stat1Label',
    stat2ValueKey: 'sectors.consulting.stat2Value',
    stat2LabelKey: 'sectors.consulting.stat2Label',
    pain1Key: 'sectors.consulting.pain1',
    pain2Key: 'sectors.consulting.pain2',
    pain3Key: 'sectors.consulting.pain3',
    solution1Key: 'sectors.consulting.solution1',
    solution2Key: 'sectors.consulting.solution2',
    solution3Key: 'sectors.consulting.solution3',
  },
];
