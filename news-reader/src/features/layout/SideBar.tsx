import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Flag from "react-flagkit"
import { CountryList } from "../../utils/constants"

const SideBar = () => {
  const countries = CountryList.map((country) => {
    return (
      <Nav.Link key={country.code} to={`/country/${country.code}`} as={NavLink}>
        <div className="d-inline-flex ">
          <Flag country={country.code.toUpperCase()} />
          <span className="d-none d-lg-inline ps-2">
            {country.name.replace(/ /g, "\u00a0")}
          </span>
        </div>
      </Nav.Link>
    )
  })
  return <div className="aside d-flex flex-column ps-3">{countries}</div>
}

export default SideBar
