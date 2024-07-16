import Quiz from "@/components/Quiz";

const questions = [
  {
    question: "What is the latest news on the conflict in Ukraine?",
    options: [
      { a: "Russia has withdrawn troops from the region" },
      { b: "Ukraine has declared a state of emergency" },
      { c: "The US has imposed sanctions on Russia" },
      { d: "The UN has called for a ceasefire" },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "What recent action has the US Supreme Court taken regarding student loan forgiveness?",
    options: [
      { a: "Upheld the forgiveness plan" },
      { b: "Struck down the forgiveness plan" },
      { c: "Postponed the decision" },
      { d: "Expanded the forgiveness plan" },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Which country recently declared a state of emergency due to wildfires?",
    options: [
      { a: "Australia" },
      { b: "Canada" },
      { c: "Brazil" },
      { d: "Greece" },
    ],
    correctAnswer: "d",
  },
  {
    question:
      "What significant climate agreement was recently signed by multiple countries?",
    options: [
      { a: "Paris Agreement 2.0" },
      { b: "Glasgow Climate Pact" },
      { c: "Kyoto Protocol Renewed" },
      { d: "New Green Deal" },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "What major technology company announced a new AI chatbot recently?",
    options: [
      { a: "Microsoft" },
      { b: "Apple" },
      { c: "Google" },
      { d: "Amazon" },
    ],
    correctAnswer: "c",
  },
  {
    question: "Which country hosted the latest G20 summit?",
    options: [{ a: "Japan" }, { b: "Italy" }, { c: "India" }, { d: "Brazil" }],
    correctAnswer: "c",
  },
  {
    question:
      "What is the latest update on the COVID-19 vaccine booster recommendations in the US?",
    options: [
      { a: "Booster shots are recommended for everyone over 12 years old" },
      { b: "Booster shots are only recommended for seniors" },
      { c: "Booster shots are recommended for all adults" },
      { d: "Booster shots are not recommended yet" },
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Which car manufacturer recently announced a major shift to electric vehicles by 2030?",
    options: [
      { a: "Ford" },
      { b: "Toyota" },
      { c: "General Motors" },
      { d: "Honda" },
    ],
    correctAnswer: "c",
  },
  {
    question: "What major sporting event was recently held in Paris?",
    options: [
      { a: "Rugby World Cup" },
      { b: "Tour de France" },
      
      { c: "French Open" },
      { d: "Paris Marathon" },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "What significant policy change did the European Union recently announce regarding plastic waste?",
    options: [
      { a: "Ban on all plastic packaging" },
      { b: "Introduction of a plastic tax" },
      { c: "Mandatory recycling of all plastic products" },
      { d: "Ban on single-use plastics" },
    ],
    correctAnswer: "d",
  },
];

const Page = () => {
  return (
    <>
      <Quiz questions={questions} />
    </>
  );
};

export default Page;
