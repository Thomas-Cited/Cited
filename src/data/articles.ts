export interface Article {
  slug: string
  titleKey: string
  excerptKey: string
  categoryKey: string
  readTimeKey: string
  dateKey: string
  featured: boolean
  content: {
    en: string
    fr: string
  }
}

export const articles: Article[] = [
  {
    slug: 'what-is-geo',
    titleKey: 'blog.article1Title',
    excerptKey: 'blog.article1Excerpt',
    categoryKey: 'blog.article1Category',
    readTimeKey: 'blog.article1ReadTime',
    dateKey: 'blog.article1Date',
    featured: true,
    content: {
      en: `## What is Generative Engine Optimization?

Generative Engine Optimization (GEO) is the practice of optimizing your online presence so that AI-powered search engines — like ChatGPT, Perplexity, Google AI Overviews, and Claude — surface your brand in their responses. While traditional SEO focuses on ranking in a list of blue links, GEO focuses on appearing in AI-generated answers.

This distinction matters more than ever. According to Gartner, 40% of online searches now involve AI tools, and that number is accelerating. When someone asks ChatGPT "What's the best project management tool for startups?", the AI doesn't show ten blue links — it gives a direct answer, often mentioning specific brands. GEO is about making sure your brand is one of them.

## Why GEO Matters Now

The search landscape is undergoing its biggest transformation since Google's founding. Three converging trends make GEO essential:

**1. AI adoption is exploding.** ChatGPT reached 200 million weekly active users in 2025. Perplexity processes millions of queries daily. Google AI Overviews now appear in over 30% of search results. These aren't niche tools anymore — they're becoming the primary way people find information.

**2. Traditional SEO is losing effectiveness.** SparkToro's research shows that Google AI Overviews reduce organic clicks by up to 25%. Even if you rank #1 on Google, fewer people are clicking through to your site. The traffic that once came from ranking well is increasingly captured by AI-generated summaries.

**3. Consumer trust in AI is growing.** A 2025 Salesforce study found that 79% of consumers trust AI-generated answers as much as personal referrals. When ChatGPT surfaces a product, people act on it. Appearing in AI-generated answers isn't just about visibility — it directly drives purchasing decisions.

## How GEO Differs from Traditional SEO

While GEO and SEO share some foundations, they differ in fundamental ways:

### What AI Systems Look For

Traditional search engines index pages and rank them based on hundreds of signals — backlinks, keyword density, page speed, and more. AI systems work differently. They synthesize information from across the web and generate original responses. To do this effectively, they look for:

- **Structured, factual content** — AI systems prefer content that presents information in clear, well-organized formats. Think: tables, numbered lists, direct answers to specific questions.
- **Authoritative sources** — E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals matter even more for AI than for traditional search. AI systems are trained to prefer information from credible, well-established sources.
- **Entity clarity** — AI models understand the world through entities (people, organizations, products, concepts) and their relationships. Schema.org markup helps AI systems understand exactly what your content is about.
- **Consistent information** — AI cross-references multiple sources. If your brand information is consistent across your website, Wikipedia, industry directories, and review sites, AI systems are more confident citing you.

### Content Strategy Shifts

In traditional SEO, you optimize individual pages for specific keywords. In GEO, you optimize your entire digital presence to be a reliable source of information. This means:

- **Answer-first content** — Instead of burying answers deep in long articles, lead with clear, concise answers that AI can easily extract and cite.
- **Data-driven claims** — AI systems love statistics, studies, and verifiable data. Content that includes specific numbers and cites credible sources is more likely to be referenced.
- **Topic authority** — Rather than targeting isolated keywords, build comprehensive coverage of your domain. If you're a CRM company, having deep content on sales automation, customer retention, pipeline management, and related topics signals expertise.

## The GEO Framework: 4 Pillars

At Cited, we've developed a practical framework for GEO that breaks down into four pillars:

### Pillar 1 — AI Readiness Audit

Before optimizing, you need to know where you stand. An AI Readiness Audit tests your brand across 50+ relevant queries on all major AI engines. It measures how often you're cited, in what context, and how you compare to competitors. This baseline is essential for tracking progress.

### Pillar 2 — Technical Optimization

This involves implementing the technical elements that help AI understand your content: advanced Schema.org markup, clean site architecture, proper heading hierarchy, and structured data for your key entities (organization, products, services, people).

### Pillar 3 — Content Optimization

Creating and restructuring content to be AI-citation-ready. This includes FAQ pages, structured guides, data-backed articles, and clear entity definitions. The goal is to make your content the easiest, most reliable source for AI to reference.

### Pillar 4 — Authority Building

Strengthening your presence across the sources AI systems trust: Wikipedia, industry publications, review sites, and authoritative directories. Consistent, accurate information across these platforms reinforces your credibility.

## Measuring GEO Success

Unlike traditional SEO where you track rankings and organic traffic, GEO requires different metrics:

- **Citation frequency** — How often AI engines mention your brand in responses to relevant queries.
- **Citation quality** — Whether you're cited as a primary recommendation or just mentioned in passing.
- **Share of voice** — How your citation frequency compares to competitors.
- **AI Readiness Score** — A composite score that measures your overall optimization for AI engines.

## Getting Started with GEO

If you're new to GEO, here's where to start:

1. **Audit your current AI visibility.** Ask ChatGPT, Perplexity, and Google AI questions your target customers would ask. See if and how your brand appears.
2. **Implement basic Schema.org.** At minimum, add Organization, WebSite, and FAQPage markup to your site.
3. **Restructure your content.** Add clear, concise answers to common questions at the top of your key pages.
4. **Build topic authority.** Create comprehensive content clusters around your core expertise.

GEO is not a replacement for SEO — it's an essential complement. The brands that invest in both will dominate the next era of search. The question isn't whether to start — it's how quickly you can adapt.

---

*Want to know where your brand stands? [Get a free AI Readiness Audit](/ai-readiness) and see your score in minutes.*`,
      fr: `## Qu'est-ce que le Generative Engine Optimization ?

Le Generative Engine Optimization (GEO) est la pratique qui consiste a optimiser votre presence en ligne pour que les moteurs de recherche alimentes par l'IA — comme ChatGPT, Perplexity, Google AI Overviews et Claude — fassent apparaitre votre marque dans leurs reponses. Alors que le SEO traditionnel se concentre sur le classement dans une liste de liens bleus, le GEO se concentre sur l'apparition dans les reponses generees par l'IA.

Cette distinction est plus importante que jamais. Selon Gartner, 40 % des recherches en ligne impliquent desormais des outils d'IA, et ce chiffre s'accelere. Quand quelqu'un demande a ChatGPT "Quel est le meilleur outil de gestion de projet pour les startups ?", l'IA ne montre pas dix liens bleus — elle donne une reponse directe, mentionnant souvent des marques specifiques. Le GEO consiste a s'assurer que votre marque en fait partie.

## Pourquoi le GEO est essentiel maintenant

Le paysage de la recherche connait sa plus grande transformation depuis la creation de Google. Trois tendances convergentes rendent le GEO indispensable :

**1. L'adoption de l'IA explose.** ChatGPT a atteint 200 millions d'utilisateurs actifs hebdomadaires en 2025. Perplexity traite des millions de requetes chaque jour. Les Google AI Overviews apparaissent desormais dans plus de 30 % des resultats de recherche. Ce ne sont plus des outils de niche — ils deviennent le moyen principal de trouver de l'information.

**2. Le SEO traditionnel perd en efficacite.** Les recherches de SparkToro montrent que les Google AI Overviews reduisent les clics organiques jusqu'a 25 %. Meme si vous etes numero 1 sur Google, moins de personnes cliquent vers votre site. Le trafic qui provenait d'un bon classement est de plus en plus capture par les resumes generes par l'IA.

**3. La confiance des consommateurs dans l'IA grandit.** Une etude Salesforce de 2025 a revele que 79 % des consommateurs font autant confiance aux reponses generees par l'IA qu'aux recommandations personnelles. Quand ChatGPT fait apparaitre un produit, les gens agissent. Apparaitre dans les reponses IA n'est pas qu'une question de visibilite — cela influence directement les decisions d'achat.

## Comment le GEO differe du SEO traditionnel

Bien que le GEO et le SEO partagent certaines bases, ils different de maniere fondamentale :

### Ce que les systemes IA recherchent

Les moteurs de recherche traditionnels indexent les pages et les classent sur la base de centaines de signaux — backlinks, densite de mots-cles, vitesse de page, etc. Les systemes IA fonctionnent differemment. Ils synthetisent l'information a travers le web et generent des reponses originales. Pour ce faire efficacement, ils recherchent :

- **Du contenu structure et factuel** — Les systemes IA preferent un contenu qui presente l'information dans des formats clairs et bien organises. Pensez : tableaux, listes numerotees, reponses directes a des questions specifiques.
- **Des sources autoritaires** — Les signaux E-E-A-T (Experience, Expertise, Autorite, Fiabilite) comptent encore plus pour l'IA que pour la recherche traditionnelle. Les systemes IA sont entraines a preferer l'information provenant de sources credibles et bien etablies.
- **La clarte des entites** — Les modeles d'IA comprennent le monde a travers des entites (personnes, organisations, produits, concepts) et leurs relations. Le balisage Schema.org aide les systemes IA a comprendre exactement le sujet de votre contenu.
- **Des informations coherentes** — L'IA croise plusieurs sources. Si les informations de votre marque sont coherentes sur votre site web, Wikipedia, les annuaires professionnels et les sites d'avis, les systemes IA sont plus confiants pour vous citer.

### Changements de strategie de contenu

En SEO traditionnel, vous optimisez des pages individuelles pour des mots-cles specifiques. En GEO, vous optimisez l'ensemble de votre presence numerique pour etre une source fiable d'information. Cela signifie :

- **Contenu "reponse d'abord"** — Au lieu d'enterrer les reponses dans de longs articles, commencez par des reponses claires et concises que l'IA peut facilement extraire et citer.
- **Affirmations basees sur les donnees** — Les systemes IA adorent les statistiques, les etudes et les donnees verifiables. Le contenu qui inclut des chiffres specifiques et cite des sources credibles a plus de chances d'etre reference.
- **Autorite thematique** — Plutot que de cibler des mots-cles isoles, construisez une couverture complete de votre domaine. Si vous etes une entreprise CRM, avoir du contenu approfondi sur l'automatisation des ventes, la retention client, la gestion du pipeline et les sujets connexes signale votre expertise.

## Le cadre GEO : 4 piliers

Chez Cited, nous avons developpe un cadre pratique pour le GEO qui se decompose en quatre piliers :

### Pilier 1 — Audit de preparation IA

Avant d'optimiser, vous devez savoir ou vous en etes. Un Audit de Preparation IA teste votre marque sur plus de 50 requetes pertinentes sur tous les principaux moteurs IA. Il mesure la frequence a laquelle vous etes cite, dans quel contexte, et comment vous vous situez par rapport aux concurrents. Cette base de reference est essentielle pour suivre vos progres.

### Pilier 2 — Optimisation technique

Cela implique l'implementation des elements techniques qui aident l'IA a comprendre votre contenu : balisage Schema.org avance, architecture de site propre, hierarchie de titres correcte et donnees structurees pour vos entites cles (organisation, produits, services, personnes).

### Pilier 3 — Optimisation du contenu

Creer et restructurer le contenu pour qu'il soit pret a etre cite par l'IA. Cela comprend les pages FAQ, les guides structures, les articles appuyes par des donnees et les definitions claires d'entites. L'objectif est de faire de votre contenu la source la plus simple et la plus fiable que l'IA puisse referencer.

### Pilier 4 — Construction d'autorite

Renforcer votre presence sur les sources auxquelles les systemes IA font confiance : Wikipedia, publications sectorielles, sites d'avis et annuaires de reference. Des informations coherentes et exactes sur ces plateformes renforcent votre credibilite.

## Mesurer le succes du GEO

Contrairement au SEO traditionnel ou vous suivez les classements et le trafic organique, le GEO necessite des metriques differentes :

- **Frequence de citation** — A quelle frequence les moteurs IA mentionnent votre marque dans les reponses aux requetes pertinentes.
- **Qualite de citation** — Si vous etes cite comme recommandation principale ou simplement mentionne en passant.
- **Part de voix** — Comment votre frequence de citation se compare a celle des concurrents.
- **Score de Preparation IA** — Un score composite qui mesure votre optimisation globale pour les moteurs IA.

## Commencer avec le GEO

Si vous etes nouveau dans le GEO, voici par ou commencer :

1. **Auditez votre visibilite IA actuelle.** Posez a ChatGPT, Perplexity et Google AI les questions que vos clients cibles poseraient. Voyez si et comment votre marque apparait.
2. **Implementez le Schema.org de base.** Au minimum, ajoutez les balisages Organization, WebSite et FAQPage a votre site.
3. **Restructurez votre contenu.** Ajoutez des reponses claires et concises aux questions courantes en haut de vos pages cles.
4. **Construisez l'autorite thematique.** Creez des clusters de contenu complets autour de votre expertise principale.

Le GEO n'est pas un remplacement du SEO — c'est un complement essentiel. Les marques qui investissent dans les deux domineront la prochaine ere de la recherche. La question n'est pas de savoir si vous devez commencer — mais a quelle vitesse vous pouvez vous adapter.

---

*Vous voulez savoir ou en est votre marque ? [Obtenez un Audit de Preparation IA gratuit](/ai-readiness) et decouvrez votre score en quelques minutes.*`,
    },
  },
  {
    slug: 'how-chatgpt-cites-websites',
    titleKey: 'blog.article2Title',
    excerptKey: 'blog.article2Excerpt',
    categoryKey: 'blog.article2Category',
    readTimeKey: 'blog.article2ReadTime',
    dateKey: 'blog.article2Date',
    featured: false,
    content: {
      en: `## How Do AI Engines Generate Citations?

When you ask ChatGPT a question like "What's the best CRM for small businesses?", the response doesn't come from a single database lookup. It's the result of a complex process that synthesizes information from the model's training data and, increasingly, from real-time web retrieval. Understanding this process is key to getting your brand cited.

Modern AI systems like ChatGPT (with browsing), Perplexity, and Google AI Overviews use a technique called **Retrieval-Augmented Generation (RAG)**. Here's how it works at a high level:

1. **Query understanding** — The model interprets your question and identifies the key entities, intent, and context.
2. **Information retrieval** — The system searches the web (or its index) for relevant, authoritative sources.
3. **Synthesis** — The model combines information from multiple sources into a coherent response.
4. **Citation attribution** — Sources that contributed to the answer are referenced, either inline or as footnotes.

Each AI engine implements this differently, but the core principle is the same: they look for the most reliable, well-structured information available and synthesize it into an answer.

## What Makes a Source "Citable"?

Not all web pages are equally likely to be cited. Through extensive testing across AI engines, we've identified the key factors that determine whether your content gets referenced:

### 1. Structural Clarity

AI systems parse content programmatically. Content that is well-structured with clear headings, short paragraphs, bulleted lists, and direct answers to questions is significantly easier for AI to process and cite.

**What works:**
- H2/H3 heading hierarchy that matches common queries
- Short paragraphs (2-3 sentences max)
- Bulleted or numbered lists for comparisons and features
- Tables for data presentation
- FAQ sections with clear question-answer pairs

**What doesn't work:**
- Long, unbroken blocks of text
- Vague, marketing-heavy language without specific claims
- Content buried behind tabs, accordions, or JavaScript-heavy interfaces

### 2. E-E-A-T Signals

Google's E-E-A-T framework (Experience, Expertise, Authoritativeness, Trustworthiness) is even more critical for AI citations than for traditional search. AI systems are specifically trained to prefer information from credible sources. Key signals include:

- **Author credentials** — Named authors with verifiable expertise in the subject matter.
- **Publication reputation** — Content from established, well-known publications gets priority.
- **Data and sources** — Claims backed by specific data points, studies, or verifiable sources.
- **Recency** — Up-to-date information is preferred, especially for fast-moving topics.
- **Consistency** — Information that aligns with the broader consensus from multiple sources.

### 3. Entity Recognition

AI models understand the world through entities — named things and concepts with defined relationships. The clearer your entity definitions, the more likely AI will cite you accurately.

**Schema.org markup** is the primary way to declare entities to AI systems. At minimum, every business should implement:

- \`Organization\` — Your company name, logo, description, founders, and social profiles.
- \`WebSite\` — Your site's name, URL, and search functionality.
- \`WebPage\` — Page-level metadata including author, datePublished, and description.
- \`FAQPage\` — Structured FAQ data that AI can directly parse and cite.
- \`Product\` or \`Service\` — Detailed descriptions of what you offer.

### 4. Cross-Platform Consistency

AI systems don't just look at your website. They cross-reference information from multiple sources to assess reliability. If your company description, founding date, product features, and other details are consistent across:

- Your website
- Wikipedia (if applicable)
- LinkedIn company page
- Industry directories (G2, Capterra, Clutch, etc.)
- Review sites (Trustpilot, Google Reviews)
- Social media profiles

...then AI systems have higher confidence in citing you. Inconsistencies — different founding dates, conflicting product descriptions, outdated information — reduce citation likelihood.

## How Each AI Engine Handles Citations Differently

### ChatGPT

ChatGPT (with browsing enabled) actively searches the web when answering factual questions. It tends to cite sources inline and prefers:
- Well-known publications and official websites
- Pages with clear, factual content
- Sources that directly answer the query
- Content with specific data points and statistics

ChatGPT's citation style is conversational — it weaves sources into its narrative rather than listing them separately. Being mentioned by name in ChatGPT's response is the gold standard for AI visibility.

### Perplexity

Perplexity is built entirely around source attribution. Every response includes numbered citations with clickable links. Perplexity's retrieval system favors:
- Pages with high topical relevance
- Content that is frequently linked to by other sources
- Well-structured pages with clear answers
- Recent content for time-sensitive queries

Perplexity is often the easiest AI engine to get cited on because its retrieval is more inclusive than ChatGPT's.

### Google AI Overviews

Google AI Overviews appear at the top of search results and synthesize information from indexed pages. They heavily favor:
- Pages already ranking well in traditional search
- Content from domains with high authority
- Structured data and Schema.org markup
- Content that directly addresses the search query

If you're already doing well in Google SEO, optimizing for AI Overviews is a natural extension.

## Practical Steps to Increase Your Citations

Based on our analysis of thousands of AI responses across industries, here are the most impactful actions you can take:

### Step 1 — Audit Your Current State

Before optimizing, understand where you stand. For each of your key target queries:
- Ask the same question on ChatGPT, Perplexity, Claude, and Google AI
- Record whether your brand is mentioned, and in what context
- Note which competitors are cited and examine their content

### Step 2 — Optimize Your Key Pages

For your most important pages (homepage, product pages, key blog posts):
- Add clear, concise answers to likely questions in the first 200 words
- Implement comprehensive Schema.org markup
- Include specific data points, statistics, and verifiable claims
- Structure content with clear H2/H3 hierarchy
- Add FAQ sections with common questions and direct answers

### Step 3 — Build Your Entity Graph

Create a consistent entity presence across the web:
- Ensure Schema.org Organization markup is complete and accurate
- Update all directory listings with consistent information
- If eligible, create or improve your Wikipedia presence
- Maintain active, consistent social media profiles

### Step 4 — Create Citation-Ready Content

Develop content specifically designed to be cited:
- **Comparison pages** — "X vs Y" content with clear, structured comparisons
- **Statistics pages** — Original data or curated industry statistics
- **How-to guides** — Step-by-step instructions with clear outcomes
- **FAQ pages** — Comprehensive question-answer pairs on your domain
- **Glossary pages** — Clear definitions of industry terms

## The Future of AI Citations

AI citation is still evolving rapidly. Several trends are shaping where this is headed:

- **Real-time retrieval is becoming standard.** More AI engines are incorporating live web search, making fresh, well-optimized content increasingly important.
- **Multimodal content matters.** AI systems are starting to process images, videos, and structured data alongside text. Rich media with proper alt text and metadata will become more important.
- **Brand mentions will become a key metric.** Just as backlinks became a currency in SEO, AI citations are becoming a new measure of brand authority.

The brands that invest in understanding and optimizing for AI citations today will have a significant advantage as this channel continues to grow.

---

*Ready to see how often AI cites your brand? [Run a free audit](/ai-readiness) and get your AI Readiness Score.*`,
      fr: `## Comment les moteurs IA generent-ils des citations ?

Quand vous posez a ChatGPT une question comme "Quel est le meilleur CRM pour les petites entreprises ?", la reponse ne provient pas d'une simple recherche dans une base de donnees. C'est le resultat d'un processus complexe qui synthetise l'information a partir des donnees d'entrainement du modele et, de plus en plus, de la recherche web en temps reel. Comprendre ce processus est essentiel pour faire citer votre marque.

Les systemes IA modernes comme ChatGPT (avec navigation), Perplexity et Google AI Overviews utilisent une technique appelee **Generation Augmentee par Recuperation (RAG)**. Voici comment cela fonctionne a haut niveau :

1. **Comprehension de la requete** — Le modele interprete votre question et identifie les entites cles, l'intention et le contexte.
2. **Recuperation d'information** — Le systeme recherche sur le web (ou dans son index) des sources pertinentes et autoritaires.
3. **Synthese** — Le modele combine l'information de plusieurs sources en une reponse coherente.
4. **Attribution des citations** — Les sources qui ont contribue a la reponse sont referencees, soit en ligne soit en notes de bas de page.

Chaque moteur IA implemente cela differemment, mais le principe fondamental reste le meme : ils cherchent l'information la plus fiable et la mieux structuree disponible pour la synthetiser en une reponse.

## Qu'est-ce qui rend une source "citable" ?

Toutes les pages web n'ont pas la meme probabilite d'etre citees. Grace a des tests approfondis sur les moteurs IA, nous avons identifie les facteurs cles qui determinent si votre contenu est reference :

### 1. Clarte structurelle

Les systemes IA analysent le contenu de maniere programmatique. Un contenu bien structure avec des titres clairs, des paragraphes courts, des listes a puces et des reponses directes aux questions est nettement plus facile a traiter et a citer pour l'IA.

**Ce qui fonctionne :**
- Hierarchie de titres H2/H3 correspondant aux requetes courantes
- Paragraphes courts (2-3 phrases maximum)
- Listes a puces ou numerotees pour les comparaisons et les fonctionnalites
- Tableaux pour la presentation des donnees
- Sections FAQ avec des paires question-reponse claires

**Ce qui ne fonctionne pas :**
- Longs blocs de texte ininterrompus
- Langage vague, trop marketing sans affirmations specifiques
- Contenu cache derriere des onglets, accordeons ou interfaces JavaScript lourdes

### 2. Signaux E-E-A-T

Le cadre E-E-A-T de Google (Experience, Expertise, Autorite, Fiabilite) est encore plus critique pour les citations IA que pour la recherche traditionnelle. Les systemes IA sont specifiquement entraines a preferer l'information provenant de sources credibles. Les signaux cles comprennent :

- **Credentials de l'auteur** — Auteurs nommes avec une expertise verifiable dans le sujet.
- **Reputation de la publication** — Le contenu de publications etablies et connues est prioritaire.
- **Donnees et sources** — Affirmations appuyees par des donnees specifiques, des etudes ou des sources verifiables.
- **Actualite** — L'information a jour est preferee, surtout pour les sujets en evolution rapide.
- **Coherence** — L'information qui s'aligne avec le consensus general de multiples sources.

### 3. Reconnaissance des entites

Les modeles IA comprennent le monde a travers des entites — des choses et concepts nommes avec des relations definies. Plus vos definitions d'entites sont claires, plus l'IA est susceptible de vous citer avec precision.

Le **balisage Schema.org** est le principal moyen de declarer des entites aux systemes IA. Au minimum, chaque entreprise devrait implementer :

- \`Organization\` — Le nom de votre entreprise, logo, description, fondateurs et profils sociaux.
- \`WebSite\` — Le nom, l'URL et la fonctionnalite de recherche de votre site.
- \`WebPage\` — Metadonnees au niveau de la page incluant auteur, date de publication et description.
- \`FAQPage\` — Donnees FAQ structurees que l'IA peut directement analyser et citer.
- \`Product\` ou \`Service\` — Descriptions detaillees de ce que vous proposez.

### 4. Coherence multiplateforme

Les systemes IA ne regardent pas seulement votre site web. Ils croisent l'information de multiples sources pour evaluer la fiabilite. Si la description de votre entreprise, date de creation, fonctionnalites produit et autres details sont coherents sur :

- Votre site web
- Wikipedia (le cas echeant)
- Votre page LinkedIn entreprise
- Les annuaires professionnels (G2, Capterra, Clutch, etc.)
- Les sites d'avis (Trustpilot, Google Reviews)
- Les profils sur les reseaux sociaux

...alors les systemes IA ont une plus grande confiance pour vous citer. Les incoherences — dates de creation differentes, descriptions de produits contradictoires, informations obsoletes — reduisent la probabilite de citation.

## Comment chaque moteur IA gere les citations differemment

### ChatGPT

ChatGPT (avec la navigation activee) recherche activement sur le web pour repondre aux questions factuelles. Il tend a citer les sources en ligne et prefere :
- Les publications connues et les sites officiels
- Les pages avec un contenu clair et factuel
- Les sources qui repondent directement a la requete
- Le contenu avec des donnees et statistiques specifiques

Le style de citation de ChatGPT est conversationnel — il integre les sources dans son recit plutot que de les lister separement. Etre mentionne par nom dans la reponse de ChatGPT est le graal de la visibilite IA.

### Perplexity

Perplexity est entierement construit autour de l'attribution des sources. Chaque reponse inclut des citations numerotees avec des liens cliquables. Le systeme de recuperation de Perplexity favorise :
- Les pages avec une forte pertinence thematique
- Le contenu frequemment lie par d'autres sources
- Les pages bien structurees avec des reponses claires
- Le contenu recent pour les requetes sensibles au temps

Perplexity est souvent le moteur IA le plus facile pour obtenir des citations car sa recuperation est plus inclusive que celle de ChatGPT.

### Google AI Overviews

Les Google AI Overviews apparaissent en haut des resultats de recherche et synthetisent l'information des pages indexees. Ils favorisent fortement :
- Les pages deja bien classees dans la recherche traditionnelle
- Le contenu de domaines a haute autorite
- Les donnees structurees et le balisage Schema.org
- Le contenu qui repond directement a la requete de recherche

Si vous etes deja performant en SEO Google, l'optimisation pour les AI Overviews est une extension naturelle.

## Etapes pratiques pour augmenter vos citations

D'apres notre analyse de milliers de reponses IA dans differents secteurs, voici les actions les plus impactantes :

### Etape 1 — Auditez votre etat actuel

Avant d'optimiser, comprenez ou vous en etes. Pour chacune de vos requetes cibles :
- Posez la meme question sur ChatGPT, Perplexity, Claude et Google AI
- Notez si votre marque est mentionnee, et dans quel contexte
- Identifiez quels concurrents sont cites et examinez leur contenu

### Etape 2 — Optimisez vos pages cles

Pour vos pages les plus importantes (page d'accueil, pages produit, articles de blog cles) :
- Ajoutez des reponses claires et concises aux questions probables dans les 200 premiers mots
- Implementez un balisage Schema.org complet
- Incluez des donnees specifiques, des statistiques et des affirmations verifiables
- Structurez le contenu avec une hierarchie H2/H3 claire
- Ajoutez des sections FAQ avec des questions courantes et des reponses directes

### Etape 3 — Construisez votre graphe d'entites

Creez une presence d'entite coherente sur le web :
- Assurez-vous que le balisage Schema.org Organization est complet et precis
- Mettez a jour tous les annuaires avec des informations coherentes
- Si eligible, creez ou ameliorez votre presence Wikipedia
- Maintenez des profils de reseaux sociaux actifs et coherents

### Etape 4 — Creez du contenu pret a etre cite

Developpez du contenu specifiquement concu pour etre cite :
- **Pages de comparaison** — Contenu "X vs Y" avec des comparaisons claires et structurees
- **Pages de statistiques** — Donnees originales ou statistiques sectorielles curees
- **Guides pratiques** — Instructions etape par etape avec des resultats clairs
- **Pages FAQ** — Paires question-reponse completes sur votre domaine
- **Pages glossaire** — Definitions claires des termes de votre secteur

## L'avenir des citations IA

La citation IA evolue encore rapidement. Plusieurs tendances faconnent l'avenir :

- **La recuperation en temps reel devient la norme.** De plus en plus de moteurs IA integrent la recherche web en direct, rendant le contenu frais et bien optimise de plus en plus important.
- **Le contenu multimodal compte.** Les systemes IA commencent a traiter les images, videos et donnees structurees en plus du texte. Les medias riches avec un texte alternatif et des metadonnees appropriees deviendront plus importants.
- **Les mentions de marque deviendront une metrique cle.** Tout comme les backlinks sont devenus une monnaie en SEO, les citations IA deviennent une nouvelle mesure de l'autorite de marque.

Les marques qui investissent dans la comprehension et l'optimisation des citations IA aujourd'hui auront un avantage significatif a mesure que ce canal continue de croitre.

---

*Pret a voir a quelle frequence l'IA cite votre marque ? [Lancez un audit gratuit](/ai-readiness) et obtenez votre Score de Preparation IA.*`,
    },
  },
  {
    slug: 'schema-org-for-ai',
    titleKey: 'blog.article3Title',
    excerptKey: 'blog.article3Excerpt',
    categoryKey: 'blog.article3Category',
    readTimeKey: 'blog.article3ReadTime',
    dateKey: 'blog.article3Date',
    featured: false,
    content: {
      en: `## Why Schema.org Matters for AI Visibility

Schema.org is a collaborative vocabulary used to add structured data to web pages. Originally created to help search engines understand content, it has become even more critical in the age of AI. When AI systems like ChatGPT, Perplexity, and Google AI process your website, Schema.org markup acts as a clear, machine-readable map of who you are, what you do, and what information your pages contain.

Without Schema.org, AI systems must infer this information from unstructured text — a process that's error-prone and often incomplete. With proper markup, you're essentially giving AI a structured brief about your brand. The result: more accurate citations, better entity recognition, and higher visibility in AI-generated responses.

## Schema.org Basics: What You Need to Know

### How Schema.org Works

Schema.org markup is added to your HTML using one of three formats:

- **JSON-LD** (recommended) — A JavaScript-based format added in a \`<script>\` tag. It's the easiest to implement and maintain, and is preferred by Google.
- **Microdata** — HTML attributes added directly to your existing markup.
- **RDFa** — Similar to Microdata but more flexible.

For AI optimization, **JSON-LD is the clear winner**. It's cleanly separated from your HTML, easy to validate, and supported by all major AI systems.

Here's a basic example:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yourcompany.com",
  "description": "A brief, factual description of what your company does.",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Jane Smith"
  }
}
\`\`\`

This tells AI systems exactly what your organization is, when it was founded, and who founded it — information they would otherwise have to guess from your page content.

### The Schema.org Types That Matter Most for AI

Not all Schema.org types are equally useful for AI visibility. Based on our testing, here are the types ranked by impact:

**Tier 1 — Essential (implement immediately)**

1. **Organization** — Your company's core identity
2. **WebSite** — Your site's metadata and search functionality
3. **WebPage** — Page-level information (author, date, description)
4. **FAQPage** — Structured FAQ content (extremely high impact for AI citations)

**Tier 2 — Important (implement within 30 days)**

5. **Article / BlogPosting** — For blog posts and editorial content
6. **Product** — For product pages with features, pricing, and reviews
7. **Service** — For service descriptions and offerings
8. **HowTo** — For step-by-step guides and tutorials

**Tier 3 — Advanced (implement for competitive advantage)**

9. **Person** — For team members and thought leaders
10. **Review / AggregateRating** — For social proof and trust signals
11. **Event** — For webinars, conferences, and scheduled events
12. **BreadcrumbList** — For site navigation clarity
13. **LocalBusiness** — For businesses with physical locations

## Implementation Guide: Step by Step

### Step 1 — Organization Schema

This is the foundation. Every website should have Organization schema on the homepage (and ideally on every page).

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cited",
  "alternateName": "Cited Agency",
  "url": "https://citedagency.com",
  "logo": "https://citedagency.com/logo.png",
  "description": "AI visibility agency that optimizes brands for visibility in ChatGPT, Perplexity, and Google AI through Generative Engine Optimization (GEO).",
  "foundingDate": "2025",
  "founder": {
    "@type": "Person",
    "name": "Thomas Vignaud"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ras Al Khaimah",
    "addressCountry": "AE"
  },
  "sameAs": [
    "https://linkedin.com/company/cited-agency",
    "https://twitter.com/citedagency"
  ],
  "knowsAbout": [
    "Generative Engine Optimization",
    "AI Visibility",
    "Schema.org Implementation",
    "E-E-A-T Optimization"
  ]
}
\`\`\`

**Key fields for AI:**
- \`description\` — Keep it factual and specific. This is often what AI systems use verbatim.
- \`knowsAbout\` — Declares your areas of expertise. AI uses this to determine relevance for specific queries.
- \`sameAs\` — Links to your profiles on other platforms, helping AI build a complete picture of your entity.

### Step 2 — WebSite Schema

Add this to your homepage to declare your site's identity.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cited",
  "url": "https://citedagency.com",
  "description": "Learn about Generative Engine Optimization and AI visibility strategies.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://citedagency.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
\`\`\`

### Step 3 — FAQPage Schema

This is one of the highest-impact Schema types for AI citations. When AI systems encounter structured FAQ data, they can directly parse and cite your answers.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Generative Engine Optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generative Engine Optimization (GEO) is the practice of optimizing your online presence so that AI-powered search engines like ChatGPT, Perplexity, and Google AI surface your brand in their responses."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see results from GEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most brands see measurable improvements in AI visibility within 90 days. The timeline depends on your starting point, the competitiveness of your industry, and the scope of optimization."
      }
    }
  ]
}
\`\`\`

**Tips for FAQ Schema:**
- Use actual questions your customers ask
- Keep answers concise (2-3 sentences) and factual
- Include specific data points where possible
- Update FAQs regularly with new questions

### Step 4 — Article / BlogPosting Schema

For every blog post or article, add structured data that helps AI understand the content, author, and context.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Generative Engine Optimization (GEO)?",
  "description": "A comprehensive guide to GEO and why it matters for your business in the AI era.",
  "author": {
    "@type": "Person",
    "name": "Thomas Vignaud",
    "url": "https://citedagency.com/about/thomas"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Cited",
    "logo": {
      "@type": "ImageObject",
      "url": "https://citedagency.com/logo.png"
    }
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-01-15",
  "mainEntityOfPage": "https://citedagency.com/blog/what-is-geo"
}
\`\`\`

### Step 5 — Product or Service Schema

If you sell products or services, structured data helps AI accurately describe and surface them.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Readiness Audit",
  "provider": {
    "@type": "Organization",
    "name": "Cited"
  },
  "description": "Complete analysis of your brand's visibility in AI engines including ChatGPT, Perplexity, and Google AI. Includes testing on 50+ key queries and a personalized optimization roadmap.",
  "serviceType": "Digital Marketing Audit",
  "areaServed": "Worldwide"
}
\`\`\`

## Testing and Validation

After implementing Schema.org, validate your markup:

### Validation Tools

1. **Google Rich Results Test** — Tests whether your markup qualifies for rich results in Google Search.
2. **Schema.org Validator** — The official validator at validator.schema.org checks your JSON-LD syntax.
3. **AI Citation Testing** — Manually test by asking AI engines questions about your brand and monitoring whether citations improve.

### Common Mistakes to Avoid

- **Missing required properties** — Each Schema type has required and recommended fields. Always include at least the required ones.
- **Inconsistent data** — Your Schema.org data should exactly match the visible content on the page. Discrepancies can reduce trust signals.
- **Outdated information** — Review and update your Schema markup whenever your business information changes.
- **Overloading with irrelevant types** — Only implement Schema types that are genuinely relevant to your content. Adding irrelevant markup doesn't help and can confuse AI systems.
- **Forgetting nested entities** — When referencing related entities (like the author of an article), provide enough detail for AI to understand the relationship.

## Advanced Schema Strategies for AI

### Connecting Entities

One of the most powerful Schema.org techniques for AI is creating a connected entity graph. Instead of isolated Schema blocks, link your entities together:

- Your **Organization** entity references your **Person** entities (founders, team)
- Your **Article** entities reference both the **Person** author and the **Organization** publisher
- Your **Service** entities reference the **Organization** provider
- Your **FAQPage** entities are connected to relevant **WebPage** entities

This web of relationships gives AI systems a comprehensive understanding of your brand and its context.

### Using \`knowsAbout\` and \`hasOfferCatalog\`

Two underused Schema properties that are particularly valuable for AI:

- \`knowsAbout\` on Organization — Explicitly declares your areas of expertise. AI uses this to determine if you're a relevant source for specific topics.
- \`hasOfferCatalog\` on Organization — Provides a structured catalog of your products or services, making it easy for AI to recommend specific offerings.

### Implementing \`speakable\`

The \`speakable\` property identifies sections of a page that are particularly suitable for text-to-speech and, by extension, AI citation. Mark your key summary paragraphs and FAQ answers as speakable:

\`\`\`json
{
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".article-summary", ".faq-answer"]
  }
}
\`\`\`

## Your Schema.org Implementation Checklist

Here's a prioritized checklist for getting started:

- [ ] Add Organization schema to your homepage
- [ ] Add WebSite schema to your homepage
- [ ] Add WebPage schema to all key pages
- [ ] Create FAQPage schema for your FAQ or product pages
- [ ] Add Article schema to all blog posts
- [ ] Add Service or Product schema to relevant pages
- [ ] Validate all markup with Google Rich Results Test
- [ ] Test AI citations before and after implementation

Schema.org implementation is one of the highest-ROI activities for AI visibility. It's a one-time technical investment that continuously improves how AI systems understand and cite your brand.

---

*Not sure where to start? [Run a free Schema Audit](/schema-audit) and get a detailed report on your current implementation and opportunities.*`,
      fr: `## Pourquoi Schema.org est important pour la visibilite IA

Schema.org est un vocabulaire collaboratif utilise pour ajouter des donnees structurees aux pages web. Cree a l'origine pour aider les moteurs de recherche a comprendre le contenu, il est devenu encore plus critique a l'ere de l'IA. Quand les systemes IA comme ChatGPT, Perplexity et Google AI traitent votre site web, le balisage Schema.org agit comme une carte claire et lisible par les machines de qui vous etes, ce que vous faites et quelles informations vos pages contiennent.

Sans Schema.org, les systemes IA doivent inferer ces informations a partir de texte non structure — un processus sujet aux erreurs et souvent incomplet. Avec un balisage adequat, vous donnez essentiellement a l'IA un brief structure sur votre marque. Le resultat : des citations plus precises, une meilleure reconnaissance des entites et une visibilite accrue dans les reponses generees par l'IA.

## Les bases de Schema.org : ce que vous devez savoir

### Comment fonctionne Schema.org

Le balisage Schema.org est ajoute a votre HTML en utilisant l'un des trois formats :

- **JSON-LD** (recommande) — Un format base sur JavaScript ajoute dans une balise \`<script>\`. C'est le plus facile a implementer et maintenir, et il est prefere par Google.
- **Microdata** — Des attributs HTML ajoutes directement a votre balisage existant.
- **RDFa** — Similaire aux Microdata mais plus flexible.

Pour l'optimisation IA, **JSON-LD est le choix evident**. Il est proprement separe de votre HTML, facile a valider et supporte par tous les principaux systemes IA.

Voici un exemple basique :

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Votre Entreprise",
  "url": "https://votreentreprise.com",
  "description": "Une description breve et factuelle de ce que fait votre entreprise.",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Marie Dupont"
  }
}
\`\`\`

Cela dit aux systemes IA exactement ce qu'est votre organisation, quand elle a ete fondee et qui l'a fondee — des informations qu'ils devraient autrement deviner a partir du contenu de votre page.

### Les types Schema.org qui comptent le plus pour l'IA

Tous les types Schema.org ne sont pas egalement utiles pour la visibilite IA. D'apres nos tests, voici les types classes par impact :

**Niveau 1 — Essentiel (a implementer immediatement)**

1. **Organization** — L'identite fondamentale de votre entreprise
2. **WebSite** — Les metadonnees et la fonctionnalite de recherche de votre site
3. **WebPage** — Informations au niveau de la page (auteur, date, description)
4. **FAQPage** — Contenu FAQ structure (impact extremement eleve pour les citations IA)

**Niveau 2 — Important (a implementer sous 30 jours)**

5. **Article / BlogPosting** — Pour les articles de blog et le contenu editorial
6. **Product** — Pour les pages produit avec fonctionnalites, prix et avis
7. **Service** — Pour les descriptions de services et offres
8. **HowTo** — Pour les guides etape par etape et tutoriels

**Niveau 3 — Avance (a implementer pour l'avantage concurrentiel)**

9. **Person** — Pour les membres de l'equipe et les leaders d'opinion
10. **Review / AggregateRating** — Pour la preuve sociale et les signaux de confiance
11. **Event** — Pour les webinaires, conferences et evenements programmes
12. **BreadcrumbList** — Pour la clarte de la navigation du site
13. **LocalBusiness** — Pour les entreprises avec des emplacements physiques

## Guide d'implementation : etape par etape

### Etape 1 — Schema Organization

C'est la fondation. Chaque site web devrait avoir le schema Organization sur la page d'accueil (et idealement sur chaque page).

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cited",
  "alternateName": "Cited Agency",
  "url": "https://citedagency.com",
  "logo": "https://citedagency.com/logo.png",
  "description": "Agence de visibilite IA qui optimise les marques pour la visibilite dans ChatGPT, Perplexity et Google AI grace au Generative Engine Optimization (GEO).",
  "foundingDate": "2025",
  "founder": {
    "@type": "Person",
    "name": "Thomas Vignaud"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ras Al Khaimah",
    "addressCountry": "AE"
  },
  "sameAs": [
    "https://linkedin.com/company/cited-agency",
    "https://twitter.com/citedagency"
  ],
  "knowsAbout": [
    "Generative Engine Optimization",
    "Visibilite IA",
    "Implementation Schema.org",
    "Optimisation E-E-A-T"
  ]
}
\`\`\`

**Champs cles pour l'IA :**
- \`description\` — Restez factuel et specifique. C'est souvent ce que les systemes IA utilisent textuellement.
- \`knowsAbout\` — Declare vos domaines d'expertise. L'IA utilise cela pour determiner la pertinence pour des requetes specifiques.
- \`sameAs\` — Liens vers vos profils sur d'autres plateformes, aidant l'IA a construire une image complete de votre entite.

### Etape 2 — Schema WebSite

Ajoutez ceci a votre page d'accueil pour declarer l'identite de votre site.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cited",
  "url": "https://citedagency.com",
  "description": "Decouvrez le Generative Engine Optimization et les strategies de visibilite IA.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://citedagency.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
\`\`\`

### Etape 3 — Schema FAQPage

C'est l'un des types Schema a plus fort impact pour les citations IA. Quand les systemes IA rencontrent des donnees FAQ structurees, ils peuvent directement les analyser et citer vos reponses.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce que le Generative Engine Optimization ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le Generative Engine Optimization (GEO) est la pratique qui consiste a optimiser votre presence en ligne pour que les moteurs de recherche IA comme ChatGPT, Perplexity et Google AI fassent apparaitre votre marque dans leurs reponses."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour voir des resultats du GEO ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La plupart des marques voient des ameliorations mesurables de leur visibilite IA sous 90 jours. Le delai depend de votre point de depart, de la competitivite de votre secteur et de l'etendue de l'optimisation."
      }
    }
  ]
}
\`\`\`

**Conseils pour le Schema FAQ :**
- Utilisez les vraies questions que vos clients posent
- Gardez les reponses concises (2-3 phrases) et factuelles
- Incluez des donnees specifiques quand c'est possible
- Mettez a jour les FAQ regulierement avec de nouvelles questions

### Etape 4 — Schema Article / BlogPosting

Pour chaque article de blog, ajoutez des donnees structurees qui aident l'IA a comprendre le contenu, l'auteur et le contexte.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Qu'est-ce que le Generative Engine Optimization (GEO) ?",
  "description": "Un guide complet sur le GEO et pourquoi il est important pour votre entreprise a l'ere de l'IA.",
  "author": {
    "@type": "Person",
    "name": "Thomas Vignaud",
    "url": "https://citedagency.com/about/thomas"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Cited",
    "logo": {
      "@type": "ImageObject",
      "url": "https://citedagency.com/logo.png"
    }
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-01-15",
  "mainEntityOfPage": "https://citedagency.com/blog/what-is-geo"
}
\`\`\`

### Etape 5 — Schema Product ou Service

Si vous vendez des produits ou services, les donnees structurees aident l'IA a les decrire et les faire apparaitre avec precision.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Audit de Preparation IA",
  "provider": {
    "@type": "Organization",
    "name": "Cited"
  },
  "description": "Analyse complete de la visibilite de votre marque dans les moteurs IA incluant ChatGPT, Perplexity et Google AI. Inclut des tests sur 50+ requetes cles et une feuille de route d'optimisation personnalisee.",
  "serviceType": "Audit de Marketing Digital",
  "areaServed": "Monde entier"
}
\`\`\`

## Tests et validation

Apres avoir implemente Schema.org, validez votre balisage :

### Outils de validation

1. **Google Rich Results Test** — Teste si votre balisage est eligible aux resultats enrichis dans Google Search.
2. **Validateur Schema.org** — Le validateur officiel sur validator.schema.org verifie votre syntaxe JSON-LD.
3. **Test de citations IA** — Testez manuellement en posant aux moteurs IA des questions sur votre marque et en surveillant si les citations s'ameliorent.

### Erreurs courantes a eviter

- **Proprietes requises manquantes** — Chaque type Schema a des champs requis et recommandes. Incluez toujours au moins les champs requis.
- **Donnees incoherentes** — Vos donnees Schema.org doivent correspondre exactement au contenu visible sur la page. Les ecarts peuvent reduire les signaux de confiance.
- **Informations obsoletes** — Revoyez et mettez a jour votre balisage Schema chaque fois que vos informations business changent.
- **Surcharge de types non pertinents** — N'implementez que les types Schema reellement pertinents pour votre contenu. Ajouter du balisage non pertinent n'aide pas et peut confondre les systemes IA.
- **Oubli des entites imbriquees** — Quand vous referencez des entites liees (comme l'auteur d'un article), fournissez assez de details pour que l'IA comprenne la relation.

## Strategies Schema avancees pour l'IA

### Connecter les entites

L'une des techniques Schema.org les plus puissantes pour l'IA est la creation d'un graphe d'entites connecte. Au lieu de blocs Schema isoles, liez vos entites ensemble :

- Votre entite **Organization** reference vos entites **Person** (fondateurs, equipe)
- Vos entites **Article** referencent a la fois l'auteur **Person** et l'editeur **Organization**
- Vos entites **Service** referencent le fournisseur **Organization**
- Vos entites **FAQPage** sont connectees aux entites **WebPage** pertinentes

Ce reseau de relations donne aux systemes IA une comprehension globale de votre marque et de son contexte.

### Utiliser \`knowsAbout\` et \`hasOfferCatalog\`

Deux proprietes Schema sous-utilisees qui sont particulierement precieuses pour l'IA :

- \`knowsAbout\` sur Organization — Declare explicitement vos domaines d'expertise. L'IA utilise cela pour determiner si vous etes une source pertinente pour des sujets specifiques.
- \`hasOfferCatalog\` sur Organization — Fournit un catalogue structure de vos produits ou services, facilitant la recommandation d'offres specifiques par l'IA.

### Implementer \`speakable\`

La propriete \`speakable\` identifie les sections d'une page particulierement adaptees a la synthese vocale et, par extension, a la citation IA. Marquez vos paragraphes de resume cles et vos reponses FAQ comme speakable :

\`\`\`json
{
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".article-summary", ".faq-answer"]
  }
}
\`\`\`

## Votre checklist d'implementation Schema.org

Voici une liste de priorites pour commencer :

- [ ] Ajouter le schema Organization a votre page d'accueil
- [ ] Ajouter le schema WebSite a votre page d'accueil
- [ ] Ajouter le schema WebPage a toutes les pages cles
- [ ] Creer le schema FAQPage pour vos pages FAQ ou produit
- [ ] Ajouter le schema Article a tous les articles de blog
- [ ] Ajouter le schema Service ou Product aux pages pertinentes
- [ ] Valider tout le balisage avec Google Rich Results Test
- [ ] Tester les citations IA avant et apres l'implementation

L'implementation de Schema.org est l'une des activites au meilleur ROI pour la visibilite IA. C'est un investissement technique ponctuel qui ameliore continuellement la facon dont les systemes IA comprennent et citent votre marque.

---

*Vous ne savez pas par ou commencer ? [Lancez un Audit Schema gratuit](/schema-audit) et obtenez un rapport detaille sur votre implementation actuelle et les opportunites.*`,
    },
  },
  {
    slug: 'what-ai-visibility-can-and-cannot-guarantee',
    titleKey: 'blog.article7Title',
    excerptKey: 'blog.article7Excerpt',
    categoryKey: 'blog.article7Category',
    readTimeKey: 'blog.article7ReadTime',
    dateKey: 'blog.article7Date',
    featured: false,
    content: {
      en: `## How LLMs Select Information

When a large language model like ChatGPT, Claude, or Gemini generates a response, it draws from two distinct sources:

**1. Parametric memory** — Information encoded in the model's weights during training. This is a compressed representation of the training data, not a database lookup. The model doesn't "remember" specific web pages — it has learned patterns, associations, and factual relationships from billions of documents.

**2. Retrieval-Augmented Generation (RAG)** — Many AI systems now supplement parametric memory with real-time web retrieval. When you ask Perplexity or ChatGPT (with browsing) a question, they search the web, retrieve relevant pages, and synthesize information from those sources into a response.

Both mechanisms are probabilistic. The same query can produce different results depending on the model version, the retrieval results that day, the phrasing of the question, and even the conversation context. This is fundamentally different from traditional search, where a keyword query returns a deterministic ranked list.

## The Difference Between Mention, Citation, and Presence

These terms are often used interchangeably, but they mean different things:

- **Mention** — The AI names your brand in its response. Example: "Tools like Salesforce and HubSpot are popular CRM options."
- **Citation** — The AI attributes a specific claim or piece of information to your source, often with a link. Example: "According to Cited Agency's research, 40% of searches now go through AI tools. [source]"
- **Presence** — Your brand's information influences the AI's response even without explicit mention. If the AI accurately describes your product's features without naming you, your structured data and content likely influenced the response.

No service can guarantee any of these outcomes for a specific query at a specific time. AI outputs are non-deterministic by design.

## What AI Visibility Optimization Can Do

While no one controls what AI systems say, there are concrete, measurable actions that influence the likelihood of your brand appearing in AI-generated answers:

### Optimize technical signals

- **Schema.org implementation** — Structured data gives AI systems a machine-readable map of your brand, products, and services. This directly influences how accurately AI describes your business.
- **Site architecture** — Clean URL structure, proper heading hierarchy, and fast page loads make your content easier for AI retrieval systems to process.
- **Entity consistency** — When your brand information is consistent across your website, social profiles, directories, and Wikipedia, AI systems have higher confidence in the accuracy of information about you.

### Optimize content signals

- **Answer-first content** — Structuring content to directly answer common questions makes it more likely to be retrieved and used by AI systems.
- **Data-backed claims** — Content with specific statistics, citations, and verifiable data points is weighted more heavily by AI retrieval systems.
- **Topic authority** — Comprehensive coverage of your domain signals expertise that AI systems recognize.

### Measure and track

- **AI visibility scoring** — Testing your brand across multiple AI providers on relevant queries and tracking changes over time.
- **Competitive benchmarking** — Understanding how your visibility compares to competitors and identifying gaps.
- **Monthly reporting** — Documenting progress with concrete data points.

## What No One Can Guarantee

This is where transparency matters. Here is what no AI visibility service — including ours — can honestly promise:

### Specific placement outcomes

"Your brand will be the #1 recommendation in ChatGPT for [query]" — This is not possible to guarantee. AI responses vary based on model updates, retrieval changes, query phrasing, user context, and randomness built into the generation process.

### Permanent results

AI models are updated regularly. Training data changes. Retrieval algorithms evolve. A brand that appears frequently in AI responses today may not tomorrow — and vice versa. Optimization is an ongoing process, not a one-time fix.

### Control over AI outputs

No one controls what ChatGPT, Perplexity, or Google AI says. These are independent systems built by separate companies with their own priorities, training processes, and safety measures. Any service claiming to control AI outputs is misrepresenting their capabilities.

### Guaranteed score improvements

While our scoring methodology measures real signals — structured data quality, content optimization, entity consistency — the score reflects optimization inputs, not guaranteed AI behavior. A perfect optimization score does not guarantee any specific AI output.

## How to Measure Progress Honestly

Given these constraints, here is what honest measurement looks like:

**1. Track optimization inputs, not just outputs.** Measure whether Schema.org markup is implemented correctly, whether content is structured for AI comprehension, whether entity data is consistent. These are things you can control and verify.

**2. Sample AI responses over time.** Test a consistent set of queries across multiple AI providers monthly. Track trends — is your brand appearing more frequently? In more positive contexts? This shows directional progress even if individual queries fluctuate.

**3. Compare against a baseline.** Your starting score matters. A brand with no structured data and minimal web presence has more room for measurable improvement than one that's already well-optimized.

**4. Be transparent about methodology.** Any scoring system should be documented and reproducible. You should understand exactly what's being measured and how.

## FTC Guidelines and Transparency Best Practices

The Federal Trade Commission (FTC) has clear guidelines about marketing claims:

- **Substantiation** — Claims must be backed by evidence. "We improve your AI visibility" is supportable with data. "We guarantee you'll be cited by ChatGPT" is not.
- **Truthful advertising** — Marketing materials must not contain deceptive claims. Promising specific AI outputs that no one can control is inherently deceptive.
- **Clear disclosures** — Any limitations on services should be clearly communicated, not buried in fine print.

These principles align with good business practice. Clients who understand what they're buying — optimization services with measurable inputs and probabilistic outcomes — are better clients than those sold on false promises.

## Our Approach

At Cited, we optimize the signals that influence AI visibility. We measure our work through a proprietary scoring methodology that tracks technical optimization, content quality, and entity consistency. We report monthly with concrete data.

We do not promise specific citation outcomes, guaranteed placements, or controlled AI responses. We commit to measurable progress on the factors we can influence, and transparent reporting on the results we observe.

This is what honest AI visibility optimization looks like.

---

*Want to understand your current AI visibility? [Get a free audit](/ai-readiness) and see where you stand — with full transparency on what the score means and what it doesn't.*`,
      fr: `## Comment les LLMs selectionnent l'information

Quand un grand modele de langage comme ChatGPT, Claude ou Gemini genere une reponse, il puise dans deux sources distinctes :

**1. Memoire parametrique** — L'information encodee dans les poids du modele lors de l'entrainement. C'est une representation compressee des donnees d'entrainement, pas une recherche en base de donnees. Le modele ne "se souvient" pas de pages web specifiques — il a appris des patterns, des associations et des relations factuelles a partir de milliards de documents.

**2. Generation augmentee par recuperation (RAG)** — De nombreux systemes IA completent maintenant la memoire parametrique avec une recherche web en temps reel. Quand vous posez une question a Perplexity ou ChatGPT (avec navigation), ils recherchent sur le web, recuperent les pages pertinentes et synthetisent l'information de ces sources en une reponse.

Les deux mecanismes sont probabilistes. La meme requete peut produire des resultats differents selon la version du modele, les resultats de recuperation du jour, la formulation de la question et meme le contexte de la conversation. C'est fondamentalement different de la recherche traditionnelle, ou une requete par mots-cles retourne une liste classee deterministe.

## La difference entre mention, citation et presence

Ces termes sont souvent utilises de maniere interchangeable, mais ils signifient des choses differentes :

- **Mention** — L'IA nomme votre marque dans sa reponse. Exemple : "Des outils comme Salesforce et HubSpot sont des options CRM populaires."
- **Citation** — L'IA attribue une affirmation ou information specifique a votre source, souvent avec un lien. Exemple : "Selon les recherches de Cited Agency, 40 % des recherches passent desormais par des outils IA. [source]"
- **Presence** — Les informations de votre marque influencent la reponse de l'IA meme sans mention explicite. Si l'IA decrit avec precision les fonctionnalites de votre produit sans vous nommer, vos donnees structurees et votre contenu ont probablement influence la reponse.

Aucun service ne peut garantir l'un de ces resultats pour une requete specifique a un moment donne. Les outputs de l'IA sont non-deterministes par conception.

## Ce que l'optimisation de la visibilite IA peut faire

Bien que personne ne controle ce que les systemes IA disent, il existe des actions concretes et mesurables qui influencent la probabilite que votre marque apparaisse dans les reponses generees par l'IA :

### Optimiser les signaux techniques

- **Implementation Schema.org** — Les donnees structurees donnent aux systemes IA une carte lisible par machine de votre marque, produits et services. Cela influence directement la precision avec laquelle l'IA decrit votre activite.
- **Architecture du site** — Une structure d'URL propre, une hierarchie de titres correcte et des chargements de page rapides facilitent le traitement de votre contenu par les systemes de recuperation IA.
- **Coherence des entites** — Quand les informations de votre marque sont coherentes sur votre site web, profils sociaux, annuaires et Wikipedia, les systemes IA ont une plus grande confiance dans l'exactitude des informations vous concernant.

### Optimiser les signaux de contenu

- **Contenu "reponse d'abord"** — Structurer le contenu pour repondre directement aux questions courantes augmente la probabilite qu'il soit recupere et utilise par les systemes IA.
- **Affirmations appuyees par des donnees** — Le contenu avec des statistiques specifiques, des citations et des donnees verifiables est pondere plus fortement par les systemes de recuperation IA.
- **Autorite thematique** — Une couverture complete de votre domaine signale une expertise que les systemes IA reconnaissent.

### Mesurer et suivre

- **Score de visibilite IA** — Tester votre marque sur plusieurs fournisseurs IA pour des requetes pertinentes et suivre les changements dans le temps.
- **Benchmarking concurrentiel** — Comprendre comment votre visibilite se compare a celle des concurrents et identifier les lacunes.
- **Reporting mensuel** — Documenter les progres avec des donnees concretes.

## Ce que personne ne peut garantir

C'est ici que la transparence compte. Voici ce qu'aucun service de visibilite IA — y compris le notre — ne peut honnetement promettre :

### Des resultats de placement specifiques

"Votre marque sera la recommandation n°1 dans ChatGPT pour [requete]" — Ceci est impossible a garantir. Les reponses IA varient en fonction des mises a jour du modele, des changements de recuperation, de la formulation de la requete, du contexte utilisateur et de l'aleatoire integre au processus de generation.

### Des resultats permanents

Les modeles IA sont mis a jour regulierement. Les donnees d'entrainement changent. Les algorithmes de recuperation evoluent. Une marque qui apparait frequemment dans les reponses IA aujourd'hui peut ne plus apparaitre demain — et vice versa. L'optimisation est un processus continu, pas une intervention ponctuelle.

### Le controle des outputs IA

Personne ne controle ce que ChatGPT, Perplexity ou Google AI dit. Ce sont des systemes independants construits par des entreprises separees avec leurs propres priorites, processus d'entrainement et mesures de securite. Tout service pretendant controler les outputs IA deforme ses capacites.

### Des ameliorations de score garanties

Bien que notre methodologie de scoring mesure de vrais signaux — qualite des donnees structurees, optimisation du contenu, coherence des entites — le score reflete les inputs d'optimisation, pas un comportement IA garanti. Un score d'optimisation parfait ne garantit aucun output IA specifique.

## Comment mesurer les progres honnetement

Compte tenu de ces contraintes, voici a quoi ressemble une mesure honnete :

**1. Suivre les inputs d'optimisation, pas seulement les outputs.** Mesurer si le balisage Schema.org est correctement implemente, si le contenu est structure pour la comprehension IA, si les donnees d'entite sont coherentes. Ce sont des choses que vous pouvez controler et verifier.

**2. Echantillonner les reponses IA dans le temps.** Tester un ensemble coherent de requetes sur plusieurs fournisseurs IA mensuellement. Suivre les tendances — votre marque apparait-elle plus frequemment ? Dans des contextes plus positifs ? Cela montre une progression directionnelle meme si les requetes individuelles fluctuent.

**3. Comparer par rapport a une base de reference.** Votre score de depart compte. Une marque sans donnees structurees et avec une presence web minimale a plus de marge pour une amelioration mesurable qu'une marque deja bien optimisee.

**4. Etre transparent sur la methodologie.** Tout systeme de scoring devrait etre documente et reproductible. Vous devriez comprendre exactement ce qui est mesure et comment.

## Directives FTC et bonnes pratiques de transparence

La Federal Trade Commission (FTC) a des directives claires sur les affirmations marketing :

- **Justification** — Les affirmations doivent etre etayees par des preuves. "Nous ameliorons votre visibilite IA" est justifiable avec des donnees. "Nous garantissons que vous serez cite par ChatGPT" ne l'est pas.
- **Publicite veridique** — Les supports marketing ne doivent pas contenir d'affirmations trompeuses. Promettre des outputs IA specifiques que personne ne controle est intrinsequement trompeur.
- **Divulgations claires** — Toute limitation des services devrait etre clairement communiquee, pas enfouie dans les petits caracteres.

Ces principes s'alignent avec les bonnes pratiques commerciales. Les clients qui comprennent ce qu'ils achetent — des services d'optimisation avec des inputs mesurables et des resultats probabilistes — sont de meilleurs clients que ceux a qui on a vendu de fausses promesses.

## Notre approche

Chez Cited, nous optimisons les signaux qui influencent la visibilite IA. Nous mesurons notre travail a travers une methodologie de scoring proprietaire qui suit l'optimisation technique, la qualite du contenu et la coherence des entites. Nous rendons compte mensuellement avec des donnees concretes.

Nous ne promettons pas de resultats de citation specifiques, de placements garantis ou de reponses IA controlees. Nous nous engageons a une progression mesurable sur les facteurs que nous pouvons influencer, et a un reporting transparent sur les resultats que nous observons.

C'est a cela que ressemble une optimisation honnete de la visibilite IA.

---

*Vous voulez comprendre votre visibilite IA actuelle ? [Obtenez un audit gratuit](/ai-readiness) et voyez ou vous en etes — en toute transparence sur ce que le score signifie et ce qu'il ne signifie pas.*`,
    },
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}
