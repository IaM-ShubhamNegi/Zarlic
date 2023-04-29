import React from 'react'
import Authentication from '../ui/AuthenticationComp/Authentication'

const EnquiryPage = () => {
  return (
    <div>
            <div>
      <Authentication title={"Apply"} SignUp={false} LogIn={false} Enquiry={true} />
    </div>
    </div>
  )
}

export default EnquiryPage