import React from 'react'
import { describe, it, expect, beforeEach, afterEach,vi } from 'vitest'

import {screen, render,cleanup} from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'
expect.extend(matchers)

import SongList from '.'

describe ('SongList Component' ,()=>{

    beforeEach(()=> {
        render(<SongList />)

    })

    afterEach(()=>{
        cleanup()
    })

    it('should display a heading with appropriate text', ()=>{
        const element=screen.getByRole('heading')
        expect(element).toBeInTheDocument()
    })

    it('renders ten buttons', () => {
        
        const items =  screen.getAllByRole('button');
        expect(items).toHaveLength(10);
      })

    it('should  display  like on the button and dislike after button is clicked', async ()=> {
       
        const button=screen.getAllByRole('button')
        console.log(button)
        expect(button[0].textContent).toBe("Like")
        await userEvent.click(button[0])
        expect(button[0].textContent).toBe("Like more")



    })
  
})
