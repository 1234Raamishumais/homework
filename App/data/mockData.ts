import { addDays, format, setHours, setMinutes, subHours, subMinutes } from 'date-fns';

// Current date (for the app)
const TODAY = new Date('2025-06-29T13:30:37Z');

// Generate sleep stage data
export const sleepStagesData = (() => {
  const data = [];
  let currentTime = subHours(TODAY, 8); // Starting 8 hours ago
  const endTime = subHours(TODAY, 1); // Ending 1 hour ago

  while (currentTime < endTime) {
    // Generate a random sleep stage
    // 0: deep sleep, 1: light sleep, 2: REM, 3: awake
    let stage;
    const hourOfSleep = data.length / 12; // approximate hour of sleep
    
    if (hourOfSleep < 1) {
      // First hour: more likely to be light sleep or awake
      stage = Math.random() > 0.7 ? 3 : 1;
    } else if (hourOfSleep < 3) {
      // Hours 1-3: more deep sleep
      stage = Math.random() > 0.6 ? 0 : 1;
    } else if (hourOfSleep < 5) {
      // Hours 3-5: mix of deep, light, and REM
      const rand = Math.random();
      stage = rand > 0.7 ? 2 : rand > 0.4 ? 1 : 0;
    } else {
      // Later hours: more REM and light sleep
      const rand = Math.random();
      stage = rand > 0.7 ? 2 : rand > 0.2 ? 1 : rand > 0.1 ? 0 : 3;
    }
    
    data.push({
      time: currentTime.toISOString(),
      stage
    });
    
    // Move forward by 5 minutes
    currentTime = addDays(currentTime, 0);
    currentTime.setMinutes(currentTime.getMinutes() + 5);
  }
  
  return data;
})();

// Weekly sleep data
export const weeklySleepData = [
  { day: 'Mon', hours: 7.2, quality: 68 },
  { day: 'Tue', hours: 6.8, quality: 72 },
  { day: 'Wed', hours: 7.5, quality: 85 },
  { day: 'Thu', hours: 6.5, quality: 65 },
  { day: 'Fri', hours: 8.2, quality: 88 },
  { day: 'Sat', hours: 7.8, quality: 82 },
  { day: 'Sun', hours: 7.3, quality: 78 },
];

// Today's sleep metrics
export const todaySleepMetrics = {
  duration: '7h 15m',
  bedtime: '11:30 PM',
  wakeup: '6:45 AM',
  efficiency: 91,
};

// Sleep score (0-100)
export const todaySleepScore = 82;

// Sleep tips
export const sleepTips = [
  "Maintain a consistent sleep schedule, even on weekends, to regulate your body's internal clock.",
  "Create a sleep-friendly environment by keeping your bedroom dark, quiet, and cool (around 65°F or 18°C).",
  "Limit screen time at least 1 hour before bed to reduce blue light exposure, which can suppress melatonin production.",
  "Avoid caffeine in the afternoon and evening, as it can stay in your system for up to 8 hours.",
  "Regular exercise can help you fall asleep faster and enjoy deeper sleep, but try to finish workouts at least 3 hours before bedtime.",
  "Consider a relaxing bedtime routine, such as reading, gentle stretching, or meditation, to signal to your body that it's time to wind down.",
];

// Meditation content
export const meditationContent = [
  {
    title: 'Deep Sleep Meditation',
    duration: '20 min',
    category: 'Sleep',
    imageUrl: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Bedtime Wind Down',
    duration: '15 min',
    category: 'Relaxation',
    imageUrl: 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Anxiety Relief',
    duration: '10 min',
    category: 'Stress',
    imageUrl: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Morning Energizer',
    duration: '8 min',
    category: 'Energy',
    imageUrl: 'https://images.pexels.com/photos/775418/pexels-photo-775418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

// Sleep sounds
export const sleepSounds = [
  {
    title: 'Gentle Rain',
    duration: '∞',
    category: 'Nature',
    imageUrl: 'https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Ocean Waves',
    duration: '∞',
    category: 'Nature',
    imageUrl: 'https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'White Noise',
    duration: '∞',
    category: 'Ambient',
    imageUrl: 'https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Forest Night',
    duration: '∞',
    category: 'Nature',
    imageUrl: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

// Sleep-friendly foods
export const sleepFoods = [
  {
    id: 1,
    name: 'Tart Cherries',
    description: 'Naturally high in melatonin, tart cherries can help regulate sleep cycles and improve sleep quality.',
    benefits: [
      'Contains natural melatonin that regulates sleep cycles',
      'Rich in antioxidants that reduce inflammation',
      'May increase sleep duration and quality'
    ],
    imageUrl: 'https://images.pexels.com/photos/2949140/pexels-photo-2949140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nutrients: ['Melatonin', 'Antioxidants', 'Vitamin C'],
    categories: ['Melatonin-Rich', 'Sleep-Friendly Snacks']
  },
  {
    id: 2,
    name: 'Kiwi Fruit',
    description: 'Studies show eating kiwi before bed may help you fall asleep faster and improve sleep quality.',
    benefits: [
      'Contains serotonin which aids relaxation',
      'Rich in antioxidants and vitamin C',
      'May reduce time to fall asleep by up to 35%'
    ],
    imageUrl: 'https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-sweet-51312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nutrients: ['Serotonin', 'Vitamin C', 'Folate'],
    categories: ['Calming', 'Sleep-Friendly Snacks']
  },
  {
    id: 3,
    name: 'Almonds',
    description: 'These tree nuts contain melatonin and magnesium, two nutrients that promote better sleep quality.',
    benefits: [
      'High in magnesium which improves sleep quality',
      'Contains melatonin to regulate sleep-wake cycles',
      'Healthy fats help maintain stable blood sugar during sleep'
    ],
    imageUrl: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nutrients: ['Magnesium', 'Melatonin', 'Protein'],
    categories: ['Magnesium-Rich', 'Melatonin-Rich']
  },
  {
    id: 4,
    name: 'Turkey',
    description: 'Turkey contains high amounts of tryptophan, an amino acid that increases production of melatonin.',
    benefits: [
      'Rich in tryptophan, which helps produce serotonin and melatonin',
      'Protein helps maintain stable blood sugar during sleep',
      'Contains vitamins B6 and B12 that help regulate sleep patterns'
    ],
    imageUrl: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nutrients: ['Tryptophan', 'Protein', 'B Vitamins'],
    categories: ['Tryptophan', 'Calming']
  },
  {
    id: 5,
    name: 'Chamomile Tea',
    description: 'This herbal tea contains apigenin, an antioxidant that binds to receptors in your brain that promote sleepiness.',
    benefits: [
      'Contains apigenin that binds to GABA receptors in the brain',
      'Reduces anxiety and promotes relaxation',
      'Increases glycine, a nerve relaxant that acts as a mild sedative'
    ],
    imageUrl: 'https://images.pexels.com/photos/5501172/pexels-photo-5501172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nutrients: ['Apigenin', 'Flavonoids', 'Antioxidants'],
    categories: ['Calming', 'Sleep-Friendly Snacks']
  },
  {
    id: 6,
    name: 'Bananas',
    description: 'Bananas contain potassium and magnesium which relax muscles, and vitamin B6 which helps produce melatonin.',
    benefits: [
      'Rich in magnesium and potassium that relax muscles',
      'Contains vitamin B6 that helps convert tryptophan to serotonin',
      'Natural source of carbohydrates that can make you sleepy'
    ],
    imageUrl: 'https://images.pexels.com/photos/1166648/pexels-photo-1166648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nutrients: ['Magnesium', 'Potassium', 'Vitamin B6'],
    categories: ['Magnesium-Rich', 'Sleep-Friendly Snacks']
  },
  {
    id: 7,
    name: 'Fatty Fish',
    description: 'Salmon, tuna, and mackerel are high in vitamin D and omega-3 fatty acids, which improve sleep quality.',
    benefits: [
      'Omega-3 fatty acids increase production of serotonin',
      'Vitamin D has been linked to better sleep quality',
      'Protein helps keep blood sugar stable during sleep'
    ],
    imageUrl: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nutrients: ['Omega-3', 'Vitamin D', 'Protein'],
    categories: ['Tryptophan', 'Calming']
  },
  {
    id: 8,
    name: 'Warm Milk',
    description: 'A traditional remedy for sleeplessness, milk contains tryptophan, calcium, and vitamin D.',
    benefits: [
      'Contains tryptophan which helps produce melatonin',
      'Calcium helps the brain use tryptophan to manufacture melatonin',
      'The ritual of drinking warm milk can be psychologically soothing'
    ],
    imageUrl: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nutrients: ['Tryptophan', 'Calcium', 'Vitamin D'],
    categories: ['Tryptophan', 'Calming', 'Sleep-Friendly Snacks']
  },
  {
    id: 9,
    name: 'Walnuts',
    description: 'These tree nuts are one of the best food sources of melatonin, which regulates your sleep cycle.',
    benefits: [
      'Naturally contain melatonin to help regulate sleep',
      'Rich in magnesium which improves sleep quality',
      'Healthy fats help reduce inflammation and stress'
    ],
    imageUrl: 'https://images.pexels.com/photos/5649171/pexels-photo-5649171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nutrients: ['Melatonin', 'Magnesium', 'Omega-3'],
    categories: ['Melatonin-Rich', 'Magnesium-Rich', 'Sleep-Friendly Snacks']
  }
];
