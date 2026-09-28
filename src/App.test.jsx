// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    // using regex with the i flag allows simpler case-insensitive comparison
    // Use getAllByRole since there are multiple h1 elements
    const headings = screen.getAllByRole("heading");
    const firstHeading = headings.find(h => h.textContent.toLowerCase().includes('our first test'));
    expect(firstHeading).toBeInTheDocument();
  });
});