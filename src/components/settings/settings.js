import React, { useState } from 'react'
import { Typography, InputLabel, MenuItem, FormControl, Select, Input } from '@material-ui/core';

const languages = [
  'English',
  'Spanish'
];

const Settings = () => {
  const [myLanguage, setMyLanguage] = useState();

  const handleMyLangChange = (event) => {
    const { value } = event.target;
    setMyLanguage(value);
  };

  return (
    <>
      <Typography align='center' variant='h4'>
          Language Exchange Chatroulette
      </Typography>
      <div>
        <FormControl>
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
      </div>
    </>
  );
}

export default Settings;