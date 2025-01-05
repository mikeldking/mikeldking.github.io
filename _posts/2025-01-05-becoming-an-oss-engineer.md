About 2 years ago I was given the **choice** to work on open-source. At the time this was quite exciting but also a pretty daunting task. The situation was somewhat unique in that I had never really written open-source software before and was now being given the opportunity to work on it while still being on salary. At first I really didn't understand the mission. I had worked my entire career at very private companies and the company I worked at already had a successful product that was closed source. What does it even mean to DO open-source? Surely you start by figuring out the piece of software you want to build first? The process seemed backwards. I tentatively agreed to take on the challenge but I quickly realized that the person I had to convince the most was myself. Below is my journey of how I articulated to myself and others the need for Open-Source and how I ultimately ended up becoming an OSS engineer.

## The Mission

The biggest initial hurdle to get the initiative going was to convince myself and others that OSS was a worthy investment for my company. I was in the very privileged position of having a very supportive CEO who was the originator of the idea. Even so the initiative was going to take some convincing. Building "free" software at a revenue generating company was not going to land well with certain stakeholders. I set out to give figure out why open software needed to exist given the situation we were in. OSS had to be solving a set of core problems and was going to quickly fail if it was perceived as a charity or didn't compliment the business.

I wrote down the following truths about the company's situation:

1. We need more users touching our software
2. communities often dis-trust vendors
3. User trust hinges on transparency
4. Data privacy is paramount in early stages

### Getting Users

Not all businesses hinge on having a large user base. But if a business relies on only a small set of companies or users, there's an immense amount of risk. I had experienced this first hand at a previous company where the vertical we were in rapidly converged to a very small set of companies and lost a majority of our customers due to churn outside of our control. I knew that we needed to reach more users to de-risk the company.

The value of a company can't solely rely on revenue. I pictured myself at a board meeting thinking which would I prefer to be the opening statement - "We have X million dollars in revenue" or "We have a X million users". Ideally you have both but there's a strong argument to be said that having a very strong user base is possibly a much better measure of momentum than revenue.

I was convinced. To reach more users, you have to offer something compelling that's easy to pick up and use. OSS software fit that mold perfectly.

### Community Trust

If you take a look at software communities and especially AI/ML ones, you will quickly notice that there is very rarely any discourse around vendors. Sure there are vendors at play and people pay for software, but it's very rarely an engineer's first entry point into a field. When talking about recommending software to another engineer, engineers almost always lean open-source (PyTorch, MLFlow, etc.). Being a part of that narrative was something I knew was going to be important.

There's a lot to be said about the first set of tools you learn your craft with. They tend to stick more than others and paid solutions tend to have to be order of magnitude better than open-source ones for people to be convinced to switch. Because of this I knew I wanted to be involved in the early stages of adoption because it would make the conversation about using paid software a lot easier later down the line.

At the root of building great software is listening to your users. It's near impossible to build amazing tools in a vacuum. When trying to build novel software, you have to take your users on a journey with you. OSS software helps you take your users go on that journey with you. They feel involved in the process where their feedback and investment directly translates into software that they enjoy. I knew I wanted to learn and drink from the firehose with my users. OSS was gonna keep me more in-tune to the needs of a very new space (GenAI).

### Transparency

Building software is almost always not black and white. There's a fair amount of politics and power struggles that happen behind the scenes. In the worst case scenario a lot of your time can be consumed by all these gray zones of software engineering.

The great thing about software is that code is the closest thing to having something that is black and white - it either works or it doesn't. Sure things can be messy but at the end of the day if code has to work, pure and simple.

My hypothesis what that putting code out in the open has a sterilizing effect. People would call out bad code and tend to provide feedback that was constructive more often than not.

### Privacy

If you've been ever involved in enterprise sales - especially for software that requires a lot of company data - you know that privacy is a major hurdle. Companies are understandably protective of their data, and the sales cycle often gets bogged down in lengthy security reviews and compliance discussions.

This is where open-source software offers a unique advantage.

With OSS, companies can inspect the code themselves, run security audits, and most importantly, run everything within their own infrastructure. There's no need to trust a vendor's claims about data handling when you can see exactly how the software works and control where it runs. This transparency dramatically reduces the friction in enterprise adoption, especially in the early stages when trust hasn't been fully established.

I discovered this benefit firsthand when talking to potential enterprise users. The conversation shifted from "How do you handle our sensitive data?" to "Great, we can run this behind our firewall and integrate it with our existing security protocols." This self-hosted capability became a powerful selling point, particularly for companies in regulated industries or those with strict data governance requirements.

Open-source also creates a interesting dynamic where the core technology can be validated and trusted by the community, while still leaving room for proprietary enterprise features. Companies can start with the open-source version to validate the technology with minimal risk, then upgrade to enterprise offerings when they need additional features or support. This "try-before-you-buy" approach, enabled by open-source, helps bypass many of the traditional enterprise sales hurdles around data privacy and security.

## Conclusion

Looking back, I wish I could say that I decided to become an open-source developer out of some sort of noble mission or altruism. If you ever run into me at a meetup or a bar I might have some self aggrandizing story about how I wanted to democratize AI software. There's a hint of truth in my desire to build kick-ass open-source software that's free and privacy focused. But the truth is more nuanced: open-source solved real business problems while aligning with deeper values about how software should be built and shared.

By focusing on growing our user base, building community trust, maintaining transparency, and addressing privacy concerns head-on, I discovered that open-source wasn't just a development methodology – it was a business catalyst. It helps us reach more users, build better products, and establish the kind of trust that traditional sales processes struggle to achieve.

For companies entering new markets, especially in rapidly evolving spaces like AI, open-source isn't just an option – it's increasingly becoming a necessity. It's about [annealing the market](https://a16z.com/market-annealing-getting-to-10m-arr-in-very-early-markets/) while building something meaningful that stands the test of public scrutiny.

The choice I made two years ago wasn't just about changing how I write code – it was about fundamentally rethinking how a software company can succeed in an increasingly open world and market.
