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
- **State Management**: React Hooks

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── BusinessInfo.tsx
│   │   ├── ContactInformation.tsx
│   │   ├── PaymentInformation.tsx
│   │   └── Confirmation.tsx
│   ├── __tests__/          # Unit tests
│   │   └── BusinessInfo.test.tsx
│   └── views/              # Page-level components
│       └── BookingView.tsx
└── public/
    └── gold_spa_logo.png
```

## 🧪 Testing

Run tests with:
```bash
npm test
npm run test:watch
```

## 🎯 Exercise Documentation

### What assumptions did you make in this exercise?

1. **Business Data Structure**: Assumed a standardized business information structure with name, logo, address (street, suite, city, state, zipCode), email, and phone.

2. **Form Validation**: Assumed basic validation requirements - all fields are required and must contain non-empty values.

3. **Payment Processing**: Assumed no actual payment processing is needed - just console logging of booking data.

4. **Responsive Breakpoints**: Assumed standard responsive breakpoints (mobile-first approach with lg: breakpoint for desktop).

5. **Logo Format**: Assumed PNG format for business logos with standard dimensions (80x80px).

6. **Address Format**: Assumed US address format with street, suite, city, state, and zip code.

7. **Phone Number Format**: Assumed international phone number format with country code.

8. **Email Validation**: Assumed basic email format validation (HTML5 email input type).

### What tradeoffs are you considering in this exercise?

1. **Component Reusability vs. Specificity**:
   - **Tradeoff**: Made BusinessInfo component generic to handle any business vs. keeping it specific to Gold Spa
   - **Decision**: Chose reusability for better maintainability and scalability

2. **Form Validation Complexity**:
   - **Tradeoff**: Basic validation vs. comprehensive validation (email format, phone format, etc.)
   - **Decision**: Implemented basic validation as specified in requirements

3. **State Management**:
   - **Tradeoff**: Local component state vs. global state management (Redux, Zustand)
   - **Decision**: Used React hooks for simplicity and requirements scope

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
14. **Deployment**: No CI/CD pipeline or deployment configuration
15. **Security**: No security headers, CSRF protection, or input sanitization

### How would you respond to the SMS Opt-in scope change scenario?

If asked to add SMS opt-in functionality, I would:

1. **Immediate Response**:
   - Acknowledge the scope change and its impact on timeline
   - Assess the complexity and effort required
   - Communicate the additional time needed

2. **Technical Implementation**:
   ```typescript
   // Add to BookingData interface
   interface BookingData {
     // ... existing fields
     smsOptIn: boolean;
     phoneVerified: boolean;
   }
   
   // Add to ContactInformation component
   <div className="flex items-center space-x-3">
     <input
       type="checkbox"
       id="smsOptIn"
       checked={data.smsOptIn}
       onChange={(e) => handleInputChange('smsOptIn', e.target.checked)}
       data-testid="sms-opt-in"
     />
     <label htmlFor="smsOptIn">
       I agree to receive SMS notifications about my appointment
     </label>
   </div>
   ```

3. **Updated Tests**:
   - Add test for SMS opt-in checkbox rendering
   - Add test for SMS opt-in state management
   - Update form validation tests

4. **Considerations**:
   - **Legal Compliance**: Ensure TCPA compliance for SMS opt-in
   - **User Experience**: Clear messaging about SMS usage
   - **Data Privacy**: Proper handling of phone number data
   - **Backend Changes**: Would need SMS service integration
   - **Timeline Impact**: Additional 2-4 hours for implementation and testing

5. **Scope Management**:
   - Update project requirements documentation
   - Communicate timeline adjustments to stakeholders
   - Prioritize core functionality vs. new features

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