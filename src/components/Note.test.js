/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,fireEvent } from '@testing-library/react'
// eslint-disable-next-line no-unused-vars
import { prettyDOM } from '@testing-library/react'
import Note from "./Note";


test('renders content', () => {
    const note = {
        content: 'This is a test',
        important: true
    }

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
        <Note note={note} />
    )

    component.getByText('This is a test')
    component.getByText('make not important')

})

test('clicking the button calls event handler once', () => {
    const note = {
        content: 'This is a test',
        important: true
    }

    const mockHandler = jest.fn()
    // eslint-disable-next-line testing-library/render-result-naming-convention, no-unused-vars
    const component = render(<Note note={note} toggleImportance={mockHandler} />)

    const button = component.getByText('make not important')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
})