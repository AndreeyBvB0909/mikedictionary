import React from "react";

import CloudinaryImageList from "../ui/CloudinaryImageList";

import "../../styles/GerundsInfinitives.css";

export const GerundsInfinitives = () => {
  const practiceLinks = [
    {
      title: "Gerund or Infinitive: Verb Patterns",
      description:
        "Practice choosing between gerunds and infinitives with B1-B2 grammar exercises.",
      source: "Test-English",
      url: "https://test-english.com/grammar-points/b1-b2/gerund-or-infinitive/",
    },
    {
      title: "Gerunds and Infinitives Exercise 1",
      description:
        "Practice common verb patterns with gerunds and infinitives.",
      source: "Perfect English Grammar",
      url: "https://www.perfect-english-grammar.com/gerunds-and-infinitives-exercise-1.html",
    },
    {
      title: "Gerund or Infinitive",
      description:
        "Practice choosing the correct form of the verb in interactive activities.",
      source: "Wordwall",
      url: "https://wordwall.net/es/resource/95216594/espa%C3%B1ol/gerund-or-infinitive",
    },
    {
      title: "Gerund or To Infinitive",
      description:
        "Practice using gerunds and to-infinitives in different English sentences.",
      source: "Wordwall",
      url: "https://wordwall.net/es/resource/18711158/gerund-or-to-infinitive",
    },
    {
      title: "Verbs: Infinitive or Gerund",
      description:
        "Practice identifying whether a verb should be followed by an infinitive or gerund.",
      source: "Wordwall",
      url: "https://wordwall.net/es/resource/21165127/verbs-infinitive-gerund",
    },
    {
      title: "Infinitive vs Gerund Exercises",
      description:
        "Practice infinitives and gerunds through interactive grammar exercises.",
      source: "AgendaWeb",
      url: "https://agendaweb.org/verbs/infinitive_gerund-exercises.html",
    },
    {
      title: "Infinitives and Gerunds",
      description:
        "Practice different verb patterns involving infinitives and gerunds.",
      source: "AgendaWeb",
      url: "https://agendaweb.org/verbs/infinitives-and-gerunds.html",
    },
    {
      title: "Gerund and Infinitive Exercises",
      description:
        "Practice choosing and completing sentences with the correct gerund or infinitive form.",
      source: "English Grammar Online",
      url: "https://www.english-grammar.at/online_exercises/gerund-infinitive/gerund-infinitive-index.htm",
    },
  ];

  return (
    <div className="gerunds-infinitives-page">

      <section className="grammar-section">
        <h2>Infinitives</h2>

        <CloudinaryImageList tag="infinitives" />

        <div className="grammar-description">
          <p>
            Infinitives are an important part of English grammar and are
            commonly formed with <strong>to + the base form of a verb</strong>,
            such as <em>to study</em>, <em>to learn</em>, or <em>to travel</em>.
            English infinitives can express purpose, intentions, plans,
            preferences, and actions. They frequently appear after certain
            verbs, adjectives, and nouns, making them essential for creating
            clear and natural English sentences. Learning common infinitive
            patterns can help English learners improve their grammar, writing,
            speaking, and everyday communication.
          </p>
        </div>
      </section>

      <section className="grammar-section">
        <h2>Gerunds</h2>

        <CloudinaryImageList tag="gerunds" />

        <div className="grammar-description">
          <p>
            Gerunds are formed by adding <strong>-ing</strong> to a verb and
            using the resulting word as a noun. Words such as <em>reading</em>,
            <em> swimming</em>, and <em>learning</em> can function as the
            subject or object of a sentence. Gerunds are commonly used after
            certain verbs, prepositions, and expressions in English. Learning
            how to use gerunds correctly is essential for English learners
            because many common grammar patterns require an <strong>-ing
            form</strong> rather than an infinitive, helping learners write
            and speak English more accurately and naturally.
          </p>
        </div>
      </section>

      <section className="practice-section">
        <h3>Practice</h3>

        <p className="practice-description">
          Improve your English grammar by practicing gerunds and infinitives
          with these interactive exercises and activities.
        </p>

        <div className="practice-grid">
          {practiceLinks.map((practice) => (
            <article
              className="practice-card"
              key={practice.url}
            >
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

export default GerundsInfinitives;