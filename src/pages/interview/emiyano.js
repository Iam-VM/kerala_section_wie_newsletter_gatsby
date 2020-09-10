import React, { useEffect } from "react"
import interviewStyles from "../../styles/emiyano.module.css";
import Aos from "aos";


const EmiYano = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    })
  }, []);

  return (
    <div className={interviewStyles.interviewMainContainer} id="monster">
      <div className={`${interviewStyles.userCard} ${interviewStyles.userCardMain}`} data-aos="zoom-out">
        <div className={`${interviewStyles.avatarFlip}`}>
          <img alt={"Emi Yano"} className={`${interviewStyles.emiyanoImg}`} src="/emiyano.jpg" />
        </div>
        <p className={`${interviewStyles.mainTextHeading}`}>INTERVIEW WITH EMI YANO</p>
      </div>

      <div className={`${interviewStyles.userCard}`} data-aos="slide-up">
        <p className={`${interviewStyles.subHeadQuestion}`}>
          What inspired you to become an engineer?
        </p>
        <p className={`${interviewStyles.interviewAnswer}`}>
          I came to engineering quite late. I had my first computer at the age of 20. Nobody in my family is an
          engineer. I think I went through various stages when I was younger like I didn't really know what I wanted to
          do. I did a mentorship project when I was 18, where they teamed you up with any profession you liked and when
          they were talking to me I said I am really interested in helping people as I was interested in the medical
          aspect of it but I'm also quite interested in technology which is interesting 'cause I never had a computer or
          anything like that but I was quite mechanical and I liked things that were electrical in those days. So they
          teamed me up with two people - an orthopedic surgeon who let me come into the surgery of hip and knee
          replacements, and a prosthetist, the person who'd actually be fitting the arms and legs using mild electric
          signals from the muscles to do sort of fundamental rudimentary movement in the hands. And that teaming up
          where this orthopedic surgeon worked with the prosthetist, that was the bug for me, that's where engineering
          really came into play. And at the time I came into engineering, it was easier to go out of engineering than
          get into Engineering. So there was a lot of overlap in the coursework and I ended up staying in engineering
          for years.
        </p>
      </div>

      <div className={`${interviewStyles.userCard}`} data-aos="slide-up">
        <p className={`${interviewStyles.subHeadQuestion}`}>
          What conviction has made you see that volunteering is the part of a person's professional as well as personal
          growth?
        </p>
        <p className={`${interviewStyles.interviewAnswer}`}>
          The volunteering aspect of my life has been profound in some ways because I started in 2001 with making a
          student chapter at the University of ----------- Throughout these years being a student representative for a
          huge society and then doing a good job and then the Young Professional Membership came along followed by Women
          in Engineering and leading up to becoming chair. There are so many opportunities with volunteerism that you
          will not get in your career.
        </p>
      </div>

      <section className={`${interviewStyles.userCard}`} data-aos="slide-up">
        <p className={`${interviewStyles.subHeadQuestion}`}>
          There are engineering students who graduate and half-way through or at some point in their career, they choose
          to come out of it due to many consequences, sometimes due to specific societal norms and sometimes it's
          because they're not tough enough to battle it out. So what would be your response to that?
        </p>
        <p className={`${interviewStyles.interviewAnswer}`}>
          It hasn't been an easy road and I don't think anyone's road has been particularly easy. I finished my PhD
          during the 2008 crash and I couldn't get a job and for someone who never really got less than an A grade or
          applied for something and didn't get it, those kind of setbacks were quite enormous and I worked at a fabulous
          charitable organization and we had four Restructures in five years. So the constant change and all the time
          off has taught me is that you really need to think about what it is that you enjoy doing because the worst
          thing is to do a job that you don't like or study something that you don't like. And, thinking about jobs and
          moving forward and also having a kid changes a lot of things. So, I have a daughter and if I have to be
          volunteering and working for something, away from her, that has to be something I think is worthwhile and
          finding that is difficult. My current job was not something I set out to get. So I've been looking at the
          University of Reading for several years and I didn't want to commute anymore, we had a young daughter so I
          actually took a big pay cut and took a lower job than I was used to because I thought that my skills would
          transfer well and I thought it was interesting. And, six months into that job, my manager quit and I got her
          job. So this is back to a sort of level that I was in before but I had to go through that whole journey as it
          fit better for my life and it was something I was really interested in and that paid off. I worked in an
          organization and I still work in a University and I think even if I worked in the University of Reading for 30
          years, I still probably wouldn't be invited to the board of directors meeting and yet after a 20 years career
          in volunteering, I went to a board of directors meeting in Japan. And, thinking about the skills that I've
          gained from IEEE, it's been enormous, in terms of getting a job and having an edge over everybody else. So in
          my first dream job after University, there were over 400 people who applied for this role and they all had a
          PhD. And what did | talk about in my interview? IEEE. I had talked about what I had done in IEEE and project
          management. So, in my current role, having a committee of 60 internationally is still something that I
          wouldn't have been able to do in my current position. So it's finding these outlets and avenues for exploring
          who you are and giving it a chance because the reality is you don't always get those chances where you work,
          the structures don't always work in your favour, you can have really bad bosses, male or female that
          appreciate your positive outlook on things.
        </p>
      </section>

      <section className={`${interviewStyles.userCard}`} data-aos="slide-up">
        <p className={`${interviewStyles.subHeadQuestion}`}>
          What is Leadership for you?
        </p>
        <p className={`${interviewStyles.interviewAnswer}`}>
          Leadership more and more for me is about understanding the strengths of your team and as an example, I was
          asked just this week that I should be the one to make a video for an International Women in Engineering Day
          and one of our members submitted the most beautiful videos that she had created at home and I said why do I
          have to be this champion when I have a committee of such extraordinary people and then I got pinged back to
          ask "But don't you want to make the message alongside the video?". No, I don't. And, actually being a leader
          is about putting your trust into people to develop a team. There are complications with WIE that we're a
          committee of sixty which is enormous but I think in terms of leadership I think it's trying to think about
          what's good for the organization, rather than yourself, what are / priorities, how do you pick your battles.
          That kind of leadership where you're constantly thinking about short gains with a long-term story is what I am
          trying to aim for and also to empower your team more than it was in the past which is tricky.
        </p>
      </section>

      <section className={`${interviewStyles.userCard}`} data-aos="slide-up">
        <p className={`${interviewStyles.subHeadQuestion}`}>
          Do we still need to talk about gender disparity?
        </p>
        <p className={`${interviewStyles.interviewAnswer}`}>
          Women in Engineering has that exact problem. There are so many women who do not want to be even affiliated
          with Women In Engineering and part of the reason why we even have fee is because so many men and even
          non-females support this cause as there are issues in a lot of countries in different levels of inequality.
          So, if you look at predominantly Canada, Australia, U.S. and England, we're having a terrible time getting
          girls into STEM whereas in Kerala, it is not an issue and there are different cultures as I said to one in
          Italy, how wonderful it is to have 50 percent women in your bio-medical institute and she said "Yes, but the
          problem is once they're married, they're gone. So this disparity is going to be around for a little bit longer
          that you can identify as being a woman and just be known for your technical prowess and being an engineer.
          IEEE is actually a very good leveller because you can be an editor and there are a lot of opportunities that
          you can grab to stick your neck out, to make a difference and to be more technical. My take on all of this is
          like when do we stop talking about it but I don't think we're there yet. COVID has been very interesting in
          that respect as we're all home. I don't think | would've been able to do any of my volunteer work without my
          husband's support but you know they mention a lot of times to women like "What's your work life balance?",
          well, he has to do a work life balance just as much as I do. So, there are times when I think we really need
          to stop talking about these sorts of things with women. So for me, it is a combination of we're not there yet
          because culture change is slow. I think it's about a recognition that we're doing great in some ways like in
          India by getting girls into university but where are those lessons and how does that culture seep into Canada?
          So for me, it's a mix but there are definitely some things that WIE is doing to just stop talking about the
          nonsense that can be dealt with and move on.
        </p>
      </section>

      <div style = {{marginTop: '5rem', marginBottom: '2rem'}}>
      </div>

    </div>
  );
};

export default EmiYano;