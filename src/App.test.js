import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the landing page", () => {
  render(<App />);
  const exerciseOneHeading = screen.getByText(/Exercise 1 - Testimonial Block/i);
  const exerciseTwoHeading = screen.getByText(/Exercise 2 - Filterable Content/i);
  const exerciseOneContent = screen.getByRole("container", { description: "exercise one" });
  const exerciseTwoContent = screen.getByRole("container", { description: "exercise two" });

  expect(exerciseOneHeading).toBeInTheDocument();
  expect(exerciseOneContent).toBeInTheDocument();
  expect(exerciseTwoHeading).toBeInTheDocument();
  expect(exerciseTwoContent).toBeInTheDocument();
});
