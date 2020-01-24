import React from 'react'
import TimeGrid from 'react-big-calendar/lib/TimeGrid'
import { Navigate } from 'react-big-calendar'
import * as dates from 'date-arithmetic'
class CustomView extends React.Component {
    render() {
        let { date } = this.props
        let range = CustomView.range(date)
        return <TimeGrid {...this.props} range={range} eventOffset={15} />
    }
}
  
CustomView.range = date => {
    let start = date
    let end = dates.add(start, 7, 'day')

    let current = start
    let range = []

    while (dates.lte(current, end, 'day')) {
        range.push(current)
        current = dates.add(current, 1, 'day')
    }
    return range
}
  
CustomView.navigate = (date, action) => {
    switch (action) {
        case Navigate.PREVIOUS:
            return dates.add(date,-7 , 'day')

        case Navigate.NEXT:
            return dates.add(date, 7, 'day')

        default:
            return date
    }
}
  
CustomView.title = date => {
    return `Planning: ${date.toLocaleDateString()}`
}
export default CustomView