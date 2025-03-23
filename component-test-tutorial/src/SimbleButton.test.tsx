import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SimpleButton } from "./SimpleButton";

test("button message 'on', 'off'", async ()=>{
    const user = userEvent.setup();
    render(<SimpleButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('OFF');
    await user.click(button);
    expect(button).toHaveTextContent('ON');
});

test("first", ()=>{
    const view = render(<SimpleButton />);
    expect(view).toMatchSnapshot();
})