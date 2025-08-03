import Head from 'next/head';
import PricingPlans from '../components/PricingPlans';

export default function Pricing() {
  const plans = [
    {
      title: 'Free',
      price: '$0',
      period: '/ month',
      features: [
        'Smart Job Board access',
        'Smart Feed Filters',
        'Private Profile Notes',
        'Custom Profile Themes',
        'Ethical Data Use',
        'TrueEndorse Endorsements',
      ],
      featured: false,
    },
    {
      title: 'Job Seeker',
      price: '$29.99',
      period: '/ month',
      features: [
        '5 InMail credits per month',
        'See who viewed your profile (last year)',
        'Open Profiles',
        'Top Applicant Job Recommendations',
        'Company Insights',
        'Resume Insights',
        'Access to 22,000+ Learning Courses',
        'Full Interview Prep Tools',
      ],
      featured: true,
    },
    {
      title: 'Coaches / Mentors',
      price: '$29.99',
      period: '/ month',
      features: [
        '5 InMail credits per month',
        'See who viewed your profile (last year)',
        'Open Profiles',
        'Top Applicant Job Recommendations',
        'Company Insights',
        'Resume Insights',
        'Access to 22,000+ Learning Courses',
        'Full Interview Prep Tools',
      ],
      featured: false,
    },
    {
      title: 'Small Business',
      price: '$34.99',
      period: '/ month',
      features: [
        '15 InMail credits per month',
        'Unlimited people browsing',
        'See who viewed your profile (last year)',
        'Open Profiles',
        'Top Applicant Job Recommendations',
        'Company Insights',
        'Resume Insights',
        'Access to 22,000+ Learning Courses',
        'Full Interview Prep Tools',
      ],
      featured: false,
    },
    {
      title: 'Enterprise Business',
      price: '$34.99',
      period: '/ month',
      features: [
        '15 InMail credits per month',
        'Unlimited people browsing',
        'See who viewed your profile (last year)',
        'Open Profiles',
        'Top Applicant Job Recommendations',
        'Company Insights',
        'Resume Insights',
        'Access to 22,000+ Learning Courses',
        'Full Interview Prep Tools',
      ],
      featured: false,
    },
  ];

  return (
    <>
      <Head>
        <title>ForgeTomorrow - Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto p-6 space-y-12 min-h-[80vh] bg-[#ECEFF1] text-[#212121]">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-[#FF7043] mb-4">Choose Your Plan</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Flexible pricing designed to fit your needs — whether you're just starting out or scaling your hiring.
          </p>
        </section>

        <PricingPlans plans={plans} />
      </main>
    </>
  );
}
