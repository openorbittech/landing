export const defaultKeywords = [
    "software development agency",
    "custom software development",
    "web application development",
    "mobile app development",
    "enterprise software solutions",
    "cloud solutions",
    "AI integration",
    "machine learning development",
    "blockchain development",
    "IoT solutions",
    "digital transformation",
    "SaaS development",
    "MVP development",
    "React development",
    "Next.js development",
    "Node.js development",
    "full stack development",
    "API development",
    "DevOps services",
    "UI UX design",
    "software consulting",
    "agile development",
    "custom web development",
    "mobile development company",
    "app development agency",
    "software engineering services",
];

export const siteUrl = "https://openorbit.tech";
export const siteName = "OpenOrbit";

export interface SEOProps {
    title: string;
    description: string;
    image: string;
    canonicalUrl: string;
    author: string;
    article: boolean;
    publishDate?: string;
    modifiedDate?: string;
    section: string;
    keywords: string[];
    structuredData?: any;
}

export function generateSEOData(props: SEOProps) {
    const {
        title,
        description,
        image,
        canonicalUrl,
        author,
        article,
        publishDate,
        modifiedDate,
        section,
        keywords,
        structuredData = [],
    } = props;

    const allKeywords = [...defaultKeywords, ...keywords].join(", ");

    // Comprehensive Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        alternateName: "OpenOrbit Software Development",
        url: siteUrl,
        logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/logod/openorbitlogo.svg`,
            width: 512,
            height: 512,
            caption: "OpenOrbit Logo",
        },
        image: {
            "@type": "ImageObject",
            url: image,
            width: 1200,
            height: 630,
        },
        description: description,
        foundingDate: "2012",
        founders: [
            {
                "@type": "Person",
                name: "OpenOrbit Team",
            },
        ],
        address: {
            "@type": "PostalAddress",
            addressCountry: "US",
            addressLocality: "San Francisco",
            addressRegion: "CA",
        },
        contactPoint: [
            {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "contact@openorbit.tech",
                availableLanguage: ["English"],
                contactOption: "TollFree",
                areaServed: "Worldwide",
            },
            {
                "@type": "ContactPoint",
                contactType: "technical support",
                email: "contact@openorbit.tech",
                availableLanguage: ["English"],
            },
        ],
        sameAs: [
            "https://x.com/OpenOrbitTech",
            "https://linkedin.com/company/openorbit-tech",
            "https://github.com/openorbittech/",
            "https://instagram.com/openorbittech",
            // TODO: Add other social media links
            // "https://www.crunchbase.com/organization/openorbit",
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Software Development Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Web Application Development",
                        description:
                            "Custom web applications built with React, Next.js, and modern frameworks",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Mobile App Development",
                        description:
                            "Native iOS, Android, and cross-platform React Native apps",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Cloud Solutions",
                        description: "AWS, GCP, Azure cloud architecture and DevOps services",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "AI & Machine Learning",
                        description:
                            "Custom AI solutions, ML models, and intelligent automation",
                    },
                },
            ],
        },
        // aggregateRating: {
        //     "@type": "AggregateRating",
        //     ratingValue: "4.9",
        //     reviewCount: "150",
        //     bestRating: "5",
        //     worstRating: "1",
        // },
        makesOffer: [
            {
                "@type": "Offer",
                name: "Free Technical Consultation",
                description:
                    "Complimentary 30-minute technical consultation for new projects",
            },
        ],
    };

    // Local Business Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#localbusiness`,
        name: `${siteName} - Software Development Agency`,
        image: image,
        url: siteUrl,
        // telephone: "+91-9876543210",
        email: "contact@openorbit.tech",
        // priceRange: "$$$",
        currenciesAccepted: "USD, EUR, GBP",
        paymentAccepted: "Credit Card, Wire Transfer, Cryptocurrency, UPI",
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
                timeZone: "Asia/Kolkata",
            },
        ],
        areaServed: [
            {
                "@type": "Place",
                name: "Global",
            },
        ],
    };

    // WebSite Schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: description,
        publisher: {
            "@id": `${siteUrl}/#organization`,
        },
        potentialAction: [
            {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${siteUrl}/search?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
            },
        ],
    };

    // WebPage Schema
    const webpageSchema = {
        "@context": "https://schema.org",
        "@type": article ? "Article" : "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        headline: title,
        description: description,
        image: image,
        inLanguage: "en-US",
        isPartOf: {
            "@id": `${siteUrl}/#website`,
        },
        about: {
            "@id": `${siteUrl}/#organization`,
        },
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: image,
        },
        ...(article && {
            author: {
                "@type": "Organization",
                name: author,
                url: siteUrl,
            },
            publisher: {
                "@id": `${siteUrl}/#organization`,
            },
            datePublished: publishDate,
            dateModified: modifiedDate || publishDate,
            articleSection: section,
        }),
    };

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What services does OpenOrbit offer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "OpenOrbit offers comprehensive software development services including web application development, mobile app development, cloud solutions, and AI integration.",
                },
            },
        ],
    };

    // Service Schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
            {
                "@type": "Service",
                name: "Custom Web Development",
                description: "Enterprise-grade web applications using React, Next.js, and Node.js.",
                provider: {
                    "@id": `${siteUrl}/#organization`,
                },
            },
        ],
    };

    const allSchemas = [
        organizationSchema,
        localBusinessSchema,
        websiteSchema,
        webpageSchema,
        faqSchema,
        serviceSchema,
        ...(Array.isArray(structuredData) ? structuredData : [structuredData]),
    ].filter(Boolean);

    return {
        allKeywords,
        jsonLdScript: `<script type="application/ld+json">${JSON.stringify(allSchemas)}</script>`,
    };
}
