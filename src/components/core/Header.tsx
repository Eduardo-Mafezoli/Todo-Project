import Logo from "../../assets/images/logo.svg"
import Container from "../ui/Container";


export default function Header() {
  return (
    <Container as="header" className="mt-3 md:mt-20">
        <img src={Logo} alt="Logo" className="h-9 md:h-12" />
      </Container>
  )
}