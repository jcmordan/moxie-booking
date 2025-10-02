# Moxie Booking System

A responsive booking system for spa appointments built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Three-step booking process**: Contact Information → Payment Information → Confirmation
- **Responsive design**: Mobile, tablet, and desktop layouts
- **Form validation**: Required field validation with error messages
- **Dynamic business information**: Reusable BusinessInfo component
- **State management**: React hooks for form data persistence
- **Unit testing**: Comprehensive test coverage with React Testing Library

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library
- **Form Management**: React Hook Form
- **Package Manager**: pnpm
- **State Management**: React Hooks + Context API

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory, contain pages and routing
├── components/             # Business-specific components
├── ui/                     # Generic UI components
├── views/                  # Page-level components
├── contexts/               # React Context providers
├── utils/                  # Helper functions and utilities
└── public/                 # Static assets
```

### Folder Organization

- **`src/components/`**: Business-specific components that contain domain logic and are tied to the booking system
- **`src/ui/`**: Generic, reusable UI components used for layout, form elements, and common interface patterns
- **`src/views/`**: Page-level components that orchestrate the overall application flow
- **`src/contexts/`**: React Context providers for global state management
- **`src/utils/`**: Helper functions, validators, and formatters
- **`src/app/`**: Next.js app directory with pages and layouts

## 🚀 Live Demo

**Live Application**: [https://moxie-booking.vercel.app/](https://moxie-booking.vercel.app/)

The application is deployed on Vercel with automatic CI/CD. Every commit to the `main` branch triggers a new deployment.

## 📁 Code Access

**Repository**: [https://github.com/jcmordan/moxie-booking](https://github.com/jcmordan/moxie-booking)

**Clone the repository**:
```bash
git clone https://github.com/jcmordan/moxie-booking.git
cd moxie-booking
pnpm install
pnpm dev
```

**Local Development**:
- Run `pnpm dev` to start the development server
- Run `pnpm test` to execute the test suite
- Run `pnpm build` to create a production build

## 🧪 Testing

Run tests with:
```bash
pnpm test
pnpm run test:watch
```

## 🎯 Exercise Documentation

### What assumptions did you make in this exercise?

1. **Business Data Structure**: Assumed a standardized business information structure with name, logo, address (street, suite, city, state, zipCode), email, and phone.

2. **Form Validation**: Assumed basic validation requirements - all fields are required and must contain non-empty values (including whitespace-only validation).

3. **Payment Processing**: Assumed no actual payment processing is needed - just console logging of booking data.

4. **Responsive Breakpoints**: Assumed standard responsive breakpoints (mobile-first approach with lg: breakpoint for desktop).

5. **Logo Format**: Assumed PNG format for business logos with standard dimensions (80x80px).

6. **Address Format**: Assumed US address format with street, suite, city, state, and zip code.

7. **Phone Number Format**: Assumed international phone number format with country code.

8. **Email Validation**: Assumed basic email format validation (HTML5 email input type).

9. **CVV Validation**: Assumed CVV should be exactly 3 numeric digits with input filtering.

10. **Design Implementation**: Assumed the Figma design could be implemented manually without direct access to the design tool.

### What tradeoffs are you considering in this exercise?

1. **Component Reusability vs. Specificity**:
   - **Tradeoff**: Made BusinessInfo component generic to handle any business vs. keeping it specific to Gold Spa
   - **Decision**: Chose reusability for better maintainability and scalability

2. **Form Validation Complexity**:
   - **Tradeoff**: Basic validation vs. comprehensive validation (email format, phone format, etc.)
   - **Decision**: Implemented basic validation as specified in requirements

3. **State Management**:
   - **Tradeoff**: Local component state vs. global state management (Redux, Zustand)
   - **Decision**: Used React hooks + Context API for business data and React Hook Form for form state

4. **Testing Coverage**:
   - **Tradeoff**: Testing all components vs. focusing on core functionality
   - **Decision**: Implemented comprehensive test coverage for all components using React Testing Library, focuses on core functionally rather than component structure and styling

5. **Styling Approach**:
   - **Tradeoff**: Custom CSS vs. Tailwind utility classes
   - **Decision**: Used Tailwind for rapid development and consistency

6. **Error Handling**:
   - **Tradeoff**: Basic error display vs. comprehensive error management
   - **Decision**: Implemented basic error display for form validation

### What is out of scope for you in this exercise?

1. **Backend Integration**: No actual API calls, database storage, or server-side processing
2. **Payment Processing**: No real payment gateway integration (Stripe, PayPal, etc.)
3. **Authentication**: No user authentication or session management
4. **Email Notifications**: No actual email sending functionality
5. **Advanced Form Validation**: No complex validation rules (phone format, address verification)
6. **Accessibility**: Limited accessibility features (ARIA labels, keyboard navigation)
7. **Performance Optimization**: No code splitting, lazy loading, or performance monitoring
8. **Error Boundaries**: No React error boundaries for error handling
9. **Internationalization**: No multi-language support
10. **Analytics**: No user tracking or analytics integration
11. **SEO**: No meta tags, structured data, or SEO optimization
12. **Progressive Web App**: No PWA features or offline functionality
13. **Advanced Testing**: No integration tests, E2E tests, or visual regression tests
14. **Security**: No security headers, CSRF protection, or input sanitization
15. **Real-time Features**: No WebSocket connections or real-time updates
16. **Advanced Error Handling**: No comprehensive error logging or monitoring
17. **Data Persistence**: No local storage or session persistence across page refreshes

### How would you respond to the SMS Opt-in scope change scenario?

If asked to add SMS opt-in functionality, I would:

1. **Immediate Response**:
   - Acknowledge the scope change and its impact on timeline
   - Assess the complexity and effort required (estimated 2-4 hours)
   - Communicate the additional time needed to stakeholders
   - Clarify requirements (mandatory vs. optional, legal compliance needs)

2. **Technical Implementation**:
   ```typescript
   // Add to BookingData interface
   interface BookingData {
     // ... existing fields
     smsOptIn: boolean;
     phoneVerified: boolean;
   }
   
   // Add to ContactInformation component using FormCheckbox
   <FormCheckbox
     id="smsOptIn"
     name="smsOptIn"
     label="I agree to receive SMS notifications about my appointment"
     required={false}
   />
   ```

3. **Updated Tests**:
   - Add test for SMS opt-in checkbox rendering
   - Add test for SMS opt-in state management
   - Update form validation tests
   - Test integration with existing form flow

4. **Considerations**:
   - **Legal Compliance**: Ensure TCPA compliance for SMS opt-in
   - **User Experience**: Clear messaging about SMS usage and frequency
   - **Data Privacy**: Proper handling of phone number data
   - **Backend Changes**: Would need SMS service integration (Twilio, etc.)
   - **Timeline Impact**: Additional 2-4 hours for implementation and testing

5. **Scope Management**:
   - Update project requirements documentation
   - Communicate timeline adjustments to stakeholders
   - Prioritize core functionality vs. new features
   - Consider if this affects the overall project timeline

6. **Implementation Approach**:
   - Leverage existing FormCheckbox component for consistency
   - Use React Hook Form for state management
   - Add proper validation and error handling
   - Ensure responsive design compatibility

## 🔄 Future Enhancements

- Real payment processing integration
- Email notification system
- User authentication and profiles
- Advanced form validation
- Comprehensive accessibility features
- Performance optimization
- E2E testing with Playwright
- CI/CD pipeline setup

## 📝 Development Notes

- All components are fully typed with TypeScript
- Responsive design follows mobile-first approach
- Tests focus on functionality rather than styling
- BusinessInfo component is designed for reusability
- Form state persists across steps in the booking flow
- UI components are separated from business logic for better maintainability
- Generic UI components (`ui/components/`) can be reused across different parts of the application