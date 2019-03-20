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

import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import themeable from '@instructure/ui-themeable'
import ThemeablePropTypes from '@instructure/ui-themeable/lib/utils/ThemeablePropTypes'
import safeCloneElement from '@instructure/ui-utils/lib/react/safeCloneElement'
import { omitProps } from '@instructure/ui-utils/lib/react/passthroughProps'
import { View } from '@instructure/ui-layout'

import styles from './styles.css'
import theme from './theme'
import Head from './Head'
import Body from './Body'
import Row from './Row'
import ColHeader from './ColHeader'
import RowHeader from './RowHeader'
import Cell from './Cell'

/**
---
category: components
id: TableControlled
---
**/
@themeable(theme, styles)
class Table extends Component {
  static propTypes = {
    /**
     * Set the table's caption.
     */
    caption: PropTypes.node.isRequired,
    /**
     * Build table via Table.Head or Table.Body
     */
    children: PropTypes.node,
    /**
     * Valid values are `0`, `none`, `auto`, `xxx-small`, `xx-small`, `x-small`,
     * `small`, `medium`, `large`, `x-large`, `xx-large`. Apply these values via
     * familiar CSS-like shorthand. For example: `margin="small auto large"`.
     */
    margin: ThemeablePropTypes.spacing,
    /**
     * Provide a reference to the underlying html element
     */
    elementRef: PropTypes.func,
    /**
     * Highlight each row on hover
     */
    hover: PropTypes.bool,
    /**
     * Control the padding and font-size of table cells
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * `auto` lets the browser determine table column widths based on cell content,
     * while `fixed` forces columns of equal width.
     */
    layout: PropTypes.oneOf(['auto', 'fixed']),
    /**
     * Control the horizontal alignment of table cells
     */
    colAlign: PropTypes.oneOf(['start', 'center', 'end']),
  }

  static defaultProps = {
    children: null,
    hover: false,
    size: 'medium',
    layout: 'auto',
    colAlign: 'start',
    margin: 'none',
    elementRef: undefined
  }

  static Head = Head
  static Body = Body
  static Row = Row
  static ColHeader = ColHeader
  static RowHeader = RowHeader
  static Cell = Cell

  render () {
    const { margin, elementRef, layout, caption, children, size, hover, colAlign } = this.props
    const [head, body] = Children.toArray(children)

    return (
      <View
        {...View.omitViewProps(omitProps(this.props, Table.propTypes), Table)}
        as="table"
        margin={margin}
        elementRef={elementRef}
        className={classnames({
          [styles.root]: true,
          [styles.fixedLayout]: layout === 'fixed',
        })}
      >
        <caption>{caption}</caption>
        {head && safeCloneElement(head, {
          key: head.props.name,
          size,
          colAlign,
        })}
        {body && safeCloneElement(body, {
          key: body.props.name,
          size,
          colAlign,
          hover,
        })}
      </View>
    )
  }
}

export default Table
