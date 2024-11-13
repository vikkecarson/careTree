# chatGPT config json

{
  "appName": "careTree",
  "description": "A mutual aid model combining flexible contributions with needs-based sharing, vetted and unvetted, by the community. Designed to prevent dependency and encourage collective care, supported by decentralized technology.",
  "modelOption": "Option 1: Circle of Care Fund (or CareTree)",
  "coreElements": {
    "contributions": {
      "type": "Flexible Contributions (Core Contribution Model)",
      "description": "Members contribute what they can, when they can, with the option to set up scheduled contributions. This ensures that members can support the fund without creating dependency or financial pressure."
    },
    "aidRequests": {
      "type": "Needs-Based Sharing with Pay It Forward",
      "description": "Community members submit requests for aid, which can be either vetted or unvetted based on the amount and urgency of the request. Approved aid recipients are encouraged to 'pay it forward' by contributing back when they’re able, creating a cycle of community support and fund longevity.",
      "requestTypes": [
        {
          "type": "Vetted Requests",
          "description": "Requests above a certain threshold amount are reviewed by the community through a DAO voting process. This ensures that larger aid requests are allocated transparently and fairly."
        },
        {
          "type": "Unvetted Requests (FuckHSL Model)",
          "description": "Requests below a set threshold are funded through small, fixed contributions from multiple members without a formal voting process. This approach allows for fast, low-commitment support on small, urgent needs, like transit fines or minor bills."
        }
      ]
    }
  },
  "frontEnd": {
    "framework": "React Native",
    "tools": [
      {
        "name": "Expo",
        "description": "A toolchain for React Native that simplifies development and deployment processes."
      },
      {
        "name": "Redux",
        "description": "A state management library to handle complex data flows and maintain consistent app state."
      },
      {
        "name": "Axios",
        "description": "A promise-based HTTP client for making requests to the back-end, ideal for API interactions."
      }
    ],
    "authentication": "Internet Identity for secure, blockchain-based user login",
    "userFeatures": [
      "Hybrid funding model with communal ('Octopus Model') as primary and peer-to-peer (future option)",
      "Bank integration and/or stablecoin option",
      "Real-time updates for fund tracking and requests"
    ],
    "library": {
      "description": "An in-app section providing educational resources about community aid, leftism, and radical approaches to mutual aid.",
      "content": [
        {
          "type": "Articles",
          "topics": ["Community Organizing", "Leftist Theory", "Mutual Aid History"],
          "exampleTitles": ["Introduction to Mutual Aid", "Basics of Community Organizing", "Exploring Leftist Movements"]
        },
        {
          "type": "Books",
          "recommendations": [
            {
              "title": "Mutual Aid: A Factor of Evolution",
              "author": "Peter Kropotkin"
            },
            {
              "title": "The Dispossessed",
              "author": "Ursula K. Le Guin"
            },
            {
              "title": "Pedagogy of the Oppressed",
              "author": "Paulo Freire"
            }
          ]
        },
        {
          "type": "Guides",
          "focusAreas": ["How to Start Mutual Aid Groups", "Community Resource Mapping", "Fundraising for Mutual Aid"]
        }
      ]
    }
  },
  "backEnd": {
    "platform": "Internet Computer (ICP)",
    "canisters": {
      "description": "Handles app logic, transactions, and user data.",
      "language": "Motoko"
    },
    "smartContracts": {
      "type": "ICP-based smart contracts",
      "fundManagement": "Focus on the communal fund model ('Octopus Model') with peer-to-peer planned for future development."
    }
  },
  "integration": {
    "paymentOptions": [
      "Bank integration via payment processors",
      "Stablecoin (EURS)"
    ],
    "description": "Payment integration as an 'and/or' choice for flexible funding options.",
    "agentLibrary": "Agent JS for front-end-back-end communication"
  },
  "testing": {
    "e2e": {
      "tool": "Cypress",
      "description": "End-to-end testing framework to automate user flow testing on the front-end."
    }
  },
  "documentation": {
    "platform": "GitHub Wiki",
    "features": [
      "Centralized project documentation",
      "Phase-based development documentation",
      "Technical references and user guides"
    ]
  },
  "collaboration": {
    "platform": "GitHub Projects",
    "features": [
      "Project board for tracking tasks and phases",
      "Kanban workflow for managing project status",
      "Task assignment and high-level goal tracking"
    ]
  },
  "aiAssistance": {
    "coding": {
      "tool": "GitHub Copilot",
      "description": "AI-powered code assistant to help generate boilerplate code and refactor efficiently."
    }
  },
  "additionalFeatures": {
    "transparencyDashboard": {
      "description": "Displays contributions, requests, and the flow of funds to maintain transparency and trust within the community."
    },
    "communityFundBooster": {
      "description": "An option for external supporters to contribute to the fund, strengthening its resources while preserving its community-centered approach."
    },
    "communityPulse": {
      "description": "A feedback mechanism that allows members to participate in periodic check-ins, providing input on fund policies, governance processes, and community needs to ensure continuous alignment with community values."
    }
  },
  "governanceModels": {
    "currentGovernanceModel": {
      "description": "A structured governance model with equal voting access for all members, a voluntary advisory council, and anonymized contribution tracking.",
      "elements": [
        {
          "type": "Flat Decision-Making Access",
          "description": "All members have equal voting rights on fund-related requests, regardless of contribution level, ensuring democratic and inclusive governance."
        },
        {
          "type": "Voluntary Council with Fixed Terms",
          "description": "A council of volunteers serves for set terms in advisory, non-binding roles. The council handles appeals, facilitates discussion, and provides guidance without holding exclusive decision-making power."
        },
        {
          "type": "Anonymized Contribution Tracking",
          "description": "Contribution amounts are anonymized in voting and governance decisions, preventing any hierarchy from forming based on financial input."
        }
      ],
      "advantages": [
        "Ensures equal participation and prevents hierarchy",
        "Provides a structured fallback for disputes through the voluntary council",
        "Maintains transparency and adaptability with Community Pulse"
      ],
      "considerations": [
        "Requires regular participation from council volunteers",
        "Best suited for medium to large communities needing structured governance"
      ]
    },
    "randomizedAdHocCommittees": {
      "description": "Randomized, temporary committees formed for individual requests, distributing decision-making responsibilities among randomly selected members each time a request is submitted. This model prevents any permanent governance structure, ensuring equal opportunity to participate in decision-making.",
      "advantages": [
        "Non-hierarchical and prevents any long-term authority",
        "Gives all community members equal chances to participate in request reviews",
        "Works well in smaller communities or for less complex decisions"
      ],
      "considerations": [
        "May result in inconsistencies if randomly selected members have limited experience",
        "Best suited for smaller groups where frequent participation is feasible"
      ]
    }
  },
  "paymentOptions": {
    "paypal": {
      "description": "Allows users to contribute to the communal fund or withdraw funds through PayPal. A familiar and widely-used option that simplifies payments.",
      "pros": [
        "Simple integration with web apps",
        "Global reach and familiar to most users"
      ],
      "cons": [
        "Transaction fees (typically around 2.9% per transaction)",
        "Potential restrictions for communal or pooled funds"
      ]
    },
    "appleGooglePay": {
      "description": "Users can contribute to the communal fund through Apple Pay or Google Pay, offering fast, secure payments on mobile and web.",
      "pros": [
        "User-friendly, fast, and widely recognized",
        "Secure biometric authentication"
      ],
      "cons": [
        "Primarily for contributions only, not payouts",
        "Limited to users with compatible devices"
      ]
    },
    "bankTransfer": {
      "description": "Direct bank transfers for both contributions and distributions, suitable for larger transactions and reducing third-party fees.",
      "pros": [
        "Lower transaction fees, especially for larger sums",
        "Accessible for most users with bank accounts"
      ],
      "cons": [
        "Requires integration with banking API or third-party provider",
        "Strict compliance requirements, especially for pooled funds"
      ]
    }
  }
}