# From Skeptic to Advocate: How I Became an Open-Source Engineer

Two years ago, I faced a unique **choice**: the opportunity to work on open-source while keeping a paycheck. As someone who had spent their entire career building closed-source products at privacy-focused companies, this proposition felt daunting and somewhat confusing. What did it even mean to "do" open-source at a company with successful closed-source products? The process seemed backwards – surely you start by figuring out what to build first then figure out whether or not to open-source it later?

I tentatively agreed to take on the challenge, only to realize that the first person I needed to convince of the vision was myself. This is the story of how I discovered that open-source isn't just about giving away free software – it's about building a better businesses through transparency, trust, and community.

## The Journey

The hurdle to staring an OSS initiative wasn't technical – it was philosophical. Despite having a supportive CEO who championed the idea, building "free" software at a revenue-generating company required serious justification. OSS had to solve core business problems or it would quickly be dismissed as charity.

After some reflection, we identified four critical truths about our situation that open-source could help address:

1. We needed **a lot more** more users touching our software
2. Developer communities inherently distrusted vendors and preferred open-source
3. User trust was critical and hinged heavily on transparency
4. Data privacy concerns were blocking rapid adoption

These truths led us to a simple conclusion: open-source was a necessary business strategy that was critical for growth.

### Getting Users

Not all businesses need a massive user base, but relying on a small pool of users or customers poses significant risks. I had experienced this firsthand at a previous company where market consolidation led to devastating customer churn. The value of a company can't solely rely on revenue – sometimes "We have X million users" is a more powerful statement than "We have X million in revenue."

The somewhat unspoken truth about many engineers that build software is that they are learning the domain as they build. it takes time to understand the problem space and craft solutions that truly resonate. One of the key reasons I had chosen to work at a startup was to prioritize my growth and optimize my career for learning. To learn faster, I needed more users, and to reach more users, I needed something compelling that was easy to pick up and use. OSS fit this mold.

### Community Trust

In software communities, especially AI/ML ones, engineers overwhelmingly favor open-source tools like PyTorch and HuggingFace as their starting point. This preference stems from a fundamental truth: developers want to evaluate and adopt tools on their own terms, without navigating sales processes or procurement hurdles. The first tools that engineers successfully adopt tend to become their go-to solutions, and paid alternatives need to offer substantial advantages to overcome this initial loyalty.

Despite building valuable products, we were missing out on organic recommendations simply because we weren't part of this bottom-up adoption pattern. Open-source became our path to reaching these influential early adopters who shape industry standards.

When building software in a new space, especially in rapidly evolving one like GenAI, you need to establish a tight feedback loop with your users. It's clear to me now that open-source transforms this relationship – users become active participants rather than passive consumers. They can contribute code, report issues, and shape the roadmap. This direct engagement not only improves the software but creates a community of advocates who are invested in the project's success.

### Transparency

Software development is rarely black and white, often muddied by politics and competing priorities. However, code itself is somewhat binary – it either works or it doesn't. Putting code in the open the can have a sterilizing effect - encouraging constructive feedback and demanding higher standards.

When developers evaluate tools, they're not just assessing functionality – they're also gauging trustworthiness. With closed-source software, users must trust that vendors made the right architectural and security decisions. Open-source shifts this dynamic entirely: decisions are visible, architectural choices can be scrutinized, and the codebase speaks for itself.

Traditional enterprise sales builds trust through relationships and reputation – a valuable but time-consuming process. Open-source offered us a more direct path: trust through transparency. Instead of relying solely on sales teams to convince users of the software's merits, we could let the code do the talking.

Two years later, it's clear that public scrutiny didn't just improve our code – it fundamentally changed how we approached development. Every decision has to be justified by end-user consumption, pushing us to build better software from the ground up and forcing us to figure out compounding pieces of software that hold up to public scrutiny.

### Privacy

Enterprise sales cycles often get bogged down in security reviews and compliance discussions. OSS offers a unique advantage: companies can inspect the code themselves, run security audits, and most importantly, run everything within their own infrastructure.

We hypothesized that this self-hosted capability could transform the conversation from "How do you handle our sensitive data?" to "Great, we can run this ourselves." The core technology could be validated by the community while still leaving room for enterprise features. This "try-before-you-buy" approach would help bypass traditional enterprise sales hurdles around data privacy and security.

Today our sales motion is drastically different. Instead of starting with a sales pitch, we can start with a GitHub link. It's not uncommon for our sales team to jump on a call with a potential customer who has already deployed our software and is looking for help scaling it. This shift in sales motion has been transformative, allowing us to focus on solving customer problems rather than spending time convincing them to trust us.

## Conclusion

Looking back, my journey into open-source hasn't been driven by a pure sense of altruism even though I sometimes tell non-technical friends that I write open-source software to "democratize AI tools." The truth is more nuanced: open-source solved real business problems while aligning with deeper values about how software should be built and shared.

For companies entering new markets, especially in rapidly growing ones like AI, open-source isn't just an option – it's increasingly becoming a necessity. It's about [annealing the market](https://a16z.com/market-annealing-getting-to-10m-arr-in-very-early-markets/) while building something meaningful that stands the test of public scrutiny.

The choice I made two years ago wasn't just about changing how I code – it was about fundamentally rethinking how a software company can succeed in an increasingly open world. By focusing on users, trust, transparency, and privacy, we discovered that open-source wasn't just a development methodology – it was a business catalyst that helped us build better products and establish the kind of trust that traditional approaches struggle to achieve.

some people's journey to open-source is a lot more "pure". They start their journey by contributing to open-source projects they love or they start building software that they themselves want to use and decide to share it with the world. My journey was a bit different. I had the privilege to build open-source software as part of my job. In retrospect I wish I had embarked on this journey a lot earlier. My prime directive for myself these days is simple: build kick-ass software that people love. While open-source is not without its challenges, I largely get to do this on a daily basis, an that is ultimately quite fulfilling.

While being open-source is not necessarily a "feature" of software, it certainly informs how code is written, adopted, maintained, distributed, and evolved. I am immensely grateful for the opportunity and community that I get to be a part of.
