import { Article, Category } from './types';

export const categories: Category[] = [
  {
    id: '1',
    slug: 'quran',
    translations: {
      en: { name: 'Quran & Tafseer', description: 'Quranic studies and interpretation' },
      ar: { name: 'القرآن والتفسير', description: 'دراسات الحديث الشريف وتفسيره' }
    }
  },
  {
    id: '2',
    slug: 'hadith',
    translations: {
      en: { name: 'Hadith', description: 'Prophetic traditions and teachings' },
      ar: { name: 'الحديث', description: 'الأحاديث النبوية والتعاليم' }
    }
  },
  {
    id: '3',
    slug: 'fiqh',
    translations: {
      en: { name: 'Islamic Jurisprudence', description: 'Islamic law and rulings' },
      ar: { name: 'الفقه الإسلامي', description: 'الشريعة الإسلامية والأحكام' }
    }
  },
  {
    id: '4',
    slug: 'history',
    translations: {
      en: { name: 'Islamic History', description: 'History of Islam and Muslim civilizations' },
      ar: { name: 'التاريخ الإسلامي', description: 'تاريخ الإسلام والحضارات الإسلامية' }
    }
  },
  {
    id: '5',
    slug: 'ethics',
    translations: {
      en: { name: 'Islamic Ethics', description: 'Islamic morality and values' },
      ar: { name: 'الأخلاق الإسلامية', description: 'الأخلاق الإسلامية والقيم' }
    }
  },
  {
    id: '6',
    slug: 'duas',
    translations: {
      en: { name: 'Duas & Remembrance', description: 'Daily supplications and remembrance' },
      ar: { name: 'الأدعية والأذكار', description: 'الأدعية والأذكار اليومية' }
    }
  }
];

export const articles: Article[] = [
  {
    id: '1',
    slug: 'introduction-to-islam',
    category: 'quran',
    imageUrl: '/images/quran.jpg',
    published: true,
    createdAt: '2024-01-15',
    translations: {
      en: {
        title: 'Introduction to Islam',
        description: 'A comprehensive guide to the basics of Islamic faith and practice.',
        content: `Islam is a monotheistic Abrahamic religion that originated in the 7th century with the teachings of Prophet Muhammad. The word "Islam" comes from the Arabic word "salam" meaning peace and submission.

The Five Pillars of Islam are the foundation of Muslim belief and practice:
1. Shahada (Declaration of Faith)
2. Salat (Prayer)
3. Zakat (Almsgiving)
4. Sawm (Fasting)
5. Hajj (Pilgrimage)

Islam teaches that there is only one God (Allah) and that Prophet Muhammad is His final messenger. The Quran is considered the word of God revealed to Muhammad over 23 years.

Muslims believe in the Day of Judgment, life after death, and accountability for one's actions. Islamic law (Sharia) guides believers in all aspects of life, from personal conduct to social interactions.

Islam has over 1.8 billion followers worldwide, making it the second-largest religion globally. It emphasizes community, charity, justice, and mercy.`
      },
      ar: {
        title: 'مقدمة في الإسلام',
        description: 'دليل شامل لأساسيات العقيدة والممارسة الإسلامية.',
        content: `الإسلام هو دين إبراهيمي توحيدي نشأ في القرن السابع مع تعاليم النبي محمد. تأتي كلمة "إسلام" من الكلمة العربية "سلام" التي تعني السلام والاستسلام.

أركان الإسلام الخمسة هي أساس الاعتقاد والممارسة الإسلامية:
1. الشهادة (إعلان الإيمان)
2. الصلاة (الصلاة)
3. الزكاة (الإحسان)
4. الصوم (الصيام)
5. الحج (الحج)

يعلم الإسلام أن هناك إلهًا واحدًا فقط (الله) وأن محمدًا هو رسوله الأخير. يعتبر القرآن كلام الله الذي أنزل على محمد على مدى 23 سنة.

يؤمن المسلمون بيوم القيامة والحياة الآخرة والمحاسبة على أعمالهم. يوجه الشرع الإسلامي المؤمنين في جميع جوانب الحياة.`
      }
    }
  },
  {
    id: '2',
    slug: 'five-pillars-of-islam',
    category: 'quran',
    imageUrl: '/images/pillars.jpg',
    published: true,
    createdAt: '2024-01-20',
    translations: {
      en: {
        title: 'The Five Pillars of Islam',
        description: 'Understanding the fundamental practices of Islam that form the foundation of Muslim life.',
        content: `The Five Pillars of Islam are the core practices that every Muslim is expected to fulfill. They form the foundation of Muslim life and are considered the most important Islamic duties.

**First Pillar: Shahada (Declaration of Faith)**
The Shahada is the Islamic creed: "There is no god but Allah, and Muhammad is His messenger." Reciting this with sincere belief is the first step to becoming Muslim.

**Second Pillar: Salat (Prayer)**
Muslims are required to pray five times daily: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). Prayer connects believers directly with God and reminds them of their faith throughout the day.

**Third Pillar: Zakat (Almsgiving)**
Zakat is the obligation to give a portion of one's wealth to the poor and needy. It purifies the soul and promotes social justice within the community.

**Fourth Pillar: Sawm (Fasting)**
During Ramadan, the ninth month of the Islamic calendar, Muslims fast from dawn to sunset. This practice develops self-discipline and empathy for those in need.

**Fifth Pillar: Hajj (Pilgrimage)**
At least once in their lifetime, Muslims who are physically and financially able should perform the pilgrimage to Mecca. This spiritual journey unites Muslims from around the world.`
      },
      ar: {
        title: 'أركان الإسلام الخمسة',
        description: 'فهم الممارسات الأساسية للإسلام التي تشكل أساس الحياة الإسلامية.',
        content: `أركان الإسلام الخمسة هي الممارسات الأساسية التي يتوقع من كل مسلم الالتزام بها. إنها تشكل أساس الحياة الإسلامية وتعتبر أهم الواجبات الإسلامية.

**الركن الأول: الشهادة**
الشهادة هي العقيدة الإسلامية: "لا إله إلا الله وحده لا شريك له، محمد رسول الله". التلفظ بها بإخلاص هو الخطوة الأولى لأن تصبح مسلماً.

**الركن الثاني: الصلاة**
يطلب من المسلمين الصلاة خمس مرات يومياً: الفجر والظهر والعصر والمغرب والعشاء. تربط الصلاة المؤمنين مباشرة بالله وتذكرهم بإيمانهم طوال اليوم.

**الركن الثالث: الزكاة**
الزكاة هي الالتزام بإعطاء جزء من ثروتك للفقراء والمحتاجين. تطهر النفس وتعزز العدالة الاجتماعية.

**الركن الرابع: الصوم**
خلال شهر رمضان، الشهر التاسع من التقويم الإسلامي، يصوم المسلمون من الفجر إلى الغروب. تنمي هذه الممارسة الانضباط الذاتي والتعاطف.

**الركن الخامس: الحج**
يجب على المسلمين القادرين جسدياً ومالياً أداء فريضة الحج إلى مكة مرة واحدة على الأقل في حياتهم.`
      }
    }
  },
  {
    id: '3',
    slug: 'islamic-history-golden-age',
    category: 'history',
    imageUrl: '/images/history.jpg',
    published: true,
    createdAt: '2024-02-01',
    translations: {
      en: {
        title: 'The Golden Age of Islam',
        description: 'Exploring the remarkable period of scientific, cultural, and intellectual advancement in Islamic civilization.',
        content: `The Golden Age of Islam, spanning from the 8th to 14th centuries, was a period of remarkable intellectual, scientific, and cultural achievement that shaped the modern world.

During this era, Muslim scholars and scientists made groundbreaking contributions across multiple disciplines:

**Mathematics and Astronomy:**
Muslim mathematicians developed algebra and made significant advances in trigonometry. Astronomers created detailed star catalogs and made observations that would not be surpassed in the Western world for centuries.

**Medicine:**
The Islamic world produced some of history's greatest physicians. They established hospitals with specialized wards, developed pharmacology, and invented many medical instruments still used today.

**Philosophy:**
Great thinkers like Al-Ghazali, Ibn Sina, and Ibn Rushd bridged Greek philosophy with Islamic theology, influencing European Renaissance thought.

**Literature and Arts:**
This period saw the flourishing of beautiful calligraphy, intricate geometric patterns, and magnificent architecture exemplified by mosques like the Al-Azhar and the Great Mosque of Cordoba.

**Preservation of Knowledge:**
Islamic scholars preserved and transmitted classical Greek, Persian, and Indian knowledge, which was later passed to Europe during the Renaissance.

This period demonstrated that Islam and science are not incompatible, but rather deeply intertwined in Islamic civilization's greatest achievements.`
      },
      ar: {
        title: 'العصر الذهبي للإسلام',
        description: 'استكشاف الفترة الرائعة من التقدم العلمي والثقافي والفكري في الحضارة الإسلامية.',
        content: `العصر الذهبي للإسلام، الذي امتد من القرن الثامن إلى القرن الرابع عشر، كان فترة من الإنجاز الفكري والعلمي والثقافي الرائع.

خلال هذه الحقبة، قدم العلماء والعلماء المسلمون مساهمات رائدة عبر تخصصات متعددة:

**الرياضيات والفلك:**
طور علماء الرياضيات المسلمون الجبر وأحرزوا تقدماً كبيراً في حساب المثلثات. أنشأ الفلكيون فهارس نجوم مفصلة وأجروا ملاحظات لم يتم تجاوزها في العالم الغربي لقرون.

**الطب:**
أنتج العالم الإسلامي بعضاً من أعظم الأطباء في التاريخ. أسسوا مستشفيات متخصصة وطوروا الصيدلة واخترعوا العديد من الأدوات الطبية التي لا تزال مستخدمة اليوم.

**الفلسفة:**
ربط المفكرون العظماء مثل الغزالي وابن سينا وابن رشد الفلسفة اليونانية بالعقيدة الإسلامية.

**الأدب والفنون:**
شهدت هذه الفترة ازدهار الخط الجميل والأنماط الهندسية المعقدة والعمارة الرائعة.

**الحفاظ على المعرفة:**
حافظ العلماء الإسلاميون على المعرفة اليونانية والفارسية والهندية الكلاسيكية.`
      }
    }
  },
  {
    id: '4',
    slug: 'islamic-ethics-compassion',
    category: 'ethics',
    imageUrl: '/images/ethics.jpg',
    published: true,
    createdAt: '2024-02-10',
    translations: {
      en: {
        title: 'Islamic Ethics: Compassion and Justice',
        description: 'Understanding the core ethical principles of Islam that emphasize compassion, justice, and social responsibility.',
        content: `Islamic ethics are rooted in the teachings of the Quran and the Sunnah (practices of Prophet Muhammad). These principles emphasize compassion, justice, honesty, and social responsibility.

**Compassion (Rahmah):**
Islam teaches that mercy and compassion should extend to all creatures. The Prophet Muhammad said, "The merciful will be shown mercy by Allah. Be merciful to those on earth, and the One in the heavens will have mercy upon you."

**Justice (Adalah):**
Islamic justice is not about revenge but about fairness and maintaining social order. The Quran emphasizes justice multiple times and warns against oppression.

**Honesty and Integrity:**
Truthfulness is highly valued in Islamic teachings. Lying is considered one of the major sins, while honesty is essential in business, relationships, and all dealings.

**Kindness to Parents:**
The Quran frequently mentions kindness to parents as a fundamental duty, second only to the worship of Allah.

**Care for the Poor and Needy:**
Islam emphasizes the responsibility of the wealthy to help the poor through Zakat and voluntary charity.

**Respect for Human Dignity:**
Every human being is created in the image of God and deserves respect regardless of their background or beliefs.

These ethical principles form the foundation of Islamic law and are reflected in Muslim societies that practice these values with sincerity.`
      },
      ar: {
        title: 'الأخلاق الإسلامية: الرحمة والعدل',
        description: 'فهم المبادئ الأخلاقية الأساسية للإسلام التي تؤكد الرحمة والعدل والمسؤولية الاجتماعية.',
        content: `الأخلاق الإسلامية متجذرة في تعاليم القرآن والسنة (ممارسات النبي محمد). تؤكد هذه المبادئ على الرحمة والعدل والصدق والمسؤولية الاجتماعية.

**الرحمة:**
يعلم الإسلام أن الرحمة والعطف يجب أن يمتدا إلى جميع المخلوقات. قال النبي محمد: "الراحمون يرحمهم الله. ارحموا من في الأرض يرحمكم من في السماء."

**العدل:**
العدل الإسلامي لا يتعلق بالانتقام بل بالإنصاف والحفاظ على النظام الاجتماعي. يؤكد القرآن على العدل عدة مرات.

**الصدق والأمانة:**
يُقدّر الصدق بشدة في التعاليم الإسلامية. الكذب يعتبر من الذنوب الكبيرة.

**الإحسان إلى الوالدين:**
يركز القرآن على الإحسان إلى الوالدين كواجب أساسي.

**الرعاية للفقراء والمحتاجين:**
يؤكد الإسلام على مسؤولية الأغنياء في مساعدة الفقراء.

**احترام كرامة الإنسان:**
كل إنسان خلق بصورة الله ويستحق الاحترام.`
      }
    }
  },
  {
    id: '5',
    slug: 'morning-evening-adhkar',
    category: 'duas',
    imageUrl: '/images/duas.jpg',
    published: true,
    createdAt: '2024-02-15',
    translations: {
      en: {
        title: 'Morning and Evening Adhkar (Remembrance)',
        description: 'Essential daily supplications and remembrance of Allah that bring peace and spiritual strength to your day.',
        content: `Adhkar (remembrance of Allah) are among the most beneficial practices in Islam. Practicing daily morning and evening adhkar brings numerous spiritual and emotional benefits.

**Benefits of Adhkar:**
- Strengthens connection with Allah
- Protects from evil and negative influences
- Brings peace and tranquility to the heart
- Increases mindfulness throughout the day
- Improves mental and emotional well-being

**Morning Adhkar:**
Recite these after Fajr prayer until sunrise:

1. Subhan'Allah (Glory be to Allah) - 33 times
2. Al-Hamdulillah (Praise be to Allah) - 33 times
3. Allahu Akbar (Allah is the Greatest) - 34 times
4. "There is no god but Allah alone, with no partner. His is the dominion and to Him is due all praise, and He has power over all things." - 10 times

**Evening Adhkar:**
Recite these after Asr prayer until sunset:
Same remembrances as the morning adhkar

**Additional Daily Supplications:**
- "There is no god but Allah" (La ilaha illallah)
- "Glory be to Allah and by His praise" (Subhanallahi wa bihamdihi)
- "Glory be to Allah the Mighty and by His praise" (Subhanallah al-'Aẓīm wa bihamdihi)

Making these remembrances a daily habit brings immense spiritual benefit and peace to one's life.`
      },
      ar: {
        title: 'أذكار الصباح والمساء',
        description: 'الأدعية والأذكار اليومية الأساسية التي تجلب السلام والقوة الروحية إلى يومك.',
        content: `الأذكار من أفضل الممارسات في الإسلام. ممارسة أذكار الصباح والمساء يومياً تجلب فوائد روحية وعاطفية عديدة.

**فوائد الأذكار:**
- تقوي الصلة بالله
- تحمي من الشرور والتأثيرات السلبية
- تجلب السلام والطمأنينة للقلب
- تزيد اليقظة طوال اليوم
- تحسن الرفاهية النفسية والعاطفية

**أذكار الصباح:**
اتلها بعد صلاة الفجر حتى الشروق:

1. سبحان الله - 33 مرة
2. الحمد لله - 33 مرة
3. الله أكبر - 34 مرة
4. "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير" - 10 مرات

**أذكار المساء:**
اتل نفس الأذكار بعد صلاة العصر حتى الغروب

**أدعية يومية إضافية:**
- "لا إله إلا الله"
- "سبحانالله وبحمده"
- "سبحان الله العظيم وبحمده"

جعل هذه الأذكار عادة يومية يجلب فوائد روحية كبيرة وسلاماً للحياة.`
      }
    }
  }
];

export const getCategoryById = (id: string) => categories.find(c => c.id === id);
export const getCategoryBySlug = (slug: string) => categories.find(c => c.slug === slug);
export const getArticleById = (id: string) => articles.find(a => a.id === id);
export const getArticleBySlug = (slug: string) => articles.find(a => a.slug === slug);
export const getArticlesByCategory = (categorySlug: string) => 
  articles.filter(a => a.category === categorySlug && a.published);
export const searchArticles = (query: string, locale: string = 'en') =>
  articles.filter(a => a.published && (
    a.translations[locale as 'en' | 'ar'].title.toLowerCase().includes(query.toLowerCase()) ||
    a.translations[locale as 'en' | 'ar'].description.toLowerCase().includes(query.toLowerCase())
  ));
