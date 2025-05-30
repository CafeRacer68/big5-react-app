import React from "react";

const big5Sections = [
  {
    title: "1. Meaningful Activities",
    content: `These are actions which give us a sense of accomplishment, joy or satisfaction.

They are things we love to do – but we do these less when we feel stressed or down.

Reflect on what you really love to do, but have stopped doing?
Think about the things you can start to do again – but keep your expectations realistic.
Schedule simple things that make you relax, smile and laugh (e.g. listen to music, read, watch a movie).`,
    video: "https://www.youtube.com/embed/G7KCLZFhDpg",
  },
  {
    title: "2. Healthy Thinking",
    content: `Healthy thinking is about treating ourselves (and others) with respect.

Check your self-talk – are you being self-critical?
Check your expectations – are they unrealistic?
Give yourself a break – allow yourself to be less than perfect.`,
    video: "https://www.youtube.com/embed/DE3s2zhQWKI",
  },
  {
    title: "3. Goals and Plans",
    content: `Having a goal keeps us motivated and gives us something to look forward to.

Review your plans – what are you looking forward to?
Set 3 simple goals for tomorrow that you’ll achieve, then celebrate those wins.`,
    video: "https://www.youtube.com/embed/TWlJ-IYLdDw",
  },
  {
    title: "4. Healthy Routines",
    content: `Routines like going to sleep and waking up at the same time set us up for the day.

Think about when you last felt grounded – what habits helped?
Make small changes to routines and celebrate the improvements.`,
    video: "https://www.youtube.com/embed/t5HCBD8gY50",
  },
  {
    title: "5. Staying Connected",
    content: `We are social beings and need regular connection.

Make time to connect with someone you care about, even briefly.
Plan social activities that make you feel supported and uplifted.`,
    video: "https://www.youtube.com/embed/MGnyszKVcUQ",
  },
];

const Big5Accordion = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>🖐️ The Big 5 for Mental Health</h2>
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
          </div>
        </details>
      ))}
    </div>
  );
};

export default Big5Accordion;
