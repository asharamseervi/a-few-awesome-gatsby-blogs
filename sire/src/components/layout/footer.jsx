import React from 'react'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'
import styled from 'styled-components'

import Link from '../link'
import {
  Box,
  Flex,
  Container,
  Text,
  Link as BaseLink
} from '../../utils/rebass'
import { colors } from '../../config/theme'

const FooterText = styled(Text).attrs({
  color: 'white',
  fontWeight: 400,
  fontSizes: [3],
  fontStyle: 'italic'
})`
  text-transform: uppercase;
  * {
    color: ${colors.white};
  }
`

const Footer = ({ title, links }) => (
  <Box as="footer" bg="fadeOcre">
    <Container>
      <Flex flexWrap="wrap" justifyContent="space-between" py={2}>
        <FooterText textAlign="left">
          {`© Copyright ${new Date().getFullYear()} - `}
          <Link to="/">{title}</Link>
        </FooterText>

        {links &&
          links.map(({ label, link }) => (
            <FooterText key={uniqid(link)}>
              <BaseLink as={Link} to={link}>
                {label}
              </BaseLink>
            </FooterText>
          ))}
      </Flex>
    </Container>
  </Box>
)

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  )
}

Footer.defaultProps = {
  links: [
    {
      label: 'Mentions légales',
      link: '/mentions-legales'
    }
  ]
}

export default Footer
