import {React, useState} from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import TableData from '../../assets/dummy/dummy-tickets.json'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import {Link} from 'react-router-dom'

export const Dashboard = () => {
    const [ticketCnt,setTicketCnt] = useState(50);
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Dashboard"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                <Link to='/add-ticket'><Button variant='primary' style={{"fontSize":"2rem", "padding":"10px 30px"}}>Add New Ticket</Button></Link>
            </Col>
        </Row>
        <Row>
            <Col className='text-center'>
                <div>Total tickets: {ticketCnt}</div>
                <div>Open Tickets: 5</div>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col className='text-center mb-3'>
            <h3>Recently Added Tickets</h3>
            </Col>
        </Row>
        <Row>
            <Col className="recent-ticket">
                <TicketTable TableData={TableData}/>
            </Col>
        </Row>
    </Container>
  )
}
