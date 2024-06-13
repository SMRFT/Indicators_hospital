import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { createRoot } from 'react-dom/client';
import './LandingPage.css';
import { FaTimes } from 'react-icons/fa';
import { TbHexagonNumber0, TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbHexagonPlus } from 'react-icons/tb';
import { FiHexagon, FiArrowDown } from 'react-icons/fi';
import Logo from '../images/shanmuga-hospital-logo.jpg';

function LandingPage() {
  const [showPanel, setShowPanel] = useState(false);
  const [currentFloor, setCurrentFloor] = useState('');
  const [currentIcons, setCurrentIcons] = useState([]);
  const navigate = useNavigate();

  const handleFloorClick = (floor) => {
    setCurrentFloor(floor);
    setShowPanel(true);
    setCurrentIcons(Array.isArray(getIconsForFloor(floor)) ? getIconsForFloor(floor) : [getIconsForFloor(floor)]);
  };
  
  const handleClosePanel = () => {
    setShowPanel(false);
    setCurrentFloor('');
    setCurrentIcons([]);
  };

  const handleIconClick = (sectionName) => {
    // Ensure sectionName is not null
    if (sectionName) {
      // Check if the current location is not the target page
      if (window.location.pathname !== '/EmployeeLogin') {
        console.log('Navigating to EmployeeLogin with sectionName:', sectionName); 
        console.log("Rendering LandingPage");
        navigate('/EmployeeLogin', { state: { sectionName } });
      } else {
        // Handle the click event for the icon without navigation
        console.log('Handling click event for icon without navigation:', sectionName);
        // Add your logic here for handling the click event without navigation
      }
    }
  };  
  
  const getIconsForFloor = (floor) => {
    switch (floor) {
      case 'Basement':
        return (
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100px', height: '100px' }}>
                <div className="image-container" onClick={() => handleIconClick('HR')}>
                  <img style={{ width: "100%", height: "100%"}} src="/HR.png" alt="HR" />
                  <p className="image-text">HR</p>
                </div>
            </div>
            <div style={{ width: '100px', height: '100px' }}>
                <div className="image-container" onClick={() => handleIconClick('Lab')}>
                  <img style={{ width: "100%", height: "100%"}} src="/Lab.png" alt="Lab" />
                  <p className="image-text">Lab</p>
                </div>
            </div>
            <div style={{ width: '100px', height: '100px', marginLeft: '25px' }}>
                <div className="image-container" onClick={() => handleIconClick('XRay')}>
                  <img style={{ width: "100%", height: "100%" }} src="/X-Ray.png" alt="XRay" />
                  <p className="image-text">X-Ray</p>
                </div>
            </div>
            <div style={{ width: '100px', height: '100px', marginLeft: '25px' }}>
                <div className="image-container" onClick={() => handleIconClick('MRDForm')}>
                  <img style={{ width: "100%", height: "100%" }} src="/MRD.png" alt="MRDForm" />
                  <p className="image-text">MRD Form</p>
                </div>
            </div>
            <div style={{ width: '100px', height: '100px', marginLeft: '25px', marginTop:"-6%" }}>
                <div className="image-container" onClick={() => handleIconClick('ChemoWard')}>
                  <img style={{ width: "150%", height: "140%" }} src="/Chemo.png" alt="Chemo Ward" />
                  <p className="image-text" style={{ marginLeft: '25px', marginTop:"-2%"}}>Chemo Ward</p>
                </div>
            </div>
          </div>
        );        
                
      case 'Ground Floor':
        return (
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100px', height: '100px', marginTop:"-10%" }}>
                <div className="image-container" onClick={() => handleIconClick('ER')}>
                  <img style={{ width: "150%", height: "150%" }} src="/Emergency Room.png" alt="Emergency Room" />
                  <p className="image-text" style={{ marginTop:"-15px"}}>Emergency Room</p>
                </div>
            </div>
            <div style={{ width: '100px', height: '100px', marginTop:"-7%" , marginLeft: '100px' }}>
                <div className="image-container" onClick={() => handleIconClick('FrontOffice')}>
                  <img style={{ width: "150%", height: "120%" }} src="/Front Office.png" alt="Front Office" />
                  <p className="image-text" style={{ marginLeft: '25px'}}>Front Office</p>
                </div>
            </div>
            <div style={{ width: '100px', height: '100px', marginTop:"-7%" , marginLeft: '100px' }}>
                <div className="image-container" onClick={() => handleIconClick('OPD')}>
                  <img style={{ width: "150%", height: "120%" }} src="/OPD.png" alt="OPD" />
                  <p className="image-text" style={{ marginLeft: '25px'}}>OPD</p>
                </div>
            </div>
            </div>
        );
    
      case 'Floor 1':
        return [
          <div style={{ display: 'flex' }}>
          <div style={{ width: '100px', height: '100px' }}>
              <div className="image-container" onClick={() => handleIconClick('FirstFloor')}>
                <img style={{ width: "100%", height: "100%"}} src="/First Floor.png" alt="First Floor" />
                <p className="image-text">First Floor</p>
              </div>
          </div>
          <div style={{ width: '100px', height: '100px', marginLeft: '25px', marginTop:'-5px' }}>
              <div className="image-container" onClick={() => handleIconClick('FirstSuit')}>
                <img style={{ width: "100%", height: "100%" }} src="/First Suit.png" alt="First Suit" />
                <p className="image-text">First Suit</p>
              </div>
          </div>
          <div style={{ width: '100px', height: '100px', marginLeft: '25px', marginTop:'-5px' }}>
              <div className="image-container" onClick={() => handleIconClick('MICUForm')}>
                <img style={{ width: "100%", height: "150%", marginTop:'-15px' }} src="/SICU.png" alt="MICU Form" />
                <p className="image-text" style={{ marginTop:'-5px'}}>MICU Form</p>
              </div>
          </div>
          <div style={{ width: '100px', height: '100px', marginLeft: '25px', marginTop:'-5px' }}>
              <div className="image-container" onClick={() => handleIconClick('NICUForm')}>
                <img style={{ width: "100%", height: "150%", marginTop:'-15px' }} src="/SICU.png" alt="NICU Form" />
                <p className="image-text" style={{ marginTop:'-5px'}}>NICU Form</p>
              </div>
          </div>
          <div style={{ width: '100px', height: '100px', marginLeft: '25px', marginTop:'-5px' }}>
              <div className="image-container" onClick={() => handleIconClick('Dialysis')}>
                <img style={{ width: "100%", height: "100%" }} src="/Dialysis.png" alt="Dialysis" />
                <p className="image-text">Dialysis</p>
              </div>
          </div>
          <div style={{ width: '100px', height: '100px', marginLeft: '25px', marginTop:'-5px' }}>
              <div className="image-container" onClick={() => handleIconClick('OTForm')}>
                <img style={{ width: "100%", height: "100%" }} src="/OT.png" alt="OTForm" />
                <p className="image-text">OT Form</p>
              </div>
          </div>
          <div style={{ width: '100px', height: '100px', marginLeft: '25px', marginTop:'-5px' }}>
              <div className="image-container" onClick={() => handleIconClick('RecoveryWard')}>
                <img style={{ width: "100%", height: "100%" }} src="/Recovery Ward.png" alt="Recovery Ward" />
                <p className="image-text">Recovery Ward</p>
              </div>
          </div>
        </div>
        ];
      case 'Floor 2':
        return [
          <div style={{ display: 'flex' }}>
          <div style={{ width: '100px', height: '100px' }}>
              <div className="image-container" onClick={() => handleIconClick('SecondFloor')}>
                <img style={{ width: "150%", height: "120%", marginLeft:"-20px", marginTop:"-10px"}} src="/First Floor.png" alt="Second Floor" />
                <p className="image-text" style={{marginTop:"-5px"}}>Second Floor</p>
              </div>
          </div>
          <div style={{ width: '100px', height: '100px' }}>
              <div className="image-container" onClick={() => handleIconClick('SecondSuit')}>
                <img style={{ width: "150%", height: "100%", marginLeft:"10px"}} src="/Second Suit.png" alt="Second Suit" />
                <p className="image-text" style={{marginLeft:"35px"}}>Second Suit</p>
              </div>

          </div>
          <div style={{ width: '100px', height: '100px' }}>
              <div className="image-container" onClick={() => handleIconClick('SICUForm')}>
                <img style={{ width: "150%", height: "120%", marginLeft:"50px",marginTop:"-20px"}} src="/SICU.png" alt="SICU" />
                <p className="image-text" style={{marginLeft:"80px"}}>SICU Form</p>
              </div>
          </div>
          </div>
        ];
      case 'Floor 3':
        return [
          <div style={{ display: 'flex' }}>
          <div style={{ width: '100px', height: '100px' }}>
             <div className="image-container" onClick={() => handleIconClick('ThirdFloor')}>
                <img style={{ width: "150%", height: "100%",marginLeft:"-20px"}} src="/First Floor.png" alt="Third Floor" />
                <p className="image-text">Third Floor</p>
              </div>
          </div>
          </div>
        ];
      case 'Others':
        return [
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100px', height: '100px' }}>
                <div className="image-container" onClick={() => handleIconClick('MRI')}>
                  <img style={{ width: "100%", height: "100%" }} src="/MRI.png" alt="MRI" />
                  <p className="image-text">MRI</p>
                </div>
            </div>
            <div style={{ width: '100px', height: '100px', marginLeft: '30px' }}>
                <div className="image-container" onClick={() => handleIconClick('Physiotherapy')}>
                  <img style={{ width: "100%", height: "90%" }} src="/Physiotherapy.png" alt="Physiotherapy" />
                  <p className="image-text" style={{marginTop:"20px"}}>Physiotherapy</p>
                </div>
            </div>
            <div style={{ width: '100px', height: '100px', marginLeft: '30px' }}>
                <div className="image-container" onClick={() => handleIconClick('CT')}>
                  <img style={{ width: "100%", height: "100%" }} src="/CT.png" alt="CT" />
                  <p className="image-text">CT</p>
                </div>
            </div>
            </div>
        ];
      default:
        return [];
    }
  };

  return (
    <div>
        <div className="landing-logo">
          <img src={Logo} alt="Shanmuga Hospital Logo" className="logo" />
        </div>
        <div className="landing-page">
          <div style={{marginLeft:"1070px",marginTop:"80px"}}>
            <Link style={{color:"#109b76",fontSize:"22px",cursor:"pointer",whiteSpace:"nowrap"}} to='/AdminLogin'>Admin Login</Link>
          </div>
          <div className='row floor-container'>
          <div className='col-6 col-md-3 floor' onClick={() => handleFloorClick('Basement')}>
            <div className="hexagon-container">
              <FiHexagon className="floor-icon" />
              <FiArrowDown className="arrow-down-icon" />
            </div>
            <p>Basement</p>
          </div>
          <div className='col-6 col-md-3 floor' onClick={() => handleFloorClick('Ground Floor')}>
            <TbHexagonNumber0 className="floor-icon" />
            <p style={{whiteSpace:"nowrap"}}>Ground Floor</p>
          </div>
          <div className='col-6 col-md-3 floor' onClick={() => handleFloorClick('Floor 1')}>
            <TbHexagonNumber1 className="floor-icon" />
            <p>Floor 1</p>
          </div>
          <div className='col-6 col-md-3 floor' onClick={() => handleFloorClick('Floor 2')}>
            <TbHexagonNumber2 className="floor-icon" />
            <p>Floor 2</p>
          </div>
          <div className='col-6 col-md-3 floor' onClick={() => handleFloorClick('Floor 3')}>
            <TbHexagonNumber3 className="floor-icon" />
            <p>Floor 3</p>
          </div>
          <div className='col-6 col-md-3 floor' onClick={() => handleFloorClick('Others')}>
            <TbHexagonPlus className="floor-icon" />
            <p>Others</p>
          </div>
        </div>

        {showPanel && ( 
        <div className="sliding-panel-container">
          <div className="close-icon" onClick={handleClosePanel}><FaTimes /></div>
          <h2 style={{color:"#E1F7F5"}}>{currentFloor}</h2>
          {currentIcons.filter(icon => icon !== null).map((icon, index) => (
            <div className="panel-icon" key={index} onClick={() => handleIconClick(icon.props.to)}>
              {icon}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default LandingPage;
