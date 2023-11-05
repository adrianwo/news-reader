import {
  ButtonGroup,
  ToggleButton,
  Container,
  Nav,
  Navbar as NavbarBs,
} from "react-bootstrap"
import { Grid, List } from "react-bootstrap-icons"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectListView, setListView } from "../../features/layout/layoutSlice"

export function Navbar() {
  const isListView = useAppSelector(selectListView)
  const dispatch = useAppDispatch()

  return (
    <NavbarBs className="container fixed-top bg-light rounded shadow-sm border mb-3">
      <Container>
        <NavbarBs.Brand href="/">News reader</NavbarBs.Brand>
        <Nav>
          <ButtonGroup className="me-2">
            <ToggleButton
              className="d-flex"
              value={1}
              type="radio"
              checked={isListView}
              onClick={() => dispatch(setListView(true))}
              variant="light"
              id={""}
            >
              <List className="align-self-center" />
            </ToggleButton>{" "}
            <ToggleButton
              className="d-flex"
              value={2}
              type="radio"
              // name="radio"
              checked={!isListView}
              onClick={() => dispatch(setListView(false))}
              variant="light"
              id={""}
            >
              <Grid className="align-self-center" />
            </ToggleButton>
          </ButtonGroup>
        </Nav>
      </Container>
    </NavbarBs>
  )
}
