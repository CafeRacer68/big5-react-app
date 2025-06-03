import React from "react";

const big5Sections = [
  {
    title: "Introduction to The Big 5",
    content: `Research shows that there are things we can do each day to support our mental health.

The Big 5 are five groups of actions that are strongly linked to good mental health.

Our research shows that doing The Big 5 more often can help us to improve our mental health. And, our research also shows that NOT doing The Big 5 can trigger symptoms of depression and anxiety.

The Big 5 actions are simple daily things most of us already do. We just might not be doing them often enough.

The Big 5 App is designed to help you to do more of the Big 5.

The Big 5 App won’t stop you experiencing life’s ups and downs, but it will help you to be the best version of yourself.`,
    video: "https://www.youtube.com/embed/lYGyyJ2bzCw",
  },
  {
    title: "1. Meaningful Activities",
    content: `What do you love to do, but have stopped doing?

We all need to make time to do things which make us happy, content and satisfied.

Meaningful activities are actions which give us a sense of:
- Accomplishment
- Joy and fun
- Satisfaction

These are things we love to do – but we might do these less when we feel stressed or down.

Think about the things you can start to do again, or do more of.

Examples:
- Listen to a favourite song
- Read a chapter of a book
- Play with your kids or a pet
- Try a new recipe
- Watch an episode of your favourite show
- Work on a hobby
- Finish a chore or tidy up
- Tend a plant or garden`,
    video: "https://www.youtube.com/embed/G7KCLZFhDpg",
  },
  {
    title: "2. Healthy Thinking",
    content: `Have you noticed how your ‘thinking’ changes when you are stressed or feeling sad?

Our thoughts are important because they affect how we see ourselves, our world and our future.

Healthy thinking is about treating ourselves (and others) with respect.

What does this even look like?
- Check your self-talk – are you being self-critical?
- Check your expectations – are they realistic?
- Accept that you don’t have to be perfect
- Stay grounded and composed
- Talk to yourself in the way that you would talk to others – with respect`,
    video: "https://www.youtube.com/embed/DE3s2zhQWKI",
  },
  {
    title: "3. Goals and Plans",
    content: `What is your goal for today? What do you want to achieve this weekend?

Having goals helps us to stay motivated and gives us something to look forward to.

Goals and plans also stop us from dwelling on past or present challenges.

They can be simple or huge — start with simple daily goals that you can build up over time.

Remember to celebrate achieving each goal!

Examples:
- Brush your teeth twice a day
- Tidy your bedroom when you wake up
- Prepare a meal for a friend
- Schedule a call with a friend
- Walk for 5 minutes each day
- Read one interesting story each weekend`,
    video: "https://www.youtube.com/embed/TWlJ-IYLdDw",
  },
  {
    title: "4. Healthy Routines",
    content: `What is your daily routine?

What time do you get up and go to bed?

How many healthy meals do you eat each day?

How often do you take a quick break to relax and recharge?

What routines or rituals do you have when you are feeling your best?

Healthy routines set the foundation for our lives. Without them, we can feel frustrated, irritable, and lost.

Healthy physical routines include:
- Going to sleep and waking up at the same time each day
- Getting regular exercise
- Eating at least one healthy meal per day

Healthy psychological routines include:
- Not over-working or under-working
- Taking breaks each day and each month to reset
- Doing fun things regularly
- Checking in with people who make us feel valued`,
    video: "https://www.youtube.com/embed/t5HCBD8gY50",
  },
  {
    title: "5. Social Connections",
    content: `Who are the people who give you a sense of belonging and value?

How often do you have contact?

We are all social beings – some of us need lots of contact, some of us need less.

Regular connections with people we love, care about, and respect help us to feel valued, connected, and grounded.

The contact doesn’t have to be intense — it might be a message, or a quick call.

People you might connect with include:
- Family members
- Friends
- Work or study colleagues
- People with shared interests and hobbies

Ways to connect:
- In person
- Via phone or video
- Email or messaging

You might connect:
- Daily
- Most days
- A few days per week`,
    video: "https://www.youtube.com/embed/MGnyszKVcUQ",
  },
];

const Big5Accordion = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>About The Big 5</h2>
      {big5Sections.map((item, index) => (
        <details key={index} style={{ marginBottom: "15px" }}>
          <summary
            style={{
              fontWeight: "bold",
              cursor: "pointer",
              padding: "10px",
              background: "#e0e0e0",
              borderRadius: "5px",
            }}
          >
            {item.title}
          </summary>
          <div style={{ padding: "10px", background: "#f9f9f9" }}>
            <p style={{ whiteSpace: "pre-wrap" }}>{item.content}</p>
            {item.video && (
              <iframe
                width="100%"
                height="215"
                src={item.video + "?rel=0"}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ marginTop: "10px", borderRadius: "10px" }}
              ></iframe>
            )}
          </div>
        </details>
      ))}
    </div>
  );
};

export default Big5Accordion;
