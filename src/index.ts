import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const seedData = [
      {
        slug: "vivah-sanskaar",
        category: "karmkand",
        title: "Vivah Sanskaar (Wedding Ceremony)",
        cardDescription: "Complete Vedic marriage rituals with mantras and traditions",
        includes: ["Havan", "Satapdi", "Saptapadi", "Mangal Sutra Bandhan"],
        overview: "The Vivah Sanskaar is considered one of the most important of the 16 Sanskaars in Sanatan Dharma. It marks the transition from Brahmacharya (student life) to Grihastha (householder life).",
        originStory: "Rooted in the ancient Vedic texts, the Vivah Sanskaar is not merely a contract but a sacred spiritual union. It is believed that marriages are a cosmic alignment of two souls destined to help each other achieve Dharma (duty), Artha (prosperity), Kama (desire), and Moksha (liberation). The rituals we perform today have been preserved for thousands of years by enlightened sages to ensure the couple's journey is harmonious and blessed by the divine.",
        duration: "4 - 5 Hours",
        idealFor: "Couples ready to begin their marital journey",
        process: [
          { title: "Gauri Ganesh Pooja", description: "Invoking Lord Ganesha to remove any obstacles and seeking Goddess Gauri's blessings for a long, happy marriage." },
          { title: "Kanyadaan", description: "The emotional and sacred ritual where the father hands over his daughter's responsibilities to the groom." },
          { title: "Panigrahana & Havan", description: "Holding hands before the sacred fire (Agni), which acts as the ultimate witness to the marriage vows." },
          { title: "Saptapadi", description: "The seven vows taken while completing seven circumambulations around the sacred fire, cementing the bond." },
          { title: "Sindoor Daan & Mangalsutra", description: "The groom applies vermilion and ties the sacred thread, symbolizing her status as a married woman." }
        ],
        benefits: [
          "Ensures spiritual and material prosperity for the couple",
          "Harmonizes planetary influences for a peaceful married life",
          "Builds a strong foundation based on Vedic principles",
          "Seeks the blessings of all major deities and ancestors"
        ],
        faqs: [
          { question: "What items do we need to arrange?", answer: "We will provide a detailed list of Samagri (items) upon booking. Alternatively, we can arrange the complete Samagri for your convenience." },
          { question: "Do you help with finding the Muhurat?", answer: "Yes, Pandit Ji will analyze the Kundalis of both the bride and groom to determine the most auspicious date and time (Muhurat)." }
        ]
      },
      {
        slug: "annaprashan",
        category: "karmkand",
        title: "Annaprashan (First Feeding)",
        cardDescription: "Ceremonial introduction of solid food to infants",
        includes: ["Prayers", "Blessings", "Traditional Rituals"],
        overview: "Ceremonial introduction of solid food to infants, marking a major milestone in their physical and spiritual development.",
        originStory: "Annaprashan literally translates to 'grain initiation'. Occurring typically in the 6th month for boys and 5th or 7th for girls, this ancient ritual is a celebration of the child's growth. It marks the transition from the mother's nourishment to the nourishment provided by Mother Earth, expressing deep gratitude to the divine.",
        duration: "1 - 2 Hours",
        idealFor: "Infants between 5 to 8 months of age",
        process: [
          { title: "Purification", description: "Cleansing the child and the feeding area with Gangajal and sacred mantras." },
          { title: "Ayush Homa", description: "A special fire ritual performed to invoke the gods of health and longevity for the child." },
          { title: "The First Bite", description: "Feeding the child sweet rice (Kheer or Payasam) using a silver or gold spoon or ring, usually by the maternal uncle or grandfather." },
          { title: "Jivika Pariksha", description: "A playful ritual where objects representing different paths (wealth, knowledge, craft) are placed before the child to gauge their natural inclinations." }
        ],
        benefits: [
          "Promotes the physical health and proper digestion of the growing child",
          "Invokes divine protection and blessings for longevity and intellect",
          "Removes any residual impurities from the birth process",
          "Brings the extended family together in a joyous spiritual setting"
        ],
        faqs: [
          { question: "Where is this usually performed?", answer: "It can be performed at home or in a temple setting, depending on the family's preference." }
        ]
      },
      {
        slug: "mundan-sanskaar",
        category: "karmkand",
        title: "Mundan Sanskaar (Hair Shaving)",
        cardDescription: "Sacred head-shaving ceremony for purification",
        includes: ["Havan", "Blessings", "Traditional Customs"],
        overview: "The sacred head-shaving ceremony, a vital purification ritual that promotes physical health and spiritual cleansing.",
        originStory: "Known as Chudakarana in the Vedic texts, the Mundan ceremony involves shaving the child's first hair. In Sanatan Dharma, it is believed that the hair from birth carries the traits, karmas, and impurities of past lives. Shaving it off signifies a fresh, pure start in the current life, allowing the child's intellect and spiritual awareness to blossom.",
        duration: "1.5 Hours",
        idealFor: "Children between 1 to 3 years of age",
        process: [
          { title: "Muhurat & Sankalp", description: "Selecting the auspicious time and taking a vow (Sankalp) for the child's well-being." },
          { title: "Ganesha & Navagraha Havan", description: "Worshipping Lord Ganesha and the nine planets to ensure smooth proceedings and lifelong blessings." },
          { title: "The Shaving Ritual", description: "The barber safely shaves the child's hair while Pandit Ji chants specific Vedic mantras." },
          { title: "Cooling Application", description: "Applying a soothing paste of Sandalwood (Chandan) and Turmeric on the child's head." }
        ],
        benefits: [
          "Believed to promote better, thicker, and healthier hair growth",
          "Stimulates the nerves in the scalp, enhancing brain development",
          "Purifies the child spiritually, shedding past karmic baggage",
          "Relieves the child from the heat of the body and discomfort of teething"
        ],
        faqs: [
          { question: "What is done with the shaved hair?", answer: "Traditionally, the hair is offered to a sacred river or a specific family deity (Kuldevta) as a mark of respect and surrender." }
        ]
      },
      {
        slug: "grih-pravesh",
        category: "karmkand",
        title: "Grih Pravesh (Home Entry)",
        cardDescription: "Auspicious rituals for entering a new home",
        includes: ["Space Purification", "Havan", "Blessings"],
        overview: "Auspicious rituals performed before entering a new home to invite positive energy, prosperity, and divine protection.",
        originStory: "In Vastu Shastra, a house is not just a structure of bricks; it is a living entity. The Grih Pravesh ceremony is an ancient tradition designed to appease the Vastu Purusha (the cosmic being of structures) and cleanse the space of any negative energies trapped during construction, transforming the house into a sanctuary of peace.",
        duration: "2 - 3 Hours",
        idealFor: "Families moving into a newly built or purchased home",
        process: [
          { title: "Vastu Shanti Pooja", description: "Appeasing the Vastu Purusha and aligning the home's energy with the natural elements." },
          { title: "Navagraha Havan", description: "A fire ritual to pacify the nine planets and seek their favorable alignment for the household." },
          { title: "Boiling of Milk", description: "The auspicious boiling of milk until it overflows, symbolizing overflowing prosperity and abundance." },
          { title: "Ceremonial Entry", description: "Entering the home with the right foot forward, carrying the sacred Kalash and a picture of the family deity." }
        ],
        benefits: [
          "Cleanses the home of negative, stagnant, or malefic energies",
          "Invites prosperity, peace, and good health for all inhabitants",
          "Protects the house from evil eyes, envy, and natural calamities",
          "Harmonizes the five elements (Earth, Water, Fire, Air, Space) within the living space"
        ],
        faqs: [
          { question: "When should Grih Pravesh be done?", answer: "It must be done on an auspicious date (Muhurat) calculated according to the Panchang, ensuring the sun is in a favorable position." }
        ]
      },
      {
        slug: "detailed-kundali-analysis",
        category: "jyotish",
        title: "Detailed Kundali Analysis",
        cardDescription: "In-depth reading of your birth chart for life predictions.",
        includes: ["Birth Chart Generation", "Dasha Analysis", "Remedies"],
        overview: "An in-depth reading of your birth chart to map your karmic journey and receive actionable astrological guidance.",
        originStory: "Jyotish, famously known as the 'Eye of the Vedas', has been practiced by sages for millennia. A Kundali (birth chart) is a cosmic snapshot of the universe at the exact moment and place of your birth. It serves as a profound blueprint of your soul's journey, revealing your inherent strengths, life challenges, and ultimate destiny.",
        duration: "45 - 60 Minutes (Consultation)",
        idealFor: "Individuals seeking clarity on career, marriage, health, or life purpose",
        process: [
          { title: "Precise Chart Generation", description: "Using your exact date, time, and place of birth to cast an accurate Vedic birth chart." },
          { title: "Lagna & Planetary Analysis", description: "Studying the Ascendant (Lagna) and the placement of the 9 planets across the 12 houses." },
          { title: "Dasha & Transit Evaluation", description: "Analyzing your current Mahadasha (planetary period) and current planetary transits to predict immediate future trends." },
          { title: "Remedial Consultation", description: "A one-on-one session to discuss findings and prescribe personalized remedies like gemstones, mantras, or specific poojas." }
        ],
        benefits: [
          "Provides crystal-clear insights into career trajectories and relationship dynamics",
          "Helps in making informed, timely, and confident life decisions",
          "Identifies upcoming periods of hardship and offers effective remedies to mitigate them",
          "Deepens self-awareness and understanding of your unique karmic purpose"
        ],
        faqs: [
          { question: "Is exact birth time necessary?", answer: "Yes, for a highly accurate Vedic reading, the exact time of birth is crucial. Even a few minutes can change specific divisional charts." }
        ]
      },
      {
        slug: "mangal-bhaat-pooja",
        category: "ujjain-pooja",
        title: "Mangal Bhaat Pooja",
        cardDescription: "Special pooja performed in Ujjain for Mangal Dosh.",
        includes: ["Temple Booking", "Samagri", "Pooja Vidhi"],
        overview: "A highly specialized and powerful pooja performed in Ujjain to pacify a malefic Mars (Manglik Dosh).",
        originStory: "According to the Skanda Purana, the sacred city of Ujjain is the birthplace of Lord Mangal (Mars). The Mangalnath Temple situated here is globally revered as the most potent location to perform the Bhaat Pooja. This ancient ritual is specifically designed to cool the fiery and aggressive nature of Mars, transforming its destructive energy into a protective force.",
        duration: "1.5 - 2 Hours",
        idealFor: "Individuals suffering from Manglik Dosh causing delays in marriage or career",
        process: [
          { title: "Sankalp at Mangalnath", description: "Taking a vow in your name and Gotra at the Mangalnath Temple in Ujjain." },
          { title: "Panchamrit Abhishek", description: "Bathing the Shivalinga (representing Mangal) with milk, curd, honey, ghee, and sugar." },
          { title: "Bhaat (Rice) Offering", description: "The core ritual where cooked rice (Bhaat) is offered to the deity to cool the fiery planetary energy." },
          { title: "Havan & Daan", description: "Performing the fire sacrifice and donating specific items to conclude the ritual properly." }
        ],
        benefits: [
          "Effectively neutralizes the negative and disruptive effects of Manglik Dosh",
          "Removes obstacles in finding a suitable life partner and ensures a harmonious marriage",
          "Reduces anger, impulsiveness, and unnecessary disputes in personal life",
          "Brings stability in career and financial matters that are negatively aspected by Mars"
        ],
        faqs: [
          { question: "Do I need to be present in Ujjain?", answer: "While personal presence is highly recommended for maximum benefit, we can perform the pooja on your behalf with video streaming." }
        ]
      },
      {
        slug: "kaal-sarp-dosh-nivaran",
        category: "ujjain-pooja",
        title: "Kaal Sarp Dosh Nivaran",
        cardDescription: "Authentic ritual performed at Mahakaleshwar Jyotirlinga.",
        includes: ["Pandit Arrangement", "Pooja Samagri", "Complete Ritual"],
        overview: "An authentic and intensive ritual performed at Mahakaleshwar, Ujjain to break the restrictive Kaal Sarp alignment.",
        originStory: "Kaal Sarp Dosh occurs when all seven major planets in a birth chart are trapped between Rahu (the serpent's head) and Ketu (the tail). This creates a cosmic blockage, leading to immense struggles. Ujjain, the abode of Mahakaleshwar (The Lord of Time), is the most auspicious and powerful place on Earth to perform the Nivaran (removal) of this dosh, freeing the soul's potential.",
        duration: "2 - 3 Hours",
        idealFor: "Individuals facing unexplained persistent failures, mental stress, or ancestral curses",
        process: [
          { title: "Holy Dip & Sankalp", description: "Purification in the sacred Kshipra river followed by taking the vow (Sankalp) for dosh nivaran." },
          { title: "Nag-Nagin Staphana", description: "Establishing silver idols of snakes representing Rahu and Ketu on a sacred Kalash." },
          { title: "Rudrabhishek", description: "Extensive worship of Lord Shiva to invoke His supreme power to conquer time and destiny." },
          { title: "Visarjan", description: "Immersing the silver snakes into the flowing river, symbolizing the release of the dosh." }
        ],
        benefits: [
          "Removes persistent delays, hidden obstacles, and repeated failures in life",
          "Alleviates severe mental stress, nightmares, and unknown phobias",
          "Unlocks blocked potential, opening sudden doors for success, wealth, and growth",
          "Brings profound peace to ancestral souls (Pitru Shanti)"
        ],
        faqs: [
          { question: "How long does it take for the effects to manifest?", answer: "Devotees usually begin to feel a sense of lightness and clarity within a few weeks, with major life shifts occurring over the next few months." }
        ]
      },
      {
        slug: "residential-vastu-consultation",
        category: "vastu",
        title: "Residential Vastu Consultation",
        cardDescription: "Harmonize your home's energy for peace and prosperity.",
        includes: ["Floor Plan Analysis", "Direction Check", "Remedy Suggestions"],
        overview: "A comprehensive analysis of your living space to harmonize its energy for peace, health, and prosperity.",
        originStory: "Vastu Shastra is the ancient Indian science of architecture, geometry, and spatial energy. It dictates how to align built environments with the cosmic laws of nature and the magnetic fields of the Earth. Proper Vastu ensures that a home acts as a positive vessel, constantly nurturing its inhabitants, rather than a structure that drains their energy.",
        duration: "Varies (Includes site visit or online plan analysis)",
        idealFor: "Homeowners experiencing unrest, financial blockages, or health issues at home",
        process: [
          { title: "Floor Plan Analysis", description: "Detailed study of your property's blueprint to determine exact compass directions and dimensions." },
          { title: "Zonal Assessment", description: "Identifying the Brahmasthan (center) and the 8 cardinal and intercardinal zones." },
          { title: "Dosha Identification", description: "Detecting Vastu imbalances such as incorrect placements of kitchens, entrances, or water bodies." },
          { title: "Remedial Strategy", description: "Providing practical, non-destructive remedies using mirrors, colors, crystals, and specific Yantras." }
        ],
        benefits: [
          "Enhances the uninterrupted flow of positive life force (Prana) throughout the home",
          "Significantly improves the physical health and mental tranquility of family members",
          "Attracts financial stability, career growth, and removes wealth leakages",
          "Fosters better relationships, understanding, and harmony among residents"
        ],
        faqs: [
          { question: "Do I have to break walls for Vastu correction?", answer: "No. Modern Vastu correction relies on spatial remedies, elemental balancing, and energy correctors without requiring structural demolition." }
        ]
      },
      {
        slug: "basic-jyotish-certification",
        category: "online-classes",
        title: "Basic Jyotish Certification",
        cardDescription: "Learn the fundamentals of Vedic astrology from home.",
        includes: ["Live Sessions", "Study Material", "Certificate"],
        overview: "A structured online program to learn the profound fundamentals of Vedic astrology from the comfort of your home.",
        originStory: "Vedic Astrology is an ocean of wisdom traditionally passed down through the sacred Guru-Shishya parampara (teacher-disciple lineage). Embracing the digital age, this foundational course is designed to make this ancient, divine knowledge accessible globally, preserving its authenticity while teaching it in a structured, modern format.",
        duration: "12 Weeks (Weekend Classes)",
        idealFor: "Spiritual seekers, beginners, and enthusiasts wanting to decode their own destiny",
        process: [
          { title: "The Cosmic Elements", description: "Introduction to the 9 Grahas (Planets) and 12 Rashis (Zodiac Signs) and their characteristics." },
          { title: "The 12 Bhavas", description: "Understanding the 12 Houses of a Kundali and what aspects of life they govern." },
          { title: "Chart Casting & Reading", description: "Learning how to cast a basic birth chart and synthesize the planetary positions." },
          { title: "Assessment & Certification", description: "A final evaluation to test your understanding, followed by the awarding of the completion certificate." }
        ],
        benefits: [
          "Empowers you to confidently understand your own birth chart and life patterns",
          "Provides an extremely strong and authentic foundation for advanced astrological studies",
          "Helps in making better daily decisions by understanding basic planetary transits",
          "Connects you with a vibrant community of like-minded spiritual and astrological students"
        ],
        faqs: [
          { question: "Do I need prior knowledge?", answer: "Not at all. This course starts from absolute scratch and builds up your knowledge step-by-step." }
        ]
      }
    ];

    try {
      const count = await strapi.db.query('api::service.service').count();
      if (count === 0) {
        console.log("No services found in database. Seeding initial data...");
        for (const data of seedData) {
          await strapi.db.query('api::service.service').create({
            data: {
              ...data,
              publishedAt: new Date(),
            }
          });
        }
        console.log("Successfully seeded", seedData.length, "services!");
      }

      const blogCount = await strapi.db.query('api::blog.blog').count();
      if (blogCount === 0) {
        console.log("No blogs found in database. Seeding initial data...");
        const blogSeedData = [
          {
            "slug": "understanding-manglik-dosh",
            "title": "Understanding Manglik Dosh: Myths and Remedies",
            "excerpt": "Manglik Dosh is one of the most feared combinations in Vedic Astrology, but is it really as harmful as people think? Discover the truth behind the myths.",
            "coverImage": "/images/blogs/manglik_dosh.jpg",
            "content": [
              "<p>Manglik Dosh occurs when the planet Mars (Mangal) is placed in the 1st, 4th, 7th, 8th, or 12th house of a Kundali. This placement is traditionally believed to cause friction, delays in marriage, and fiery temperament.</p></br>",
              "<p>However, what many fail to understand is that Mars is also the planet of energy, drive, and ambition. Being a Manglik simply means you have an excess of Martian energy. The key to harmony is managing this energy, rather than fearing it.</p></br><b><h3>The Myth of Extreme Harm</h3></b><p>A common myth is that a Manglik must only marry another Manglik. While matching two high-energy individuals creates balance, there are several astrological exceptions (Pariharas) that naturally cancel the Manglik effect. For instance, if Mars is in its own sign or exalted, the Dosh is significantly reduced.</p></br><b><h3>Effective Remedies</h3></b>",
              "<p>For those deeply affected, remedies like the Mangal Bhaat Pooja at Ujjain, reciting the Hanuman Chalisa, or chanting the Mangal Mantra can effectively channel this aggressive energy into productive spiritual forces.</p><p>Astrology is a guide to self-improvement. By understanding your chart, you can turn apparent flaws into your greatest strengths.</p>"
            ],
            "innerImages": [
              "/images/blogs/saturn_astrology.jpg",
              "/images/blogs/vedic_sanskaar.jpg"
            ],
            "author": "Pandit Ji",
            "date": "August 12, 2026",
            "readTime": "4 min read"
          },
          {
            "slug": "importance-of-vastu-in-modern-homes",
            "title": "The Importance of Vastu Shastra in Modern Apartments",
            "excerpt": "Applying ancient Vastu principles to modern, high-rise apartments can significantly improve the flow of positive energy and peace in your home.",
            "coverImage": "/images/blogs/vastu_home.jpg",
            "content": [
              "<p>In ancient times, homes were built from the ground up according to strict Vastu Shastra principles. Today, as we move into pre-constructed apartments, we often have little control over the fundamental architecture. However, Vastu is highly adaptable.</p><h3>Balancing the Elements</h3>",
              "<p>Vastu is essentially the science of balancing the five elements: Earth, Water, Fire, Air, and Space. Even in an apartment, you can balance these elements using colors, shapes, and strategic placement of everyday items.</p><p>For example, the North-East direction represents the Water element and spiritual growth. Keeping this area clean, clutter-free, and perhaps adding a small water fountain or a sacred altar can instantly elevate the vibrations of the entire house.</p><h3>Common Modern Vastu Fixes</h3><p>If your kitchen (Fire element) is in the wrong direction, such as the North, placing a green marble slab under the stove can help mitigate the conflicting energies. Similarly, using mirrors to visually extend missing corners of an apartment is a powerful and non-destructive Vastu remedy.</p><p>A harmonious home is the foundation of a successful life. Small energetic shifts can yield profound results.</p>"
            ],
            "innerImages": [
              "/images/blogs/vedic_sanskaar.jpg"
            ],
            "author": "Pandit Ji",
            "date": "July 28, 2026",
            "readTime": "5 min read"
          },
          {
            "slug": "significance-of-16-sanskaars",
            "title": "The 16 Sanskaars: Mapping the Human Journey",
            "excerpt": "From conception to final rites, the 16 Sanskaars (sacraments) in Sanatan Dharma map out a spiritual blueprint for a righteous and fulfilled life.",
            "coverImage": "/images/blogs/vedic_sanskaar.jpg",
            "content": [
              "<p>The word 'Sanskaar' comes from the Sanskrit root meaning to purify, refine, or perfect. In Vedic tradition, there are 16 major Sanskaars, collectively known as the Shodasha Sanskaars, that a human being goes through during their lifetime.</p><h3>Why Do We Need Sanskaars?</h3>",
              "<p>Just as a raw diamond must be cut and polished to reflect its true brilliance, a human soul must undergo purification rituals to shed karmic impurities and awaken to its divine nature. These rituals mark crucial biological and psychological milestones.</p><h3>Key Milestones</h3><p>Some of the most prominent Sanskaars include:</p><ul><li><strong>Namakarana:</strong> The naming ceremony, giving the child an identity connected to the cosmos.</li><li><strong>Annaprashan:</strong> The first feeding of solid food, transitioning from purely maternal nourishment to the Earth's bounty.</li><li><strong>Upanayana:</strong> The sacred thread ceremony, marking the start of formal education and spiritual awakening.</li><li><strong>Vivah:</strong> Marriage, transitioning into the householder life to fulfill duties to society and family.</li><li><strong>Antyeshti:</strong> The final rites, returning the physical body to the five elements.</li></ul>",
              "<p>Each Sanskaar serves as a spiritual anchor, ensuring that at every stage of life, the individual remains connected to Dharma and the divine source.</p>"
            ],
            "innerImages": [
              "/images/blogs/manglik_dosh.jpg",
              "/images/blogs/vastu_home.jpg"
            ],
            "author": "Pandit Ji",
            "date": "July 10, 2026",
            "readTime": "6 min read"
          },
          {
            "slug": "navigating-saturn-return-sade-sati",
            "title": "Navigating Sade Sati: A Period of Transformation",
            "excerpt": "Sade Sati is often feared as a 7.5-year period of hardship. Learn why Saturn's transit is actually your greatest opportunity for karmic clearing.",
            "coverImage": "/images/blogs/saturn_astrology.jpg",
            "content": [
              "<p>Sade Sati refers to the roughly 7.5-year period when Saturn (Shani) transits the 12th, 1st, and 2nd houses from your natal Moon sign. Because Saturn is the strict taskmaster of the zodiac, this period is historically associated with delays, struggles, and emotional turmoil.</p>",
              "<h3>The True Purpose of Saturn</h3><p>Saturn is not a villain; He is the ultimate judge (Karmaphaldata). Sade Sati is a period of intense karmic auditing. Whatever illusions, toxic attachments, or weak foundations you have built your life upon will be tested and, if necessary, dismantled.</p><p>This period forces you to face reality. It strips away the ego, teaching humility, patience, and resilience. Those who embrace the lessons of Saturn emerge from Sade Sati completely transformed, stronger, and more authentic.</p><h3>How to Survive and Thrive</h3>",
              "<p>The best remedy for Saturn is not just performing rituals, but embodying Saturnian qualities: discipline, hard work, honesty, and service to the underprivileged. Chanting the Shani Mantra, lighting a mustard oil lamp on Saturdays, and feeding the needy are excellent practices to seek His grace.</p><p>Do not fear Sade Sati. Embrace it as the ultimate period of spiritual refinement.</p>"
            ],
            "innerImages": [
              "/images/blogs/manglik_dosh.jpg",
              "/images/blogs/vedic_sanskaar.jpg"
            ],
            "author": "Pandit Ji",
            "date": "June 15, 2026",
            "readTime": "7 min read"
          }
        ];
        
        for (const data of blogSeedData) {
          await strapi.db.query('api::blog.blog').create({
            data: {
              ...data,
              publishedAt: new Date(),
            }
          });
        }
        console.log("Successfully seeded", blogSeedData.length, "blogs!");
      }
    } catch (error) {
      console.error("Error during seeding data:", error);
    }
  },
};
