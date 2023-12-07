import React from 'react'
import { describe, it, expect, beforeEach, afterEach,vi } from 'vitest'

import {screen, render,cleanup,fireEvent} from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'
expect.extend(matchers)

import MyForm from '.'

describe ('MyForm Component' ,()=>{

    beforeEach(()=> {
        render(<MyForm />)

    })

    afterEach(()=>{
        cleanup()
    })



    it('renders MyForm component', () => {
        
      
        
        const formLabel = screen.getByLabelText("Enter Queen's song you know:");
        expect(formLabel).toBeInTheDocument();
      
        
        const inputField = screen.getByRole('textbox');
        expect(inputField).toBeInTheDocument();
      
        
        const submitButton = screen.getByRole('button', { name: 'Submit' });
        expect(submitButton).toBeInTheDocument();
      })

     
  
})
