/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react'
import { expect, mount, within } from '@instructure/ui-test-utils'
import ScreenReaderContent from '../index'

describe('<ScreenReaderContent />', async () => {
  it('should render the specified tag when `as` prop is set', async () => {
    const subject = await mount(<ScreenReaderContent as="div" />)
    const screenReaderContent = within(subject.getDOMNode())
    expect(screenReaderContent.getTagName()).to.equal('div')
  })

  it('accepts "passthrough" props', async () => {
    const subject = await mount(<ScreenReaderContent hidden />)
    const screenReaderContent = within(subject.getDOMNode())
    expect(screenReaderContent.getDOMNode().getAttribute('hidden')).to.exist()
  })

  it('renders children components', async () => {
    const subject = await mount(
      <ScreenReaderContent>
        <span>Screenreader text</span>
      </ScreenReaderContent>
    )
    const screenReaderContent = within(subject.getDOMNode())
    expect(screenReaderContent).to.have.text('Screenreader text')
  })

  it('renders children offscreen', async () => {
    const subject = await mount(
      <ScreenReaderContent>
        <span>Screenreader text</span>
      </ScreenReaderContent>
    )
    const screenReaderContent = within(subject.getDOMNode())
    expect(screenReaderContent.onscreen()).to.be.false()
  })

  it('is accessible by screen readers', async () => {
    const subject = await mount(<ScreenReaderContent />)
    const screenReaderContent = within(subject.getDOMNode())
    const height = screenReaderContent.style('height')
    const opacity = screenReaderContent.style('opacity')

    expect(height).to.not.equal(0 || undefined)
    expect(opacity).to.not.equal(0 || undefined)
  })
})
