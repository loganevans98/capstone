import "./HeaderBar.css";
import {ButtonGroup, ToggleButton} from "react-bootstrap";
import {useState} from "react";

function HeaderBar (props){

    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'English', value: '1' },
        { name: 'Español', value: '2' },
    ];

    function onChange(e) {
        setRadioValue(e.currentTarget.value);
        props.changeLanguage(e.currentTarget.value);
    }

    return(
      <div className="header d-flex flex-row align-items-center justify-content-between">
          <div className="header-text">casimiro sotelo montenegro</div>
          <ButtonGroup>
              {radios.map((radio, idx) => (
                  <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant={'outline-primary'}
                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => onChange(e)}
                  >
                      {radio.name}
                  </ToggleButton>
              ))}
          </ButtonGroup>
      </div>
    );
}

export default HeaderBar;