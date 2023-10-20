import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import HomeAdmin from './HomeAdmin';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Mock Axios for testing
const axiosMock = new MockAdapter(axios);

describe('HomeAdmin component', () => {
  beforeAll(() => {
    // Mock Axios GET request
    axiosMock.onGet('http://localhost:8080/gettext').reply(200, [
      { code: 'Home', subject: 'Test Subject' },
    ]);
  });

  it('renders the component in default view', async () => {
    const { getByText, getByDisplayValue } = render(<HomeAdmin />);

    // Make sure the component is rendered in default view
    expect(getByDisplayValue('Test Subject')).toBeInTheDocument();

    // Verify Edit button is present
    const editButton = getByText('Edit');
    expect(editButton).toBeInTheDocument();
  });

  it('renders the component in edit view', async () => {
    const { getByText, getByDisplayValue } = render(<HomeAdmin />);

    // Click the Edit button to enter edit mode
    const editButton = getByText('Edit');
    fireEvent.click(editButton);

    // Make sure the component is in edit view
    expect(getByDisplayValue('Test Subject')).toBeInTheDocument();

    // Verify Save and Cancel buttons are present
    const saveButton = getByText('Save');
    const cancelButton = getByText('Cancel');
    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('updates the component value and saves it', async () => {
    const { getByText, getByDisplayValue } = render(<HomeAdmin />);

    // Click the Edit button to enter edit mode
    const editButton = getByText('Edit');
    fireEvent.click(editButton);

    // Update the textarea value
    const textarea = getByDisplayValue('Test Subject');
    fireEvent.change(textarea, { target: { value: 'Updated Subject' } });

    // Click the Save button
    const saveButton = getByText('Save');
    fireEvent.click(saveButton);

    // Wait for Axios PUT request to be called
    await waitFor(() => {
      expect(axiosMock.history.put.length).toBe(1);
    });

    // Make sure the component is back in default view with the updated value
    expect(getByDisplayValue('Updated Subject')).toBeInTheDocument();
  });

  it('cancels editing and reverts to default view', async () => {
    const { getByText, getByDisplayValue } = render(<HomeAdmin />);

    // Click the Edit button to enter edit mode
    const editButton = getByText('Edit');
    fireEvent.click(editButton);

    // Update the textarea value
    const textarea = getByDisplayValue('Test Subject');
    fireEvent.change(textarea, { target: { value: 'Updated Subject' } });

    // Click the Cancel button
    const cancelButton = getByText('Cancel');
    fireEvent.click(cancelButton);

    // Make sure the component is back in default view with the original value
    expect(getByDisplayValue('Test Subject')).toBeInTheDocument();
  });
});
