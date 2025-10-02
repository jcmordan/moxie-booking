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

## 🤖 AI Usage Transparency

This project was developed with AI assistance using Claude (Anthropic's AI assistant). Below is a transparent account of how AI was used:

### **AI Tools Used:**
- **Claude (Anthropic)**: Primary AI assistant for code generation, debugging, and architectural decisions
- **Model**: Claude-3.5-Sonnet
- **Interface**: Cursor IDE integration

### **How AI Was Used:**

1. **Code Generation**: AI generated initial component structures, form validation logic, and test files
2. **Architecture Decisions**: AI suggested component organization, state management patterns, and folder structure
3. **Debugging**: AI helped identify and fix TypeScript errors, ESLint issues, and build problems
4. **Documentation**: AI assisted in writing comprehensive README documentation and code comments
5. **Testing**: AI generated test cases and helped implement comprehensive test coverage

### **Generic Prompts Used:**

- **"implement a three-step mobile booking UI"** - Initial project setup and component structure
- **"extract the GOLDSpa info to a separate component"** - Component refactoring and reusability
- **"now replace GOLDSpa logo for the moxi_logo.png"** - Asset management and updates
- **"align the text and fix the other issues"** - UI/UX improvements and styling
- **"add unit test for the BusinessInfo component"** - Test implementation and coverage
- **"make Business info dynamically"** - Component generalization and prop management
- **"extract the label to a dedicated component"** - Code reusability and DRY principles
- **"use react-form-hook instead of handling the input change manually"** - Form state management upgrade
- **"use pnpm instead of npm"** - Package manager migration
- **"create a ButtonBar component"** - Component extraction and reusability
- **"add validation to the FormTextInput"** - Form validation enhancement
- **"do not allow the user enter more than 3 digits on CVV"** - Input validation and user experience
- **"deploy the project on vercel"** - Production deployment and CI/CD setup

### **AI Decision Making Process:**

- **Architecture**: AI suggested React Hook Form for form management, Context API for global state, and component composition patterns
- **Testing**: AI recommended React Testing Library with Jest for comprehensive test coverage
- **Deployment**: AI guided Vercel integration with automatic CI/CD
- **Code Quality**: AI enforced TypeScript best practices and ESLint compliance

### **Human Oversight:**

While AI generated much of the code, all architectural decisions, business logic, and final implementations were reviewed and approved. The human developer:
- Made final decisions on component structure and naming conventions
- Validated all AI-generated code for correctness and business requirements
- Ensured the implementation met the exercise requirements
- Reviewed and refined AI-generated documentation
- Made strategic decisions about testing approach and deployment strategy

### **Why AI Was Used:**

1. **Efficiency**: Accelerated development while maintaining code quality
2. **Best Practices**: AI provided modern React patterns and TypeScript conventions
3. **Comprehensive Testing**: AI helped implement thorough test coverage quickly
4. **Documentation**: AI assisted in creating detailed, professional documentation
5. **Problem Solving**: AI helped debug complex issues and provided multiple solution approaches

This transparent approach demonstrates how AI can be effectively used as a development tool while maintaining human oversight and decision-making authority.


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

2. **Final Response**:
   After a proper requirement analysis there is two possible ways to handle this change

   1. The scope change will impact only the ui and backend to store the new field. No actual SMS notification will be implemented:
      - I will as for a couple extra hours (1-2 hrs) and will implement the change.
   2. The scope change involve implementing the SMS notification or some extra works beside adding the new field on the UI, backend and DB.
     - I will ask to handle that change on a new ticket which should be refined, discussed with the team, and pointed.


## 📝 Development Notes

- All components are fully typed with TypeScript
- Responsive design follows mobile-first approach
- Tests focus on functionality rather than styling
- BusinessInfo component is designed for reusability
- Form state persists across steps in the booking flow
- UI components are separated from business logic for better maintainability
- Generic UI components (`ui/components/`) can be reused across different parts of the application