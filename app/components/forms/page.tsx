import { ComponentTemplate } from "../ComponentTemplate"

const AccessibleFormsPage = () => {
  const demo = (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  )

  const codeExamples = {
    react: `
import React from 'react';

const AccessibleForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required></textarea>
      </div>
      <div>
        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AccessibleForm;
`,
    vue: `
<template>
  <form class="space-y-4">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
      <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
      <textarea id="message" name="message" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required></textarea>
    </div>
    <div>
      <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AccessibleForm'
}
</script>
`,
    angular: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-accessible-form',
  template: \`
    <form class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required></textarea>
      </div>
      <div>
        <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </div>
    </form>
  \`
})
export class AccessibleFormComponent {}
`,
    svelte: `
<script>
  // Svelte component logic here
</script>

<form class="space-y-4">
  <div>
    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
    <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
  </div>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
  </div>
  <div>
    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
    <textarea id="message" name="message" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required></textarea>
  </div>
  <div>
    <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Submit
    </button>
  </div>
</form>
`,
  }

  return (
    <ComponentTemplate
      title="Accessible Forms"
      description="Create forms that are easy to use and navigate for all users, including those using assistive technologies."
      keyFeatures={[
        "Use semantic HTML elements like <form>, <label>, <input>, and <button>",
        "Associate labels with form controls using the 'for' attribute",
        "Provide clear and descriptive labels for form fields",
        "Use the 'required' attribute for mandatory fields",
        "Implement proper focus management and tab order",
        "Provide clear error messages and validation feedback",
      ]}
      demo={demo}
      codeExamples={codeExamples}
      accessibilityGuidelines={[
        "Ensure all form controls have associated labels",
        "Use fieldset and legend for grouping related form elements",
        "Provide clear instructions and error messages",
        "Use ARIA attributes when necessary (e.g., aria-describedby for error messages)",
        "Ensure the form is keyboard accessible",
        "Provide sufficient color contrast for text and form elements",
        "Allow users to recover from errors and review their input before submission",
      ]}
      testingTips={[
        "Test the form using only a keyboard to ensure all elements are reachable and operable",
        "Use screen readers to verify that all form elements are properly labeled and described",
        "Check that error messages are clear and associated with the correct form fields",
        "Verify that form validation provides clear feedback and doesn't rely solely on color",
        "Test the form with different browsers and devices to ensure consistent accessibility",
        "Use automated accessibility testing tools to catch common issues",
        "Conduct user testing with individuals who use assistive technologies",
      ]}
    />
  )
}

export default AccessibleFormsPage

