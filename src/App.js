import { Container } from "react-bootstrap";
import CreateResumeForm from "./components/CreateResumeForm";
import NavbarComponent from "./components/Navbar";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <CreateResumeForm />
      </Container>
    </>
  );
};

export default App;
