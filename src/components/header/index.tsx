import React from "react"
import { SCHeader, SCLink, SCTitle } from "./styles"

const HeaderBottom = () => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323.99629293415296 23.23405577689408">
      <rect x="0" y="0" width="323.99629293415296" height="23.23405577689408" fill="#f8f9fa"></rect>
      <g>
        <g transform="translate(10.564278132468417 11.641001609554507) rotate(0 151.43386833460806 -0.023973721107466872)">
          <path d="M-0.5642781324684619 -0.6697323851287365 C49.442932280011135 -0.47049387022852895, 250.53427066359495 0.10629095509648323, 301.06234060366245 0.3157856650650501 M1.3403371186461301 1.5930541673395782 C51.65331018298644 1.491260650763288, 253.27113626363513 -1.134329505255446, 303.43201480168455 -1.6410016095545144"
            stroke="#111111" strokeWidth="1" fill="none"></path>
        </g>
      </g>
    </svg>
  )
}

const Header = ({ siteTitle, description }: { siteTitle: string, description?: string }) => (
  <SCHeader>
    <SCTitle>
      <h1 style={{ margin: 0 }}>
        <SCLink to="/">
          {siteTitle}
          <div>{description}</div>
        </SCLink>
        <HeaderBottom />
      </h1>
    </SCTitle>
  </SCHeader>
)

export default Header
