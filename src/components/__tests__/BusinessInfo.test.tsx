import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BusinessInfo from '../BusinessInfo'
import { BusinessProvider } from '../../contexts/BusinessContext'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string;[key: string]: unknown }) => (
    <img src={src} alt={alt} {...props} />
  ),
}))

const mockBusiness = {
  name: 'Gold Spa',
  logo: '/gold_spa_logo.png',
  address: {
    street: '2525 Camino del Rio S',
    suite: 'Suite 315 Room 8',
    city: 'San Diego',
    state: 'CA',
    zipCode: '92108'
  },
  email: 'goldspa@gmail.com',
  phone: '+11 123 4567 222'
}

const renderBusinessInfo = (business = mockBusiness) => {
  return render(
    <BusinessProvider business={business}>
      <BusinessInfo />
    </BusinessProvider>
  )
}

describe('BusinessInfo', () => {
  it('renders the business logo', () => {
    renderBusinessInfo()
    
    const logoContainer = screen.getByTestId('business-logo')
    expect(logoContainer).toBeInTheDocument()
    
    const logoImage = screen.getByAltText('Gold Spa Logo')
    expect(logoImage).toBeInTheDocument()
    expect(logoImage).toHaveAttribute('src', '/gold_spa_logo.png')
  })

  it('renders the business title', () => {
    renderBusinessInfo()
    
    const title = screen.getByTestId('business-title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Gold Spa')
  })

  it('renders address label and values', () => {
    renderBusinessInfo()
    
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
    renderBusinessInfo()
    
    const emailLabel = screen.getByTestId('email-label')
    expect(emailLabel).toBeInTheDocument()
    expect(emailLabel).toHaveTextContent('Email')
    
    const emailValue = screen.getByTestId('email-value')
    expect(emailValue).toBeInTheDocument()
    expect(emailValue).toHaveTextContent('goldspa@gmail.com')
  })

  it('renders phone label and value', () => {
    renderBusinessInfo()
    
    const phoneLabel = screen.getByTestId('phone-label')
    expect(phoneLabel).toBeInTheDocument()
    expect(phoneLabel).toHaveTextContent('Phone')
    
    const phoneValue = screen.getByTestId('phone-value')
    expect(phoneValue).toBeInTheDocument()
    expect(phoneValue).toHaveTextContent('+11 123 4567 222')
  })

  it('renders all contact information fields', () => {
    renderBusinessInfo()
    
    // Check that all labels are present
    expect(screen.getByTestId('address-label')).toBeInTheDocument()
    expect(screen.getByTestId('email-label')).toBeInTheDocument()
    expect(screen.getByTestId('phone-label')).toBeInTheDocument()
    
    // Check that all values are present
    expect(screen.getByTestId('address-values')).toBeInTheDocument()
    expect(screen.getByTestId('email-value')).toBeInTheDocument()
    expect(screen.getByTestId('phone-value')).toBeInTheDocument()
  })

  it('renders different business information when provided', () => {
    const differentBusiness = {
      name: 'Test Business',
      logo: '/test_logo.png',
      address: {
        street: '123 Test St',
        suite: 'Suite 100',
        city: 'Test City',
        state: 'TS',
        zipCode: '12345'
      },
      email: 'test@business.com',
      phone: '+1 555 123 4567'
    }

    renderBusinessInfo(differentBusiness)

    expect(screen.getByTestId('business-title')).toHaveTextContent('Test Business')
    expect(screen.getByAltText('Test Business Logo')).toHaveAttribute('src', '/test_logo.png')
    expect(screen.getByTestId('email-value')).toHaveTextContent('test@business.com')
    expect(screen.getByTestId('phone-value')).toHaveTextContent('+1 555 123 4567')
    expect(screen.getByTestId('address-values')).toHaveTextContent('123 Test St')
    expect(screen.getByTestId('address-values')).toHaveTextContent('Suite 100')
    expect(screen.getByTestId('address-values')).toHaveTextContent('Test City, TS 12345')
  })
})
