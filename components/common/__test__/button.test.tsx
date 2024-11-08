import { fireEvent, render, screen } from "@testing-library/react";

import DeliverButton from "../button";

describe("Button Component", () => {
    it("rengers the button with correct label", () => {
        render(
            <DeliverButton
                label="Click"
                onClick={() => {}}
                length="full"
                isModal={false}
                buttonTextColor="text-SYSTEM-white"
                buttonBgColor="bg-SYSTEM-black"
            />
        );

        expect(
            screen.getByRole("button", { name: /click/i })
        ).toBeInTheDocument();
    });

    it("calls onClick function when clicked", () => {
        const handleClick = jest.fn();

        render(
            <DeliverButton
                label="Click"
                onClick={handleClick}
                length="full"
                isModal={false}
                buttonTextColor="text-SYSTEM-white"
                buttonBgColor="bg-SYSTEM-black"
            />
        );

        const button = screen.getByRole("button", { name: /click/i });

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

