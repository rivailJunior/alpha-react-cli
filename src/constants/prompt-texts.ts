export const PromptTexts = {
  intro: "💬 Hey, Let's create!!!",
  firstQuestion: {
    name: "🗃 What would you like to do?",
    options: [
      {
        value: "create-project",
        label: "📁 Create Project",
      },
      {
        value: "create-router",
        label: "📍 Create Router",
      },
      {
        value: "create-http-module",
        label: "📦 Create Http Module",
      },
    ],
  },
  project: {
    name: "📂📝 What is your project name?",
    placeholder: "my-coolest-react-app",
  },
  test: {
    name: "Would you like to config Vitest or Jest?",
    options: [
      {
        value: "vitest",
        label: "🧪 Vitest",
      },
      {
        value: "jest",
        label: "🧪 Jest",
      },
    ],
  },
  endToEndTest: {
    name: "Would you like to config Cypress or Playwright?",
    options: [
      {
        value: "cypress",
        label: "🧪 Cypress",
      },
      {
        value: "playwright",
        label: "🧪 Playwright",
      },
    ],
  },
  folder: {
    name: "📍📝 What is your route name?",
    placeholder: "my-coolest-route",
  },
  module: {
    name: "💬 It will generate a http-module inside folder modules, proceed?",
  },
  operation: {
    cancel: "🚫 Operation cancelled",
    installing: "⏳ Creating...",
    created: "✅ Created successfully",
    error: "🧨 Something went wrong",
    success: `🎉🎊`,
  },
};
