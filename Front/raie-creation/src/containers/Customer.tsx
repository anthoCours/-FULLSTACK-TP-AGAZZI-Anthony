

import React from 'react'
import MeetingForm from '../components/form/Meeting';
import Meeting from '../components/Meeting';

const Customer: React.FC = () => {
    return(
        <div>
            Customer
            {/* Pour prendre un nouveau rdv */}
            <MeetingForm /> 
            {/* Liste des rdv déja pris */}
            <Meeting />
        </div>
    )
}
export default Customer;