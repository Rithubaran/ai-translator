# 🤝 Contributing to Lai-Translator

Thank you for your interest in contributing to Lai-Translator! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## 🎯 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include details about your configuration and environment**

### Suggesting Enhancements

If you have a suggestion for a new feature or enhancement, please:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**

### Pull Requests

- Fork the repo and create your branch from `main`
- If you've added code that should be tested, add tests
- If you've changed APIs, update the documentation
- Ensure the test suite passes
- Make sure your code lints
- Issue that pull request!

## 🛠️ Development Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git

### Local Development

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/yourusername/lai-translator.git
   cd lai-translator
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd client && npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your OpenAI API key
   ```

4. **Start development servers**
   ```bash
   # Terminal 1 - Backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd client && npm start
   ```

## 🔄 Pull Request Process

1. **Update the README.md** with details of changes to the interface, if applicable
2. **Update the CHANGELOG.md** with a note describing your changes
3. **The PR will be merged** once you have the sign-off of at least one maintainer

### Pull Request Guidelines

- **Title**: Use a clear, descriptive title
- **Description**: Explain what the PR does and why
- **Tests**: Include tests for new functionality
- **Documentation**: Update docs if needed
- **Screenshots**: Include screenshots for UI changes

## 📝 Coding Standards

### JavaScript/Node.js

- Use ES6+ features
- Follow Airbnb JavaScript Style Guide
- Use meaningful variable and function names
- Add comments for complex logic
- Use async/await instead of callbacks when possible

### React

- Use functional components with hooks
- Follow React best practices
- Use PropTypes or TypeScript for type checking
- Keep components small and focused

### CSS/Styling

- Use Material-UI components when possible
- Follow BEM methodology for custom CSS
- Use CSS-in-JS for component-specific styles
- Maintain consistent spacing and colors

### Git Commit Messages

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

Examples:
```
feat(translator): add support for new languages
fix(ui): resolve mobile layout issues
docs(readme): update installation instructions
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write tests for new features
- Ensure good test coverage
- Use descriptive test names
- Test both success and error cases

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for functions and classes
- Include examples in comments
- Document complex algorithms
- Keep README up to date

### API Documentation

- Document all API endpoints
- Include request/response examples
- Document error codes and messages
- Keep API docs in sync with code

## 🏷️ Issue Labels

We use labels to organize issues:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements or additions to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested
- `wontfix`: This will not be worked on

## 🎉 Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation

## 📞 Getting Help

If you need help with contributing:

- Check existing issues and discussions
- Join our community chat
- Contact maintainers directly

## 🙏 Thank You

Thank you for contributing to Lai-Translator! Your contributions help make this project better for everyone. 