import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from './Button';


describe("Button", () => {
    it("should render a button with the text 'Click me'", () => {
        render(<Button onClick={() => {}} />);

        const button = screen.getByRole("button", {name: "Click me" });


        expect(button).toBeInTheDocument();
    });

    it("Should call the onClick function when clicked", async () => {
        const onClick = vi.fn();
        const user = userEvent.setup()
        render(<Button onClick={onClick} />);
        
        const button = screen.getByRole("button", {name: "Click me" });
        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it("should not call onClick function when it isn't clicked", () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick} />);

        expect(onClick).not.toHaveBeenCalled();
    });
});