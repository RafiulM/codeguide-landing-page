flowchart TD
  LandingPage[Landing Page]
  LandingPage -->|Click Sign Up| SignUpPage[Sign Up Page]
  LandingPage -->|Click Sign In| SignInPage[Sign In Page]
  SignUpPage -->|Submit Credentials| AuthAPI[Auth API Route]
  SignInPage -->|Submit Credentials| AuthAPI
  AuthAPI -->|Success| DashboardPage[Dashboard Page]
  AuthAPI -->|Failure| ErrorPage[Display Error Message]