import Spinner from 'react-bootstrap/Spinner';

function SpinnerE() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default BasicExample;