import profilePic from "../assets/IMG_7088.jpg";
const About = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center">
              <img
                src={profilePic}
                width={100}
                className="rounded-circle"
                alt="a"
              />
            </div>
            <div className="text-center mt-3">
              <span className="bg-secondary p-1 px-4 rounded text-white">
                Pro
              </span>
              <h5 className="mt-2 mb-0">Imren Rahbay</h5>
              <span>Fullstack Developer</span>
              <div className="px-4 mt-1">
                <p className="fonts">
                  I'm a full stack developer based in Porto,Portugal and skilled
                  in JavaScript and TypeScript. I work with technologies like
                  React.js, Next.js, Node.js, Express.js, Redux, Tailwind CSS,
                  PostgreSQL, MongoDB, and tools such as GitHub, Firebase,
                  Postman, and Cypress.
                </p>
              </div>
              <ul className="social-list">
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-dribbble" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram" />
                </li>
                <li>
                  <i className="fa-brands fa-linkedin" />
                </li>
                <li>
                  <i className="fa-brands fa-google" />
                </li>
              </ul>
              <div className="buttons">
                <button className="btn btn-outline-primary px-4">
                  <a
                    className="text-decoration-none text-black "
                    href="https://www.linkedin.com/in/imrenr/"
                    target="true"
                  >
                    Message
                  </a>
                </button>
                <button className="btn btn-primary px-4 ms-3">
                  <a
                    className="text-decoration-none text-white"
                    href="https://github.com/ImrenR"
                    target="true"
                  >
                    Contact
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
