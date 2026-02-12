import { useNavigate } from 'react-router-dom';

function PageNavigation() {
  const navigate = useNavigate();
  //const token = localStorage.getItem("token");



  return (
    <div style={navStyle}>
      <span
        style={arrowStyle}
        onClick={() => navigate(-1)}
        title="Go Back"
      >
        ←
      </span>

      <span
        style={arrowStyle}
        onClick={() => navigate(1)}
        title="Go Forward"
      >
        →
      </span>
    </div>
  );
}

/* Styles */

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 40px',
  color: '#1f2933',
};

const arrowStyle = {
  fontSize: '18px',
  cursor: 'pointer',
  userSelect: 'none',
  fontWeight: '600',
};

export default PageNavigation;

