import Link from "next/link";
import Metatags from "@components/Metatags";

const Instruction = () => {
  return (
    <main>
      <Metatags title="Instructions" description="How this site works?" />
      <div>
        <h1>Join Us ✍</h1>
        <h3>We live for stories and ideas that celebrate pets.</h3>{" "}
        <p>So we want to know:</p>{" "}
        <p>
          <ul>
            <li>Do you have a question about your dog or cat?</li>
            <li>Have an idea for an article?</li>
            <li>Got a hot news tip?</li>
            <li>Or just want us to coo over pictures of your pets?</li>
          </ul>
          Hit us up! or{" "}
          <span
            style={{
              cursor: "pointer",
              padding: "5px",
              backgroundColor: "yellow",
            }}
          >
            <Link href="/enter" passHref>
              Login / Sign Up
            </Link>
          </span>{" "}
          and do it on your own. 👍
        </p>
      </div>
    </main>
  );
};

export default Instruction;
