import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BusinessInfo from '../BusinessInfo'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}))

describe('BusinessInfo', () => {
  it('renders the business logo', () => {
    render(<BusinessInfo />)
    
    const logoContainer = screen.getByTestId('business-logo')
    expect(logoContainer).toBeInTheDocument()
    
    const logoImage = screen.getByAltText('Gold Spa Logo')
    expect(logoImage).toBeInTheDocument()
    expect(logoImage).toHaveAttribute('src', '/gold_spa_logo.png')
  })

  it('renders the business title', () => {
    render(<BusinessInfo />)
    
    const title = screen.getByTestId('business-title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Gold Spa')
  })

  it('renders address label and values', () => {
    render(<BusinessInfo />)
    
    const addressLabel = screen.getByTestId('address-label')
    expect(addressLabel).toBeInTheDocument()
    expect(addressLabel).toHaveTextContent('Address')
    
    const addressValues = screen.getByTestId('address-values')
    expect(addressValues).toBeInTheDocument()
    expect(addressValues).toHaveTextContent('2525 Camino del Rio S')
    expect(addressValues).toHaveTextContent('Suite 315 Room 8')
    expect(addressValues).toHaveTextContent('San Diego, CA 92108')
  })

  it('renders email label and value', () => {
    render(<BusinessInfo />)
    
    const emailLabel = screen.getByTestId('email-label')
    expect(emailLabel).toBeInTheDocument()
    expect(emailLabel).toHaveTextContent('Email')
    
    const emailValue = screen.getByTestId('email-value')
    expect(emailValue).toBeInTheDocument()
    expect(emailValue).toHaveTextContent('goldspa@gmail.com')
  })

  it('renders phone label and value', () => {
    render(<BusinessInfo />)
    
    const phoneLabel = screen.getByTestId('phone-label')
    expect(phoneLabel).toBeInTheDocument()
    expect(phoneLabel).toHaveTextContent('Phone')
    
    const phoneValue = screen.getByTestId('phone-value')
    expect(phoneValue).toBeInTheDocument()
    expect(phoneValue).toHaveTextContent('+11 123 4567 222')
  })

  it('renders all contact information fields', () => {
    render(<BusinessInfo />)
    
    // Check that all labels are present
    expect(screen.getByTestId('address-label')).toBeInTheDocument()
    expect(screen.getByTestId('email-label')).toBeInTheDocument()
    expect(screen.getByTestId('phone-label')).toBeInTheDocument()
    
    // Check that all values are present
    expect(screen.getByTestId('address-values')).toBeInTheDocument()
    expect(screen.getByTestId('email-value')).toBeInTheDocument()
    expect(screen.getByTestId('phone-value')).toBeInTheDocument()
  })
})
