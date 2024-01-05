import { getByTestId } from "@testing-library/react"
import Counter from "./Counter"
import { render } from "@testing-library/react"


describe ("renders counter component" ,()=>{
    test("testing button ",()=>{
        render(
            <Counter/>
        )
        const button =screen.getByTestId("increment-button")
        userEvent.click(button);

        expect(screen.getAllByText("veera"))
    })
})