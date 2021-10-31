
# Inspiration 💡
Developing countries across the globe had already been facing **shortage of resources and adequately skilled healthcare workers** before pandemics began. COVID-19 pandemics exacerbated the situation exponentially for both healthcare seekers and givers. Because we believe the power modern-day technologies have to help people to live a decent life, we developed QuikServe. It is an application, empowered by AI, that helps restaurant workers (managers, waiters)  to deliver the best and quickest service to the clients.**COVID-19 pandemics exacerbated the situation exponentially for both healthcare seekers and givers.**


# What it does 🤔
+ Transcribing process of order
+ Saving the audio files securely
+ Meals Identification from Notes
+ Recognize the prices from the photo of bill
+ Allows waiter to directly process payment with option of splitting the bill


# How we built it 🏗
First and foremost, it is Crafted with 💙.
For the front-end, we’ve used *React.js* & *Tailwind* as a CSS framework. The Authentication (OAuth) and whole serverless Backend has been done by *Firebase* & we’re also using the Cloudstore database for storing user logs. An image of the same is deployed on Docker for Debug purposes & the same is hosted on a free dyno of Heroku. For preserving the privacy of those docs/audio-files, we are keeping track of all of those stuff by deploying the media on *IPFS* which makes all of those *immutable* & *tamperproof*.



# Challenges We ran into 🧱
There were lots of challenges on our way. First, because we are all online and spread around the globe, it was somewhat difficult for us to be communicating during the process. We also spent a great deal of time discussing ideas for the project. We have reached a final decision on what to include in our project after we had a couple of calls with mentors. After we settled on the idea, we separated the work according to everyone's skills. Aziz was primarily working on the Front-end, while Jun set up integrations & backend. Besides, Pratyay worked on building the ML model. We faced most challenges when we tried to allocate segregated chunks into one project.  

---
## Design

We were heavily inspired by the revised version of **Double Diamond** design process developed by **UK Research Council**, which not only includes visual design, but a full-fledged research cycle in which you must discover and define your problem before tackling your solution.

![Double-Diamond](https://ipfs.infura.io/ipfs/Qmdy6iR3qoSRzrQrtRScVAdSmw9ECbmAXqE3mxMsU3AKNe)

> 1. **Discover**: a deep dive into the problem we are trying to solve.
> 2. **Define**: synthesizing the information from the discovery phase into a problem definition.
> 3. **Develop**: think up solutions to the problem.
> 4. **Deliver**: pick the best solution and build that.

This time went for the minimalist **Material UI** design. We utilized design tools like Figma,  Photoshop & Illustrator to prototype our designs before doing any coding. Through this, we are able to get iterative feedback so that we spend less time rewriting code.

![Brand-identity](https://ipfs.infura.io/ipfs/QmdVkpm3EMuHXs78R9SmJtsLr8oyBZZ56fRdgaM4wLUPyg)

---

# Research 📚
Research is the key to empathizing with users: we found our specific user group early and that paves the way for our whole project. Here are few of the resources that were helpful to us —

- How restaurants are adapting to the COVID-19 pandemic : https://bit.ly/2Y3TYqg
- Restaurant sector stares at massive losses as states reimpose strict Covid-19 curbs : https://bit.ly/3jU52hs
- Consumers seek safety and socialization at restaurants in wake of COVID-19 : https://bit.ly/3pQi03x
- Domino’s Pizza data breach, Financial data of 180+ million users are at stake : https://bit.ly/3BpZzVz


**CREDITS**
- Design Resources : Freepik
- Icons : Icons8, fontawesome
- Font : Lufga / Recoleta /

# Takeaways
### Accomplishments that we're proud of 🙌
- **A fully working prototype**! This has been intense yet insightful. We are very proud to have designed and built an application within such a short timeframe.
- Learning how to collaborate on GitHub! Not all of us were familiar with making branches or making a PR and merging. This hackathon has fast-tracked the learning process and we are all now very comfortable in using GitHub!
- Learning new technology (like Tailwind CSS, routing in React,  implementing sophisticated design features, Firebase Functions, Firestore), meeting new people, debugging, debugging, and more debugging!
- The idea of helping restaurants to survive COVID and making positive changes in our community.


### What we learned 🙌
Staying hydrated was our motto for completing this impactful and complicated project on time. We have learned how great wins are accomplished by working together. For the technical part, we learned how to implement a complete serverless backend using GCP. Moreover, we have faced some issues when we were merging front-end and backend. We also gave our level best to make the UI/UX look minimalistic and useful! Not to mention, documentations and help from Google for technologies we used (be it react components libraries, IPFS, API calls) were extremely useful!


### What's next for QuikServe📃
We believe that **QuikServe** is an app with great potential. Since all four of us are very passionate in tackling the issue of helping businesses to recover from COVID-19, it's easy to come up with a lot of ideas for new features (like we did in the beginning of this hackathon!). However, we now have learnt the importance of focusing on a single feature at a time and making sure that feature works flawlessly before designing a new feature! ✨

This includes:
- Moving forward and making all the storage system decentralized
- Refractor our code; because there's so much we can do under 36 hours
- Doing many, many tests (another thing we lack during the past 36 hours). We want to understand all the nitty gritty details on whether the app flow is intuitive or how the speech-to-text feature behaves on a noisy background, or if there is anything we can do to make the user experience better.

*Overall, we hope that this project can help restaurants to get through pandemic and thrive.*

**Note** — **API credentials have been revoked. If you want to run the same on your local, use your own credentials.**
