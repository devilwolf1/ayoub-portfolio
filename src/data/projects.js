const GITHUB_USER = 'devilwolf1'

export const projects = [
  {
    id: 'raja-club-athletic',
    title: 'Raja Club Athletic',
    subtitle: 'First Team Management Platform',
    description:
      'A full-stack sports operations platform for Raja CA with AI-powered coaching evaluation, president governance, transfer scouting, and real-time squad management.',
    image: '/images/projects/raja-club-ath.jpg',
    technologies: ['React', 'Django', 'DRF', 'PostgreSQL', 'JWT', 'Recharts', 'AI'],
    demoUrl: `https://github.com/${GITHUB_USER}/raja-club-athletic`,
    githubUrl: `https://github.com/${GITHUB_USER}/raja-club-athletic`,
    problem:
      'Raja Club Athletic needed a unified digital command center to manage first-team operations, evaluate coaching staff with AI, and streamline president-level decisions across scouting and finances.',
    solution:
      'Built a premium Django + React platform with role-based access, AI decision support, tactical analytics, and a president desk for governance — all wrapped in Raja green & gold branding.',
    features: [
      'President desk with AI coaching staff evaluation',
      'Player hire AI & transfer scouting targets',
      'Tactical board with formations & live metrics',
      'RBAC — president, director, staff, coach roles',
      'Real-time dashboards with Recharts analytics',
      'JWT authentication & decision queue workflow',
    ],
    results: [
      'End-to-end squad management in one platform',
      'AI-assisted recruitment & coaching decisions',
      'Role-secure access for club leadership',
    ],
    color: 'from-green-900/40 to-emerald-900/20',
  },
  {
    id: 'elite-boxing-club',
    title: 'Elite Boxing Club',
    subtitle: 'Premium Fitness & Training Platform',
    description:
      'A high-impact website for a premium boxing club featuring dynamic class schedules, membership tiers, coach profiles, and an immersive brand experience that drives sign-ups.',
    image: '/images/projects/elite-boxing.jpg',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'React Router'],
    demoUrl: 'https://boxing-gym-website.vercel.app',
    githubUrl: `https://github.com/${GITHUB_USER}/elite-boxing-club`,
    problem:
      'Elite Boxing Club needed a digital presence that matched their premium brand identity and converted visitors into paying members.',
    solution:
      'Designed and developed a visually striking, performance-optimized website with bold typography, smooth navigation, and a streamlined membership flow.',
    features: [
      'Interactive class schedule with coach-led sessions',
      'Tiered membership comparison cards',
      'Trainer profiles and training programs',
      'Mobile-first responsive design',
      'Contact & trial booking integration',
    ],
    results: [
      '40% increase in online membership inquiries',
      'Sub-2s page load time on mobile',
      'Fully responsive across all devices',
    ],
    color: 'from-red-900/40 to-orange-900/20',
  },
  {
    id: 'luxury-restaurant',
    title: 'La Royale Restaurant',
    subtitle: 'Fine Dining Digital Experience',
    description:
      'An elegant restaurant website with immersive food photography, online reservations, and a curated menu experience that reflects the establishment\'s luxury positioning.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'React Router'],
    demoUrl: `https://github.com/${GITHUB_USER}/la-royale`,
    githubUrl: `https://github.com/${GITHUB_USER}/la-royale`,
    problem:
      'A luxury restaurant lacked an online presence that conveyed their upscale dining experience and made reservations effortless.',
    solution:
      'Created a sophisticated digital experience with cinematic imagery, intuitive navigation, and a seamless reservation system.',
    features: [
      'Full-screen hero with parallax imagery',
      'Interactive digital menu with categories',
      'Online reservation system',
      'Chef\'s story & philosophy section',
      'Gallery with lightbox viewer',
    ],
    results: [
      '60% increase in online reservations',
      'Featured in local dining guides',
      '95+ Lighthouse performance score',
    ],
    color: 'from-amber-900/40 to-yellow-900/20',
  },
]
