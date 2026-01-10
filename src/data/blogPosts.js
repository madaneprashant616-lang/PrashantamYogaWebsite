import { FileText, Play, BookOpen, Heart, Sun, Moon } from 'lucide-react';

export const blogPosts = [
    {
        id: 1,
        type: 'article',
        icon: FileText,
        title: '5 Breathing Techniques to Instantly Reduce Stress',
        excerpt: 'Discover powerful pranayama techniques that you can use anywhere, anytime to calm your nervous system and reduce stress hormones naturally.',
        content: `
      <p>Stress is an inevitable part of modern life, but how we respond to it makes all the difference. Pranayama, or yogic breath control, offers accessible tools to shift your nervous system from "fight or flight" to "rest and digest" in just a few minutes.</p>
      
      <h3>1. Box Breathing (Sama Vritti)</h3>
      <p>Used by Navy SEALs for focus, this technique involves inhaling, holding, exhaling, and holding for equal counts (usually 4 seconds). It regulates the autonomic nervous system and brings immediate calm.</p>

      <h3>2. Alternate Nostril Breathing (Nadi Shodhana)</h3>
      <p>This balancing practice purifies the subtle energy channels. By breathing through one nostril at a time, you balance the left and right hemispheres of the brain, promoting mental clarity and emotional stability.</p>

      <h3>3. Ocean Breath (Ujjayi)</h3>
      <p>Often used during asana practice, Ujjayi involves a slight constriction of the throat, creating a soothing sound like ocean waves. This audible breath gives the mind a focal point and warms the body from within.</p>
      
      <p>Start with just 5 minutes a day to see a noticeable difference in your stress levels and overall well-being.</p>
    `,
        author: 'Prashant Madane',
        role: 'Lead Instructor',
        date: 'Jan 15, 2024',
        readTime: '5 min read',
        category: 'Stress Management',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        tags: ['Pranayama', 'Stress Relief', 'Mental Health'],
        featured: true
    },
    {
        id: 2,
        type: 'video',
        icon: Play,
        title: 'Morning Yoga Routine for Mental Clarity',
        excerpt: 'Start your day with this 15-minute energizing sequence designed to boost mental clarity, improve focus, and set positive intentions.',
        content: `
      <p>How you start your morning sets the tone for the entire day. This 15-minute sequence is designed to wake up your body, stimulate your mind, and prepare you for a productive day ahead.</p>
      
      <h3>Key Poses in this Sequence:</h3>
      <ul>
        <li><strong>Cat-Cow Stretches:</strong> Gently warms up the spine.</li>
        <li><strong>Sun Salutations (Surya Namaskar A):</strong> Builds heat and energy.</li>
        <li><strong>Warrior II (Virabhadrasana II):</strong> Builds focus and determination.</li>
        <li><strong>Tree Pose (Vrksasana):</strong> Improves balance and concentration.</li>
      </ul>
      
      <p>Practice this routine on an empty stomach for best results. Remember to listen to your body and modify poses as needed.</p>
    `,
        author: 'Prashant Madane',
        role: 'Lead Instructor',
        date: 'Jan 12, 2024',
        readTime: '15 min video',
        category: 'Morning Practice',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        tags: ['Morning Routine', 'Energy', 'Focus'],
        featured: false
    },
    {
        id: 3,
        type: 'article',
        icon: FileText,
        title: 'Understanding Burnout: Signs, Symptoms & Solutions',
        excerpt: 'Learn to recognize the early warning signs of burnout and discover how therapeutic yoga can help restore your energy and enthusiasm for life.',
        content: `
      <p>Burnout isn't just about working too hard; it's a state of emotional, physical, and mental exhaustion caused by prolonged stress. It occurs when you feel overwhelmed, emotionally drained, and unable to meet constant demands.</p>
      
      <h3>Signs You Might Be burnt Out:</h3>
      <ul>
        <li>Chronic fatigue and insomnia</li>
        <li>Forgetfulness and impaired concentration</li>
        <li>Increased irritability</li>
        <li>Loss of appetite or overeating</li>
      </ul>
      
      <h3>How Yoga Helps</h3>
      <p>Therapeutic yoga addresses burnout by resetting the nervous system. Restorative poses, in particular, allow the body to drop into a state of deep relaxation where true healing can occur. Combined with mindfulness, yoga helps you reconnect with your needs and establish healthier boundaries.</p>
    `,
        author: 'Prashant Madane',
        role: 'Lead Instructor',
        date: 'Jan 10, 2024',
        readTime: '8 min read',
        category: 'Burnout Recovery',
        image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        tags: ['Burnout', 'Recovery', 'Self-Care'],
        featured: false
    },
    {
        id: 4,
        type: 'guide',
        icon: BookOpen,
        title: 'Complete Guide to Yoga Nidra for Better Sleep',
        excerpt: 'Everything you need to know about yoga nidra - the powerful practice that can transform your sleep quality and help with insomnia.',
        content: `
      <p>Yoga Nidra, or "yogic sleep," is a state of consciousness between waking and sleeping. It is a systematic method of inducing complete physical, mental, and emotional relaxation.</p>
      
      <h3>Benefits of Yoga Nidra:</h3>
      <p>Research suggests that one hour of Yoga Nidra can be as restorative as four hours of regular sleep. It creates a state of deep relaxation that releases tension and promotes the production of melatonin.</p>
      
      <h3>How to Practice:</h3>
      <p>Lie down in Savasana (Corpse Pose). Follow a guided recording that rotates your awareness through different parts of the body. The goal is to remain awake while your body sleeps.</p>
    `,
        author: 'Prashant Madane',
        role: 'Lead Instructor',
        date: 'Jan 08, 2024',
        readTime: '12 min read',
        category: 'Sleep & Recovery',
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        tags: ['Sleep', 'Yoga Nidra', 'Insomnia'],
        featured: false
    },
    {
        id: 5,
        type: 'article',
        icon: Moon,
        title: 'How Yoga Rewires Your Brain for Happiness',
        excerpt: 'Explore the fascinating science behind how regular yoga practice literally changes your brain structure to promote mental wellness.',
        content: `
      <p>Neuroplasticity is the brain's ability to reorganize itself by forming new neural connections. Regular yoga practice has been shown to increase the volume of the hippocampus (associated with memory) and the prefrontal cortex (associated with emotional regulation).</p>
      
      <p>Yoga increases the level of GABA, a neurotransmitter that promotes calmness and relaxation. By consistently practicing, you are training your brain to remain calm under pressure and to default to a state of contentment rather than anxiety.</p>
    `,
        author: 'Prashant Madane',
        role: 'Lead Instructor',
        date: 'Jan 05, 2024',
        readTime: '10 min read',
        category: 'Mental Health',
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        tags: ['Neuroscience', 'Happiness', 'Mental Health'],
        featured: false
    },
    {
        id: 6,
        type: 'video',
        icon: Play,
        title: '10-Minute Desk Yoga for Office Workers',
        excerpt: 'Perfect for busy professionals - simple yoga stretches you can do right at your desk to relieve tension and reduce work-related stress.',
        content: `
      <p>Sitting for long periods can lead to tight hips, back pain, and "tech neck." This short sequence can be done in your work clothes, right at your desk.</p>
      
      <h3>Desk Yoga Poses:</h3>
      <ul>
        <li><strong>Seated Cat-Cow:</strong> Arch and round your spine while sitting.</li>
        <li><strong>Seated Twist:</strong> Gently twist to the right and left.</li>
        <li><strong>Neck Rolls:</strong> Release tension in the neck and shoulders.</li>
        <li><strong>Wrist Stretches:</strong> Essential for keyboard users.</li>
      </ul>
    `,
        author: 'Prashant Madane',
        role: 'Lead Instructor',
        date: 'Jan 03, 2024',
        readTime: '10 min video',
        category: 'Workplace Wellness',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        tags: ['Office Yoga', 'Wellness', 'Posture'],
        featured: false
    }
];
