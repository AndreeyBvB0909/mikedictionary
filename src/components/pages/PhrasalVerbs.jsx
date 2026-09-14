import React from 'react';
import CloudinaryImageList from '../ui/CloudinaryImageList';
import '../../styles/PhrasalVerbs.css';

export const PhrasalVerbs = () => {
  const practiceLinks = [
    {
      title: 'General Phrasal Verb Exercises',
      description:
        'Practice common phrasal verbs with interactive exercises.',
      source: 'AgendaWeb',
      url: 'https://agendaweb.org/verbs/phrasal_verbs2-exercises.html',
    },
    {
      title: 'Phrasal Verbs with Prepositions',
      description:
        'Practice phrasal verbs and their prepositions.',
      source: 'AgendaWeb',
      url: 'https://agendaweb.org/verbs/phrasal-verbs-preposition-exercises.html',
    },
    {
      title: 'Phrasal Verbs by Particle',
      description:
        'Practice phrasal verbs with particles such as up, off, out and on.',
      source: 'AgendaWeb',
      url: 'https://agendaweb.org/verbs/phrasal-verbs-by-particle.html',
    },
    {
      title: 'Phrasal Verb Cloze',
      description:
        'Complete sentences by choosing the appropriate phrasal verb.',
      source: 'Wordwall',
      url: 'https://wordwall.net/es/resource/100075060/esl/phrasal-verb-cloze',
    },
    {
      title: 'Phrasal Verbs Match Up',
      description:
        'Match phrasal verbs with their meanings.',
      source: 'Wordwall',
      url: 'https://wordwall.net/es/resource/12167966/english/phrasal-verbs-match-up',
    },
    {
      title: 'Phrasal Verbs',
      description:
        'Practice matching common phrasal verbs with their meanings.',
      source: 'Wordwall',
      url: 'https://wordwall.net/es/resource/28868865/english/phrasal-verbs',
    },
    {
      title: 'Phrasal Verbs Online Exercises',
      description:
        'Practice phrasal verbs through exercises for different levels.',
      source: 'English Grammar Online',
      url: 'https://www.english-grammar.at/online_exercises/phrasal_verbs/phrasal_verbs_index.htm',
    },
  ];

  return (
    <div>
      <div className="phrasal-verbs-intro">
        <h2>Phrasal Verbs</h2>

        <p>
          Phrasal verbs are common English expressions formed by combining a
          verb with a preposition or adverb. They often have a meaning that is
          different from the original verb, making them an important part of
          everyday English vocabulary and communication. Learning common
          phrasal verbs can help English learners understand conversations,
          improve their speaking skills, and communicate more naturally.
        </p>
      </div>

      {/* Phrasal Verb Cards */}
      <CloudinaryImageList tag="phrasal-verbs" />

      {/* Practice */}
      <section className="practice-section">
        <h3>Practice</h3>

        <p className="practice-description">
          Improve your phrasal verbs with these interactive exercises and
          activities.
        </p>

        <div className="practice-grid">
          {practiceLinks.map((practice) => (
            <article className="practice-card" key={practice.url}>
              <h4>{practice.title}</h4>

              <p>{practice.description}</p>

              <span className="practice-source">
                {practice.source}
              </span>

              <a
                href={practice.url}
                target="_blank"
                rel="noopener noreferrer"
                className="practice-button"
              >
                Practice →
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PhrasalVerbs;

