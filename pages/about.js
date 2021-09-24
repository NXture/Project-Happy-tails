import Link from "next/link";

const About = () => {
  return (
    <main>
      <div>
        <h1>About Us 😁</h1>
        <h3>
          We all need a bit of cuteness in our lives, especially the
          animal-shaped kind. 🐹
        </h3>
        <p>
          Pawesome Tales is a content sharing and social blogging platform for
          all pet lovers, where visitor can write and share their pawesome
          journey with their pets with others. And can also read interesting
          tales written by other.{" "}
        </p>
        <p>
          Whether you’re looking for adoption guides, in-fur-mation on your
          pet’s weird habits or showcases of pure pet cuteness, we’ve
          paw-sitively got it all.
        </p>
        <hr />
        <h3>Our Viewpoint</h3>
        <p>
          For the pet lovers out there, the special bond between you and your
          furry friend is something that only someone who owns a pet can truly
          understand. Happily, the surge of social networking sites has created
          a wave of petworking sites, on which fellow pet owners can connect.
          The pet-dominated social networking trend is in fact so popular that
          one in ten of all pets have their own Facebook page, Twitter account
          or YouTube channel. 💬
        </p>
        <p>
          So connet with other fellow pet lovers through our platform that will
          allow you to share tips, advocate for animals, find a home for a pet
          in need and perhaps make some new friends – both human and animal. 🤝
        </p>
        <p>
          Refer the following page to know more about this website. -{" "}
          <Link href="/instruction" passHref>
            <span
              style={{
                cursor: "pointer",
                padding: "5px",
                backgroundColor: "yellow",
              }}
            >
              Instruction
            </span>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default About;
