import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../../app/store"
import { Navbar } from "../Navbar"

describe("navbar", () => {
  it("renders application name", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    )

    expect(screen.getByText(/News reader/i)).toBeInTheDocument()
  })

  it("should navigate to '/'", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    )

    expect(screen.getByText(/News reader/i)).toHaveAttribute("href", "/")
  })

  it("should render radio buttons", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    )

    expect(screen.getAllByRole("radio")).toHaveLength(2)
  })
  it("true to be true", () => {
    expect(true).toBe(true)
  })
})
