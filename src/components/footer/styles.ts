import styled from "styled-components"
import { Link } from "gatsby"

export const SCFooter = styled.footer`
  background: #f8f9fa;
  color: #111;
  font-family: Virgil;
`

export const SCCopyright = styled.div`
  max-width: 960px;
  padding: 1.45rem 1.0875rem 0;
  margin: 0 auto 50px;
`

export const SCLink = styled(Link)`
  background: #f8f9fa;
  float: right;
  color: #111;
  font-family: Virgil;
  text-decoration: none;
  &:hover {
    box-shadow: 5px 5px 5px 20px #111;
  }
`

