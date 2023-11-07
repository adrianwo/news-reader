import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Flag from "react-flagkit"
import { CountryList } from "../../utils/constants"
import { useTranslation } from "react-i18next"

const SideBar = () => {
  const { t } = useTranslation()
  const countries = CountryList.map((country) => {
    return (
      <Nav.Link
        key={country.code}
        to={`/country/${country.code}`}
        as={NavLink}
        className="rounded rounded-5"
      >
        <div className="d-inline-flex align-items-center">
          <Flag country={country.code.toUpperCase()} className="m-2" />
          <span className="d-none d-lg-inline pe-2">
            {t(country.name)}
            {/* {country.name.replace(/ /g, "\u00a0")} */}
          </span>
        </div>
      </Nav.Link>
    )
  })
  return <div className="aside d-flex flex-column ps-3">{countries}</div>
}

export default SideBar
