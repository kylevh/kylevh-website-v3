import Card from "../../../components/Card/Card";

export const FSMTutorial = () => {
  return (
    <>
      <Card className="col-start-1 col-span-1 !justify-center  max-h-fit items-center">
        <h1>coming soon...</h1>
      </Card>

      <Card className="md:col-start-2 col-span-1 !justify-center max-h-fit items-center">
        <h1>Creating a Finite State Machine to handle player movement in Unity</h1>
        <p className="text-neutral-500">This post is currently under construction. Please check back soon for the full tutorial. We'll cover:</p>
        <ul className="list-disc ml-6 mt-2 text-neutral-500">
          <li>Understanding FSM Fundamentals</li>
          <li>Practical Implementation in Unity</li>
          <li>Optimizing State Transitions</li>
          <li>Best Practices and Common Patterns</li>
          <li>Debugging and Testing</li>
        </ul>
      </Card>
    </>
  );
};
