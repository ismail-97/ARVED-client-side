import { Form, InputGroup} from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import AcademicIdIcon from '../iconComponents/icons/AcademicIdIcon'

const ORCIDInputGroup = () => {
    return (
        <InputGroup className="arved-input-group">
            <FormattedMessage id="ORCİd">
                { placeholder => <Form.Control
                    className= "arved-input-label2"
                    type="text"
                    name="orcid"
                    placeholder={placeholder}
                    required
                    />
                }
            </FormattedMessage >
            <AcademicIdIcon />
        </InputGroup>
    )
}
export default ORCIDInputGroup