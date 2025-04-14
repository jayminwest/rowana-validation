import type { Metadata } from "next";
import LandingPage from "@/components/landing-page";

// Define the JSON-LD schema object
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CogniFlow AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "CogniFlow AI automatically generates concise, actionable summaries and identifies key topics from your sales call recordings, eliminating manual review.",
  featureList: [
    "AI-Powered Summarization",
    "Automatic Topic Extraction",
    "Actionable Insights",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "B2B SaaS sales teams",
    description:
      "Designed for B2B SaaS sales teams, sales managers, and revenue operations professionals looking to maximize the value of their customer conversations.",
  },
  provider: {
    "@type": "Organization",
    name: "CogniFlow AI",
    description:
      "CogniFlow AI is an early-stage startup dedicated to applying artificial intelligence to solve real-world business communication challenges.",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        "addressLocality": "Seattle",
        "addressRegion": "WA",
        "addressCountry": "US",
      },
    },
    email: "info@cogniflow.ai",
    knowsAbout: {
      "@type": "Thing",
      name: "Sales Call Analysis",
      description:
        "Solving the problem of sales teams wasting countless hours manually listening to and summarizing lengthy call recordings.",
    },
  },
  potentialAction: {
    "@type": "Action",
    name: "Request Early Access",
    target: {
      "@type": "EntryPoint",
      "urlTemplate": "#", // Use the actual URL when available
    },
  },
};

// Export metadata including the JSON-LD script
export const metadata: Metadata = {
  // You can add other metadata fields here like title, description, etc.
  // title: "CogniFlow AI - Experimental",
  // description: "Experimental page for CogniFlow AI with structured data.",
  other: {
    // Inject the JSON-LD script into the head
    "application-ld+json": JSON.stringify(jsonLd),
  },
};

export default function ExperimentalPage() {
  return <LandingPage />;
}
