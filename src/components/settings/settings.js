import React, { useState } from 'react'
import { Typography, InputLabel, MenuItem, FormControl, Select, Input, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import './settings.css';

const languages = [
  'English',
  'Spanish'
];

const styles = {
  button: {
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
  },
};

const Settings = () => {
  const [myLanguage, setMyLanguage] = useState();
  const [newLanguage, setNewLanguage] = useState();

  const handleMyLangChange = (event) => {
    const { value } = event.target;
    setMyLanguage(value);
  };

  const handleNewLangChange = (event) => {
    const { value } = event.target;
    setNewLanguage(value);
  };

  return (
    <div className='container'>
      <Typography align='center' variant='h4' className="title">
          Language Exchange Chatroulette
      </Typography>
      <div className="selectsWrapper">
        <FormControl
          fullWidth
          classes={{
            root: "mr",
          }}>
          <InputLabel id="demo-simple-select-label">My language</InputLabel>
          <Select
            labelId="my-lang"
            id="my-lang-select"
            value={myLanguage}
            input={<Input />}
            onChange={handleMyLangChange}
          >
            {languages.map((language) => (
              <MenuItem key={language} value={language}>
                {language}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language I want to learn</InputLabel>
          <Select
            labelId="new-lang"
            id="new-lang-select"
            value={newLanguage}
            input={<Input />}
            onChange={handleNewLangChange}
          >
            {languages.map((language) => (
              <MenuItem key={language} value={language}>
                {language}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="perferencesWrapper">
        <span className="title">Choose your communication preferences</span>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedF}
                // onChange={handleChange}
                name="checkedF"
                color="primary"
              />
            }
            label="Audio"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedF}
                // onChange={handleChange}
                name="checkedF"
                color="primary"
              />
            }
            label="Video"
          />
                  <FormControlLabel
            control={
              <Checkbox
                checked={true}
                // onChange={handleChange}
                name="checkedF"
                color="primary"
                disabled
              />
            }
            label="Text chat"
          />
        </div>
      </div>
      <div className='buttonFind'>
        <Button
          style={{
            ...styles.button
          }}
          sizeLarge
        >
          Find my Study Buddy
        </Button>
      </div>
    </div>
  );
}

export default Settings;